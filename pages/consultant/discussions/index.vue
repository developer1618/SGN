<template>
    <div class="flex chat w-full">
    <Modal  @ondelete="ondelete(id)" />
      <AddModal v-if="isDiscussion" @onClose="isDiscussion = false"/>
        <div class="messages w-72 bg-white overflow-y-auto">
            <div class="whitespace-nowrap">
                <h2 class="text-[28px] text-[#1F2328] font-semibold mb-5 mt-10 mx-4">Сообщения</h2>
                <div  class="bg-[#F8F8FB] px-4 py-3 mx-4 rounded-lg hover:bg-[#E5E7EC] mb-4 cursor-pointer whitespace-nowrap flex justify-between items-center" v-for="(discussion, index) in discussions" :key="index" @click="getSingleDiscussion(discussion.id)">
                    <p class="text-sm text-[#1F2328] font-medium">{{discussion.name_ru}}</p>
                    <!-- <span class="bg-[#727ABE] rounded-full text-white px-[10px] py-[3px] mx-2">1</span> -->
                </div>
            </div>
            <div class="absolute bottom-0 left-[27rem] pb-7" @click="isDiscussion = true">
                <button class="bg-[#727ABE] text-white pt-1 pr-4 pb-2.5 pl-4 rounded-lg text-3xl font-semibold">+</button>
            </div>
        </div>
        <div class="consultations w-full relative justify-center items-end pb-7 mt-20">
            <div class="messages px-10 absolute inset-x-0 bottom-0 mb-20 overflow-x-auto overscroll-y-none h-full">
                <div class="h-8 my-4 flex justify-between bg-white items-center py-6 px-5 rounded-lg">
                    <div>
                        <p class="text-sm text-[#1F2328] font-medium">Test</p>
                    </div>
                    <div class="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline flex cursor-pointer" @click="set_modal(true),id = discussions.id">
                        <img src="/img/delete.svg" alt="Delete">
                    </div>
                </div>
                <div v-for="(chat, index) in discussionChat" :key="index">
                    <div class="admin-messages flex justify-end pb-2"  v-if="(chat?.user_id === $auth.user.id)">
                        <p class="bg-[#727ABE] text-white p-2 p-2 text-center rounded-[16px] max-w-md">{{chat.body}}</p>
                    </div>
                    <div class="user-messages flex justify-start pb-6"  v-else>
                        <p class="bg-[#ebebeb] text-[#1F2328] px-3 py-2.5 text-center rounded-[16px] max-w-md">{{chat.body}}</p>
                    </div>
                </div>
            </div>
            <div class="flex justify-center">
                <form @submit.prevent="onMessage" class="w-full justify-center absolute inset-x-0 bottom-0 pb-3 flex">
                    <label for="chat" class="sr-only">Сообщения...</label>
                    <div class="flex items-center py-2 px-20 rounded-lg relative w-full">
                        <div class="absolute left-24 cursor-pointer">
                            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full cursor-pointer">
                                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                    <img src="/img/upload.svg" alt="upload">
                                </div>
                                <input id="dropzone-file" type="file" class="hidden" />
                            </label>
                            <input id="dropzone-file" type="file" class="hidden" />
                        </div>
                        <input id="chat" v-model="body" rows="1" class="block mr-4 p-2.5 w-full h-12 pl-12 text-sm text-gray-900 bg-[#EEEFF1] rounded-lg focus:ring-blue-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500" placeholder="Сообщения...">
                        <button type="submit" class="justify-center rounded-full cursor-pointer">
                            <div class="bg-[#EEEFF1] w-12 h-12 rounded-xl flex justify-center items-center z-100">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_314_8472)"><path d="M1.92302 9.36998C1.41302 9.16498 1.41902 8.85998 1.95702 8.68098L21.043 2.31898C21.572 2.14298 21.875 2.43898 21.727 2.95698L16.273 22.043C16.123 22.572 15.798 22.596 15.556 22.113L11 13L1.92302 9.36998ZM6.81302 9.16998L12.449 11.425L15.489 17.507L19.035 5.09698L6.81202 9.16998H6.81302Z" fill="#B3B9C9"/></g><defs><clipPath id="clip0_314_8472"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>
                            </div>
                            <span class="sr-only">Сообщения...</span>
                        </button>
                    </div>
                </form>
            </div>

        </div>
    </div>
</template>
<script>
import { mapActions,mapMutations,mapState } from 'vuex';
export default{
    props: ["bodies",'keys',"path","deleted"],
    layout:"chat",
    computed:{
      ...mapState({
      isDelete:(state) => state.api.isDelete
    })
    },
    data() {
        return {
            isDiscussion: false,
            discussions:[],
            chats:[],
            body:"",
            discussionChat:[],
            discussion_id:null,
        }
    },
    methods: {
        ...mapActions({
            store:"api/store"
    }),
    ...mapMutations({
      set_modal:"api/SET_MODAL"
    }),
    async ondelete(id){
     await this.$axios.delete(`${this.deleted}/${id}`).then(() =>{
      window.location.reload();
     });
    },
    async getDiscussions(){
        let res =   await this.$axios.get(`/discussion`);
        this.discussions = res.data.discussions;
    },

    async getSingleDiscussion(id){
        this.discussion_id = id;
        let res = await this.$axios.get(`/discussionPost/${id}`);
        this.discussionChat = res.data.discussionPosts;
    },
    async onMessage(){
        await this.$axios.post(`/discussionPost`,{
            body:this.body,
            user_id: this.$auth.user.id,
            discussion_id: this.discussion_id
        }).then(() =>{
            this.body = "";
            this.getSingleDiscussion(this.discussion_id);
        })
    },
    },
    mounted() {
        this.getDiscussions();
    },
}
</script>
