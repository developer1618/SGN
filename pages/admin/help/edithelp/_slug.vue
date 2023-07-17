<template>
    <div class="py-14 px-10 w-full overflow-scroll">
        <div class="flex">
            <h3 class="text-sm font-medium text-[#B3B9C9] pb-5 pr-2">Центры помощи</h3>
            <h3 class="text-sm font-medium text-[#B3B9C9] pb-5 pr-2"> ></h3>
            <h3 class="text-sm font-medium text-[#727ABE] pb-5">Изменить центр </h3>
        </div>
        <div class="grid gap-x-16 grid-cols-3">
            <div class="grid gap-8 col-span-2">
                <ValidationObserver v-slot="{handleSubmit}">
                    <form class="grid gap-8 grid-cols-2" @submit.prevent="handleSubmit(editHelp)">
                            <div class="col-span-1">
                                <ValidationProvider rules="required" v-slot="{ errors }">
                                    <label for="helper-text" class="block mb-2 text-sm font-medium text-[#4D5D7D]">Название центра на таджикском <span class="text-red-600">*</span></label>
                                    <input type="text" v-model="name_tj" id="helper-text"
                                        aria-describedby="helper-text-explanation"
                                        class="bg-white border border-gray-300 text-sm rounded-lg block w-full p-2.5 placeholder-[#B3B9C9] text-[#4D5D7D] focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Введите Название центра">
                                        <p class="text-red-600">{{errors[0]}}</p>
                                </ValidationProvider>
                            </div>
                            <div class="col-span-1">
                                <ValidationProvider rules="required" v-slot="{ errors }">
                                    <label for="helper-text" class="block mb-2 text-sm font-medium text-[#4D5D7D]">Название центра на русском <span class="text-red-600">*</span></label>
                                    <input type="text" v-model="name_ru" id="helper-text"
                                        aria-describedby="helper-text-explanation"
                                        class="bg-white border border-gray-300 text-sm rounded-lg block w-full p-2.5 placeholder-[#B3B9C9] text-[#4D5D7D] focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Введите Название центра">
                                        <p class="text-red-600">{{errors[0]}}</p>
                                </ValidationProvider>
                            </div>
                            <div class="col-span-1">
                                <ValidationProvider rules="required" v-slot="{ errors }">
                                    <label for="website-admin" class="block mb-2 text-sm font-medium text-[#4D5D7D]">Номер
                                        телефона <span class="text-red-600">*</span></label>
                                    <div class="flex">
                                        <span
                                            class="inline-flex items-center px-3 text-sm text-[#4D5D7D]  rounded-l-md border border-r-0 border-gray-300 bg-white">
                                            +992
                                        </span>
                                        <input type="number" v-model="phone" id="website-admin" :minlength="min" :maxlength="max"
                                            class="rounded-none rounded-r-lg border text-[#4D5D7D] focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                                            placeholder="Введите Номер телефона">
                                    </div>
                                    <p class="text-red-600">{{errors[0]}}</p>
                                </ValidationProvider>
                            </div>
                            <div class="col-span-1">
                                <ValidationProvider rules="required" v-slot="{ errors }">
                                    <label for="helper-text" class="block mb-2 text-sm font-medium text-[#4D5D7D]">Город <span class="text-red-600">*</span></label>
                                    <select id="countries" v-model="city"
                                        class="bg-white border border-gray-300 text-[#4D5D7D] text-sm rounded-lg block w-full p-2.5 text-white focus:ring-blue-500 focus:border-blue-500">
                                        <option value="" disabled selected>Введите названия города</option>
                                        <option   :value="cityList.id" v-for="cityList in cities" :key="cityList.id">
                                            {{ cityList.name_ru }}
                                        </option>
                                    </select>
                                    <p class="text-red-600">{{errors[0]}}</p>
                                </ValidationProvider>
                            </div>
                            <div class="col-span-1">
                                <ValidationProvider rules="required" v-slot="{ errors }">
                                    <label for="helper-text" class="block mb-2 text-sm font-medium text-[#4D5D7D]">Адрес на таджикском <span class="text-red-600">*</span></label>
                                    <input type="text" v-model="address_tj" id="helper-text"
                                        aria-describedby="helper-text-explanation"
                                        class="bg-white border border-gray-300 text-sm rounded-lg block w-full p-2.5 placeholder-[#B3B9C9] text-[#4D5D7D] focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Введите Адрес">
                                    <p class="text-red-600">{{errors[0]}}</p>
                                </ValidationProvider>
                            </div>
                            <div class="col-span-1">
                                <ValidationProvider rules="required" v-slot="{ errors }">
                                    <label for="helper-text" class="block mb-2 text-sm font-medium text-[#4D5D7D]">Адрес на русском <span class="text-red-600">*</span></label>
                                    <input type="text" v-model="address_ru" id="helper-text"
                                        aria-describedby="helper-text-explanation"
                                        class="bg-white border border-gray-300 text-sm rounded-lg block w-full p-2.5 placeholder-[#B3B9C9] text-[#4D5D7D] focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Введите Адрес">
                                    <p class="text-red-600">{{errors[0]}}</p>
                                </ValidationProvider>
                            </div>
                            <div class="col-span-1">
                                <label for="helper-text" class="block mb-2 text-sm font-medium text-[#4D5D7D]">Описание на таджикском</label>
                                <textarea id="message" v-model="description_tj" rows="8"
                                    class="block p-2.5 w-full text-sm text-[#4D5D7D] bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  placeholder-gray-400 text-white"
                                    placeholder="Введите описание..."></textarea>
                            </div>
                            <div class="col-span-1">
                                <label for="helper-text" class="block mb-2 text-sm font-medium text-[#4D5D7D]">Описание на русском</label>
                                <textarea id="message" v-model="description_ru" rows="8"
                                    class="block p-2.5 w-full text-sm text-[#4D5D7D] bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  placeholder-gray-400 text-white"
                                    placeholder="Введите описание..."></textarea>
                            </div>
                            <div class="col-span-1">
                                <nuxt-link to="/admin/help" type="button"
                                    class="text-[#4D5D7D] hover:bg-white border border-[#727ABE] text-[#727ABE] focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
                                    Отменить</nuxt-link>
                                    <button type="submit" class="text-white bg-[#727ABE] hover:bg-[#5a6097] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none">Изменить</button>
                                    <p id="send-validate" class="text-red-600 pt-4 " v-if="toast.open">{{toast.text}}</p>
                            </div>
                    </form>
                </ValidationObserver>
            </div>
            <div class="grid gap-4">
                <div class="grid gap-x-4">
                        <div class="w-full">
                            <Map ref="reference" />
                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
