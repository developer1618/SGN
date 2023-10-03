<template>
    <div class="py-14 px-10 w-full overflow-scroll">
        <div class="flex">
            <h3 class="text-sm font-medium text-[#B3B9C9] pb-5 pr-2">Статьи</h3>
            <h3 class="text-sm font-medium text-[#B3B9C9] pb-5 pr-2"> ></h3>
            <h3 class="text-sm font-medium text-[#727ABE] pb-5">Добавить Статью</h3>
        </div>
        <div class="grid gap-x-16 grid-cols-2">
            <div class="grid gap-8 col-span-1">
                <ValidationObserver v-slot="{handleSubmit}">
                    <form class="grid gap-8" @submit.prevent="handleSubmit(getArticles)">
                        <div class="col-span-1">
                            <ValidationProvider rules="required" v-slot="{ errors }">
                                <label for="helper-text" class="block mb-2 text-sm font-medium text-[#4D5D7D]">Название на таджикском <span class="text-red-600">*</span></label>
                                <input type="text"  v-model="name_tj" id="helper-text" aria-describedby="helper-text-explanation" class="bg-white border border-gray-300 text-sm rounded-lg block w-full p-2.5 placeholder-[#B3B9C9] text-[#4D5D7D] focus:ring-blue-500 focus:border-blue-500" placeholder="Введите название">
                                <p class="text-red-600 absolute">{{errors[0]}}</p>
                            </ValidationProvider>
                        </div>
                        <div class="col-span-1">
                            <ValidationProvider rules="required" v-slot="{ errors }">
                                <label for="helper-text" class="block mb-2 text-sm font-medium text-[#4D5D7D]">Название на русском <span class="text-red-600">*</span></label>
                                <input type="text"  v-model="name_ru" id="helper-text" aria-describedby="helper-text-explanation" class="bg-white border border-gray-300 text-sm rounded-lg block w-full p-2.5 placeholder-[#B3B9C9] text-[#4D5D7D] focus:ring-blue-500 focus:border-blue-500" placeholder="Введите название">
                                <p class="text-red-600 absolute">{{errors[0]}}</p>
                            </ValidationProvider>
                        </div>
                        <div class="col-span-1">
                            <ValidationProvider rules="required" v-slot="{ errors }">
                                <label for="helper-text" class="block mb-2 text-sm font-medium text-[#4D5D7D]">Описание на таджикском <span class="text-red-600">*</span></label>
                                <client-only>
                                    <VueEditor  v-model="description_tj"/>
                                </client-only>
                                <!-- <textarea name="" id="" rows="10" v-model="description_tj" class="w-full"></textarea> -->
                                <p class="text-red-600 absolute">{{errors[0]}}</p>
                            </ValidationProvider>
                        </div>
                        <div class="col-span-1">
                            <ValidationProvider rules="required" v-slot="{ errors }">
                                <label for="helper-text" class="block mb-2 text-sm font-medium text-[#4D5D7D]">Описание на русском <span class="text-red-600">*</span></label>
                                <client-only>
                                    <VueEditor  v-model="description_ru"/>
                                </client-only>
                                <!-- <textarea name="" id="" rows="10" v-model="description_ru" class="w-full"></textarea> -->
                                <p class="text-red-600 absolute">{{errors[0]}}</p>
                            </ValidationProvider>
                        </div>
                        <div class="col-span-1">
                            <nuxt-link to="/admin/articles" type="button" class="text-[#4D5D7D] hover:bg-white border border-[#727ABE] text-[#727ABE] focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Отменить</nuxt-link>
                            <button type="submit" class="text-white bg-[#727ABE] hover:bg-[#5a6097] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none">Добавить</button>
                            <p id="send-validate" class="text-red-600 pt-4 " v-if="toast.open">{{toast.text}}</p>
                        </div>
                    </form>
                </ValidationObserver>
            </div>
            <div class="col-span-1">
                <div class="gap-6 pb-8">
                    <label for="helper-text" class="block mb-2 text-sm font-medium text-[#B3B9C9]">Загрузите фото</label>
                    <UploadFile :img="photo" @change="(e) => photo = e" isFile="image/*" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {  mapActions, mapState, } from "vuex";
export default {
    layout:"admin",
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
        store:"api/store"
        }),
        async getArticles()
        {
            let formdata = new FormData();
            formdata.append('name_tj',this.name_tj);
            formdata.append('name_ru',this.name_ru);
            formdata.append('photo',this.photo);
            formdata.append('description_tj',this.description_tj);
            formdata.append('description_ru',this.description_ru);
        let payload = {
            text:"Статья добавлено!",
            request:"/articles",
            form:formdata
        }
        await this.store(payload);
        },
    },
    watch:{
        type(val){
            if(val){
                this.val = 0;
            }else this.val = 1;
        },
    },
}
</script>
<style>
    .quillWrapper {
        background-color: #fff;
        border-radius: 10px;
    }
    .quillWrapper .ql-snow.ql-toolbar {
        border-radius: 10px 10px 0 0;
    }
    .ql-toolbar.ql-snow+.ql-container.ql-snow {
        border-radius: 0 0 10px 10px;
    }
</style>
