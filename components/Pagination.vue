<template>
    <div class="flex justify-end">
        <sliding-pagination
              :current="currentPage"
              :total="totalPage"
              @page-change="pageChangeHandler"
        ></sliding-pagination>
    </div>
</template>
<script>
import SlidingPagination from "vue-sliding-pagination";
import "../node_modules/vue-sliding-pagination/dist/style/vue-sliding-pagination.css"
export default{
    props:['currentPage',"totalPage"],
 
    components:{
        SlidingPagination
    },
    methods:{
        pageChangeHandler(selected){
            this.$emit('pageChangeHandler',selected)
        }
    }
  
}
</script>