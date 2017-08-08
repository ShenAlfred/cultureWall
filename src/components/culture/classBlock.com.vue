<template>
  <div>
    <div class="class-i-i">
      <div class="ci" v-on:click="toggle($event, classList.id, classList.children.length)">
        <i v-if="classList.children.length" class="fa fa-bars"></i>
        <span>{{classList.name}}</span>
      </div>
      <div class="child-menu" v-if="classList.children.length" :class="{ hide: isHide }">
        <ul>
          <li class="ellipsis" v-for="item in classList.children" v-on:click="hideMenu($event, item.id)">
            {{ item.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .child-menu {
    display: block;
    position: absolute;
    bottom: 52px;
    left: -4px;
    width: 105%;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 2px;
    z-index: 2;
  }
  .child-menu ul {
    padding: 5px 0;
  }
  .child-menu ul li {
    font-size: 12px;
    padding: 5px 10px;
    color: #333;
    text-align: center;
  }
  .child-menu ul li:active {
    background: #ccc;
  }
  .class-i-i {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .class-i-i:before {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    height: 200%;
    border-right: 1px solid #ccc;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scale(.5, .5);
    transform: scale(.5, .5);
  }
  .class-i-i .ci {
    padding: 15px 0;
    height: 50px;
    text-align: center;
    color: #999;
  }
  .class-i-i .ci {
    font-size: 12px;
  }
  .class-item {
    height: 100%;
  }
  .child-menu.hide {
    display: none;
  }
  .class-item:last-child .class-i-i .child-menu {
    width: 95%;
    left: 0;
    right: 5px;
    z-index: 1;
  }
  .class-item:nth-child(1) .class-i-i .child-menu {
    width: 95%;
    left: 50%;
    margin-left: -47.5%;
    z-index: 1;
  }
  .class-item:last-child .class-i-i:before {
    border-right: none;
  }
</style>
<script>
    export default{
        data(){
            return {
              isHide: true
            }
        },
        props: [
            'classList'
        ],
        methods: {
          toggle(ev, id, isChild) {
            if(isChild) {
              this.isHide = !this.isHide;
            }else {
              document.body.scrollTop = 0;
              this.$emit('UrlAndId', id);
            }
          },
          hideMenu(ev, id) {
            document.body.scrollTop = 0;
            this.isHide = !this.isHide;
            this.$emit('UrlAndId', id);
          }
        },
        mounted() {
        }
    }
</script>
