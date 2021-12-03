<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
        <form
          class="text-center p-5"
          style="margin-top:35px;height:auto;padding-top:50px !important;"
          @submit.prevent="loginUser"
        >
        <!-- Email -->
          <h2>Log in</h2>
          <br />
          <input
            type="text"
            id="email"
            class="form-control mb-5"
            placeholder="Email"
            v-model="login.email"
          />
          <!-- Password -->
          <input
            type="password"
            id="password"
            class="form-control mb-5"
            placeholder="Password"
            v-model="login.password"
          />
          <p>
            Dont have an account??<router-link to="/register"
              > click here</router-link
            >
          </p>
          <!-- Sign in button -->
          <center>
            <button class="btn btn-primary btn-block w-75 my-4" type="submit">
              Sign in
            </button>
          </center>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      login: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    async loginUser() {}
  }
};
</script>
<style scoped lang="css">
    form {
        background-color: #313636;
        color: #D8E1E0;
    }

    input {
        border-color: #37bfc2;
    }
</style>