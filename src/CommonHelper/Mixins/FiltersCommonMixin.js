import Vue from 'vue';
import moment from 'moment'
Vue.mixin({
  name: 'filtersmixin',
  filters: {
    upperCaseFltMixin(value) {
      if (!value) return ''
      value = value.toString()
      return value.toUpperCase()
    },
    DateFormatFltMixin(value, format) {
      value = moment().format(format)
      return value;
    },
    decimalFormatFltMixin(value, noDecimal) {
      if ((value > 0 || value < 0)) {
        if (value !== '' || value !== undefined || value !== 0 || value !== '0' || value !== null) {
          return Number(value).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
      } else if ((value == "" || value == " ")) {
        return Number("0").toFixed(noDecimal);
      } else {
        return value;
      }
    },
    decimalFormatFltMixinSuppressZero(value, noDecimal) {
      if ((value > 0 || value < 0)) {
        if (value !== '' || value !== undefined || value !== 0 || value !== '0' || value !== null) {
          return Number(value).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
      } else if ((value == "" || value == " ")) {
        return value;
      } else {
        return value;
      }
    },
    decimalFormatFltFixedMixin(value, noDecimal) {
      if ((value > 0 || value < 0)) {
        if (value !== '' || value !== undefined || value !== 0 || value !== '0' || value !== null) {
          return Number(value).toFixed(noDecimal).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
      } else if ((value == "" || value == " ")) {
        return Number("0").toFixed(noDecimal);
      } else {
        return value;
      }
    },
    DateFormatUTCToLocalFltMixin(value, format) {
      if (value == null || value == '' || value == undefined) {
        return "";
      }
      value = moment.utc(value).local().format(format)
      return value;
    },
    DateFormatInputFltMixin(value, format) {
      if (value == null || value == '' || value == undefined) {
        return "";
      }
      value = moment(value).format(format);
      return value;
    },
    highlight(words, query) {
      
      if (!words.includes("img")) {
        if (query == '') {
          return false;
        }

        var iQuery = new RegExp(query, "ig");
        return words.toString().replace(iQuery, function (matchedTxt, a, b) {
          return ('<span style=\'background-color: yellow;\' class=\'highlight\'>' + matchedTxt + '</span>');
        });
      }
      else {
        return words;
      }
    },

  }
})
