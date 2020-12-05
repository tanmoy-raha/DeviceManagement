import NotFound from './components/Pages/NotFoundPage.vue'
// import Login from './components/Pages/Login/Login.vue'
// import Dashboard from './components/Pages/Dashboard/Dashboard.vue'
import DeviceBrowse from './components/Pages/DeviceBrowse/DeviceBrowse'

const routes = [
  
   {
    path: '/',
    redirect: {
      name: "DeviceList"
    }
  },
  
  {
    path: '/DeviceList',
    name: "DeviceList",
    component: DeviceBrowse
  },
  
  // {
  //   path: '/Login',
  //   name: "Login",
  //   component: Login
  // },
  
  {
    path: "*",
    component: NotFound
  }
];

export default routes;
