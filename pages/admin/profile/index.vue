<template>
    <div class="py-14 px-10 w-full overflow-scroll">
        <div class="flex">
            <h3 class="text-sm font-medium text-[#727ABE] pb-5 pr-2">Профиль</h3>
        </div>
        <div class="grid gap-8">
            <div class="flex justify-between">
                <div class="info-admin">
                    <h3 class="text-sm font-medium text-[#9a9a9a]">Должность: <span class="text-sm font-medium text-[#1F2328] pl-1">Администратор</span></h3>
                </div>
                <div class="change-pass">
                    <nuxt-link to="/admin/profile/forgotPassword"><h3 class="text-sm font-medium text-[#727ABE]">Сменить пароль</h3></nuxt-link>
                </div>
            </div>
            <ValidationObserver v-slot="{handleSubmit}">
                <form class="grid gap-8 grid-cols-6" @submit.prevent="handleSubmit(editProfile)">
                    <div class="col-span-2">
                        <ValidationProvider rules="required" v-slot="{ errors }">
                            <label for="helper-text" class="block mb-2 text-sm font-medium text-[#4D5D7D]">Имя на таджикском<span class="text-red-600">*</span></label>
                            <input type="text" v-model="name_tj" id="helper-text" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 placeholder-[#B3B9C9] text-[#4D5D7D] focus:ring-blue-500 focus:border-blue-500" placeholder="Введите имя">
                            <p class="text-red-600 absolute">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                    <div class="col-span-2">
                        <ValidationProvider rules="required" v-slot="{ errors }">
                            <label for="helper-text" class="block mb-2 text-sm font-medium text-[#4D5D7D]">Имя на русском<span class="text-red-600">*</span></label>
                            <input type="text" v-model="name_ru" id="helper-text" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 placeholder-[#B3B9C9] text-[#4D5D7D] focus:ring-blue-500 focus:border-blue-500" placeholder="Введите имя">
                            <p class="text-red-600 absolute">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                    <div class="col-span-2">
                        <ValidationProvider rules="required" v-slot="{ errors }">
                            <label for="helper-text" class="block mb-2 text-sm font-medium text-[#4D5D7D]">Фамилия на таджикском<span class="text-red-600">*</span></label>
                            <input type="text" v-model="lastname_tj" id="helper-text" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 placeholder-[#B3B9C9] text-[#4D5D7D] focus:ring-blue-500 focus:border-blue-500" placeholder="Введите Фамилию">
                            <p class="text-red-600 absolute">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                    <div class="col-span-2">
                        <ValidationProvider rules="required" v-slot="{ errors }">
                            <label for="helper-text" class="block mb-2 text-sm font-medium text-[#4D5D7D]">Фамилия на русском<span class="text-red-600">*</span></label>
                            <input type="text" v-model="lastname_ru" id="helper-text" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 placeholder-[#B3B9C9] text-[#4D5D7D] focus:ring-blue-500 focus:border-blue-500" placeholder="Введите Фамилию">
                            <p class="text-red-600 absolute">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                    <div class="col-span-2">
                        <ValidationProvider rules="required" v-slot="{ errors }">
                            <label for="website-admin" class="block mb-2 text-sm font-medium text-[#4D5D7D]">Номер телефона <span class="text-red-600">*</span></label>
                            <div class="flex">
                            <span class="inline-flex items-center px-3 text-sm text-[#4D5D7D]  rounded-l-md border border-r-0 border-gray-300 bg-white">
                                +992
                            </span>
                            <input type="number" v-model="phone" :minlength="min" :maxlength="max" id="website-admin" class="rounded-none rounded-r-lg border text-[#4D5D7D] focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5" placeholder="Введите Номер телефона">
                            </div>
                            <p class="text-red-600 absolute">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                    <div class="col-span-2">
                        <ValidationProvider rules="required" v-slot="{ errors }">
                            <label for="helper-text" class="block mb-2 text-sm font-medium text-[#4D5D7D]">Электронная почта <span class="text-red-600">*</span></label>
                            <input type="email" v-model="email" id="helper-text" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 placeholder-[#B3B9C9] text-[#4D5D7D] focus:ring-blue-500 focus:border-blue-500" placeholder="Введите электроную почту">
                                    <p class="text-red-600 absolute">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                    <div class="col-span-6">
                        <nuxt-link to="/admin/employees" type="button" class="text-[#4D5D7D] hover:bg-white border border-[#727ABE] text-[#727ABE] focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Отменить</nuxt-link>
                        <button type="submit"  class="text-white bg-[#727ABE] hover:bg-[#5a6097] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none">Сохранить</button>
                        <p id="send-validate" class="text-red-600 pt-4 " v-if="toast.open">{{toast.text}}</p>
                    </div>
                </form>
            </ValidationObserver>
        </div>
    </div>
</template>
<script>
import {  mapActions, mapState, } from "vuex";
export default {
    layout:"admin",
    data() {
        return {
            typePassword: true,
            min: 9,
            max: 9,
            name_tj: '',
            name_ru: '',
            lastname_tj: '',
            lastname_ru: '',
            phone: '',
            email: '',
            password: '',
            type: null,
            generate:"",
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
         getProfile(){
            this.name_tj = this.$auth.user.name_tj;
            this.name_ru = this.$auth.user.name_ru;
            this.lastname_tj = this.$auth.user.lastname_tj;
            this.lastname_ru = this.$auth.user.lastname_ru;
            this.phone = this.$auth.user.phone;
            this.email = this.$auth.user.email;
        },
        async editProfile(){
            let payload = {
                text:"Ваши данные изменены!",
                request:`/profile/${this.$auth.user.id}`,
                form:{
                    name_tj:this.name_tj,
                    name_ru:this.name_ru,
                    lastname_tj:this.lastname_tj,
                    lastname_ru:this.lastname_ru,
                    phone:this.phone,
                    email:this.email,
                }
            }
            await this.edit(payload);
            location.reload();
        }
    },
    watch:{
        generate(val){
            if(val){
                
                    let password = ""
                    let alphabet = "abcdefghijklmnopqrstuvwxyz"
                    let number = "0123456789"
                    let symbol = "!@#$%^&*+="

                    password += alphabet
                    password += number
                    password += symbol


                    let result = ""
                    for (let i = 0; i < 16; i++) {
                        let num = Math.floor(Math.random() * password.length)
                        result += password[num]
                    }
                    this.password = result;
                    }
            }
    },
    mounted() {
        this.getProfile();
    },
}
</script>