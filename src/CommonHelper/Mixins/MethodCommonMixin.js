import Vue from "vue";
import NProgress from "nprogress";
import moment from "moment";


Vue.mixin({
  name: "methodmixin",
  methods: {
    getAccessTokenVal() {
      return "Bearer " + this.$session.get("DeviceMgmt-Token");//localStorage.getItem("msal.idtoken");
    },
    getSessionIdentityKeyVal() {
      return this.$session.get("DeviceMgmt-Token");//this.$session.get("SurfPM");
    },
    getPracticeIDVal(){
      return this.$session.get("PracticeID");
    },
    getClientIDVal(){
      return this.$session.get("ClientID");
    },
    createFileUploadSessionID() {
      //return this.$session.get("session-id").replace("sess:","");
      var dt = new Date().getTime();
      var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function(c) {
          var r = (dt + Math.random() * 16) % 16 | 0;
          dt = Math.floor(dt / 16);
          return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
        }
      );
      return uuid;
    },
    getImgUrlMixin(imageUrl) {
      if (process.env.NODE_ENV === "production") {
        let strAssetPath = process.env.ASSET_PATH;
        if (strAssetPath != "" || strAssetPath != "/") {
          imageUrl =
            imageUrl.indexOf("/") == 0 ? imageUrl.substring(1) : string;
          imageUrl = process.env.ASSET_PATH + imageUrl;
        }
      }
      return imageUrl;
    },
    setTitleAndDescriptionMixin(title) {
      window.document.title = title;
    },
    replaceQStringMixin(key, val) {
      var urlValue = document.location.href;

      //Get query string value
      var searchUrl = location.search;

      if (key != "") {
        let startindex = searchUrl.indexOf(key + "=");
        if (startindex > 0) {
          let qval = searchUrl.split("?");
          let pval = qval[1].split("&");
          let searchres = -1;
          for (let i = 0; i < pval.length; i++) {
            if (pval[i].indexOf(key + "=") >= 0) {
              searchres = i;
            }
          }

          urlValue = urlValue.replace(pval[searchres], "id=" + val);
        }

        history.pushState(
          {
            state: 1,
            rand: Math.random()
          },
          "",
          urlValue
        );
      }
    },
    GetFilterJsonArrayMixin(jsonArrayItem, findProperty, removeItem) {
      for (const key in jsonArrayItem) {
        if (jsonArrayItem.hasOwnProperty(key)) {
          if (jsonArrayItem[key][findProperty] == removeItem) {
            let removeditem = jsonArrayItem.splice(key, 1);
            break;
          }
        }
      }
      return jsonArrayItem;
    },
    GetBrowseSortModeMixin(multiplesort, sortDesc) {
      let _sortDesc = "asc";
      if (multiplesort == false) {
        if (sortDesc.length == 1) {
          if (sortDesc[sortDesc.length - 1] == true) {
            _sortDesc = "asc";
          }
          if (sortDesc[sortDesc.length - 1] == false) {
            _sortDesc = "desc";
          }
          if (Number.isNaN(sortDesc[sortDesc.length - 1])) {
            _sortDesc = "asc";
          }
        }
        return _sortDesc;
      }
    },

    GetBrowseSortByModeMixin(multiplesort, sortBy, defaultColumn) {
      let _sortBy = defaultColumn;
      if (multiplesort == false) {
        if (sortBy.length == 1) {
          if (Number.isNaN(sortBy[sortBy.length - 1])) {
            _sortBy = defaultColumn;
          }

          if (!Number.isNaN(sortBy[sortBy.length - 1])) {
            _sortBy = sortBy[sortBy.length - 1];
          }
        }
        return _sortBy;
      }
    },
    /**
         * return json Item find by key and value
          @param { JsonObject array } jObj 
          @param { key name of JsonObject} key 
          @param { value to find on JsonObject by key} value 
         */
    retriveJsonKeyValueMixin(jObj, key, value) {
      var robj = [];
      for (let index = 0; index < jObj.length; index++) {
        if (jObj[index][key] == value) {
          robj = jObj[index];
        }
      }
      return robj;
    },
    /**
     * return position/index of json Item find by Key and value
      @param { JsonObject array} jObj 
      @param { key name of JsonObject} key 
      @param { value to find on JsonObject by key} value 
     */
    retriveJsonKeyValuePositionMixin(jObj, key, value) {
      var findIndex = -1;
      for (let index = 0; index < jObj.length; index++) {
        if (jObj[index][key] == value) {
          findIndex = index;
        }
      }
      return findIndex;
    },
    removeNULLMixin(Obj) {
      Obj = Obj.replace(/\:null/gi, ':""');
      return Obj;
    },
    /**
     * redirect to a specific page matched with route
     * @param {*} pagename
     */
    redirectToPageMixin(pageName) {
      const params = new URLSearchParams(location.search);
      let formulateQueryString = {
        id: params.get("id")
      };
      this.$router.push({
        path: "/ui/" + pageName
      });
    },
    showLoaderMixin() {
      NProgress.start();
    },
    hideLoaderMixin() {
      NProgress.done();
    },
    getKeyOrValueFromJSONMixin(arr, keyColumn, valueColumn, value) {
      for (var ai, i = arr.length; i--; )
        if ((ai = arr[i]) && ai[valueColumn] == value) return ai[keyColumn];
    },
    ConvertToDecimalHoursMixin(dblTime) {
      if (dblTime == null || dblTime == undefined || dblTime == 0) return 0;
      else {
        var dblHour = Math.floor(Math.abs(parseFloat(dblTime)));
        var dblMinute = Math.abs(parseFloat(dblTime)) - parseInt(dblHour);
        if (parseFloat(dblMinute) != 0) {
          dblHour = parseInt(dblHour) + (parseFloat(dblMinute) / 60) * 100;
          if (parseFloat(dblTime) < 0) dblHour = -1 * dblHour;
          return dblHour;
        } else {
          if (parseFloat(dblTime) < 0) dblHour = -1 * parseInt(dblHour);
          return dblHour;
        }
      }
    },
    ConvertToHoursMinutesMixin(dblTime) {
      if (dblTime == null || dblTime == undefined || dblTime == 0) return 0;
      else {
        dblTime = Number(dblTime).toFixed(2);
        var dblHour = Math.floor(Math.abs(parseFloat(dblTime)));
        var dblMinute = Math.abs(parseFloat(dblTime)) - parseInt(dblHour);

        if (parseFloat(dblMinute) != 0) {
          dblHour = parseInt(dblHour) + (parseFloat(dblMinute) / 100) * 60;
          if (parseFloat(dblTime) < 0) dblHour = -1 * dblHour;

          dblHour = dblHour.toFixed(2);
          return dblHour;
        } else {
          if (parseFloat(dblTime) < 0) dblHour = -1 * dblHour;
          dblHour = dblHour.toFixed(2);
          return dblHour;
        }
      }
    },
    /**
     * return true after validate valid email
     * @param {*} email
     */
    ValidateEmailMixin(email) {
      //var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return re.test(email);
    },
    RandomNumberMixin() {
      return Math.floor(Math.random() * 9000000000) + 1000000000;
    },
    decimalFormatMixin(value, noDecimal) {
      if (value > 0 || value < 0) {
        if (
          value !== "" ||
          value !== undefined ||
          value !== 0 ||
          value !== "0" ||
          value !== null
        ) {
          return Number(value)
            .toFixed(2)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
      } else if (value == "" || value == " ") {
        return Number("0").toFixed(noDecimal);
      } else {
        return value;
      }
    },
    ReportBackClick(menuItem) {
      //this.modelData = menuItem;
      const params = new URLSearchParams(location.search);
      let formulateQueryString = {
        id: params.get("id")
      };
      this.$router.push({
        path: "/ui/" + menuItem
      });
      return this.value;
    },
    ValidateDate(sqlDate) {
      //var m = moment(sqlDate, 'YYYY-MM-DD');
      //return m.isValid();
      let isValid = true;
      if (sqlDate != "") {
        var regEx = /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/;
        isValid = sqlDate.match(regEx);
      }
      return isValid;
    },
    FormatUserDate(dateToFormat) {
      let userDateFormat = "DD/MM/YYYY";
      if (dateToFormat != "") {
        if (this.$appGlobalVariable) {
          userDateFormat = this.$appGlobalVariable.userDateFormat;
        }
        return moment(dateToFormat).format(userDateFormat);
      } else {
        return dateToFormat;
      }
    },
    FormatSqlDate(dateToFormat) {
      let userDateFormat = "DD/MM/YYYY";
      if (dateToFormat.trim() != "") {
        if (this.$appGlobalVariable) {
          userDateFormat = this.$appGlobalVariable.userDateFormat;
        }
        return moment(dateToFormat, userDateFormat).format("YYYY-MM-DD");
      } else {
        return dateToFormat;
      }
    },
    GetNameInShort(strName) {
      strName = strName.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "");
      let strNameInShort = "";
      if (strName.trim() != "") {
        strName = strName.trim();
        let res = strName.split(" ");
        let strFistName = res[0];
        let strFistNameFirstChar = res[0].charAt(0);
        strNameInShort = strFistNameFirstChar.toUpperCase();
        if (res.length > 1) {
          let strLastName = res[res.length - 1];
          let strLastNameFirstChar = res[res.length - 1].charAt(0);
          strNameInShort += strLastNameFirstChar.toUpperCase();
        }
        if (strNameInShort.length === 1) {
          let strNameSecondChar = res[res.length - 1].charAt(1);
          strNameInShort += strNameSecondChar.toUpperCase();
        }
      }
      return strNameInShort;
    },
    GetNameInShort(strName, strLength) {
      strName = strName.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "");
      let strNameInShort = "";
      if (strName.trim() != "") {
        strName = strName.trim();
        let res = strName.split(" ");
        let strFistName = res[0];
        let strFistNameFirstChar = res[0].charAt(0);
        strNameInShort = strFistNameFirstChar.toUpperCase();
        if (res.length > 1) {
          let strLastName = res[res.length - 1];
          let strLastNameFirstChar = res[res.length - 1].charAt(0);
          strNameInShort += strLastNameFirstChar.toUpperCase();
        }
        if (strNameInShort.length === 1) {
          let strNameSecondChar = "";
          if (strLength && strLength > 0){
             strNameSecondChar = res[res.length - 1].substring(1, strLength);
          }
          else{
           strNameSecondChar = res[res.length - 1].charAt(1);
          }
          //let strNameSecondChar = res[res.length - 1].charAt(1);
          strNameInShort += strNameSecondChar.toUpperCase();
        }
      }
      return strNameInShort;
    },
    isGoogleChrome() {
      var isChrome =
        /Chrome/.test(navigator.userAgent) &&
        /Google Inc/.test(navigator.vendor);
      return isChrome;
    },
    scrollToTop() {
      // window.scrollTo(0,0);
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    },
    _isContains(json, value) {
      let contains = false;
      Object.keys(json).some(key => {
        contains =
          typeof json[key] === "object"
            ? this._isContains(json[key], value)
            : json[key] === value;
        return contains;
      });
      return contains;
    },
    splitName(full_name) {
      let Obj = {
        FirstName: "",
        LastName: "",
        MiddleName: ""
      };
      var splitName = full_name.trim().split(" ");
      if (splitName.length > 0) {
        switch (splitName.length) {
          case 1:
            Obj.FirstName = splitName[0];
            break;
          case 2:
            Obj.FirstName = splitName[0];
            Obj.LastName = splitName[1];
            break;
          default:
            Obj.FirstName = splitName[0];
            Obj.MiddleName = splitName[1];
            let substringLength =
              splitName[0].trim().length + splitName[1].trim().length + 1;
            Obj.LastName = full_name.substring(substringLength).trim();
            break;
        }
      }
      return Obj;
    },
    avoidSpace(event) {
      var k = event ? event.which : window.event.keyCode;
      if (k == 32) {
        event.preventDefault();
        return false;
      } else {
        return true;
      }
    },
    /**
     * return true after validate a text if found
     * @param {*} textcontent
     */
    ValidateHtmlTagMixin(textcontent) {
      var re = /<.+>/;
      return re.test(textcontent);
    },
    RepairAutocomplete() {
      var list = document.getElementsByTagName("input");
      for (var i = 0; i < list.length; i++) {
        if (list[i].type == "text" || list[i].type == "password")
          if (list[i].type === "password") {
            // debugger
            // var container = list[i].parentNode;
            // container.prepend(document.createTextNode("Member " + (i+1)));
            list[i].setAttribute("autocomplete", "new-password");
            list[i].classList.add("passwordsecurity");
          } else {
            list[i].setAttribute("autocomplete", "off");
          }
      }
    },
    HasWhiteSpaceMixin(val) {
      return /\s/g.test(val);
    },
    HasSpecialCharactersMixin(val) {
      var regex = /^[A-Za-z0-9 ]+$/;
      if (!regex.test(val)) {
        return true;
      } else {
        return false;
      }
    },
    UpdateBreadcrumbDataMixin(item, textVal) {
      let tempBreadcrumb = [];
      tempBreadcrumb = this.$sessionStorage.get("breadcrumbData");
      let indx = this.retriveJsonKeyValuePositionMixin(
        tempBreadcrumb,
        "pageName",
        item[0].pageName
      );
      if (indx > 0) {
        tempBreadcrumb[indx].text = textVal.trim();
        if (item[0].query) {
          tempBreadcrumb[indx].query = item[0].query;
        }
      }
      this.$appGlobalVariable.globalBreadcrumb = tempBreadcrumb;
      this.$sessionStorage.set(
        "breadcrumbData",
        this.$appGlobalVariable.globalBreadcrumb
      );
      this.$forceUpdate();
    },
    createBreadcrumbDataMixin(item, clearData) {
      if (clearData) {
        this.clearBreadcrumbDataMixin();
      }

      /////////////////////////////////////////////////////////////////
      let tempBreadcrumb = [];
      if (this.$sessionStorage.get("breadcrumbData").length === 0) {
        tempBreadcrumb = [];
      } else {
        tempBreadcrumb = this.$sessionStorage.get("breadcrumbData");
      }
      ////////////////////////////////////////////////////////////////
      let indx = this.retriveJsonKeyValuePositionMixin(
        tempBreadcrumb,
        "pageName",
        item[0].pageName
      );
      ///////////////////////////////////////////////////////////////////
      if (indx < 0) {
        //tempBreadcrumb.push(item);
        for (let i in item) {
          tempBreadcrumb.push(item[i]);
        }
      } else if (tempBreadcrumb.length > 0) {
        let spliceIndex = indx + 1;
        tempBreadcrumb.splice(spliceIndex, tempBreadcrumb.length - spliceIndex);
      }
      ///////////////////////////////////////////////////////////////////
      for (var i in tempBreadcrumb) {
        if (parseInt(i) === parseInt(tempBreadcrumb.length - 1)) {
          tempBreadcrumb[i].disabled = true;
        } else {
          tempBreadcrumb[i].disabled = false;
        }
      }
      ///////////////////////////////////////////////////////////////////
      this.$appGlobalVariable.globalBreadcrumb = tempBreadcrumb;
      this.$sessionStorage.set(
        "breadcrumbData",
        this.$appGlobalVariable.globalBreadcrumb
      );
      this.$forceUpdate();
    },
    clearBreadcrumbDataMixin() {
      this.$appGlobalVariable.globalBreadcrumb.splice(
        0,
        this.$appGlobalVariable.globalBreadcrumb.length
      );
      this.$sessionStorage.set(
        "breadcrumbData",
        this.$appGlobalVariable.globalBreadcrumb
      );
    },
    isAlphaNumericMixin(e) {
      var k = event ? event.which : window.event.keyCode;
      let returnResult =
        (k > 64 && k < 91) ||
        (k > 96 && k < 123) ||
        k == 8 ||
        k == 32 ||
        (k >= 48 && k <= 57);

      if (!returnResult) {
        e.preventDefault();
      }
      return returnResult;
    },
    async SaveStaffPreferenceMixin(strPreference, pageName) {
      let staffJsonParam = {
        PreferenceData: strPreference,
        PageName: pageName
      };
      let vm = this;
      await this.axiosPostMixin(
        "/api/Staff/DoSaveStaffPreference",
        staffJsonParam
      )
        .then(async function(response) {
          let jData = vm.removeNULLMixin(response.jsondata);
        })
        .catch(function(error) {});
    },
    async GetStaffPreferenceMixin(pageName) {
      let jData = "";
      let staffJsonParam = {
        PageName: pageName
      };
      let vm = this;
      await this.axiosPostMixin(
        "/api/Staff/DoGetStaffPreference",
        staffJsonParam
      )
        .then(async function(response) {
          jData = vm.removeNULLMixin(response.jsondata);
          jData = JSON.parse(jData);
        })
        .catch(function(error) {});

      return jData;
    },
    FormDateValidate(formSubmit, strDate) {
      if (formSubmit) {
        try {
          if (this.ValidateDate(this.FormatSqlDate(strDate))) {
            return true;
          } else {
            return false;
          }
        } catch (err) {
          return false;
        }
      } else {
        return true;
      }
    },
    getColorCodeFormStringMixin(strName) {
      strName = strName.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "");
      let colour = "#";
      let hash = 0;
      for (let i = 0; i < strName.length; i++) {
        hash = strName.charCodeAt(i) + ((hash << 5) - hash);
      }

      for (let i = 0; i < 3; i++) {
        let value = (hash >> (i * 8)) & 0xff;
        colour += ("00" + value.toString(16)).substr(-2);
      }
      return colour;
    },
    getPeriodMixin(periodType, freqCode) {
       var quotationPeriod = 0;
       if (periodType == "1") {
          switch (freqCode) {
                case '1': quotationPeriod = 1; //Yearly
                break;
             
                case '2': quotationPeriod = 2;//6 Monthly / Half Yearly
                break;
             
                case '3': quotationPeriod = 3;//4 Monthly
                break;
             
                case '4': quotationPeriod = 4;//3 Monthly / Quarterly
                break;
             
                case '6': quotationPeriod = 6;//Bi-Monthly
                break;
 
                case '12': quotationPeriod = 12;//Monthly
                break;
             
                case '13': quotationPeriod = 13;//4 Weekly
                break;
             
                case '26': quotationPeriod = 26;//Bi-Weekly
                break;
             
                case '52': quotationPeriod = 52;//Weekly
                break;
             
                case 'N/A': quotationPeriod = 1;//N/A
                break;
             
                default:  quotationPeriod = 1;
             }
         this.quotationPeriodCount = quotationPeriod;
         //quotationPeriod = 12;
       } else {
         var SixMonthlyFreqMuliplier = 3;
         var FourMonthlyFreqMuliplier = 2;
         var ThreeMonthlyFreqMuliplier = 2;
         var BiMonthlyFreqMuliplier = 1;
         var MonthlyFreqMuliplier = 1;
         var FourWeeklyFreqMuliplier = 2;
         var BiWeeklyFreqMuliplier = 1;
         var WeeklyFreqMuliplier = 1;
         var SixMonthlyFreqFactor = 6;
         var FourMonthlyFreqFactor = 4;
         var ThreeMonthlyFreqFactor = 3;
         var BiMonthlyFreqFactor = 2;
         var MonthlyFreqFactor = 1;
         var FourWeeklyFreqFactor = 4;
         var BiWeeklyFreqFactor = 2;
         var WeeklyFreqFactor = 1;
 
         var countYMW = this.getWeekNumber(
           new Date(this.FormatSqlDate(this.quotationDate))
         );
         ////////////debugger;
         if (freqCode == 52) {
           // Weekly
           quotationPeriod = Math.round(
             (52 - countYMW[2] + WeeklyFreqMuliplier) / WeeklyFreqFactor
           );
         } else if (freqCode == 26) {
           // Bi-Weekly
           quotationPeriod = Math.round(
             (52 - countYMW[2] + BiWeeklyFreqMuliplier) / BiWeeklyFreqFactor
           );
         } else if (freqCode == 13) {
           // 4 Weekly
           quotationPeriod = Math.round(
             (52 - countYMW[2] + FourWeeklyFreqMuliplier) / FourWeeklyFreqFactor
           );
         } else if (freqCode == 12) {
           // Monthly
           quotationPeriod = Math.round(
             (12 - countYMW[1] + MonthlyFreqMuliplier) / MonthlyFreqFactor
           );
         } else if (freqCode == 6) {
           // 2 Monthly
           quotationPeriod = Math.round(
             (12 - countYMW[1] + BiMonthlyFreqMuliplier) / BiMonthlyFreqFactor
           );
         } else if (freqCode == 4) {
           // 3 Monthly
           quotationPeriod = Math.round(
             (12 - countYMW[1] + ThreeMonthlyFreqMuliplier) /
               ThreeMonthlyFreqFactor
           );
         } else if (freqCode == 3) {
           // 4 Monthly
           quotationPeriod = Math.round(
             (12 - countYMW[1] + FourMonthlyFreqMuliplier) /
               FourMonthlyFreqFactor
           );
         } else if (freqCode == 2) {
           // 6 Monthly
           quotationPeriod = Math.round(
             (12 - countYMW[1] + SixMonthlyFreqMuliplier) / SixMonthlyFreqFactor
           );
         } else if (freqCode == 1) {
           // Yearly
           quotationPeriod = 1;
         }
         this.quotationPeriodCount = quotationPeriod;
       }
       return quotationPeriod;
     },
    goHistoryBack() {
      this.$router.back();
    },
    CalculateSumAmountMixin(amount, item, e){
      debugger;
      var sumAmount =0;
        if(e == true)
        {
          if(localStorage.getItem('Amount') != null || localStorage.getItem('Amount') != undefined)
          {
            var prevAmount = localStorage.getItem('Amount');
            
            sumAmount = parseFloat(prevAmount) + parseFloat(amount);
            sumAmount = this.GetDecimalFormatFltMixin(sumAmount,2);
            localStorage.setItem('Amount', sumAmount);
          }
          else
          {
            sumAmount =  amount;
            sumAmount = this.GetDecimalFormatFltMixin(sumAmount,2);
            localStorage.setItem('Amount', sumAmount);
          }
        }
        else
        {
          if(localStorage.getItem('Amount') != null || localStorage.getItem('Amount') != undefined)
          {
            var prevAmount = localStorage.getItem('Amount');
            
            if(parseFloat(prevAmount) >  parseFloat(amount))  
            sumAmount = parseFloat(prevAmount) - parseFloat(amount);
            else
            sumAmount = parseFloat(amount) - parseFloat(prevAmount);

            sumAmount = this.GetDecimalFormatFltMixin(sumAmount,2);
            localStorage.setItem('Amount', sumAmount);
          }
          else
          {
            sumAmount =  0;
            sumAmount = this.GetDecimalFormatFltMixin(sumAmount,2);
            localStorage.setItem('Amount', sumAmount);
          }

        }
        


        //GetPayableAmountMixin();
    },
    GetPayableAmountMixin(){
      debugger;
     
      // if(this.$session.has('PayableAmount'))
      // {
      //   var value = parseFloat(this.$session.get('PayableAmount'));
      //   return value.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      // }
      // else 
      // {
         
      // }

      if(localStorage.getItem('Amount') != null || localStorage.getItem('Amount') != undefined)
      {
        var value = parseFloat( localStorage.getItem('Amount'));
        return value.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
      else
            return 0;
      
    },
    GetDecimalFormatFltMixin(value, noDecimal) {
     // debugger;
      if ((value > 0 || value < 0)) {
        if (value !== '' || value !== undefined || value !== 0 || value !== '0' || value !== null) {
          return Number(value).toFixed(noDecimal); //.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
      } else if ((value == "" || value == " ")) {
        return Number("0").toFixed(noDecimal);
      } else {
        return value;
      }
    },
  }
});
