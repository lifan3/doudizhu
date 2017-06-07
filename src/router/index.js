import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import GameStart from '@/components/GameStart'
import Register from '@/components/user/Register'
import GameHall from '@/components/hall/GameHall'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GameStart',
      component: GameStart
    },
    {
    	path:'/register',
    	name:'register',
    	component:Register
    },
     {
    	path:'/gamehall',
    	name:'gamehall',
    	component:GameHall
    }
  ]
})
