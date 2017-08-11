<template>
  <div>
    <div class="backHome" v-show="show" v-on:click="backHome">
      <i class="fa fa-home fa-2x"></i>
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
        methods: {
          backHome() {
            window.location.href = "/culture/app"
          }
        },
        watch : {
          show (val) {
              console.log(val)
          }
        },
        components: {}
    }
</script>
