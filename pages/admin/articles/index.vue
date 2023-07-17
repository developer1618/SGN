<template>
  <div class="py-14 px-10 w-full overflow-scroll">
    <div>
      <h3 class="text-sm font-medium text-[#727ABE] pb-5">Статьи</h3>
    </div>
    <div class="bg-white w-full rounded-md p-4">
      <div class="flex pb-6 items-baseline">
        <p class="flex items-center pr-2 text-sm font-semibold text-[#4D5D7D]">Поиск</p>
        <Search @onChange="onSearch" searchPlaceholder="Поиск по Названию, Описании, Дате" />
        <AddButton addButton="Добавить статью" link="addarticles"/>
      </div>
      <div class="pb-4">
        <Table :titles="thead" path="editarticles" deleted="articles" :bodies="articles" :isIcon="true" :keys="['name_ru','description_ru','created_at',]"/>
      </div>
      <div>
        <Pagination :currentPage="page" :totalPage="Number(meta)" @pageChangeHandler="pageChangeHandler"/>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState,mapActions} from "vuex";
export default {
  layout:"admin",
  name: 'IndexPage',
  head: {
    title: "Статьи",
  },
  data() {
    return {
      page:1,
      search:"",
      thead: ['Название', 'Описание', 'Дата', 'Ещё'],
    }
  },
  computed:{
    ...mapState({
      articles:(state) => state.api.data,
      meta:(state) => state.api.meta,
    })
  },
  methods:{
      ...mapActions({
        get_page:"api/get_page"
      }),
      async getArticles(){
        let payload = {
          request:`/articles?type=1&page=${this.page}`,
          body:[]
        }
        await this.get_page(payload);
      },
      async onSearch(val){
        let payload = {
          request:`/searchArticles?query=${val}`,
          body:[]
        }
        await this.get_page(payload)
      },
      pageChangeHandler(selected){
        this.page = selected;
        this.getArticles();
      },
    } ,
    mounted(){
      this.getArticles();
    }
}
</script>