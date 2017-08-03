<template>
    <div v-scroll-fixed>
      <swiper :show-dots="true">
        <swiper-item v-for="item in banner" :key="item.id">
          <div class="custom-item">
            <img class="lazyload-image lg" v-lazy="item.img" />
            <p class="ellipsis">
              {{item.title}}
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
            <div class="art-img">
                <img class="lazyload-image" v-lazy="item.img">
            </div>
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
        <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading" spinner="waveDots">
          <span slot="no-results">
            沒有更多的内容了!
          </span>
        </infinite-loading>
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
    background: #333;
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
    width: 100%;
  }
  .class-title.fixed {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
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
  .art-img {
    background: #333;
    width: 100px;
    height: 60px;
    overflow: hidden;
  }
  .lazyload-image {
    display: block;
  }
  img.lazyload-image.lg[lazy=loading] {
    width: 50px;
    height: 180px;
    margin: auto;
  }
  img[lazy=loading] {
    width: 15px;
    height: 60px;
    margin: auto;
  }
  img[lazy=loaded], img[lazy=error]{
    width: 100%;
    max-width: 100%;
    -webkit-animation-name: fadeIn;
    animation-name: fadeIn;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

</style>
<script>
    import { Swiper, SwiperItem, Flexbox, FlexboxItem } from 'vux'
    import ClassBlock from './classBlock.com.vue'
    import InfiniteLoading from 'vue-infinite-loading';

    export default {
      data () {
        return {
          id: 22,
          banner: [
            {
              img: require('../../assets/demo/1.jpg'),
              title: ' 柴文的地盘 | 误入梯田高山巅2'
            },
            {
              img: require('../../assets/demo/2.jpg'),
              title: ' 柴文的地盘 | 误入梯田高山巅2'
            },
            {
              img: require('../../assets/demo/3.jpg'),
              title: ' 柴文的地盘 | 误入梯田高山巅2'
            }
          ],
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
              img: require('../../assets/demo/7.jpg'),
              title: '千帆远澋|一夜摩登 住在香榭丽舍的繁华里3',
              content: '全世界夜景最为璀璨的地方，我想巴黎当仁不让。巴黎的时尚和摩登，许多人趋之向往。她是塞纳河畔上流淌着的一场梦，无论是埃菲尔铁塔在高空黑夜里的傲然挺立'
            },
            {
              img: require('../../assets/demo/8.jpeg'),
              title: '千帆远澋|一夜摩登 住在香榭丽舍的繁华里3',
              content: '全世界夜景最为璀璨的地方，我想巴黎当仁不让。巴黎的时尚和摩登，许多人趋之向往。她是塞纳河畔上流淌着的一场梦，无论是埃菲尔铁塔在高空黑夜里的傲然挺立'
            },
            {
              img: require('../../assets/demo/9.jpeg'),
              title: '千帆远澋|一夜摩登 住在香榭丽舍的繁华里3',
              content: '全世界夜景最为璀璨的地方，我想巴黎当仁不让。巴黎的时尚和摩登，许多人趋之向往。她是塞纳河畔上流淌着的一场梦，无论是埃菲尔铁塔在高空黑夜里的傲然挺立'
            }
          ],
          class_list: [
            {
              id: 11,
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
              id: 22,
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
          ],
          temp: [
            {
              img: require('../../assets/demo/10.jpeg'),
              title: '千帆远澋|一夜摩登 住在香榭丽舍的繁华里3',
              content: '全世界夜景最为璀璨的地方，我想巴黎当仁不让。巴黎的时尚和摩登，许多人趋之向往。她是塞纳河畔上流淌着的一场梦，无论是埃菲尔铁塔在高空黑夜里的傲然挺立'
            },
            {
              img: require('../../assets/demo/11.jpeg'),
              title: '千帆远澋|一夜摩登 住在香榭丽舍的繁华里3',
              content: '全世界夜景最为璀璨的地方，我想巴黎当仁不让。巴黎的时尚和摩登，许多人趋之向往。她是塞纳河畔上流淌着的一场梦，无论是埃菲尔铁塔在高空黑夜里的傲然挺立'
            },
            {
              img: require('../../assets/demo/12.jpeg'),
              title: '千帆远澋|一夜摩登 住在香榭丽舍的繁华里3',
              content: '全世界夜景最为璀璨的地方，我想巴黎当仁不让。巴黎的时尚和摩登，许多人趋之向往。她是塞纳河畔上流淌着的一场梦，无论是埃菲尔铁塔在高空黑夜里的傲然挺立'
            },
          ]
        }
      },
      methods: {
        onInfinite () {
          setTimeout(() => {
            const temp = [];
            if(!this.temp.length) {
              this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
            }
            else {
              for (let i = 0; i <= this.temp.length; i++) {
                temp.push(this.temp[i])
              }
              this.list = this.list.concat(this.temp);
              var obj = {
                  id: this.id,
                  articles: this.temp
              }
              this.$store.commit('pushArticle', obj);
              this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
            }
          }, 1000);
        },
        getClassId (id) {
            var search,
                companyClasses = this.$store.getters.getAllCompanyClasses;
            this.id = id;
            console.log(companyClasses[id])
            if(companyClasses[id]) {
                console.log("sadsa")
              this.list = companyClasses[id].articles;
              this.banner = companyClasses[id].banners;
            }else {
                console.log("沒有")
              this.$store.commit('addCompanyClasses', {
                id : id,
                banners: [
                  {
                    img: require('../../assets/demo/1-1.jpg'),
                    title: ' 寻找旧时光——五一青岛小蜜月'
                  },
                  {
                    img: require('../../assets/demo/1-2.jpg'),
                    title: ' 寻找旧时光——五一青岛小蜜月'
                  }
                ],
                articles: [
                  {
                    img: require('../../assets/demo/13.png'),
                    title: '千帆远澋|一夜摩登 住在香榭丽舍的繁华里3',
                    content: '全世界夜景最为璀璨的地方，我想巴黎当仁不让。巴黎的时尚和摩登，许多人趋之向往。她是塞纳河畔上流淌着的一场梦，无论是埃菲尔铁塔在高空黑夜里的傲然挺立'
                  },
                  {
                    img: require('../../assets/demo/14.jpeg'),
                    title: '千帆远澋|一夜摩登 住在香榭丽舍的繁华里3',
                    content: '全世界夜景最为璀璨的地方，我想巴黎当仁不让。巴黎的时尚和摩登，许多人趋之向往。她是塞纳河畔上流淌着的一场梦，无论是埃菲尔铁塔在高空黑夜里的傲然挺立'
                  },
                  {
                    img: require('../../assets/demo/15.jpeg'),
                    title: '千帆远澋|一夜摩登 住在香榭丽舍的繁华里3',
                    content: '全世界夜景最为璀璨的地方，我想巴黎当仁不让。巴黎的时尚和摩登，许多人趋之向往。她是塞纳河畔上流淌着的一场梦，无论是埃菲尔铁塔在高空黑夜里的傲然挺立'
                  },
                  {
                    img: require('../../assets/demo/13.png'),
                    title: '千帆远澋|一夜摩登 住在香榭丽舍的繁华里3',
                    content: '全世界夜景最为璀璨的地方，我想巴黎当仁不让。巴黎的时尚和摩登，许多人趋之向往。她是塞纳河畔上流淌着的一场梦，无论是埃菲尔铁塔在高空黑夜里的傲然挺立'
                  },
                  {
                    img: require('../../assets/demo/14.jpeg'),
                    title: '千帆远澋|一夜摩登 住在香榭丽舍的繁华里3',
                    content: '全世界夜景最为璀璨的地方，我想巴黎当仁不让。巴黎的时尚和摩登，许多人趋之向往。她是塞纳河畔上流淌着的一场梦，无论是埃菲尔铁塔在高空黑夜里的傲然挺立'
                  },
                  {
                    img: require('../../assets/demo/15.jpeg'),
                    title: '千帆远澋|一夜摩登 住在香榭丽舍的繁华里3',
                    content: '全世界夜景最为璀璨的地方，我想巴黎当仁不让。巴黎的时尚和摩登，许多人趋之向往。她是塞纳河畔上流淌着的一场梦，无论是埃菲尔铁塔在高空黑夜里的傲然挺立'
                  },
                  {
                    img: require('../../assets/demo/13.png'),
                    title: '千帆远澋|一夜摩登 住在香榭丽舍的繁华里3',
                    content: '全世界夜景最为璀璨的地方，我想巴黎当仁不让。巴黎的时尚和摩登，许多人趋之向往。她是塞纳河畔上流淌着的一场梦，无论是埃菲尔铁塔在高空黑夜里的傲然挺立'
                  },
                  {
                    img: require('../../assets/demo/14.jpeg'),
                    title: '千帆远澋|一夜摩登 住在香榭丽舍的繁华里3',
                    content: '全世界夜景最为璀璨的地方，我想巴黎当仁不让。巴黎的时尚和摩登，许多人趋之向往。她是塞纳河畔上流淌着的一场梦，无论是埃菲尔铁塔在高空黑夜里的傲然挺立'
                  },
                  {
                    img: require('../../assets/demo/15.jpeg'),
                    title: '千帆远澋|一夜摩登 住在香榭丽舍的繁华里3',
                    content: '全世界夜景最为璀璨的地方，我想巴黎当仁不让。巴黎的时尚和摩登，许多人趋之向往。她是塞纳河畔上流淌着的一场梦，无论是埃菲尔铁塔在高空黑夜里的傲然挺立'
                  },
                ]
              });
              this.list = [
                {
                  img: require('../../assets/demo/13.png'),
                  title: '千帆远澋|一夜摩登 住在香榭丽舍的繁华里3',
                  content: '全世界夜景最为璀璨的地方，我想巴黎当仁不让。巴黎的时尚和摩登，许多人趋之向往。她是塞纳河畔上流淌着的一场梦，无论是埃菲尔铁塔在高空黑夜里的傲然挺立'
                },
                {
                  img: require('../../assets/demo/14.jpeg'),
                  title: '千帆远澋|一夜摩登 住在香榭丽舍的繁华里3',
                  content: '全世界夜景最为璀璨的地方，我想巴黎当仁不让。巴黎的时尚和摩登，许多人趋之向往。她是塞纳河畔上流淌着的一场梦，无论是埃菲尔铁塔在高空黑夜里的傲然挺立'
                },
                {
                  img: require('../../assets/demo/15.jpeg'),
                  title: '千帆远澋|一夜摩登 住在香榭丽舍的繁华里3',
                  content: '全世界夜景最为璀璨的地方，我想巴黎当仁不让。巴黎的时尚和摩登，许多人趋之向往。她是塞纳河畔上流淌着的一场梦，无论是埃菲尔铁塔在高空黑夜里的傲然挺立'
                },
                {
                  img: require('../../assets/demo/13.png'),
                  title: '千帆远澋|一夜摩登 住在香榭丽舍的繁华里3',
                  content: '全世界夜景最为璀璨的地方，我想巴黎当仁不让。巴黎的时尚和摩登，许多人趋之向往。她是塞纳河畔上流淌着的一场梦，无论是埃菲尔铁塔在高空黑夜里的傲然挺立'
                },
                {
                  img: require('../../assets/demo/14.jpeg'),
                  title: '千帆远澋|一夜摩登 住在香榭丽舍的繁华里3',
                  content: '全世界夜景最为璀璨的地方，我想巴黎当仁不让。巴黎的时尚和摩登，许多人趋之向往。她是塞纳河畔上流淌着的一场梦，无论是埃菲尔铁塔在高空黑夜里的傲然挺立'
                },
                {
                  img: require('../../assets/demo/15.jpeg'),
                  title: '千帆远澋|一夜摩登 住在香榭丽舍的繁华里3',
                  content: '全世界夜景最为璀璨的地方，我想巴黎当仁不让。巴黎的时尚和摩登，许多人趋之向往。她是塞纳河畔上流淌着的一场梦，无论是埃菲尔铁塔在高空黑夜里的傲然挺立'
                },
                {
                  img: require('../../assets/demo/13.png'),
                  title: '千帆远澋|一夜摩登 住在香榭丽舍的繁华里3',
                  content: '全世界夜景最为璀璨的地方，我想巴黎当仁不让。巴黎的时尚和摩登，许多人趋之向往。她是塞纳河畔上流淌着的一场梦，无论是埃菲尔铁塔在高空黑夜里的傲然挺立'
                },
                {
                  img: require('../../assets/demo/14.jpeg'),
                  title: '千帆远澋|一夜摩登 住在香榭丽舍的繁华里3',
                  content: '全世界夜景最为璀璨的地方，我想巴黎当仁不让。巴黎的时尚和摩登，许多人趋之向往。她是塞纳河畔上流淌着的一场梦，无论是埃菲尔铁塔在高空黑夜里的傲然挺立'
                },
                {
                  img: require('../../assets/demo/15.jpeg'),
                  title: '千帆远澋|一夜摩登 住在香榭丽舍的繁华里3',
                  content: '全世界夜景最为璀璨的地方，我想巴黎当仁不让。巴黎的时尚和摩登，许多人趋之向往。她是塞纳河畔上流淌着的一场梦，无论是埃菲尔铁塔在高空黑夜里的傲然挺立'
                },
              ];
              this.banner = [
                {
                  img: require('../../assets/demo/1-1.jpg'),
                  title: ' 寻找旧时光——五一青岛小蜜月'
                },
                {
                  img: require('../../assets/demo/1-2.jpg'),
                  title: ' 寻找旧时光——五一青岛小蜜月'
                }
              ];
            }
        }
      },
      mounted() {
        var that = this;
        setTimeout(function() {
          that.$store.commit('addCompanyClasses', {
            id : 22,
            banners: that.banner,
            articles: that.list
          });
        }, 1000);
      },
      directives: {
        scrollFixed: {
          bind (el, binding, vnode) {
            var fixed = el.querySelector(".class-title");
            document.addEventListener('scroll', (ev) => {
              var scroll = document.querySelector("body").scrollTop;
              if(scroll >= 180) {
                  fixed.classList.add('fixed');
              }else {
                  fixed.classList.remove('fixed');
              }
            });
          }
        }
      },
      components: {
        Swiper,
        SwiperItem,
        Flexbox,
        FlexboxItem,
        ClassBlock,
        InfiniteLoading
      },
    }
</script>
