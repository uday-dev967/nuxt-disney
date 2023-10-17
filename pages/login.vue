<template>
  <div class="login-container">
    <v-form class="form-container" @submit.prevent="submitForm">
      <h1>LOGIN</h1>
      <v-text-field
        v-model="creds.email"
        :rules="emailValidationRules"
        label="Email"
        class="input-fields"
        required
      ></v-text-field>
      <v-text-field
        v-model="creds.password"
        :rules="passwordValidationRules"
        label="Password"
        class="input-fields"
        type="password"
        required
      ></v-text-field>
      <p v-if="getLoginErrors.isError">{{ getLoginErrors.errMsg }}</p>
      <v-btn class="mr-4 headline" type="submit" color="blue white--text">
        Login
      </v-btn>
    </v-form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'LoginView',
  data() {
    return {
      creds: {
        email: '',
        password: '',
      },
      emailValidationRules: [
        (value) => !!value || 'This field is required',
        (value) =>
          value.indexOf('@') !== 0 ||
          "Please Enter a valid Email eg:'abc@xyz.com'",
        (value) =>
          value.includes('@') !== 0 ||
          "Please Enter a valid Email eg:'abc@xyz.com'",
        (value) =>
          value.indexOf('.') - value.indexOf('@') > 1 ||
          "Please Enter a valid Email eg:'abc@xyz.com'",
      ],
      passwordValidationRules: [(value) => !!value || 'This field is required'],
    }
  },
  computed: {
    ...mapGetters('user', ['getLoginErrors', 'getUser']),
  },
  async created() {
    if (process.client) {
      const status = localStorage.getItem('authToken') === 'loggedIn'
      if (status) {
        const credentials = localStorage.getItem('userCreds')
        const parsedCreds = JSON.parse(credentials)
        await this.fetchUsers(parsedCreds)
        this.$router.push('/')
      }
    }
  },
  methods: {
    ...mapActions('user', ['fetchUsers', 'isUserLoggedIn']),
    async submitForm() {
      await this.fetchUsers(this.creds)
      if (!this.getLoginErrors.isError) {
        localStorage.setItem('authToken', 'loggedIn')
        const credentials = JSON.stringify(this.creds)
        localStorage.setItem('userCreds', credentials)
        this.$router.push('/')
      }
    },
  },
}
</script>

<style></style>
