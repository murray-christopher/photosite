<template>
  <div>
    <p>Drop files in the box below</p>
    <div class="dropzone" v-on:drop="drop" v-on:dragover="allowDrop"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }, methods: {
    allowDrop (allowdropevent) {
      allowdropevent.target.style.color = 'blue';
      allowdropevent.preventDefault();
    },
    drag (dragevent) {
      dragevent.dataTransfer.setData("text", dragevent.target.id);
      dragevent.target.style.color = 'green';
    },
    drop (dropevent) {
      dropevent.preventDefault();
      var data = dropevent.dataTransfer.getData()
      console.log(data)
    }
  }
};
</script>

<style>
.dropzone {
    justify-content: center;
    width:500px;
    height: 300px;
    padding: 10px;
    margin-top: 10%;
    border:1px solid #aaaaaa;
    :on-hover {
        background-color: grey;
    }
}
</style>
