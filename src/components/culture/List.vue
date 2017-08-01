<template>
    <div>
      <swiper :show-dots="true" @on-index-change="change">
        <swiper-item >
          <div class="custom-item">
            <img src="../../assets/demo/1.jpg" />
            <p class="ellipsis">
              柴文的地盘 | 误入梯田高山巅2
            </p>
          </div>
        </swiper-item>
        <swiper-item>
          <div class="custom-item">
            <img src="../../assets/demo/2.jpg" />
            <p class="ellipsis">
              柴文的地盘 | 误入梯田高山巅2
            </p>
          </div>
        </swiper-item>
        <swiper-item>
          <div class="custom-item">
            <img src="../../assets/demo/3.jpg" />
            <p class="ellipsis">
              柴文的地盘 | 误入梯田高山巅2
            </p>
          </div>
        </swiper-item>
      </swiper>
      <div class="class-title">
        冰沁于心
      </div>
      <div class="article-list">
        <div class="article-item" v-for="item in list">
          <flexbox>
            <img :src="item.img" width="100" height="60" alt="">
            <flexbox-item>
              <section class="ellipsis">
                {{ item.title }}
              </section>
              <article class="simple-art mu-ellipsis">
                {{ item.content }}
              </article>
            </flexbox-item>
          </flexbox>
        </div>
      </div>
      <div class="class-ctrl">
        <flexbox style="height: 100%" :gutter="0">
          <flexbox-item class="class-item">
            <div class="class-i-i">
              <div class="ci">
                <i class="fa fa-bars"></i>
                <span>给你好看</span>
              </div>
              <div class="child-menu">
                <ul>
                  <li class="ellipsis">
                    2017年度颁奖盛典
                  </li>
                  <li class="ellipsis">
                    2017年度颁奖盛典
                  </li>
                  <li class="ellipsis">
                    2017年度颁奖盛典
                  </li>
                  <li class="ellipsis">
                    2017年度颁奖盛典
                  </li>
                </ul>
              </div>
            </div>
          </flexbox-item>
          <flexbox-item class="class-item">
            <div class="class-i-i">
              <div class="ci">
                <i class="fa fa-bars"></i>
                <span>国家相册</span>
              </div>
              <div class="child-menu">
                <ul>
                  <li class="ellipsis">
                    2017年度颁奖盛典
                  </li>
                  <li class="ellipsis">
                    2017年度颁奖盛典
                  </li>
                  <li class="ellipsis">
                    2017年度颁奖盛典
                  </li>
                  <li class="ellipsis">
                    2017年度颁奖盛典
                  </li>
                </ul>
              </div>
            </div>
          </flexbox-item>
          <flexbox-item class="class-item">
            <div class="class-i-i">
              <div class="ci">
                <i class="fa fa-bars"></i>
                <span>活动</span>
              </div>
              <div class="child-menu">
                <ul>
                  <li class="ellipsis">
                    2017年度颁奖盛典
                  </li>
                  <li class="ellipsis">
                    2017年度颁奖盛典
                  </li>
                  <li class="ellipsis">
                    2017年度颁奖盛典
                  </li>
                  <li class="ellipsis">
                    2017年度颁奖盛典
                  </li>
                </ul>
              </div>
            </div>
          </flexbox-item>
        </flexbox>
      </div>
    </div>
