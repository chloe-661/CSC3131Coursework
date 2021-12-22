<template>
  <div class="container pt-5">
    <div class="row">
      <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
        <form
          class="text-center"
          @submit.prevent="loginUser"
        >
          <h2>LOG IN</h2>
          <br />

          <!-- Email -->
          <input
            type="text"
            id="email"
            class="form-control"
            placeholder="Email"
            v-model="login.email"
          />

          <!-- Password -->
          <input
            type="password"
            id="password"
            class="form-control"
            placeholder="Password"
            v-model="login.password"
          />
          
          <p>
            Dont have an account??<router-link to="/register"> click here</router-link>
          </p>

          <!-- Sign in button -->
          <center>
            <button class="btn btn-secondary btn-block w-50 my-4" type="submit">
              Sign in
            </button>
          </center>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import swal from "sweetalert";
import http from "../services/http-commons";

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
    async loginUser() {
      try {
        //Calls the login API
        //Takes the auth token from the API response
        //Stores the token as that means auth was successful
        let response = await http.post("user/login", this.login);
        
        let token = response.data.token;
        localStorage.setItem("jwt", token);

        if (token) {

          this.$router.push("/board");
          swal("Success", "Login Successful", "success");
        }
      } catch (err) {
        swal("Error", "Something Went Wrong", "error");
      }
    }
  }
};
</script>
<style scoped lang="scss">
.container {
  height: 110vh;
}
</style>