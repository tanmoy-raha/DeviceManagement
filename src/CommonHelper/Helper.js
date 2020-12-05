import Vue from 'vue';
import axios from 'axios'

export const CommonHelper = new Vue({
  data: {
    globalvar: 'global hello world',
    globalApiBaseUrl: "http://localhost:53043/"
  },
  methods: {
    setTitleAndDescription(title) {
      window.document.title = title;
    },
    encryptAES(value) {
      var CryptoJS = require("crypto-js");
      var ctext = CryptoJS.AES.encrypt(value, "SurfPM").toString();
      return ctext;
    },
    decryptAES(value) {
      var CryptoJS = require("crypto-js");
      let bytes = CryptoJS.AES.decrypt(value, "SurfPM");
      return bytes.toString(CryptoJS.enc.Utf8);
    },
    axiosPost(url, jparam) {
      axios.post(this.globalApiBaseUrl + '/api/Test/gettest', {
          name: this.name,
          description: this.description
        })
        .then(function (response) {
          currentObj.output = response.data;
        })
        .catch(function (error) {
          currentObj.output = error;
        });
    },
    axiosPostDownloadFile(apiUrl, jparam) {
      axios({
        url: apiUrl,
        method: "POST",
        responseType: "blob" // important
      }).then(response => {
        let blob = new Blob([response.data], {
            type: response.headers["content-type"]
          }),
          filename = (response.headers["content-disposition"] || "").split(
            "filename="
          )[1];
          axios.defaults.headers.common['Authorization'] = "Sdsdsdsdds";
        const DownloadLink = document.createElement("a");
        DownloadLink.href = window.URL.createObjectURL(blob);
        DownloadLink.setAttribute("download", filename);
        DownloadLink.click();
        DownloadLink.remove();
      });
    }
  }
})
