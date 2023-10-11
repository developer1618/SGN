export const state = () => ({
data:[],
  modal:false,
  meta:null,

  toast:{
    open:false,
    text:null,
  },
  isDelete: false,
  });

  export const mutations = {
    CLEAR_PAGEDATA(state) {
      state.data = [];
      state.meta = null;
    },
    GET_PAGEDATA(state, payload) {
         state.data = payload.data.data;
         state.meta = payload.data.last_page;
    },
    SET_MODAL(state,payload){
       state.modal = payload;
    },
    SET_DELETE(state){
      state.modal = true;
   },
   UN_TOAST(state){
     state.toast.open = false;
     state.toast.text = null;
   },
   SET_TOAST(state,payload){
     state.toast.open = true;
     state.toast.text = payload;
   }
  };


  export const actions = {
   async get_page({ commit }, payload) {
    commit('CLEAR_PAGEDATA')
     try {
       let res = await this.$axios.get(
         payload.request
       );
       commit("GET_PAGEDATA", res);
     } catch (err) {

     }
   },

   async store({ dispatch, commit }, payload) {
     try {
       await this.$axios.post(payload.request, payload.form,{
        headers:{
          'Content-Type':'application/json',
        }
       }).then(() => {
              // window.location.reload();
         commit("SET_TOAST",payload.text);
         setTimeout(() =>{
          commit("UN_TOAST");
         },5000);
       });
      //  dispatch("get_pagedata", payload.refreshData);
     } catch (err) {
      //  commit("SET_ERROR", err.response.data);
     }
   },
   async edit({ dispatch, commit }, payload) {
    try {
      await this.$axios.put(payload.request, payload.form,{
       headers:{
         'Content-Type':'application/json',
       }
      }).then(() => {
        commit("SET_TOAST",payload.text);
        setTimeout(() =>{
         commit("UN_TOAST");
        },5000);
      });
     //  dispatch("get_pagedata", payload.refreshData);
    } catch (err) {
      commit("SET_ERROR", response.data);
    }
  }
};
