import DashboardLayout from '../layout/DashboardLayout.vue'
// GeneralViews

// Admin pages
import Overview from 'src/pages/Overview.vue'
import UserProfile from 'src/pages/UserProfile.vue'
import Menu from 'src/pages/Menu.vue'
import Worker from 'src/pages/Worker.vue'
import Notifications from 'src/pages/Notifications.vue'
import Login from 'src/pages/Login.vue'
import AddMenu from 'src/pages/AddMenu.vue'
import MenuComplete from 'src/pages/MenuComplete.vue'
import AddWorker from 'src/pages/AddWorker.vue'
import WorkerComplete from 'src/pages/WorkerComplete.vue'

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/cliente/overview'
  },
  {
    path: '/cliente',
    component: DashboardLayout,
    redirect: '/cliente/overview',
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: Overview
      },
      {
        path: 'user',
        name: 'User',
        component: UserProfile
      },
      {
        path: 'menulist',
        name: 'menu-list',
        component: Menu
      },
      {
        path: 'worker',
        name: 'worke list',
        component: Worker
      },         
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications
      },
      {
        path: 'addmenu',
        name: 'AddMenu',
        component: AddMenu
      }, 
      {
        path: 'menucomplete',
        name: 'menucomplete',
        component: MenuComplete
      },
      {
        path: 'addworker',
        name: 'addworker',
        component: AddWorker
      }, 
      {
        path: 'workercomplete',
        name: 'workercomplete',
        component: WorkerComplete
      }              
    ]
  },
  { path: '*', component: Login }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
