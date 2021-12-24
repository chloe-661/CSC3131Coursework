<template>
    <div class="main">
        <div class="boardOptions">
            <h2> {{ this.$route.params.boardName }}</h2>
            <hr/>
            <button class="btn btn-outline-primary" @click="addUserText()" type="submit"> Text</button>
            <button class="btn btn-outline-primary" @click="goToUpload()" type="submit"> Upload</button>
            <button class="btn btn-outline-primary" @click="goToUpload()" type="submit"> Handwriting -> text</button>
            <button class="btn btn-outline-primary" type="submit"> Settings</button>
            <shared />
        </div>
        <gallery :content="this.content" />

        <div v-if="this.addText" > 
          <div class="container pt-5 popup">
            <div class="row">
              <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
                <form class="text-center">
                
                  <h2>ENTER TEXT</h2>
                  <br />
                  <input
                    type="text"
                    id="text"
                    class="form-control"
                    placeholder="text"
                    v-model="text"
                  />
                  <center>
                    <button @submit.prevent="submitUserText()" class="btn btn-secondary btn-block w-50 my-4" type="submit">
                      Submit
                    </button>
                    <button @submit.prevent="closePopup()" class="btn btn-secondary btn-block w-50 my-4" type="submit">
                      cancel
                    </button>
                  </center>
                </form>
              </div>
            </div>
          </div>
        </div>
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
      boardId: this.$route.params.boardId,
      content: [],
      addText: false,
      text: "",
    };
  },
  methods:{
    addUserText(){
      console.log("doing something");
      this.addText = true;
    },
    submitUserText(){

    },
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
        this.getUserDetails();
        console.log(this.user._id);

        const par = {
          userId: this.user._id,
          boardId: this.$route.params.boardId,
        }

        let response = await http.post("user/board", par);

        for (var i = 0; i < response.data.board[0].boards[0].content.length; i++){
            this.content.push(response.data.board[0].boards[0].content[i]);
        }
        console.log(this.content);

      } catch (err) {
        swal("Error", "Something Went Wrong", "error");
      }
    }
  },
  closePopup() {
    this.addText = false;
  },
  computed: {
    checkAddText: function () {
      return this.addText;
    },
  },
  created() {
    this.getBoard();
  },
}
</script>
<style scoped lang="scss">

.popup {
  position: fixed;
  top: 8em;
  z-index: 98;
  left: 8em;
}

.popup input {
  height: 100px;
  word-wrap: normal;
}

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