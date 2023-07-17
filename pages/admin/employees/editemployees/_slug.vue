<template>
    <div class="py-14 px-10 w-full overflow-scroll">
        <div class="flex">
            <h3 class="text-sm font-medium text-[#B3B9C9] pb-5 pr-2">Консультанты</h3>
            <h3 class="text-sm font-medium text-[#B3B9C9] pb-5 pr-2"> ></h3>
            <h3 class="text-sm font-medium text-[#727ABE] pb-5">Изменить консультанта</h3>
        </div>
        <div class="grid gap-8 col-span-2">
            <ValidationObserver v-slot="{handleSubmit}">
                <form class="grid gap-8 grid-cols-6" @submit.prevent="handleSubmit(editEmployees)">
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
                    <div class="col-span-2">
                        <ValidationProvider rules="required" v-slot="{ errors }">
                            <label for="helper-text" class="block mb-2 text-sm font-medium text-[#4D5D7D]">Должность на таджикском<span class="text-red-600">*</span></label>
                            <select id="countries" v-model="job_tj" placeholder="Выберите должность" class="bg-gray-50 border border-gray-300 text-[#4D5D7D] text-sm rounded-lg block w-full p-2.5 text-white focus:ring-blue-500 focus:border-blue-500">
                            <option value="" disabled selected>Выберите должность</option>
                            <option value="Психолог">Равоншинос</option>
                            <option value="Юрист">Ҳуқуқшинос</option>
                            </select>
                            <p class="text-red-600 absolute">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                    <div class="col-span-2">
                        <ValidationProvider rules="required" v-slot="{ errors }">
                            <label for="helper-text" class="block mb-2 text-sm font-medium text-[#4D5D7D]">Должность на русском<span class="text-red-600">*</span></label>
                            <select id="countries" v-model="job_ru" placeholder="Выберите должность" class="bg-gray-50 border border-gray-300 text-[#4D5D7D] text-sm rounded-lg block w-full p-2.5 text-white focus:ring-blue-500 focus:border-blue-500">
                            <option value="" disabled selected>Выберите должность</option>
                            <option value="Психолог">Психолог</option>
                            <option value="Юрист">Юрист</option>
                            </select>
                            <p class="text-red-600 absolute">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                    <div class="col-span-2">
                        <ValidationProvider v-slot="{ errors }">
                            <div class="relative">
                                <label for="password" class="block mb-2 text-sm font-medium text-[#4D5D7D]">Пароль <span class="text-red-600">*</span></label>
                                <input :type="typePassword ? 'password' : 'text'" id="password" name="password" v-model="password" placeholder="••••••••" class="bg-white border border-gray-300 text-[#4D5D7D] sm:text-sm rounded-lg  block w-full p-2.5">
                                <div class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 mb-[-25px]">
                                <img src="/img/eye-pass-on.svg" v-if="typePassword" @click="typePassword = !typePassword" alt="on" class="cursor-pointer">
                                <img src="/img/eye-pass-off.svg" v-else alt="off" @click="typePassword = !typePassword" class="cursor-pointer">
                                </div>
                                <p class="text-red-600 pb-4 absolute">{{errors[0]}}</p>
                            </div>
                        </ValidationProvider>
                    </div>
                    <div class="col-span-3">
                        <label for="helper-text" class="block mb-2 text-sm font-medium text-[#4D5D7D]">Описание на таджикском</label>
                        <textarea id="message" v-model="description_tj" rows="8" class="block p-2.5 w-full text-sm text-[#4D5D7D] bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  placeholder-gray-400 text-white" placeholder="Введите описание..."></textarea>
                    </div>
                    <div class="col-span-3">
                        <label for="helper-text" class="block mb-2 text-sm font-medium text-[#4D5D7D]">Описание на русском</label>
                        <textarea id="message" v-model="description_ru" rows="8" class="block p-2.5 w-full text-sm text-[#4D5D7D] bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  placeholder-gray-400 text-white" placeholder="Введите описание..."></textarea>
                    </div>
                    <div class="col-span-4">
                        <div class="flex items-center mb-4">
                        <input id="admin-checkbox" type="checkbox" value="" v-model="type"  class="w-4 h-4 text-[#7367F0] bg-gray-100 rounded border-gray-300">
                        <label for="admin-checkbox" class="ml-2 text-sm font-medium text-[#4D5D7D]">Права администратора</label>
                        </div>
                        <!-- <div class="flex items-center mb-4">
                            <input id="pass-checkbox" v-model="generate"  type="checkbox" value="" class="w-4 h-4 text-[#7367F0] bg-gray-100 rounded border-gray-300">
                            <label for="pass-checkbox" class="ml-2 text-sm font-medium text-[#4D5D7D]">Сгенерировать пароль</label>
                        </div> -->
                    </div>
                    <div class="col-span-4">
                        <nuxt-link to="/admin/employees" type="button" class="text-[#4D5D7D] hover:bg-white border border-[#727ABE] text-[#727ABE] focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Отменить</nuxt-link>
                        <button type="submit"  class="text-white bg-[#727ABE] hover:bg-[#5a6097] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none">Изменить</button>
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
            job_tj: '',
            job_ru: '',
            password: '',
            description_tj: '',
            description_ru: '',
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
        async getEmployees(){
        await this.$axios.get(`/consults/${this.$route.params.slug}`).then(res =>{
            const {data} = res;
            this.name_tj = data.name_tj;
            this.name_ru = data.name_ru;
            this.lastname_tj = data.lastname_tj;
            this.lastname_ru = data.lastname_ru;
            this.phone = data.phone;
            this.email = data.email;
            this.type = Number(data.type) === 0 ? 1 : 0;
            this.job_tj = data.job_tj;
            this.job_ru = data.job_ru;
            this.description_tj = data.description_tj;
            this.description_ru = data.description_ru;
            this.password = data.password;
        });
        },
        async editEmployees(){
            let payload = {
                text:"Сотрудник изменено!",
                request:`/consults/${this.$route.params.slug}`,
                form:{
                    name_tj:this.name_tj,
                    name_ru:this.name_ru,
                    lastname_tj:this.lastname_tj,
                    lastname_ru:this.lastname_ru,
                    phone:this.phone,
                    email:this.email,
                    type: Number(this.type) === 0 ? 1 : 0,
                    job_tj:this.job_tj,
                    job_ru:this.job_ru,
                    description_tj:this.description_tj,
                    description_ru:this.description_ru,
                    password:this.password,
                }
            }
            try {
              await this.edit(payload);
              this.$router.push('/admin/employees')
            }catch(err) {
              console.log(err);
            }

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
        this.getEmployees();
    },
}
</script>
