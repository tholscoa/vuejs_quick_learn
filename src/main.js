// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vueResource from 'vue-resource'
import vueRouter from 'vue-router'

import Users from './components/user'
import Test from './components/test'

Vue.use(vueResource)
Vue.use(vueRouter)

const router = new vueRouter({
  mode: 'history', //to be able no navigate directly to url
  base: __dirname,
  routes: [
    {path:'/', component: Users},
    {path:'/test', component: Test},
  ]
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  // el: '#app',
  // // router,
  // components: { App },
  // template: '<App/>'
  router,
  template: `
    <div id="app">
      <ul>
        <li><router-link to="/">Users</router-link></li>
        <li><router-link to="/test">Test</router-link></li>
      </ul>
      <router-view></router-view>
    </div>
  `
}).$mount('#app')
