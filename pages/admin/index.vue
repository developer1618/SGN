<template>
  <div class="py-14 px-10 w-full overflow-scroll">
      <div>
        <h3 class="text-sm font-medium text-[#727ABE] pb-5">Пользователи</h3>
      </div>
      <div class="bg-white w-full rounded-md p-4">
        <div class="flex pb-6 items-baseline">
          <p class="flex items-center pr-2 text-sm font-semibold text-[#4D5D7D]">Поиск</p>
          <Search @onChange="onSearch" searchPlaceholder="Поиск по Имени Фамили, Номеру телефона" />
        </div>
        <div class="pb-4">
          <Table :titles="thead" :bodies="user_ru" :isIcon="false" />
        </div>
        <div>
          <Pagination :currentPage="page" :totalPage="Number(meta)" @pageChangeHandler="pageChangeHandler"/>
        </div>
      </div>
    </div>
</template>
<script>
import {mapState} from "vuex";
  export default {
    name: 'IndexPage',
    middleware:"admin",
    layout: "admin",
    head: {
      title: "Пользователи",
    },
    data() {
      return {
        icon: false,
        thead: ['Имя', 'Номер телефона',],
      }
    },
    computed:{
      ...mapState({
        user:(state) => state.api.users,
        meta:(state) => state.api.meta,
      })
    },
    created(){
     this.$router.push("users");
    }
  }
</script>