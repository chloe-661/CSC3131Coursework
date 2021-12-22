<template>
    <div class="main">
        <div class="banner">
            <h1>Your Boards </h1>
            <hr />
            <button class="btn btn-outline-dark"> + </button>
        </div>
        <div class="item grid-container" v-for="b in boards" :key="b.name">
            <div class="grid-item">
                <h2> {{ b.name }} </h2>
                <p>Created: {{b.createDate}}</p>
                <p>Last Updated: {{b.updateDate}} </p>
            </div>
            <button class="btn btn-outline-primary" @click="goToBoard(b)"> Open </button>
            <button class="btn btn-outline-primary"> Settings </button>
        </div>
    </div>
</template>

<script>
import http from "../services/http-commons";
import swal from "sweetalert";
import VueJwtDecode from "vue-jwt-decode";

export default {
  name: 'boards',
  components: {
  },
  props: {
    boardName: {
        type: String
    },
  },
  data() {
    return {
      user: {},
      boards: [],
    };
  },
  methods:{
    //Loads the next page
    goToBoard(b){
        console.log(b);
        this.$router.push({ name: 'MyBoard', params: { boardName: b.name, boardId: b.boardId } })
    },
    //Gets the users details
    getUserDetails() {
      let token = localStorage.getItem("jwt");
      let decoded
      
      if (token){
        decoded = VueJwtDecode.decode(token);
      }
      
      this.user = decoded;
    },
    async getBoard() {
      try {
        this.getUserDetails();

        let response = await http.post("user/boards", this.user);

        for (var i = 0; i < (response.data.board.boardNames).length; i++){
            this.boards.push(response.data.board.boardNames[i]);
        }
      } 
      catch (err) {
        swal("Error", "Something Went Wrong", "error");
      }
    }
  },
  created: function () {  
    this.getBoard();
  }
}
</script>
<style scoped lang="scss">
  @mixin gradient {
    background: var(--color-neutral-med);
    background: -webkit-linear-gradient(315deg, var(--color-neutral-med), var(--color-neutral-lt));
    background: linear-gradient(315deg, var(--color-neutral-lt), var(--color-neutral-med));
  }

  @mixin shadow-box {
    background-color: var(--color-neutral-lt);
    box-shadow: var(--shadow);
  }

  @mixin skew {
    transform: skew(-20deg);
  }

.banner {
    padding: 2em 1em;
    text-align: center;
}

hr {
    text-align: center;
    width: 25%;
    margin: auto;
    margin-bottom: 1em;
}

p {
    margin: 0;
}

.item {
    @include gradient;
    @include shadow-box;
    margin: auto;
    margin-bottom: 2em;
    width: 75%;
    height: 10em;
}

.item button {
    margin-left: 1em;
}

.grid-container {
  display: grid;
  align-items: center;
  padding-left: 3em;
  padding-right: 3em;
  grid-template-columns: 50% 25% 25%;
}

</style>