</template>
<style scoped>
  .child-menu {
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
  .class-item {
    height: 100%;
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
  .class-item:first-child .class-i-i .child-menu {
    width: 95%;
    left: 5px;
    z-index: 1;
  }
  .class-item:last-child .class-i-i .child-menu {
    width: 95%;
    left: 0;
    right: 5px;
    z-index: 1;
  }
  .class-item:last-child .class-i-i:before {
    border-right: none;
  }
  .class-ctrl {
    position: fixed;
    bottom: 0;
    left: 0;
    background: #fff;
    width: 100%;
    height: 50px;
    z-index: 99;
  }
  .class-ctrl:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 200%;
    border-top: 1px solid #ccc;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scale(.5, .5);
    transform: scale(.5, .5);
  }
  .custom-item {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .custom-item img {
    width: 100%;
    max-width: 100%;
  }
  .custom-item p {
    position: absolute;
    bottom: 0;
    padding: 5px 10px 8px;
    width: 100%;
    color: #fff;
    background: rgba(0 ,0 ,0, .5);
  }
  .class-title {
    color: #a7bd40;
    text-align: center;
    padding: 8px 0;
    background: #e9e9e9;
  }
  .article-list {
    padding-bottom: 50px;
  }
  .article-item {
    position: relative;
    padding: 10px 0;
    margin: 0 15px;
  }
  .article-item:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 200%;
    border-bottom: 1px solid #ccc;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scale(.5, .5);
    transform: scale(.5, .5);
  }
  .article-item:last-child:before {
    content: '';
    border-bottom: none;
  }
  .simple-art {
    font-size: 12px;
    padding-top: 2px;
    height: 40px;
    color: #666;
  }

</style>
<script>
    import { Swiper, SwiperItem, Flexbox, FlexboxItem } from 'vux'
    export default {
      data () {
        return {
          list : [
            {
                img: require('../../assets/demo/4.jpg'),
                title: '千帆远澋|一夜摩登 住在香榭丽舍的繁华里3',
                content: '全世界夜景最为璀璨的地方，我想巴黎当仁不让。巴黎的时尚和摩登，许多人趋之向往。她是塞纳河畔上流淌着的一场梦，无论是埃菲尔铁塔在高空黑夜里的傲然挺立'
            },
            {
              img: require('../../assets/demo/5.jpg'),
              title: '千帆远澋|一夜摩登 住在香榭丽舍的繁华里3',
              content: '全世界夜景最为璀璨的地方，我想巴黎当仁不让。巴黎的时尚和摩登，许多人趋之向往。她是塞纳河畔上流淌着的一场梦，无论是埃菲尔铁塔在高空黑夜里的傲然挺立'
            },
            {
              img: require('../../assets/demo/6.jpg'),
              title: '千帆远澋|一夜摩登 住在香榭丽舍的繁华里3',
              content: '全世界夜景最为璀璨的地方，我想巴黎当仁不让。巴黎的时尚和摩登，许多人趋之向往。她是塞纳河畔上流淌着的一场梦，无论是埃菲尔铁塔在高空黑夜里的傲然挺立'
            },
            {
              img: require('../../assets/demo/4.jpg'),
              title: '千帆远澋|一夜摩登 住在香榭丽舍的繁华里3',
              content: '全世界夜景最为璀璨的地方，我想巴黎当仁不让。巴黎的时尚和摩登，许多人趋之向往。她是塞纳河畔上流淌着的一场梦，无论是埃菲尔铁塔在高空黑夜里的傲然挺立'
            },
            {
              img: require('../../assets/demo/5.jpg'),
              title: '千帆远澋|一夜摩登 住在香榭丽舍的繁华里3',
              content: '全世界夜景最为璀璨的地方，我想巴黎当仁不让。巴黎的时尚和摩登，许多人趋之向往。她是塞纳河畔上流淌着的一场梦，无论是埃菲尔铁塔在高空黑夜里的傲然挺立'
            },
            {
              img: require('../../assets/demo/6.jpg'),
              title: '千帆远澋|一夜摩登 住在香榭丽舍的繁华里3',
              content: '全世界夜景最为璀璨的地方，我想巴黎当仁不让。巴黎的时尚和摩登，许多人趋之向往。她是塞纳河畔上流淌着的一场梦，无论是埃菲尔铁塔在高空黑夜里的傲然挺立'
            },
            {
              img: require('../../assets/demo/4.jpg'),
              title: '千帆远澋|一夜摩登 住在香榭丽舍的繁华里3',
              content: '全世界夜景最为璀璨的地方，我想巴黎当仁不让。巴黎的时尚和摩登，许多人趋之向往。她是塞纳河畔上流淌着的一场梦，无论是埃菲尔铁塔在高空黑夜里的傲然挺立'
            },
            {
              img: require('../../assets/demo/5.jpg'),
              title: '千帆远澋|一夜摩登 住在香榭丽舍的繁华里3',
              content: '全世界夜景最为璀璨的地方，我想巴黎当仁不让。巴黎的时尚和摩登，许多人趋之向往。她是塞纳河畔上流淌着的一场梦，无论是埃菲尔铁塔在高空黑夜里的傲然挺立'
            },
            {
              img: require('../../assets/demo/6.jpg'),
              title: '千帆远澋|一夜摩登 住在香榭丽舍的繁华里3',
              content: '全世界夜景最为璀璨的地方，我想巴黎当仁不让。巴黎的时尚和摩登，许多人趋之向往。她是塞纳河畔上流淌着的一场梦，无论是埃菲尔铁塔在高空黑夜里的傲然挺立'
            },
            {
              img: require('../../assets/demo/4.jpg'),
              title: '千帆远澋|一夜摩登 住在香榭丽舍的繁华里3',
              content: '全世界夜景最为璀璨的地方，我想巴黎当仁不让。巴黎的时尚和摩登，许多人趋之向往。她是塞纳河畔上流淌着的一场梦，无论是埃菲尔铁塔在高空黑夜里的傲然挺立'
            },
            {
              img: require('../../assets/demo/5.jpg'),
              title: '千帆远澋|一夜摩登 住在香榭丽舍的繁华里3',
              content: '全世界夜景最为璀璨的地方，我想巴黎当仁不让。巴黎的时尚和摩登，许多人趋之向往。她是塞纳河畔上流淌着的一场梦，无论是埃菲尔铁塔在高空黑夜里的傲然挺立'
            },
            {
              img: require('../../assets/demo/6.jpg'),
              title: '千帆远澋|一夜摩登 住在香榭丽舍的繁华里3',
              content: '全世界夜景最为璀璨的地方，我想巴黎当仁不让。巴黎的时尚和摩登，许多人趋之向往。她是塞纳河畔上流淌着的一场梦，无论是埃菲尔铁塔在高空黑夜里的傲然挺立'
            }
          ]
        }
      },
      components: {
        Swiper,
        SwiperItem,
        Flexbox,
        FlexboxItem
      },
      methods: {
          change (index) {
              console.log(index)
          }
      }
    }
</script>
