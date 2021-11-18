<template>
    <div class="box">
        <div class="card">
            <side-bar></side-bar>
        </div>
    </div>
</template>

<script>
import SideBar from '../../components/SideBar'
export default {
    components: {
        'side-bar': SideBar
    }
}
</script>

<style scoped>
    .box{
        background-color: #222;
        height: 100vh;
        width: 100%;
    }

    .card{
        height: 90vh;
        width: 65%;
        background-color: #333;
        border-radius: 10px;


        position: absolute;
        top: 0; bottom: 0;
        left: 0; right: 0;
        margin: auto;
    }
</style>