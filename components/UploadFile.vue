<template>
    <div class="flex justify-center items-center w-full" id="uploadFiles">
        <label :id="Date.now()" class="flex flex-col justify-center items-center w-full h-60 bg-[#F5F5F5] rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 hover:bg-gray-100">
            <div class="flex flex-col justify-center items-center pt-5 pb-6">
                <svg width="40" class="mb-5" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.0001 21.4768L27.0717 28.5468L24.7134 30.9052L21.6667 27.8585V37.1668H18.3334V27.8552L15.2867 30.9052L12.9284 28.5468L20.0001 21.4768ZM20.0001 3.8335C22.8617 3.83363 25.6235 4.88535 27.7604 6.78869C29.8973 8.69203 31.2602 11.3143 31.5901 14.1568C33.6638 14.7224 35.4729 15.9987 36.7012 17.7627C37.9294 19.5267 38.4986 21.6663 38.3094 23.8075C38.1202 25.9486 37.1846 27.9552 35.666 29.4765C34.1474 30.9978 32.1426 31.9371 30.0017 32.1302V28.7735C30.7687 28.664 31.5061 28.4028 32.171 28.0051C32.8359 27.6075 33.415 27.0814 33.8743 26.4575C34.3337 25.8337 34.6642 25.1245 34.8465 24.3716C35.0288 23.6186 35.0593 22.8368 34.9363 22.0719C34.8132 21.307 34.5389 20.5743 34.1296 19.9166C33.7202 19.2588 33.184 18.6892 32.5521 18.2409C31.9202 17.7927 31.2053 17.4748 30.4492 17.3058C29.6932 17.1369 28.911 17.1202 28.1484 17.2568C28.4094 16.0416 28.3953 14.7834 28.1071 13.5744C27.8189 12.3654 27.2639 11.2361 26.4827 10.2694C25.7016 9.30262 24.7141 8.52284 23.5925 7.98715C22.471 7.45147 21.2438 7.17344 20.0009 7.17344C18.758 7.17344 17.5308 7.45147 16.4093 7.98715C15.2877 8.52284 14.3002 9.30262 13.5191 10.2694C12.7379 11.2361 12.1829 12.3654 11.8947 13.5744C11.6065 14.7834 11.5924 16.0416 11.8534 17.2568C10.3328 16.9713 8.7611 17.3015 7.48397 18.1748C6.20685 19.0481 5.32895 20.3929 5.0434 21.9135C4.75785 23.4341 5.08804 25.0058 5.96134 26.2829C6.83463 27.56 8.17949 28.4379 9.70007 28.7235L10.0001 28.7735V32.1302C7.85915 31.9374 5.85408 30.9983 4.33529 29.4771C2.8165 27.956 1.88061 25.9494 1.69119 23.8082C1.50177 21.667 2.07087 19.5273 3.29902 17.7631C4.52716 15.9989 6.33625 14.7225 8.41007 14.1568C8.73958 11.3141 10.1024 8.69168 12.2394 6.78827C14.3763 4.88486 17.1383 3.83327 20.0001 3.8335Z" fill="#4D5D7D"/>
                </svg>
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">{{status}}</span></p>
            </div>
            <input :id="Date.now()"  type="file" ref="file" @change="uploadFiles" :accept="isFile ? isFile : ''" class="hidden">
        </label>
    </div>
</template>
<script>
export default{
    props:['img','isFile'],
    computed:{
        status(){
            if(this.img){
                return 'Загружено';
            }else{
                return 'Загрузить';
            }
        }
    },
    methods: {
        uploadFiles(files) {
            const file = files.target.files[0]
            if(file.size > 10240 * 1024) {
                alert('Размер файла не должен превышать 10МБ');
            }else {
                this.$emit('change', file);
            }
        }
    },
}
</script>