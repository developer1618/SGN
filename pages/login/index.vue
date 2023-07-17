<template>
  <div class="first-step" v-if="type === 1">
    <section class="bg-gray-50">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
              <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 class="text-3xl font-semibold leading-tight tracking-tight text-[#1F2328] md:text-2xl text-center">
                    Вход
                  </h1>
                  <p class="text-center text-[#4D5D7D] text-base font-normal pb-4">Пожалуйста войдите в свой аккаунт для продолжение работы!</p>
                  <ValidationObserver v-slot="{handleSubmit}">
                  <form class="space-y-4 md:space-y-6" @submit.prevent="handleSubmit(login)">
                    <ValidationProvider rules="required" v-slot="{ errors }">
                      <div class="pb-8">
                          <label for="website-admin" class="block mb-2 text-sm font-medium text-[#4D5D7D]">Номер телефона</label>
                          <div class="flex">
                          <span class="inline-flex items-center px-3 text-sm text-[#4D5D7D]  rounded-l-md border border-r-0 border-gray-300 bg-white">
                              +992
                          </span>
                          <input type="number" v-model="phone" id="website-admin" class="rounded-none rounded-r-lg border text-[#4D5D7D] block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 bg-white" placeholder="Введите Номер телефона">
                          </div>
                          <p class="text-red-600 pt-2">{{errors[0]}}</p>
                      </div>
                    </ValidationProvider>

                    <ValidationProvider rules="required" v-slot="{ errors }">
                      <div class="relative">
                          <label for="password" class="block mb-2 text-sm font-medium text-[#4D5D7D]">Пароль</label>
                          <input :type="typePassword ? 'password' : 'text'" id="password" name="password" v-model="password" placeholder="••••••••" class="bg-white border border-gray-300 text-[#4D5D7D] sm:text-sm rounded-lg  block w-full p-2.5">
                          <div class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 mb-[-25px]">
                            <img src="/img/eye-pass-on.svg" v-if="typePassword" @click="typePassword = !typePassword" alt="on" class="cursor-pointer">
                            <img src="/img/eye-pass-off.svg" v-else alt="off" @click="typePassword = !typePassword" class="cursor-pointer">
                          </div>
                          <p class="text-red-600 pt-4 pb-4 absolute">{{errors[0]}}</p>
                          <p class="text-red-600 pt-4 pb-4 absolute" v-if="error">Неверный логин или пароль!</p>
                      </div>
                      </ValidationProvider>
                      <div class="flex items-center justify-between pt-6">
                          <div class="flex">

                          </div>
                          <!-- <div class="flex">
                            <a href="#" class="text-sm font-medium text-[#B3B9C9] hover:underline">Забыли пароль ?</a>
                          </div> -->
                      </div>
                      <button type="submit" class="w-full h-12 text-white bg-[#727ABE] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Войти</button>
                  </form>
                  </ValidationObserver>
              </div>
          </div>
      </div>
    </section>
  </div>
  <div class="second-step" v-else-if="type === 2">
    <section class="bg-gray-50">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
              <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 class="text-3xl font-semibold leading-tight tracking-tight text-[#1F2328] md:text-2xl text-center">
                    Сбросить пароль
                  </h1>
                  <p class="text-center text-[#4D5D7D] text-base font-normal">Введите номер телефона, и мы вышлем вам инструкции по сбросу пароля.</p>
                  <form class="space-y-4 md:space-y-6" @submit.prevent="type = 3">
                    <div class="pb-16">
                        <label for="website-admin" class="block mb-2 text-sm font-medium text-[#4D5D7D]">Номер телефона</label>
                        <div class="flex">
                        <span class="inline-flex items-center px-3 text-sm text-[#4D5D7D]  rounded-l-md border border-r-0 border-gray-300 bg-white">
                            +992
                        </span>
                        <input type="number" id="website-admin" :minlength="min" :maxlength="max" class="rounded-none rounded-r-lg border text-[#4D5D7D] block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 bg-white" placeholder="Введите Номер телефона">
                        </div>
                    </div>
                      <button type="submit" class="w-full h-12 text-white bg-[#727ABE] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Далее</button>
                      <div class="flex justify-center">
                        <button @click="type = 1">
                          <span class="text-sm font-black text-[#B3B9C9] pb-5 pr-2"> </span>
                          <span class="text-sm font-semibold text-[#B3B9C9] pb-5">Вернутся назад</span>
                        </button>
                      </div>
                  </form>
              </div>
          </div>
      </div>
    </section>
  </div>
  <div class="third-step" v-else-if="type === 3">
    <section class="bg-gray-50">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
              <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 class="text-3xl font-semibold leading-tight tracking-tight text-[#1F2328] md:text-2xl text-center">
                    Код подтверждения
                  </h1>
                  <p class="text-center text-[#4D5D7D] text-base font-normal">Мы отправили код подтверждения на ваш номер телефона</p>
                  <form class="space-y-4 md:space-y-6" @submit.prevent="type = 4">
                    <div>
                        <label for="website-admin" class="block mb-2 text-sm font-medium text-[#4D5D7D]">Код подтверждения</label>
                        <div class="flex">
                        <input type="number" id="website-admin" class="rounded-lg border text-[#4D5D7D] block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 bg-white" placeholder="Введите Код подтверждения">
                        </div>
                    </div>
                    <div class="flex pb-16">
                      <p><span class="pr-2 text-[#4D5D7D] font-medium">Не пришел код:</span><a href="#" class="text-[#727ABE] font-semibold">Отправить заново</a></p>
                    </div>
                    <div>
                      <button type="submit" class="mb-8 w-full h-12 text-white bg-[#727ABE] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Далее</button>
                      <div class="flex justify-center">
                        <button @click="type = 2">
                          <span class="text-sm font-black text-[#B3B9C9] pr-2"> </span>
                          <span class="text-sm font-semibold text-[#B3B9C9]">Вернутся назад</span>
                        </button>
                      </div>
                    </div>
                  </form>
              </div>
          </div>
      </div>
    </section>
  </div>
  <div class="fourth-step" v-else-if="type === 4">
    <section class="bg-gray-50">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
              <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 class="text-3xl font-semibold leading-tight tracking-tight text-[#1F2328] md:text-2xl text-center">
                    Новый пароль
                  </h1>
                  <p class="text-center text-[#4D5D7D] text-base font-normal max-w-24">Введите новый пароль и не забывайте его :) </p>
                  <form class="space-y-4 md:space-y-6" @submit.prevent="$router.push('/users')">
                      <div>
                          <label for="password" class="block mb-2 text-sm font-medium text-[#4D5D7D]">Пароль</label>
                          <input type="password" name="password" id="password" placeholder="••••••••" class="bg-white border border-gray-300 text-[#4D5D7D] sm:text-sm rounded-lg  block w-full p-2.5" required="">
                      </div>
                      <div class="pb-16">
                          <label for="password" class="block mb-2 text-sm font-medium text-[#4D5D7D]">Пароль</label>
                          <input type="password" name="password" id="password" placeholder="••••••••" class="bg-white border border-gray-300 text-[#4D5D7D] sm:text-sm rounded-lg  block w-full p-2.5" required="">
                      </div>
                      <button type="submit" class="w-full h-12 text-white bg-[#727ABE] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Войти</button>
                  </form>
              </div>
          </div>
      </div>
    </section>
  </div>
</template>
  <script>
    export default {
      layout: "login",
      auth:false,
      middleware:"guest",
      data() {
        return {
          typePassword: true,
          min: 9,
          max: 9,
          type:1,
          error:false,
          phone:"",
          password:"",
        }
      },
      methods:{
        login(){
            this.$auth.loginWith("local", {
                data: {
                phone: this.phone,
                password: this.password,
                },
            }).then(() =>{
              this.error = false;
              this.$router.push("admin/");
            }).catch(err =>{
              this.error = true;
            });
        }
      },
      mounted() {

      },
      watch:{
        phone(){
          this.error = false;
        },
        password(){
          this.error = false;
        }
      }
    }


  </script>
