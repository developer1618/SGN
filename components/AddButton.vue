<template>
    <div class="flex text-center h-12">
        <nuxt-link :to="link" class="bg-[#727ABE] text-white hover:text-white py-3 px-4 rounded-md ml-6 whitespace-nowrap text-base font-medium">{{ addButton }}</nuxt-link>
    </div>
</template>
<script>
export default {
  props: ["addButton", "link"],
}
</script>