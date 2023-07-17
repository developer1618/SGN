<!-- Please remove this file from your project -->
<template>
  <div class="sidebar bg-[#1F2328] text-white flex h-full pr-12 pl-6 py-14 flex-col items-between justify-between">
    <svg style="display: none" width="10" height="10">
      <symbol id="consultations" viewBox="0 0 24 24">
        <g clip-path="url(#clip0_789_4645)">
          <path
            d="M7.29101 20.824L2.00001 22L3.17601 16.709C2.40154 15.2604 1.99754 13.6426 2.00001 12C2.00001 6.477 6.47701 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C10.3574 22.0025 8.73963 21.5985 7.29101 20.824ZM7.58101 18.711L8.23401 19.061C9.39256 19.6801 10.6864 20.0027 12 20C13.5823 20 15.129 19.5308 16.4446 18.6518C17.7602 17.7727 18.7855 16.5233 19.391 15.0615C19.9965 13.5997 20.155 11.9911 19.8463 10.4393C19.5376 8.88743 18.7757 7.46197 17.6569 6.34315C16.538 5.22433 15.1126 4.4624 13.5607 4.15372C12.0089 3.84504 10.4004 4.00346 8.93854 4.60896C7.47674 5.21447 6.22731 6.23984 5.34825 7.55544C4.4692 8.87103 4.00001 10.4177 4.00001 12C4.00001 13.334 4.32501 14.618 4.94001 15.766L5.28901 16.419L4.63401 19.366L7.58101 18.711Z" />
        </g>
        <defs>
          <clipPath id="clip0_789_4645">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </symbol>
      <symbol id="discussions" viewBox="0 0 24 24">
        <g clip-path="url(#clip0_789_4691)">
          <path
            d="M5.455 15L1 18.5V3C1 2.73478 1.10536 2.48043 1.29289 2.29289C1.48043 2.10536 1.73478 2 2 2H17C17.2652 2 17.5196 2.10536 17.7071 2.29289C17.8946 2.48043 18 2.73478 18 3V15H5.455ZM4.763 13H16V4H3V14.385L4.763 13ZM8 17H18.237L20 18.385V8H21C21.2652 8 21.5196 8.10536 21.7071 8.29289C21.8946 8.48043 22 8.73478 22 9V22.5L17.545 19H9C8.73478 19 8.48043 18.8946 8.29289 18.7071C8.10536 18.5196 8 18.2652 8 18V17Z" />
        </g>
        <defs>
          <clipPath id="clip0_789_4691">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </symbol>
    </svg>
    <div class="h-full">
      <div class="sidebar_user-info pb-16">
        <div>
          <nuxt-link to="/">
            <h3 class="text-base font-semibold">{{ $auth.user.name_ru }} {{ $auth.user.lastname_ru }}</h3>
          </nuxt-link>
        </div>
        <div>
          <a :href="`tel:+992${$auth.user.phone}`" class="text-sm font-medium text-[#B3B9C9]">+992
            {{ $auth.user.phone }}</a>
        </div>
      </div>
      <div class="sidebar_navigation">
        <nav>
          <ul>
            <li class="pb-8 flex gap-5" :class="active === nav.title ? 'text-[#727ABE] active' : ''"
              @click="active = nav.title" v-for="nav in navigation"><nuxt-link class="flex gap-x-4" :to="nav.url">
                <svg>
                  <use :xlink:href="nav.icon"></use>
                </svg>
                <span class="text-lg font-semibold whitespace-nowrap">{{ nav.title }}</span></nuxt-link></li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="sidebar_exit">
      <div>
        <div class="flex cursor-pointer text-lg font-semibold" @click="onLogout"><img :src="logout.icon" alt="icon"
            class="pr-4"><span>{{ logout.title }}</span></div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'NuxtSidebar',
  data() {
    return {
      active: "Консультации",
      navigation: [
        {
          title: "Консультации",
          url: "consultations",
          icon: "#consultations",
        },
        {
          title: "Дискуссии",
          url: "discussions",
          icon: "#discussions",
        },
      ],
      logout: {
        title: "Выход",
        url: "/",
        icon: "/img/Vector7.svg"
      },
    }
  },
  methods: {
    async onLogout() {
      await this.$auth.logout();
    },
  },
} 
</script>
<style>
  svg {
    fill: #B3B9C9 !important;
    width: 24px !important;
    height: 28px !important;
  }

  .active a svg {
    fill: #727ABE !important;
  }

  a.nuxt-link-active {
    color: #727ABE;
  }

  a.nuxt-link-active svg {
    fill: #727ABE !important;
  }

  a:hover {
    color: #727ABE;
  }

  a:hover svg {
    fill: #727ABE !important;
  }
</style>