<template>
<div>
    <header id="nav-wrapper">
        <nav id="nav">
        <div class="nav left">
            <!-- <router-link to="/"><span class="gradient skew"><h1 class="logo un-skew">Home</h1></span></router-link> -->
            <span class="gradient skew"><h1 class="logo un-skew"><router-link to="/"><img src= "../assets/Note_white.png"/>Digital Fridge</router-link></h1></span>
            <button id="menu" class="btn-nav"><span class="fas fa-bars"></span></button>
        </div>
        <div class="nav right">
            <h4>{{getUserName}} </h4>
            <router-link to="/board"    class="nav-link">       <span class="nav-link-span"><span class="u-nav">My Boards   </span></span></router-link>
            <router-link to="/upload"   class="nav-link">       <span class="nav-link-span"><span class="u-nav">Upload      </span></span></router-link>
            <router-link  to="/register" class="nav-link">       <span class="nav-link-span"><span class="u-nav">Register    </span></span></router-link>
            <router-link to="/login"    class="nav-link">       <span class="nav-link-span"><span class="u-nav">Login       </span></span></router-link>
            <a class="nav-link logout" @click="logUserOut()">       <span class="nav-link-span"><span class="u-nav">Logout      </span></span></a>
        </div>
        </nav>
    </header>
</div>

</template>

<script>
import VueJwtDecode from "vue-jwt-decode";
// import emitter from "../services/emitter";
import swal from "sweetalert";
// import Vue from "vue";

export default {
  name: 'headerNav',
  data() {
    return {
      user: {}
    };
  },
  methods: {
    getUserDetails() {
      let token = localStorage.getItem("jwt");
      let decoded
      if (token){
        decoded = VueJwtDecode.decode(token);
      }
      this.user = decoded;
      console.log(this.user);
    },
    logUserOut() {
      localStorage.removeItem("jwt");
      this.user = {};
      swal("Success", "You are now logged out", "success");
      this.$router.push("/login");
    },
  }
}
</script>

<style scoped lang="scss">

@mixin main-gradient {
  background: var(--color-primary);
  background: -webkit-linear-gradient(45deg, var(--color-primary), var(--color-secondary));
  background: linear-gradient(45deg, var(--color-secondary),var(--color-primary));
  }

  @mixin shadow-box {
    background-color: var(--color-neutral-lt);
    box-shadow: var(--shadow);
  }

  @mixin skew {
    transform: skew(-20deg);
  }

  @mixin unskew {
    transform: skew(20deg);
  }

  .skew {
    @include skew;
  }

  .un-skew {
    @include unskew;
  }

/*-------------Nav-------------*/
img {
    max-height: 1.8em;
    padding-right: 0.3em;
}

#nav-wrapper {
  @include shadow-box;
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}

#nav {
  @include shadow-box;
  display: flex;
  flex-direction: column;
  font-family: var(--headings-font);
  height: 4em;
  overflow: hidden;

  &.nav-visible {
    height: 100%;
    overflow: auto;
  }
}

.nav {
  display: flex;
  height: 4em;
  line-height: 4em;
  flex-grow: 1;
}

.nav-link,
.logo {
  padding: 0 1em;
  cursor: pointer;
}

span.gradient {
  @include main-gradient;
  padding: 0 1em;
  position: relative;
  right: 1em;
  margin-right: auto;

  &:hover {
    animation-name: logo-hover;
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.17, 0.57, 0.31, 0.85);
  }
}

h1.logo {
  font-weight: 300;
  font-size: 1.75em;
  line-height: 0.75em;
  color: var(--color-neutral-lt);
  padding-top: 0.3em !important;
}

h1.logo a, h1.logo a:active, h1.logo a:hover, h1.logo a:visited {
  text-decoration: none;
  color: var(--color-neutral-lt);
  cursor: pointer;
}

.logout {
    color: var(--color-primary) !important;
}

.nav-link {
  text-transform: uppercase;
  text-align: center;
  border-top: 0.5px solid var(--color-neutral-med);
  cursor: pointer;
}

a:link, a:visited, a:active {
  text-decoration: none;
  color: var(--color-primary);
}

a:hover {
  text-decoration: underline;
  cursor: pointer;
}

.right {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.btn-nav {
  color: var(--color-primary);
  padding-left: 2em;
  padding-right: 2em;
}

@media (min-width: 800px) {
  #nav-wrapper {
    overflow: hidden;
  }

  #nav {
    overflow: hidden;
    flex-direction: row;
  }

  .nav-link {
    border-top: none;
  }

  .right {
    overflow: hidden;
    flex-direction: row;
    justify-content: flex-end;
    position: relative;
    left: 1.5em;
    height: auto;
  }

  .btn-nav {
    display: none;
  }

  .nav a:link, .nav a:visited, .nav a:active {
    &.active {
      @include main-gradient;
      color: #fff;
    }
  }

  .nav-link-span {
    @include unskew;
    display: inline-block;
  }

  .nav-link {
    @include skew;
    color: #777;
    text-decoration: none;

    &:last-child {
      padding-right: 3em;
    }
  }

  a:hover.nav-link:not(.active){
    color: var(--color-neutral-dk);
    background: var(--color-neutral-med);
    background: linear-gradient(45deg, #ddd, var(--color-neutral-lt));
  }
}

@keyframes logo-hover {
  20% {
    padding-right: 0em;
  }
  100% {
    padding-right: 5em;
  }
}
</style>