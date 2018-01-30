import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Italy from '@/components/Italy'
import England from '@/components/England'
import Spain from '@/components/Spain'
import London from '@/components/England/London'
import Brighton from '@/components/England/Brighton'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/italy',
      name: 'Italy',
      component: Italy
    },
    {
      path: '/england',
      name: 'England',
      component: England,
      children: [
        {
          path: 'london',
          name: 'London',
          component: London
        },
        {
          path: 'brighton',
          name: 'Brighton',
          component: Brighton
        }
      ]
    },
    {
      path: '/spain',
      name: 'Spain',
      component: Spain
    }
  ]
})
