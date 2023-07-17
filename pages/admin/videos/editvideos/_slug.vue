<template>
    <div class="py-14 px-10 w-full overflow-scroll">
        <div class="flex">
            <h3 class="text-sm font-medium text-[#B3B9C9] pb-5 pr-2">Видео</h3>
            <h3 class="text-sm font-medium text-[#B3B9C9] pb-5 pr-2"> ></h3>
            <h3 class="text-sm font-medium text-[#727ABE] pb-5">Изменить видео</h3>
        </div>
        <div class="grid gap-x-16 grid-cols-2">
            <div class="grid gap-8 col-span-1">
                <ValidationObserver v-slot="{handleSubmit}">
                    <form class="grid gap-10" @submit.prevent="handleSubmit(editVideo)">
                        <div class="col-span-1">
                            <ValidationProvider rules="required" v-slot="{ errors }">
                                <label for="helper-text" class="block mb-2 text-sm font-medium text-[#4D5D7D]">Название на таджикском<span class="text-red-600">*</span></label>
                                <input type="text" v-model="name_tj" id="helper-text" aria-describedby="helper-text-explanation" class="bg-white border border-gray-300 text-sm rounded-lg block w-full p-2.5 placeholder-[#B3B9C9] text-[#4D5D7D] focus:ring-blue-500 focus:border-blue-500" placeholder="Введите название">
                                <p class="text-red-600">{{errors[0]}}</p>
                            </ValidationProvider>
                        </div>
                        <div class="col-span-1">
                            <ValidationProvider rules="required" v-slot="{ errors }">
                                <label for="helper-text" class="block mb-2 text-sm font-medium text-[#4D5D7D]">Название на русском<span class="text-red-600">*</span></label>
                                <input type="text" v-model="name_ru" id="helper-text" aria-describedby="helper-text-explanation" class="bg-white border border-gray-300 text-sm rounded-lg block w-full p-2.5 placeholder-[#B3B9C9] text-[#4D5D7D] focus:ring-blue-500 focus:border-blue-500" placeholder="Введите название">
                                <p class="text-red-600">{{errors[0]}}</p>
                            </ValidationProvider>
                        </div>
                        <div class="col-span-1">
                            <ValidationProvider rules="required" v-slot="{ errors }">
                                <label for="helper-text" class="block mb-2 text-sm font-medium text-[#4D5D7D]">Описание на таджикском<span class="text-red-600">*</span></label>
                                <textarea id="message" v-model="description_tj" rows="8" class="block p-2.5 w-full text-sm text-[#4D5D7D] bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  placeholder-gray-400 text-white" placeholder="Введите описание..."></textarea>
                                <p class="text-red-600">{{errors[0]}}</p>
                            </ValidationProvider>
                        </div>
                        <div class="col-span-1">
                            <ValidationProvider rules="required" v-slot="{ errors }">
                                <label for="helper-text" class="block mb-2 text-sm font-medium text-[#4D5D7D]">Описание на русском<span class="text-red-600">*</span></label>
                                <textarea id="message" v-model="description_ru" rows="8" class="block p-2.5 w-full text-sm text-[#4D5D7D] bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  placeholder-gray-400 text-white" placeholder="Введите описание..."></textarea>
                                <p class="text-red-600">{{errors[0]}}</p>
                            </ValidationProvider>
                        </div>
                        <div class="col-span-1">
                            <nuxt-link to="/admin/videos" type="button" class="text-[#4D5D7D] hover:bg-white border border-[#727ABE] text-[#727ABE] focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Отменить</nuxt-link>
                            <button type="submit" class="text-white bg-[#727ABE] hover:bg-[#5a6097] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none">Добавить</button>
                            <p id="send-validate" class="text-red-600 pt-4 " v-if="toast.open">{{toast.text}}</p>
                        </div>
                    </form>
                </ValidationObserver>
            </div>  
            <div class="col-span-1">
                <div class="gap-6 pb-8">
                    <label for="helper-text" class="block mb-2 text-sm font-medium text-[#B3B9C9]">Загрузить фото для видео</label>
                    <UploadFile :img="photo" /> 
                </div>
                <div class="col-span-1">
                    <label for="helper-text" class="block mb-2 text-sm font-medium text-[#B3B9C9]">Загрузить видео</label>
                    <UploadFile :img="video" />
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
            video: null,
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
        async getVideo(){
            await this.$axios.get(`/videos/${this.$route.params.slug}`).then(res =>{   
                const {data} = res;
                this.name_tj = data.name_tj;
                this.name_ru = data.name_ru;
                this.photo = data.thumbnail;
                this.video = data.video;
                this.description_tj = data.description_tj;
                this.description_ru = data.description_ru;
            });
        },
        onFile(e){
            this.video = e.target.files[0];
        },
        async editVideo() {
            let payload = {
                text:"Видео изменено!",
                request:`/videos/${this.$route.params.slug}`,
                form:{
                    name_tj:this.name_tj,
                    name_ru:this.name_ru,
                    thumbnail:this.photo,
                    video:this.video,
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
        this.getVideo();
    },  

}
</script>