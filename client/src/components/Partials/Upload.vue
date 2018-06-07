<template>
  <div id="demo">
      <div id="list" v-on:dragover="onDragOver">
        <div v-for="item in items">
          <div class="item" draggable="true" v-on:dragstart="onDragStart" v-on:dragend="onDragEnd">{{item}}</div>
        </div>
      </div>
  </div>
</template>

<script>
var placeholder = document.createElement("div");
placeholder.className = "placeholder item";

export default {
  data () {
    return {
        items: ["Red","Green","Blue","Yellow","Black","White","Orange"]
    }
  }, methods: {
    onDragStart: function(e) {
        this.$data.dragged = e.currentTarget;
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData("text/html", e.currentTarget);
    },
    onDragOver: function(e) {
        e.preventDefault();

        this.$data.dragged.style.display = "none";
        if (e.target.className == "placeholder item" || e.target.id == "list") return;

        this.$data.over = e.target;

        var relY = e.clientY - this.$data.over.offsetTop;
        var height = this.$data.over.offsetHeight / 2;
        var parent = e.target.parentNode;

        if (relY > height) {
          this.$data.nodePlacement = "after";
          parent.insertBefore(placeholder, e.target.nextElementSibling);
        } else if (relY < height) {
          this.$data.nodePlacement = "before"
          parent.insertBefore(placeholder, e.target);
        }
    },
    onDragEnd: function(e) {
        this.$data.dragged.style.display = "block";
        this.$data.dragged.parentNode.removeChild(placeholder);

        // Update state
        var data = this.$data.items;
        var from = Number(this.$data.dragged.dataset.id);
        var to = Number(this.$data.over.dataset.id);

        if(from < to) to--;
        if(this.$data.nodePlacement == "after") to++;

        this.$data.items.splice(to, 0, data.splice(from, 1)[0]);
    }
  }
};
</script>

<style>
.item {
    width: 300px;
    height: 40px;
    margin: 10px;
    padding: 2px 8px;
    background: #dadada;
    border-radius: 4px;
    line-height: 40px;
}

.item.placeholder {
    background: rgba(255,240,120,0.7);
}
.item.placeholder:before {
  content: "Drop here";
}
</style>
