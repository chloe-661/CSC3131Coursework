<template>
  <div class="tile-wrapper clickable">
    <div class="tile-content">
      <img :src="imageUrl" class="gallery-image" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'galleryItem',
  props: {
    imageUrl: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped lang="scss">
.tile-wrapper {
  width: 48%;
  height: auto;
  margin: 2% 0;
  transition: transform, 0.3s;
}

.tile-content img {
  width: 100%;
  height: auto;
}

.tile-wrapper:hover {
  transform: scale(1.1);
}

.tile-content {
  display: flex;
  flex-direction: column;
  padding: 20px;
  
}

.tile-title {
  padding-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
}

/*------------------------------
  MEDIA QUERIES
  ----------------------------*/

@media (max-width: 900px) {
  .tile-wrapper {
    width: 100%;
  }
}
</style>
