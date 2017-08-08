<template>
    <div>
      <div v-if="banner.length">
        <swiper :show-dots="true">
          <swiper-item v-for="item in banner" :key="item.id">
            <div class="custom-item" v-on:click="goTo(item.link, item.linkType)" v-if="item.linkType != 3">
              <img class="lazyload-image lg" v-lazy="item.url" />
              <p class="ellipsis">
                {{item.title}}
              </p>
            </div>
            <!-- 外部链接 -->
            <div class="custom-item" v-if="item.linkType == 3">
              <a :href="item.link">
                <img class="lazyload-image lg" v-lazy="item.url" />
                <p class="ellipsis">
                  {{item.title}}
                </p>
              </a>
            </div>
          </swiper-item>
        </swiper>
      </div>
      <!--<div class="class-title">-->
        <!--冰沁于心-->
      <!--</div>-->
      <div class="article-list">
        <div class="article-item" v-for="item in list" v-on:click="goToDetail(item.id)">
          <flexbox>
            <div class="art-img" v-if="item.miniImgUrl">
                <img class="lazyload-image" v-lazy="item.miniImgUrl">
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
            <class-block :classList="item" v-on:UrlAndId="getClassId"></class-block>
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
    import when from 'when'
    import InfiniteLoading from 'vue-infinite-loading';
    import api from '../../api'
    import config from '../../config'

    export default {
      data () {
        return {
          id: 'Home',
          pageNo: 1,
          banner: [],
          list : [],
          class_list: [],
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
        /**
         * 滚动加载
         */
        onInfinite () {
            this.pageNo = 1;
            this.pageNo++;
            this.getArticleList(this.pageNo).then((res) => {
              if(!res.length) {
                this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
              }else {
                this.list = this.list.concat(res);
                this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
              }
            });
//          setTimeout(() => {
//            const temp = [];
//            if(!this.temp.length) {
//              this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
//            }
//            else {
//              for (let i = 0; i <= this.temp.length; i++) {
//                temp.push(this.temp[i])
//              }
//              this.list = this.list.concat(this.temp);
//              var obj = {
//                  id: this.id,
//                  articles: this.temp
//              }
////              this.$store.commit('pushArticle', obj);
//              this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
//            }
//          }, 1000);
        },
        /**
         * 监听子菜单对应的ID
         */
        getClassId (data) {
            var search,
                companyClasses = this.$store.getters.getAllCompanyClasses;
            this.id = data;
            this.list = [];
            this.$router.push({name: 'cultureListParams', params: {classId: data}});

            return;

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
                  }
                ],
                articles: [
                  {
                    img: require('../../assets/demo/13.png'),
                    title: '千帆远澋|一夜摩登 住在香榭丽舍的繁华里3',
                    content: '全世界夜景最为璀璨的地方，我想巴黎当仁不让。巴黎的时尚和摩登，许多人趋之向往。她是塞纳河畔上流淌着的一场梦，无论是埃菲尔铁塔在高空黑夜里的傲然挺立'
                  }
                ]
              });
              this.list = [
                {
                  img: require('../../assets/demo/13.png'),
                  title: '千帆远澋|一夜摩登 住在香榭丽舍的繁华里3',
                  content: '全世界夜景最为璀璨的地方，我想巴黎当仁不让。巴黎的时尚和摩登，许多人趋之向往。她是塞纳河畔上流淌着的一场梦，无论是埃菲尔铁塔在高空黑夜里的傲然挺立'
                }
              ];
              this.banner = [
                {
                  img: require('../../assets/demo/1-1.jpg'),
                  title: ' 寻找旧时光——五一青岛小蜜月'
                }
              ];
            }
        },
        /**
         * 获取菜单数据
         */
        getMenuData () {
          this.$ajax.post(config.baseUrl + api.getArticleSort, {})
            .then((res) => {
              this.class_list = res.data.data;
            })
        },
        /**
         * 获取轮播图数据
         */
        getCarouselPictures (id) {
          this.$ajax.post(config.baseUrl + api.getCarousel, {
            articleTypeId: id ? id : ''
          }).then((res) => {
            //再对数据进行一层处理（主要处理图片的路径）
            const handle_arr = [];
            const data = res.data.data;
            for(var i=0; i< data.length; i++) {
                var handle = {};
                handle['title'] = data[i].title;
                handle['linkType'] = data[i].linkType;
                handle['link'] = data[i].link;
                handle['url'] = config.baseUrl + data[i].url;
                handle_arr.push(handle);
            }
            this.banner = handle_arr;
          })
        },
        /**
         * Banner跳转
         */
        getArticleList (pageNo, id) {
          var deferred = when.defer();
          this.$ajax.post(config.baseUrl + api.getArticles, {
            pageNo: pageNo,
            pageSize: 10,
            params: {
              articleTypeId: id ? id : ''
            }
          }).then((res) => {
            //再對數據進行一次處理
            const data = res.data.data;
            const handle_arr  = [];
            for(var i=0; i<data.length; i++) {
              var handle = {};
              handle['id'] = data[i].id;
              handle['title'] = data[i].title;
              handle['content'] = data[i].content;
              handle['miniImgUrl'] = config.baseUrl + data[i].miniImgUrl;
              handle_arr.push(handle);
            }
            this.list = this.list.concat(handle_arr);
            deferred.resolve(handle_arr);
          })
          return deferred.promise;
        },
        /**
         * banner 跳转
         * @param link          跳转内容
         * @param linkType      如何跳转   0 无跳转  1 分类id   2  文章id   3  外部链接
         */
        goTo (link, linkType) {
          var _link = link;
          switch(linkType) {
            case 0:
                console.log("啥都没有");
                break;
            case 1:
                this.list = [];
                this.getCarouselPictures(parseInt(_link));
                this.getArticleList(1, _link);
                console.log("请求分类id");
                break;
            case 2:
                alert("直接跳转文章详情");
                break;
            case 3:
                alert("跳转外部链接");
                break;
          }
        },
        /**
         * 跳转详情
         * @param articleTypeId   文章ID
         */
        goToDetail (articleTypeId) {
          this.$router.push( { name:'cultureDetail', params:{cultureId: articleTypeId}} );
        }
      },
      mounted() {
        this.pageNo = 1;
        this.getMenuData();
        if(this.$route.params.classId) {
          this.getCarouselPictures(this.$route.params.classId);
          this.getArticleList(1, this.$route.params.classId);
        }else {
          this.getCarouselPictures();
          this.getArticleList(1);
        }
//        setTimeout(function() {
//          that.$store.commit('addCompanyClasses', {
//            id : 22,
//            banners: that.banner,
//            articles: that.list
//          });
//        }, 1000);
      },
      watch: {
        $route (to, from) {
          this.list = [];
          this.pageNo = 1;
          console.log(to)
          var id = to.params.classId;
          this.getCarouselPictures(id);
          this.getArticleList(1, id);
        }
      },
      directives: {
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
