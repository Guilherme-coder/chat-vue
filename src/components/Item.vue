<template>
    <div class="item" @click="selectMessageMethod()">
        <img class="img" :src="this.binary" alt="Profile Picture">
        <div class="text">
            <h4 class="noMargin texts">{{ this.name }}</h4>
            <p class="noMargin texts marginTop">{{ this.messageCompact(this.lastMessage) }}</p>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    props: {
        binary: String,
        name: String,
        lastMessage: String
    },
    methods: {
        ...mapActions([
            'selectMessageInfo'
        ]),
        async selectMessageMethod(){
            this.selectMessageInfo({ name: this.name, binary: this.binary, lastMessage: this.lastMessage })
        },
        messageCompact(message) {
            if(message.length > 19)
                return message.substring(0, 16)+'...'
            return message;
        }
    }
}
</script>

<style scoped>
    .item {
        display: flex;
        justify-content: space-around;
        height: 7%;
        width: 95%;
        background-color: #666;
        margin-bottom: .3em;
        border-radius: 3px;
        cursor: pointer;
        transition: .3s;
    }
    .item:hover {
        background-color: #555;
        transition: .3s;
    }
    .img {
        max-width: 25%;
        width: auto;
        margin: .1em .5em;
        border-radius: 2em;
    }
    .text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 70%;
    }
    .texts {
        color: #cfd0d1;
    }
    .noMargin {
        margin: 0;
    }
    .marginTop {
        margin-top: .5em;
    }
</style>