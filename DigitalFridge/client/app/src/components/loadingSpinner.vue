<template>
  <div class="loading-spinner"></div>
</template>

<style scoped>
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.loading-spinner {
  transition: 0.3s ease all;
  position: relative;
  width: 80px;
  height: 80px;
}

.loading-spinner::after {
  content: '';
  display: inline-block;
  transition: 0.3s ease all;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: inherit;
  height: inherit;
  border: 2px solid #138e96;
  border-radius: 50%;
  border-top-color: transparent;
  animation: spin 1s ease-in-out infinite;
  left: 0;
  width: 80%;
  height: 80%;
}
</style>
