/**
 * Import @/router/views/
 */
import Dashboard from '@/router/views/Dashboard'
import MyCalendar from '@/router/views/MyCalendar'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard,
    meta: {}
  },
  {
    path: '/my-calendar',
    name: 'my.calendar',
    component: MyCalendar,
    meta: {
      parent: 'dashboard'
    }
  }
]

export default routes
