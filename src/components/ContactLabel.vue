<template>
    <div class="label">
        <div class="label_image">
            <img class="image" :src="this.binary" alt="">
        </div>
        <div class="label_name">
            <h4 class="name">{{ this.name }}</h4>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        binary: String,
        name: String
    }
}
</script>

<style scoped>
    .label {
        width: 100%;
        height: 10%;
        display: flex;
        align-items: center;
    }

    .label_image {
        display: flex;
        width: 8%;
        margin-left: 2em;
    }

    .image {
        width: 100%;
        border-radius: 2em;
    }

    .label_name {
        color: #fdfdfd;
        margin-left: 1em;
    }
</style>