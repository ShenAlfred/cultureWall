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
          <flexbox-item class="class-item" v-for="item in class_list" :key="item.id">
            <class-block :classList="item" v-on:class-id="getClassId"></class-block>
          </flexbox-item>
        </flexbox>
      </div>
    </div>
</template>
<style scoped>
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
    import classBlock from './classBlock.com.vue'
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
          ],
          class_list: [
            {
              id: 22,
              level_one: '给你好看',
              level_two: [
                {
                    id: 1,
                    title: '2017年度颁奖盛典'
                },
                {
                  id: 2,
                  title: '2016年度颁奖盛典'
                },
                {
                  id: 3,
                  title: '2012年度颁奖盛典'
                },
                {
                  id: 4,
                  title: '2010年度颁奖盛典'
                }
              ]
            },
            {
              id: 33,
              level_one: '国家相册',
              level_two: []
            },
            {
              id: 44,
              level_one: '活动',
              level_two: [
                {
                  id: 1,
                  title: '1997年度颁奖盛典'
                },
                {
                  id: 2,
                  title: '1998年度颁奖盛典'
                },
                {
                  id: 3,
                  title: '1999年度颁奖盛典'
                }
              ]
            }
          ]
        }
      },
      components: {
        Swiper,
        SwiperItem,
        Flexbox,
        FlexboxItem,
        classBlock
      },
      methods: {
        change (index) {
          console.log(index);
        },
        getClassId (id) {
          console.log(id);
        }
      },
      mounted() {

      }
    }
</script>
