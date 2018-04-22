import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import Image from 'components/Image'
import Blog from 'components/Blog'
import Contact from 'components/Contact'
import Erfrecht from 'components/Erfrecht'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/image',
      name: 'image',
      component: Image
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/erfrecht',
      name: 'erfrecht',
      component: Erfrecht
    }
  ],
  mode: 'history'
})
