<template>
    <div class="flex chat w-full">
        <div class="messages w-96 bg-white overflow-y-auto">
            <h2 class="text-[28px] text-[#1F2328] font-semibold mb-5 mt-10 mx-4">Сообщения</h2>
            <div v-for="user in groups" @click="getChat(user.id)">
                <p class="bg-[#F8F8FB] p-4 mx-4 mb-4 rounded-lg hover:bg-[#E5E7EC] cursor-pointer whitespace-nowrap flex justify-between items-center active:bg-gray-300 text-sm text-[#1F2328] font-medium active:text-white active">{{user.user.name_ru}} {{user.user.lastname_ru}} <span v-if="user.user2_read === 1" class="bg-[#727ABE] rounded-full text-white px-[10px] py-[3px] mx-2">1</span></p>
            </div>
        </div>
        <div class="consultations w-full relative justify-center items-end pb-7 mt-20">
            <div class="messages px-10 absolute inset-x-0 bottom-0 mb-20 overflow-x-auto overscroll-y-none h-full" ref="chatContainer">
                <div class="h-4"></div>
                <div v-for="chat in chats">
                    <div class="admin-messages flex justify-end pb-2"  v-if="(chat?.user_id === $auth.user.id)">
                        <div class="bg-[#727ABE] text-white p-2 p-2 text-center rounded-[16px] max-w-md">{{chat.body}}</div>
                    </div>
                    <div class="user-messages flex justify-start pb-6"  v-else>
                        <div class="bg-[#ebebeb] text-[#1F2328] px-3 py-2.5 text-center rounded-[16px] max-w-md">{{chat.body}} <img class="max-w-md" :src="'http://api.sgn.colibri.tj/storage/' + chat.attachment" alt=""></div>
                    </div>
                </div>
            </div>
            <div class="flex justify-center">
                <form @submit.prevent="onMessage" class="w-full justify-center absolute inset-x-0 bottom-0 pb-3 flex" :disabled="!body.trim()">
                    <label for="chat" class="sr-only">Сообщения...</label>
                    <div class="flex items-center py-2 px-20 rounded-lg relative w-full">
                        <div class="absolute left-24 cursor-pointer">
                            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full cursor-pointer">
                                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                    <!-- <img src="/img/upload.svg" alt="upload"> -->
                                </div>
                                <input id="dropzone-file" type="file" class="hidden" />
                            </label>
                            <input id="dropzone-file" type="file" class="hidden" />
                        </div>
                        <input id="chat" v-model="body" rows="1" class="block mr-4 p-2.5 w-full h-12 pl-6 text-sm text-gray-900 bg-[#EEEFF1] rounded-lg focus:ring-blue-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500" placeholder="Сообщения...">
                        <button type="submit" class="justify-center rounded-full cursor-pointer">
                            <div class="bg-[#EEEFF1] w-12 h-12 rounded-xl flex justify-center items-center z-100">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_314_8472)"><path d="M1.92302 9.36998C1.41302 9.16498 1.41902 8.85998 1.95702 8.68098L21.043 2.31898C21.572 2.14298 21.875 2.43898 21.727 2.95698L16.273 22.043C16.123 22.572 15.798 22.596 15.556 22.113L11 13L1.92302 9.36998ZM6.81302 9.16998L12.449 11.425L15.489 17.507L19.035 5.09698L6.81202 9.16998H6.81302Z" fill="#B3B9C9"/></g><defs><clipPath id="clip0_314_8472"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>
                            </div>
                            <span class="sr-only">Сообщения...</span>
                        </button>
                    </div>
                </form>
            </div>
            
        </div>
    </div>
</template>
<script>
import { setInterval } from 'timers';
export default{
    layout:"chat",
    data() {
        return {
            groups:[],
            chats:[],
            body:"",
            chat_id:null,
            count:0,
        }
    },
    methods: {
        async getGroups(){
            let res = await this.$axios.get(`/consultantgroup/${this.$auth.user.id}`)
            this.groups = res.data.groups
        },
        async scrollToBottom() {
            const chatContainer = this.$refs.chatContainer;
            const scrollDown = chatContainer.scrollHeight - chatContainer.scrollTop === chatContainer.clientHeight;
            if (scrollDown) {
                chatContainer.scrollTop = chatContainer.scrollHeight;
            } else {
                chatContainer.scrollTop = 0;
            }
        },
        async getChat(id){
            this.chat_id = id;
            let res =  await this.$axios.get(`/chat/${id}`);
            this.chats = res.data.chats;
            this.count+=1;
            this.$nextTick(() => {
                const chatContainer = this.$refs.chatContainer;
                chatContainer.scrollTop = chatContainer.scrollHeight;
            });
            this.$nextTick(() => {
                this.scrollToBottom();
            });
        },
        scrollUp() {
            const chatContainer = this.$refs.chatContainer;
            chatContainer.scrollTop = 1;
        },
        async onMessage() {
            if (!this.body.trim()) {
                return; // Input is empty, do not send the request
            }

            await this.$axios.post(`/chat`, {
                user_id: this.$auth.user.id,
                group_id: this.chats[0]?.group_id,
                body: this.body
            }).then(() => {
                this.body = "";
                this.getChat(this.chat_id);
            });
        },
        interval() {
            setInterval(() => {
                this.getGroups()
                if(this.chat_id) {
                    this.getChat(this.chat_id)
                }
            }, 5000)
        }

    },
    mounted() {
        this.getGroups();
        this.interval()
    },
    // watch:{
    //     count(){
    //         setTimeout(() => {
    //             this.getChat(this.chat_id);
    //             this.getGroups();
    //         }, 5000);
    //     }
    // }
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