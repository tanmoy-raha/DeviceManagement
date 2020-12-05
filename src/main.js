import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import routes from './routes';
// import VuetifyPlugin from './Plugin/Vuetify.js';
import Vuetify from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'

//************Vue Session**************/
import VueSession from 'vue-session'
var options = {
  persist: true
}

Vue.use(VueSession, options)

//************Vue Session**************/
//************SessionStorage**************/
import SessionStorage from 'vue-ls';
options = {
  namespace: 'DeviceMgmt__', // key prefix
  name: 'sessionStorage', // name variable Vue.[ls] or this.[$ls],
  storage: 'session', // storage name session, local, memory
};
Vue.use(SessionStorage, options);
//************SessionStorage**************/
//***********SignalR Client************/
// import SignalRHub from './components/CommonHelper/ActivityHub'
// Vue.use(SignalRHub);
//***********SignalR Client************/


//****************DeviceMgmt Component***************** */
Vue.use(Vuetify);
require('./components/CustomComponents');
//****************DeviceMgmt Component***************** */

//****************Vue Match Heights Component***************** */
import VueMatchHeights from 'vue-match-heights';
Vue.use(VueMatchHeights, {});
//****************Vue Match Heights Component***************** */

//****************VueDraggable Component***************** */
// import VueDraggable from 'vue-draggable';
// Vue.use(VueDraggable);
//****************VueDraggable Component***************** */

//****************Accordion***************** */

//****************Accordion***************** */

//****************nprogress***************** */
import NProgress from 'nprogress';
import './assets/css/nprogress.css'
NProgress.configure({
  showSpinner: false,
  //template: '<div class="bar" role="bar"></div><div class="v-overlay v-overlay--active" style="z-index: 201;"></div><div class="v-application"><div role="document" tabindex="0" class="v-dialog__content v-dialog__content--active" style="z-index: 202;"><div class="v-dialog v-dialog--active v-dialog--persistent" style="width: 300px;"><div class="v-card v-sheet theme--dark primary"><div class="v-card__text">Loading...<div role="progressbar" aria-valuemin="0" aria-valuemax="100" class="v-progress-linear mb-0 theme--dark" style="height: 4px;"><div class="v-progress-linear__background white" style="opacity: 0.3; left: 0%; width: 100%;"></div><div class="v-progress-linear__buffer"></div><div class="v-progress-linear__indeterminate v-progress-linear__indeterminate--active"><div class="v-progress-linear__indeterminate long white"></div><div class="v-progress-linear__indeterminate short white"></div></div></div></div></div></div></div></div>'
  template: '<div  class="bar" role="bar"></div><div  class="v-overlay v-overlay--active theme--dark" style="z-index: 999;"><div id="divscrim" class="v-overlay__scrim" style="opacity: 0.46; background-color: rgb(33, 33, 33); border-color: rgb(33, 33, 33);"></div><div class="v-overlay__content"><div role="progressbar" aria-valuemin="0" aria-valuemax="100" class="v-progress-circular v-progress-circular--indeterminate" style="height: 64px; width: 64px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="21.333333333333332 21.333333333333332 42.666666666666664 42.666666666666664" style="transform: rotate(0deg);"><circle id="divprogresscircle" fill="transparent" cx="42.666666666666664" cy="42.666666666666664" r="20" stroke-width="2.6666666666666665" stroke-dasharray="125.664" stroke-dashoffset="125.66370614359172px" class="v-progress-circular__overlay"></circle></svg><div class="v-progress-circular__info"></div></div></div></div>'
});
//****************nprogress***************** */

///https://github.com/ankurk91/vue-toast-notification
import VueToast from 'vue-toast-notification';
import './assets/css/vue-toast-notification/theme-sugar.css'
Vue.use(VueToast);

//****************devexpress CSS***************** */
import "./assets/css/devexpress/devextreme/css/dx.common.css";
import "./assets/css/devexpress/devextreme/css/dx.light.css";
import "./assets/css/devexpress/devexpress-richedit/css/dx.richedit.css";
//****************devexpress CSS***************** */

import './assets/css/dm.less'
// import './assets/css/dm-vuetify.less'

Vue.use(VueRouter);
const router = new VueRouter({
  //mode: 'history',
  mode: 'hash',
  ///Not able to used history because when ctrl+F5 press page is shown The resource you are looking for has been removed, had its name changed, or is temporarily unavailable. 
  routes,
  base: process.env.BASE_URL,
});


router.beforeResolve((to, from, next) => {
  if (to.name) {
    // Start the route progress bar.
    //NProgress.start();
  }
  next()
})

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.done();
})


var appShared = {userDateFormat: "DD/MM/YYYY", rptHtmlBody:"", globalBreadcrumb:[]}
appShared.install = function(){
    Object.defineProperty(Vue.prototype, '$appGlobalVariable', {
      get () { return appShared }
    })
  }
Vue.use(appShared);

//Vue.prototype.$AuthService = new AuthService()
// Vue.prototype.$PayableAmount = new Number;
Vue.config.productionTip = true;
Vue.prototype.$AmountToPay = 0
new Vue({
  vuetify: new Vuetify({
    theme: { disable: true },
  }),
  router,
  el: '#app',
  render: h => h(App)
})
