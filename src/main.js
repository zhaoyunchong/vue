// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.prototype.axios=axios
//完整引入mint-ui组件库中所有组件
import MintUI from "mint-ui"
// import { Tabbar, TabItem } from 'mint-ui';
//单引入mint-ui库中样式文件
import "mint-ui/lib/style.css"
//引入vant组件
import { Button } from 'vant';
import { Popup } from 'vant';
import { Sku } from 'vant';
import { SubmitBar } from 'vant';
import { Toast } from 'vant';
import { Overlay } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import { Sidebar, SidebarItem } from 'vant';
import { NoticeBar } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import {
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton
} from 'vant';

import '@vant/touch-emulator';
import { Card } from 'vant';
Vue.config.productionTip = false

import Vuex from 'vuex'
Vue.use(Vuex);

import createPersistedState from "vuex-persistedstate"
Vue.use(createPersistedState)

var state = {
  list:[]
}

var store = new Vuex.Store({
  state,
  mutations: {
    add (state,payload) {
      state.list.push(payload)
    },
    sub (state,payload) {
      state.list.splice(payload.length,1)
    },
    sub1 (state,i){
      state.list[i].num--;
    }
  },
  // plugins: [createPersistedState()]
})


// Vue.component(Tabbar.name, Tabbar);
// Vue.component(TabItem.name, TabItem);
Vue.use(Button);
Vue.use(Popup);
Vue.use(Sku);
Vue.use(SubmitBar);
Vue.use(Toast);
Vue.use(Overlay);
Vue.use(Tabbar).use(TabbarItem);
Vue.use(Sidebar).use(SidebarItem);
Vue.use(NoticeBar);
Vue.use(Swipe).use(SwipeItem);
Vue
  .use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton);
Vue.use(Card);
Vue.use(MintUI);
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
})
