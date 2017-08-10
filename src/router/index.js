import Vue from 'vue'
import Router from 'vue-router'
import config from '@/config'

Vue.use(Router)

const routes = [
    {
      path: '/',
      name: 'cultureList',
      meta: {
        title: '文章列表',
      },
      component: resolve => require(['@/components/culture/List'], resolve),
      beforeEnter: (to, from, next) => {
        if(typeof(applyId) == "undefined") {
          next();
        }else {
          if(applyId) {
            next({name: 'cultureDetail', params: {cultureId: applyId}})
          }else {
            next();
          }
        }
      }
    },
    {
      path: '/:classId',
      name: 'cultureListParams',
      meta: {
        title: '文章列表',
      },
      component: resolve => require(['@/components/culture/List'], resolve)
    },
    {
      path: '/cultureDetail/:cultureId',
      name: 'cultureDetail',
      meta: {
        title: '文章详情',
      },
      component: resolve => require(['@/components/culture/Detail'], resolve)
    }
  ];

let router = new Router({
  mode: config.isDevEnv ? 'history' : 'hash',
  routes: routes
});

export default router;
