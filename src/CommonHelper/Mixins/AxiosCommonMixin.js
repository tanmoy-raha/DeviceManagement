import Vue from "vue";
import axios from "axios";
import {
  getUA,
  browserName,
  fullBrowserVersion,
  osName,
  osVersion
} from "mobile-device-detect";

Vue.mixin({
  name: "axiosmixin",
  data() {
    return {     
      
      globalApiBaseUrl: "http://localhost:50489"
      
    };
  },
  methods: {
    //   *********************encryption decryption using AES********************************
    encryptAESMixin(value) {
      let CryptoJS = require("crypto-js");
      /* var ctext = CryptoJS.AES.encrypt(value, "SurfPM").toString();
       return  ctext;*/

      let key = CryptoJS.enc.Utf8.parse("8080808080808080");
      let iv = CryptoJS.enc.Utf8.parse("8080808080808080");
      let ctext = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(value), key, {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      });
      return ctext.toString();
    },
    decryptAESMixin(value) {
      let CryptoJS = require("crypto-js");
      /*let bytes = CryptoJS.AES.decrypt(value,"SurfPM" );
      return bytes.toString(CryptoJS.enc.Utf8);*/

      let key = CryptoJS.enc.Utf8.parse("8080808080808080");
      let iv = CryptoJS.enc.Utf8.parse("8080808080808080");
      let bytes = CryptoJS.AES.decrypt(value, key, {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      });

      return bytes.toString(CryptoJS.enc.Utf8);
    },
    //   *********************encryption decryption********************************
    //   *********************axios*******************************

    //   *********************axios calling for login********************************
    async axiosPostLogInMixin(url, username, password) {
      debugger;
      let data;

      let sendJdata = {
        jsondata: JSON.stringify({
          browser: browserName + " " + fullBrowserVersion,
          platform: osName + " " + osVersion,
          browserSize: window.innerWidth + "X" + window.innerHeight
        })
      };
      const options = {
        headers: {
          username: this.encryptAESMixin(username),
          password: this.encryptAESMixin(password)
        }
      };

      await axios
        .post(this.globalApiBaseUrl + "/api/LogIn/Login", sendJdata, options)
        .then(function(response) {
          data = response.data;
        })
        .catch(function(error) {
          data = error;
        });

      return data;
    },
    
    async axiosPostMixin(url, jparam) {
      debugger;
      //await this.$AuthService.extendB2CSessionSilent();
      // const params = new URLSearchParams(location.search);

      // if (this.$session.has("DeviceMgmt-Token")) {
      //   // if (this.$session.get("SurfPM") != params.get("id")) {
      //   //   this.$router.replace({
      //   //     name: "Login"
      //   //   });
      //   // }
      // } else {
      //   this.$router.replace({
      //     name: "Login"
      //   });
      // }

      // let sendJdata = {
      //   'token': this.$session.get("SurfPM"),
      //   'jsondata': jparam
      // };
      let sendJdata = {
        //sessionidentity: this.$session.get("SurfPM"),
        jsondata: jparam
      };
      debugger;
      let data;
      var tokenVal = "";

      let vmobj = this;

      axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
      // axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
      // axios.defaults.headers.common['Accept'] = 'application/json, text/plain, */*'
      // axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, Accept, Content-Type, Authorization, Access-Control-Allow-Origin'
      
      
      // axios.defaults.headers.common["Authorization"] =
      //   "Bearer " +  this.$session.get("DeviceMgmt-Token");
      
      // axios.defaults.headers.common["Authorization"] =
      //   "Bearer " +  this.$session.get("DeviceMgmt-Token");
      let config = {
        // headers: {
        //   Authorization: "Bearer " + localStorage.getItem("msal.idtoken") //sessionStorage.getItem("msal.idtoken")
        // },
        // headers: {
        //   Authorization: "Bearer " + this.$session.get("DeviceMgmt-Token")//this.tempBearerToken.toString()
        // },
        params: jparam
      };
      debugger;
      await axios
        .post(this.globalApiBaseUrl + url, jparam)
        .then(function(response) {
          if (response.data.status == false) {
            // if (response.data.errorMsg == "401") {
            //   vmobj.$router.replace({
            //     name: "Login"
            //   });
            // }
            // try {
            //   clearTimeout(vmobj.intervalid);
            //   clearInterval(vmobj.countdown);
            // } catch (err) {}

            // vmobj.$router.replace({
            //   name: "Login"
            // });
            // vmobj.$router.push({
            //         name: "Login"

            //     })
          }
          try {
            vmobj.$root.timeStart = Date.now();
          } catch (err) {
            vmobj.$root.timeStart = +new Date();
          }

          data = response.data;
          if (
            response.data.refreshtoken == "" ||
            response.data.refreshtoken == null
          ) {
          } else {
            //Update query string and browser session for Refresh Token
            // vmobj.replaceQStringMixin("id", response.data.refreshtoken)

            // const paramsNew = new URLSearchParams(location.search)
            //vmobj.$session.set("SurfPM", response.data.refreshtoken);
          }
        })
        .catch(function(error) {
          data = error;
          if (error.toString().includes("401")) {
            //vm.clearB2CData();
          }
        });

      return data;
    },

    async axiosGetMixin(url, jparam) {
      debugger;
      // if (this.$session.has("DeviceMgmt-Token")) {
      //   // if (this.$session.get("SurfPM") != params.get("id")) {
      //   //   this.$router.replace({
      //   //     name: "Login"
      //   //   });
      //   // }
      // } else {
      //   this.$router.replace({
      //     name: "Login"
      //   });
      // }
      let data;

      let sendJdata = {
        jsondata: jparam
      };
     
      axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
      // axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
      // axios.defaults.headers.common['Accept'] = 'application/json, text/plain, */*'
      // axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, Accept, Content-Type, Authorization, Access-Control-Allow-Origin'
      
      
      // axios.defaults.headers.common["Authorization"] =
      //   "Bearer " +  this.$session.get("DeviceMgmt-Token");
      
      let config = {
        // headers: {
        //   Authorization: "Bearer " + localStorage.getItem("msal.idtoken") //sessionStorage.getItem("msal.idtoken")
        // },
        // headers: {
        //   Authorization: "Bearer " + this.$session.get("DeviceMgmt-Token")//this.tempBearerToken.toString()
        // },
        params: jparam
      };
      debugger;
      await axios
        .get(this.globalApiBaseUrl + url, jparam)
        .then(function(response) {
          debugger;
          data = response.data;          
        })
        .catch(function(error) {
          data = error;         
        });

      return data;
    },
    
    //   *********************axios*******************************
    decodeHtml: function(html) {
      //console.log(html);
      // var txt = document.createElement("textarea");
      // txt.innerHTML = html;
      // return txt.value;
      let decoder = decoder || document.createElement("div");
      decoder.innerHTML = html;
      return decoder.textContent;
    },
    
  }
});
