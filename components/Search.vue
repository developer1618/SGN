<template>
  <form @submit.prevent="$emit('onChange')" class="pt-2 relative mx-auto text-gray-600 w-full">
    <div >
        <input @input="$emit('onChange',$event.target.value)" class="w-full h-12 border-2 border-gray-300 bg-white px-5 pr-16 rounded-lg text-sm focus:outline-none" type="search" name="search" :placeholder="searchPlaceholder">
        <button type="submit" class="absolute right-0 top-0 mt-4 mr-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_602_2035)">
            <path d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z" fill="#B3B9C9"/>
            </g>
            <defs>
            <clipPath id="clip0_602_2035">
            <rect width="24" height="24" fill="white"/>
            </clipPath>
            </defs>
            </svg>
        </button>
      </div>
  </form>
  
</template>
<script>
export default {
  props: ["searchPlaceholder"],
}
</script>