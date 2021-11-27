<template>
  <div class="box">
    <div class="box_login">
      <h1 class="box_login_tilte">Faça Login, é rápido</h1>
      <form @submit.prevent="login()" class="box_login_form">
        <label class="box_login_label" for="email">Email:</label>
        <input class="box_login_input" type="email" id="email" v-model="user.email" required>

        <label class="box_login_label" for="password">Senha:</label>
        <input class="box_login_input" type="password" id="password" v-model="user.password" required>

        <button class="box_login_button">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import UserService from '../../services/UserService'
import axios from 'axios'

export default {
  data() {
    return {
      user: {
        email: null,
        password: null
      }
    }
  },
  methods: {
    ...mapActions([
      'doLogin',
      'setToken'
    ]),
    async login() {
      await UserService.login(this.user)
        .then((res) => {
          this.setToken(res.token)
            .then(() => {
              this.$router.push({ name: 'home' })
            })
          axios.defaults.headers.common['Authorization'] = `Bearer ${res.token}`
        })
      await UserService.loadSession()
      .then((res) => {
          this.doLogin(res)
        })
    }
  },
  computed: {
    ...mapGetters([
      'getUserToken'
    ])
  }
}
</script>

<style scoped>
  .box {
    background-color: #222222;
    width: 100%;
    height: 100vh;
  }

  .box_login {
    width: 50%;
    height: 50vh;
    background-color: #131C21;

    display: flex;
    flex-direction: column;
    justify-content: center;

    position: absolute;
    top: 0; bottom: 0;
    left: 0; right: 0;
    margin: auto;

    border-radius: 10px;
  }

  .box_login_tilte {
    margin-top: 0;
    text-align: center;
    font-size: 3em;
    color: #cfd0d1;
  }

  .box_login_form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .box_login_label {
    font-size: 1.35em;
    color: #cfd0d1;
  }

  .box_login_input {
    margin-bottom: .6em;
    font-size: 1.3em;
    width: 60%;
    text-align: center;
    outline: none;
    border-radius: 3px;
    border: none;
  }

  .box_login_button {
    margin-top: 1em;
    margin-bottom: 20px;
    padding: .6em 1em;
    font-size: 1em;
    cursor: pointer;
    width: 15%;
    border-radius: 7px;
    border: 1px solid black;
    background-color: #222222;
    color: #cfd0d1;
  }
</style>