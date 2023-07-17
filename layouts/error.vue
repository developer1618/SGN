<template>
    <div class="flex w-full h-screen flex-col  justify-center items-center">
        <div class="flex ">
            <h1 class="inline-block text-9xl pb-6">404</h1>
        </div>
        <div class="flex pb-10">
            <p class="text-3xl">Произошла ошибка при обработке запроса!</p>
        </div>
        <div class="flex">
            <a href="/" class="inline-flex items-center rounded-full border border-transparent bg-[#31363b] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#131518] focus:outline-none focus:ring-2 focus:ring-offset-2">на Главную</a>
        </div>
    </div>
</template>
<script>
export default {
    layout: "error",
}
</script>