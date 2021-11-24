<template>
    <div class="item">
        <img class="img" :src="this.binary" alt="Profile Picture">
        <div class="text">
            <h4 class="noMargin texts">{{ this.name }}</h4>
            <p class="noMargin texts marginTop">{{ this.lastMessage }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        binary: String,
        name: String,
        lastMessage: String
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