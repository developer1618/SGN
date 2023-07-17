<template>
  <div class="py-14 px-10 w-full overflow-scroll">
    <div>
      <h3 class="text-sm font-medium text-[#727ABE] pb-5">Центры помощи</h3>
    </div>
    <div class="bg-white w-full rounded-md p-4">
      <div class="flex pb-6 items-baseline">
        <p class="flex items-center pr-2 text-sm font-semibold text-[#4D5D7D]">Поиск</p>
        <Search @onChange="onSearch" searchPlaceholder="Поиск по Имени Фамили, Номеру телефона" />
        <AddButton addButton="Добавить центр" link="help/addhelp" />
      </div>
      <div class="pb-4">
        <Table :titles="thead" :bodies="help" path="/edithelp" deleted="helpcenters" :isIcon="true" :keys="['name_ru','address_ru','phone',]"/>
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
  name: 'IndexPage',
  layout:"admin",
  head: {
    title: "Центры помощи",
  },
  data() {
    return {
      page:1,
      search:"",
      thead: ['Название центра', 'Адрес', 'Номер телефона', 'Ещё'],
    }
  },
  computed:{
    ...mapState({
      help:(state) => state.api.data,
      meta:(state) => state.api.meta,
    })
  },
  methods:{
      ...mapActions({
        get_page:"api/get_page"
      }),
      async getHelp(){
        let payload = {
          request:`/helpcenters?type=1&page=${this.page}`,
          body:[]
        }
        await this.get_page(payload);
      },
      async onSearch(val){
        let payload = {
          request:`/searchHelpCenters?query=${val}`,
          body:[]
        }
        await this.get_page(payload)
      },
      pageChangeHandler(selected){
        this.page = selected;
        this.getHelp();
      }
    },
    mounted(){
      this.getHelp();
    }
}
</script>