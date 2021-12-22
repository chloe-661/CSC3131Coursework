<template>
<div>
  <div class="grid-container">
    <div class="grid-item placeholder"></div>
    
    <div class="content">
      <div class="productsRow">
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
      </div>
      
      <div class="productsRow">
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
      </div>
      
      <div class="productsRow">
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
      </div>
      
      <div class="productsRow">
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
      </div>
      
      <div class="productsRow">
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'gallery',
  props: ['content'],
  created(){
  }
}
</script>

<style scoped lang="scss">
* {
   margin: 0px;
   padding: 0px;
   text-decoration: none;
   list-style: none;
}

.grid-container {
  display: grid;
  grid-template-columns: 230px auto;
}

.placeholder {
  background-color: var(--color-neutral-lt);
  max-width: 230px;
}

body {
   display: -webkit-box;
   display: -moz-box;
   display: -ms-flexbox;
   display: flex;
   -webkit-box-orient: horizontal;
   -moz-box-orient: horizontal;
   -ms-box-orient: horizontal;
   box-orient: horizontal;
}

.content {
   -webkit-box-flex: 1;
   -moz-box-flex: 1;
   -ms-flex: 1;
   flex: 1;
   padding: 10px 0px 0px 10px;
   min-width: 400px;
}

.content .productsRow {    
   display: -webkit-box;
   display: -moz-box;
   display: -ms-flexbox;
   display: flex;
   -webkit-box-orient: horizontal;
   -moz-box-orient: horizontal;
   -ms-box-orient: horizontal;
   box-orient: horizontal;
}

.content .productsRow a {
  -webkit-box-flex: 1; 
  -moz-box-flex: 1; 
  -ms-flex: 1;
  flex: 1;
  margin: 0px 10px 10px 0px;
  height: 200px;
  line-height: 200px;
  color: #fafafa;
  text-align: center;
  display: block;
  background: #5cb7d6;
}
</style>