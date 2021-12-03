<template>
  <div id="app">
    <nav>
      <div>
        <ul>
          <li class="logo"><router-link to="/"><img src="./assets/digitalFridgeInverse.png" /></router-link></li>
          <li class="nav-item"><router-link to="/">Home</router-link></li>
          <li class="nav-item"><router-link to="/board">My Board</router-link></li>
          <li class="nav-item"><router-link to="/upload">Upload</router-link></li>
          <li class="nav-item" style="float:right"><router-link to="/login">Login</router-link></li>
          <li class="nav-item" style="float:right"><router-link to="/register">Register</router-link></li>
        </ul>
      </div>
    </nav>
    <div class="p-3">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="css">
  @import url('https://fonts.googleapis.com/css2?family=Teko:wght@700&display=swap');

  nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #D8E1E0;
  }

  nav li {
    float: left;
  }

  nav li a {
    display: block;
    color: black;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    
    font-family: 'oswald';
    max-height: 52px;
  }

  nav li a:hover:not(.active) {
    background-color: #313636;
    color: #D8E1E0;
    text-decoration: none;
  }

  nav .logo {
      font-family: 'Teko', sans-serif;
      font-size: 25px;
  }

  nav .logo a {
    padding: 0;
  }

  nav .logo img {
    max-height: 52px;
  }

  h1, h2, h3 {
    font-family: 'Teko', sans-serif;
  }

  p, a {
     font-family: 'oswald';
  }
</style>