import {  mapActions, mapState, } from "vuex";
export default{
    layout:"admin",
    data() {
        return {
            min: 9,
            max: 9,
            name_tj: '',
            name_ru: '',
            phone: '',
            email: '',
            cities:[],
            city: '',
            address_tj: '',
            address_ru: '',
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
        async getHelp(){
        await this.$axios.get(`/helpcenters/${this.$route.params.slug}`).then(res =>{
            const {data} = res;
            this.name_tj = data.name_tj;
            this.name_ru = data.name_ru;
            this.phone = data.phone;
            this.email = data.email;
            this.city = data.city;
            this.cities = data.cities;
            this.address_tj = data.address_tj;
            this.address_ru = data.address_ru;
            this.description_tj = data.description_tj;
            this.description_ru = data.description_ru;
            this.$refs.reference.latitude = data.lat;
            this.$refs.reference.longitude = data.long;
        });
        },
        async editHelp() {
            let payload = {
                text:"Центры помощи изменено!",
                request:`/helpcenters/${this.$route.params.slug}`,
                form:{
                    name_tj: this.name_tj,
                    name_ru: this.name_ru,
                    phone: this.phone,
                    email: this.email,
                    city: this.city,
                    cities: this.cities,
                    address_tj: this.address_tj,
                    address_ru: this.address_ru,
                    description_tj: this.description_tj,
                    description_ru: this.description_ru,
                    lat: this.$refs.reference.latitude,
                    long: this.$refs.reference.longitude,
                }
            }
            try {
              await this.edit(payload);
              this.$router.push('/admin/help')
            }catch(err) {
              console.log(err);
            }

        },
        async getCities(){
           await this.$axios.get("/cities").then(res => this.cities = res.data )
        }
    },
    watch:{
        type(val){
            if(val){
                this.val = 0;
            }else this.val = 1;
        }
    },
    mounted() {
        this.getHelp();
        this.getCities();
    },
}
</script>
