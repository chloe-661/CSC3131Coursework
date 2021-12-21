<template>
    <div class="main">
        <div class="boardOptions">
            <h2>BOARD NAME</h2>
            <hr/>
            <button class="btn btn-outline-primary" @click="goToUpload()" type="submit"> Upload</button>
            <button class="btn btn-outline-primary" @click="goToUpload()" type="submit"> Handwriting -> text</button>
            <button class="btn btn-outline-primary" type="submit"> Settings</button>
            <button @click="getBoard()" type="submit">test</button>
            <shared />
        </div>
        <gallery />
    </div>
</template>
<script>
import gallery from "@/components/gallery";
import shared from "@/components/shared";
import http from "../services/http-commons";
import swal from "sweetalert";
import VueJwtDecode from "vue-jwt-decode";

export default {
  name: 'board',
  components: {
    gallery,
    shared,
  },
  data() {
    return {
      user: {},
      boards: [],
      images: [],
      notes: [
        "Happy Birthday!",
        "MERRY CHRISTMAS!",
        "SHOPPING LIST: Bread 2.Milk 3.Orange Juice 4.Biscuits 5.Teabags",
      ],
      colorlist: ["#6b3e26", "#ffc5d9", "#c2f2d0", "#fdf5c9", "#ffcb85"],
    };
  },
  methods:{
    goToUpload(){
        this.$router.push('/upload'); 
    },
    getUserDetails() {
      let token = localStorage.getItem("jwt");
      let decoded
      if (token){
        decoded = VueJwtDecode.decode(token);
      }
      this.user = decoded;
      console.log(this.user);
    },
    async getBoard() {
      try {
        //Calls the login API
        //Takes the auth token from the API response
        //Stores the token as that means auth was successful
        this.getUserDetails();
        console.log(this.user);
        let response = await http.post("user/board");
        this.boards.push(response);
        console.log(this.boards);
      } catch (err) {
        swal("Error", "Something Went Wrong", "error");
      }
    }
  }
}
</script>
<style scoped lang="scss">

.boardOptions {
    text-align: left;
    padding: 1em;
    background-color: var(--color-background-primary);
    width: 230px;
    height: 100vh;
    position: fixed;
    top: 4em;
    left: 0;
    z-index: 99;
}

.boardOptions button {
    margin: 1em 0 1em 0;
    display: block;
}


hr {
    margin: 2em 0 2em 0;
}

</style>