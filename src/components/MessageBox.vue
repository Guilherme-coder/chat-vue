<template>
  <div class="message_box">
      <message v-for="mess in messages" :key="mess.id" :message="mess.message" :isMine="mess.isMine"/>
  </div>
</template>

<script>
import Message from './Message.vue'
export default {
    components: {
        'message': Message
    },
    data() {
        return {
            messages: [
                { id: 1, isMine: true, message: 'oi' },
                { id: 2, isMine: true, message: 'td bem' },
                { id: 3, isMine: false, message: 'tudo' },
                { id: 4, isMine: false, message: 'e cntg?' },
                { id: 5, isMine: true, message: 'bem tbm' },
                { id: 6, isMine: true, message: ':)' },
            ]
        }
    }
}
</script>

<style scoped>
    .message_box {
        height: 87%;
        padding-top: 3%;
        background-color: #12181c;
        border-radius: 0px 0px 10px 0px;
    }
    .message_box > h1 {
        margin: 0;
    }

</style>