import Vue from 'vue'
import App from './App'
import Foo from './components/Foo'
import Bar from './components/Bar'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/* const Bar = { template: '<div>bar</div>' } */

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点在讨论嵌套路由。
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
  { path: '/', component: App }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  mode: 'history',  // html5
  routes: routes // （缩写）相当于 routes: routes
})

new Vue({
  router
}).$mount('#app')

