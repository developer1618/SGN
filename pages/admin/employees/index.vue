<template>
  <div class="py-14 px-10 w-full overflow-scroll">
    <div>
      <h3 class="text-sm font-medium text-[#727ABE] pb-5">Сотрудники</h3>
    </div>
    <div class="bg-white w-full rounded-md p-4">
      <div class="flex pb-6 items-baseline">
        <p class="flex items-center pr-2 text-sm font-semibold text-[#4D5D7D]">Поиск</p>
        <Search @onChange="onSearch" v-model="search" searchPlaceholder="Поиск по Имени Фамили, Должности, Номеру телефона" />
        <AddButton addButton="Добавить сотрудника" link="employees/addemployees" />
      </div>
      <div class="pb-4">
        <Table :titles="thead" deleted="consults" path="/editemployees" :bodies="employees" :isIcon="true" :keys="['name_ru','lastname_ru','job_ru','phone']"/>
      </div>
      <div>
        <Pagination :currentPage="page"  :totalPage="Number(meta)" @pageChangeHandler="pageChangeHandler"/>
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
    title: "Сотрудники",
  },
  data() {
    return {
      page:1,
      search:"",
      thead: ['Имя', 'Фамилия', 'Должность', 'Номер телефона', 'Ещё'],
    }
  },
  computed:{
    ...mapState({
      employees:(state) => state.api.data,
      meta:(state) => state.api.meta,
    })
  },
  methods:{
      ...mapActions({
        get_page:"api/get_page"
      }),
      async getEmployees(){
        let payload = {
          request:`/consults?type=1&page=${this.page}`,
          body:[]
        }
          await this.get_page(payload);
      },
      async onSearch(val){
        let payload = {
          request:`/searchConsults?query=${val}`,
          body:[]
        }
        await this.get_page(payload)
      },
      pageChangeHandler(selected){
        this.page = selected;
        this.getEmployees();
      }
    } ,
    mounted(){
      this.getEmployees();
    }
}
</script>