<template>
  <div class="tools">
      <unicon class="tool_item" @click="logout()" name="signout" fill="white"></unicon>

  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    methods: {
        ...mapActions([
            'doLogout'
        ]),
        async logout() {
            await this.doLogout()
            this.$router.push({ name: 'login' })
        }
    }
}
</script>

<style scoped>
    .tools {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 100%;
        height: 10%;
        background-color: #0D1418;
        border-radius: 10px 0 0 0;
    }
    .tool_item {
        margin-right: 1em;
        color: #fdfdfd;
        cursor: pointer;
    }
</style>