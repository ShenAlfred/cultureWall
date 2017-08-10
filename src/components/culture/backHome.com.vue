<template>
  <div>
    <div class="backHome" v-show="show">
      <router-link :to="{path: '/'}">
        <i class="fa fa-home fa-2x"></i>
      </router-link>
    </div>
  </div>
</template>
<style scoped>
  .backHome {
    position: fixed;
    bottom: 80px;
    right: 20px;
    background: #ff5454;
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 62px;
    color: #fff;
    border-radius: 100%;
  }
  .backHome a {
    color: #fff;
  }
</style>
<script>
    export default{
        data(){
            return {

            }
        },
        props: ['show'],
        watch : {
          show (val) {
              console.log(val)
          }
        },
        components: {}
    }
</script>
