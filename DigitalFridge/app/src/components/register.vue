<template>
  <div class="container pt-5">
    <div class="row">
      <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
        <form
          class="text-center"
          @submit.prevent="registerUser"
        >
          <h2>REGISTER</h2>
          <br />
          <input
            type="text"
            id="name"
            class="form-control"
            placeholder="Name"
            v-model="register.name"
            required
          />
          <input
            type="email"
            id="email"
            class="form-control"
            placeholder="Email"
            v-model="register.email"
            required
          />
          <input
            type="password"
            id="password"
            class="form-control"
            placeholder="Password"
            v-model="register.password"
          />
          <p>
            Already have an account??<router-link to="/"
              > click here</router-link
            >
            <center>
              <button class="btn btn-secondary btn-block w-50 my-4" type="submit">
                Register
              </button>
            </center>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert";
import http from "../services/http-commons";
//import emitter from "../services/emitter"

export default {
  data() {
    return {
      register: {
        name: "",
        email: "",
        password: "",
        boards: "myFirstBoard"
      }
    };
  },
  methods: {
    async registerUser() {
      try {
        //Calls the register API
        //Takes the auth token from the API response
        //Stores the token as that means registration was successful
        let response = await http.post("user/register", this.register);
        let token = response.data.token;
        if (token) {
          localStorage.setItem("jwt", token);
          this.$router.push("/");
          swal("Success", "Registration Was successful", "success");
        } else {
          swal("Error", "Something Went Wrong", "Error");
        }
      } catch (err) {
        //Catches http error responses
        let error = err.response;
        if (error.status == 409) {
          swal("Error", error.data.message, "error");
        } else {
          swal("Error", error.data.err.message, "error");
        }
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