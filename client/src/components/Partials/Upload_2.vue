<template>
  <div>
    <input type="file" id="choose" multiple="multiple" />
    <div id="uploadPreview"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }, methods: {
    readImage (file) {
      var reader = new FileReader();
      var image = new Image();

      reader.readAsDataURL(file);
      reader.onload = function(_file) {
          image.src = _file.target.result;              // url.createObjectURL(file);
          image.onload = function() {
              var w = this.width,
          h = this.height,
          t = file.type,                           // ext only: // file.type.split('/')[1],
          n = file.name,
          s = ~ ~(file.size / 1024) + 'KB';
              $('#uploadPreview').append('<img src="' + this.src + '"> ' + w + 'x' + h + ' ' + s + ' ' + t + ' ' + n + '<br>');
          };
          image.onerror = function() {
              alert('Invalid file type: ' + file.type);
          }
      }
    }
  }
};
</script>

<style>
body{ background-color: ivory; }
.dropzone {
  width: 300px;
  height: 200px;
  border:1px
  solid red;
  margin:50px;
}
</style>
