import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Calendar from '@/components/Calendar'
import Login from '@/components/Auth/Login'
import Book from '@/components/Book'

Vue.use(Router)

/*const isLogin = (to, from, next) => {
  if (calendar.user) {
    next()
    return
  }else{
    let user = JSON.parse(localStorage.getItem('user') || '[]');
    if (user){
      user.is_active = (user.is_active === '1');
      user.is_admin = (user.is_admin === '1');
      calendar.user = user;
      next()
      return
    }
  }
  next('/login')
};*/


export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: Calendar,
      //beforeEnter: isLogin
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/book',
      name: 'book',
      component: Book
    }
  ]
})
