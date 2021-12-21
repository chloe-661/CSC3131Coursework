<template>
  <div id="app">
    <headerNav />
    <div style="padding-top: 4em">
      <router-view />
    </div>
  </div>
</template>

<script>
import headerNav from './components/headerNav';

export default {
  
  name: "app",
  components: {
    headerNav
  },
};
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Teko:wght@700&display=swap');
  @import './styles/variables.css';

  /*-------------Reset-------------*/
  button {
    background: none;
    box-shadow: none;
    border: none;
    cursor: pointer;
    font-family: var(--color-neutral-lt);
  }

  button:focus,
  input:focus {
    outline: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  /*-------------Layout-------------*/
  #app {
    line-height: 1.5em;
    padding: 0;
    margin: 0;
    height: 100vh;
    background-color: var(--color-background-lt);
  }

  @mixin main-gradient {
    background: var(--color-primary);
    background: -webkit-linear-gradient(45deg, var(--color-primary), var(--color-secondary));
    background: linear-gradient(45deg, var(--color-secondary),var(--color-primary));
  }

  @mixin secondary-gradient {
    background: var(--color-secondary);
    background: -webkit-linear-gradient(45deg, var(--color-secondary), var(--color-neutral-lt));
    background: linear-gradient(45deg, var(--color-neutral-lt), var(--color-secondary));
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

  h1, h2, h3, a {
    font-family: 'oswald';
  }

  p {
    color: var(--color-neutral-dk);
    font-family: var(--headings-font);
  }



  form {
    @include shadow-box;
    @include secondary-gradient;
    // background-color: linear-gradient(45deg, red, var(--color-neutral-dk));
    padding: 2em;
    text-align: center;
  }

  form input {
    border-color: var(--color-neutral-dk);
    max-width: 80%;
    margin: auto;
    margin-bottom: 1em;
  }

  // h1, h2, h3 {
  //   font-family: 'Teko', sans-serif;
  // }

</style>
