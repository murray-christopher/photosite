<template>
<div class="container-fluid">
  <div class="collection">
    <div v-for="collection in collections" class="collection-item">
      <img :src="collection.cover" />
      <p>{{collection.name}}</p>
      <div class="space-between">
        <p>{{collection.photoCount}} photos</p>
        <p>{{collection.status}}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      collections: [
        {
          name: 'Braxton',
          status: 'Published',
          photoCount: '87',
          cover: 'https://dl.dropboxusercontent.com/s/9r00focece2klm6/1.jpeg?dl=0'
        },
        {
          name: 'Griffy',
          status: 'Published',
          photoCount: '145',
          cover: 'https://dl.dropboxusercontent.com/s/9r00focece2klm6/1.jpeg?dl=0'
        },
        {
          name: 'Alli',
          status: 'Published',
          photoCount: '595',
          cover: 'https://dl.dropboxusercontent.com/s/9r00focece2klm6/1.jpeg?dl=0'
        }
      ]
    }
  }
};
</script>

<style>
</style>
