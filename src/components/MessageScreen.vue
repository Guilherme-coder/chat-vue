<template>
    <div class="screen">
        <contact-label
            :binary="'https://seeklogo.com/images/Z/zorin-os-logo-B427B2B617-seeklogo.com.png'"
            :name="'Zorin OS'"
        />
    </div>
</template>

<script>
import ContactLabel from './ContactLabel.vue'
export default {
    components: {
        'contact-label': ContactLabel
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