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
                {{ item.abstractContent }}
              </article>
            </flexbox-item>
          </flexbox>
        </div>
        <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading" spinner="waveDots">
          <span slot="no-more">
            沒有更多的内容了!
          </span>
          <span slot="no-results">
            沒有更多的内容了!
          </span>
        </infinite-loading>
      </div>
      <!-- 底部菜单 -->
      <div class="class-ctrl">
        <flexbox style="height: 100%" :gutter="0">
          <flexbox-item class="class-item" v-for="item in class_list" :key="item.id">
            <class-block :classList="item" v-on:UrlAndId="getClassId" :isShow="childMenuHide"></class-block>
          </flexbox-item>
        </flexbox>
      </div>
      <back-home :show="!isHome"></back-home>
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
    margin: 0 10px;
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
    background: #fff;
    width: 100px;
    height: 60px;
    overflow: hidden;
  }

</style>
<script>
    import { Swiper, SwiperItem, Flexbox, FlexboxItem } from 'vux';
    import ClassBlock from './classBlock.com.vue';
    import BackHome from './backHome.com.vue';
    import when from 'when';
    import InfiniteLoading from 'vue-infinite-loading';
    import api from '../../api'
    import config from '../../config'

    export default {
      data () {
        return {
          id: 'Home',
          pageNo: 1,
          childMenuHide: false,                            //隐藏子菜单
          banner: [],
          list : [],
          class_list: [],
          isHome: true,
          currentId: null                                  //当前点击的ID（特别是一级菜单）
        }
      },
      methods: {
        /**
         * 滚动加载
         */
        onInfinite () {
          this.pageNo++;
          var classId = this.$route.params.classId ? parseInt(this.$route.params.classId) : "";
          this.getArticleList(this.pageNo, classId).then((res) => {
            const data = res.data.data;
            if(!data.length) {
              this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
            }else {
              this.handleArticleListData(data);
              this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
            }
          });
        },
        /**
         * 监听子菜单对应的ID
         */
        getClassId (data) {
          this.id = data;
          if (!this.currentId) {
            this.currentId = data;
            this.list = [];
            this.$router.push({name: 'cultureListParams', params: {classId: data}});
          } else {
            if (this.currentId == data) {
              return;
            } else {
              this.currentId = data;
              this.list = [];
              this.$router.push({name: 'cultureListParams', params: {classId: data}});
            }
          }
        },
        /**
         * 获取菜单数据
         */
        getMenuData () {
          this.$ajax.get(config.baseUrl + api.getArticleSort, {})
            .then((res) => {
              this.class_list = res.data.data;
            })
        },
        /**
         * 获取轮播图数据
         */
        getCarouselPictures (id) {
          this.$ajax.get(config.baseUrl + api.getCarousel, {
            params: {
              articleTypeId: id ? id : ''
            }
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
          this.$ajax.get(config.baseUrl + api.getArticles, {
            params: {
              pageNo: pageNo,
              pageSize: 5,
              articleTypeId: id ? id : ''
            }
          }).then((res) => {
            deferred.resolve(res);
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
                this.childMenuHide = true;
                this.$router.push({name: 'cultureListParams', params: {classId: parseInt(_link)}});
                this.getCarouselPictures(parseInt(_link));
                this.getArticleList(1, parseInt(_link)).then((res)=> {
                    var data = res.data.data;
                    if(data.length) {
                      this.handleArticleListData(data);
                    }
                });
                console.log("请求分类id");
                break;
            case 2:
                this.goToDetail(parseInt(_link));
                console.log("直接跳转文章详情");
                break;
            case 3:
                console.log("跳转外部链接");
                break;
          }
        },
        /**
         * 跳转详情
         * @param articleTypeId   文章ID
         */
        goToDetail (articleTypeId) {
          this.$router.push( { name:'cultureDetail', params:{cultureId: articleTypeId}} );
        },
        handleArticleListData (data) {
          //再對數據進行一次處理
          const handle_arr = [];
          for (var i = 0; i < data.length; i++) {
            var handle = {};
            handle['id'] = data[i].id;
            handle['title'] = data[i].title;
            handle['content'] = data[i].content;
            handle['abstractContent'] = data[i].abstractContent;
            handle['miniImgUrl'] = config.baseUrl + data[i].miniImgUrl;
            handle_arr.push(handle);
          }
          this.list = this.list.concat(handle_arr);
        }
      },
      mounted() {
        this.pageNo = 1;
        this.getMenuData();
        if(this.$route.params.classId) {
          this.isHome = false;
          this.getCarouselPictures(parseInt(this.$route.params.classId));
          this.getArticleList(1, parseInt(this.$route.params.classId)).then((res)=> {
              const data = res.data.data;
              if(data.length) {
                  this.handleArticleListData(data);
              }
          });
        }else {
          this.isHome = true;
          this.getCarouselPictures();
          this.getArticleList(1).then((res)=>{
            var data = res.data.data;
            if(data.length) {
              this.handleArticleListData(data);
            }
          });
        }
      },
      watch: {
        $route (to, from) {
          this.list = [];
          this.pageNo = 1;
          var id = to.params.classId;
          id ? this.isHome = false : this.isHome = true;
          this.getCarouselPictures(id);
          this.getArticleList(1, id).then((res)=>{
             const data = res.data.data;
             if(data.length) {
               this.handleArticleListData(data);
             }
          });
          this.$nextTick(() => {
            this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');
          });
        }
      },
      components: {
        Swiper,
        SwiperItem,
        Flexbox,
        FlexboxItem,
        ClassBlock,
        InfiniteLoading,
        BackHome
      }
    }
</script>
