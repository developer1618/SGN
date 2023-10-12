<template>
    <div class="p-4 bg-white text-lg">
        <style>
        .sidebar {
            display: none;
        }
        </style>
        <!-- <div class="flex justify-center py-4 col-span-12 m-auto">
            <img :src="photo" alt="Photo">
        </div> -->
        <div class="py-2 text-justify" v-html="description_ru">

        </div>
    </div>
   
    
</template>
<script>
import {  mapActions, mapState, } from "vuex";
export default {
    middleware:"guest",
    auth:false,
    data() {
        return {
            name_tj: '',
            name_ru: '',
            photo: null,
            description_tj: '',
            description_ru: '',
        }
    },
    computed:{
        ...mapState({
            toast:(state) => state.api.toast,
        })
    },
    methods: {
        ...mapActions({
        store:"api/store",
        get_page:"api/get_page",
        edit:"api/edit",
        }),
        async getArticles(){
            await this.$axios.get(`/articles/${this.$route.params.slug}`).then(res =>{
                const {data} = res;
                this.name_tj = data.name_tj;
                this.name_ru = data.name_ru;
                this.photo = 'http://api.sgn.colibri.tj/storage/' + data.photo;
                this.description_tj = data.description_tj;
                this.description_ru = data.description_ru;
            });
        },
        onFile(e){
            this.photo = e.target.files[0];
            this.$forceUpdate();
        },
        async editArticles() {
            let payload = {
                text:"Статья изменено!",
                request:`/articles/${this.$route.params.slug}`,
                form:{
                    name_tj:this.name_tj,
                    name_ru:this.name_ru,
                    thumbnail:this.photo,
                    description_tj:this.description_tj,
                    description_ru:this.description_ru
                }
            }
            await this.edit(payload);
        },
    },
    watch:{
        type(val){
            if(val){
                this.val = 0;
            }else this.val = 1;
        }
    },
    mounted() {
        this.getArticles();
        console.log(this.$route.params);
    },
    

}
</script>
<style>
@media (min-width = 576px) {
        .sidebar {
            display: none !important;
        }
    }
</style>
