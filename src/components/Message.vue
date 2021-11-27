<template>
    <div class="message">
        <div class="message_card_mine" v-if="this.isMine">
            <span class="message_text_mine">{{ this.message }}</span>
        </div>
        <div class="message_card_no_mine" v-else>
            <span class="message_text_no_mine">{{ this.message }}</span>
        </div>

    </div>
</template>

<script>
export default {
    props: {
        message: String,
        isMine: Boolean
    }
}
</script>

<style scoped>
    .message {
        display: flex;
        flex-direction: column;
    }

    .message_card_mine, .message_card_no_mine {
        width: 40%;
        margin: .2em;
        color: #dedede;
        padding: .3em 0;
        padding-left: .5em;
        border-radius: 5px;
    }

    .message_card_mine {
        background-color: #296163;
        align-self: flex-end;
    }

    .message_card_no_mine {
        background-color: rgba(41, 97, 99, .7);

    }

    .message_text {
        color: #fdfdfd;
        text-align: right;
    }
</style>