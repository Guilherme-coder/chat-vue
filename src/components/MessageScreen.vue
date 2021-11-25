<template>
    <div class="screen">
        <contact-label v-if="this.getMessageInfo"
            :binary="this.getMessageInfo.binary"
            :name="this.getMessageInfo.name"
        />
        <contact-label v-else
            :binary="'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'"
            :name="'Chat'"
        />
    </div>
</template>

<script>
import ContactLabel from './ContactLabel.vue'
import { mapGetters } from 'vuex'
export default {
    components: {
        'contact-label': ContactLabel
    },
    computed: {
        ...mapGetters([
            'getMessageInfo'
        ])
    }
}
</script>

<style scoped>
    .screen {
        width: 100%;
        height: 100%;
        background: #0d1418;
        border-radius: 0 10px 10px 0;
    }
</style>