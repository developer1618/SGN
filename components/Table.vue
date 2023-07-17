<template>
    <div class="flex flex-col">
      <Modal  @ondelete="ondelete(id)"  />
  <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
    <div class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
      <table class="min-w-full">
        <thead>
          <tr>
            <th class="text-xs font-semibold px-6 py-3 border-b border-gray-200 text-left leading-4 text-[#B3B9C9] tracking-wider last:flex last:justify-end h-10" v-for="title in titles">
                {{ title }}
            </th>
            <!-- <th class="flex justify-end text-xs font-semibold px-6 py-3 border-b border-gray-200 text-left leading-4 text-[#B3B9C9] tracking-wider">

            </th> -->
          </tr>
        </thead>
        <tbody class="bg-white">
          <tr v-for="(title,i) in bodies" class="border-b border-gray-200">
            <td class="px-6 py-4 whitespace-no-wrap " v-for="key in Object.values(keys)">
              <div class="flex items-center"> 
                <!-- <div class="ml-1 flex justify-between"> -->
                  <div class="text-sm leading-5 font-medium text-gray-900" >
                  <p class="table-text max-w-4xl">{{key === 'created_at' ?  $moment(title[key]).format('DD/MM/YYYY') : title[key]}}</p>
                  <!-- </div> -->
                </div>
              </div>
            </td>
            <td class="flex justify-end px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
              <nuxt-link v-if="isIcon" :to="`${$route.path}${path}/${title.id}`" class="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline flex"><img src="/img/edit.svg" alt="Edit" class="pr-5"></nuxt-link>
              <div v-if="isIcon"  class="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline flex cursor-pointer" @click="set_modal(true),id = title.id"><img src="/img/delete.svg" alt="Delete"></div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
</template>
<script>
import { mapMutations,mapState } from 'vuex';
export default {
  props: ["bodies","titles", "isIcon",'keys',"path","deleted"],
  
  computed:{
      ...mapState({
      isDelete:(state) => state.api.isDelete
    })
    },
    data() {
      return {
        id:null,
      }
    },
  methods: {
    ...mapMutations({
      set_modal:"api/SET_MODAL"
    }),
    async ondelete(id){
     await this.$axios.delete(`${this.deleted}/${id}`).then(() =>{
      window.location.reload();
     });
    },
  },
  mounted() {
   
  },
}
</script>
<style>
.table-text {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -moz-box;
  -moz-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  line-clamp: 1;
  box-orient: vertical;
}
</style>