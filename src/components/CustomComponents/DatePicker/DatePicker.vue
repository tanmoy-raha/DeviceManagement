<template>
  <div>
    <v-menu
      v-model="display"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      :max-width="width + 'Px'"
      :min-width="width + 'Px'"
      :disabled="disabled"
      v-bind="$props"
      :id="id + '_menu'"
    >
      <template v-slot:activator="{ on }">
        <v-text-field
          :id="id"
          ref="refComponentfDateTime"
          v-model="modeldate"
          :rules="rules"
          :error-messages="errorMessages"
          :label="label"
          persistent-hint
          :prepend-icon="prependicon"
          :append-icon="appendicon"
          :readonly="disabled"
          v-on="on"
          maxlength="10"
          @keypress="onkeypress"
          @keyup="onkeyup"
          @blur="datePickerBlur"
          @click="dateclick"
          @click:append="prependclick"
          @focus="$event.target.select()"
          @change="dateTimeTextChange"
          :autocomplete="isGoogleChrome() ? 'disabled' : 'off'"
          :disabled="disabled"
          :hide-details="hideDetails"
        >
        </v-text-field>
      </template>
      <!-- <v-date-picker v-model="date" no-title @input="selecteDate" :color="color"></v-date-picker> -->
      <v-date-picker
        v-model="date"
        :id="id + '_picker'"
        :picker-date.sync="pickerDate"
        no-title
        @input="selecteDate"
        :color="color"
        :width="width"
        :min="minDate"
        :max="maxDate"
        @change="change"
      ></v-date-picker>
    </v-menu>
  </div>
</template>

<script>
import moment from "moment";
const defaultDateFormat = "DD/MM/YYYY";
const parseDateFormat = "YYYY-MM-DD";
const parseDateFormatMMDDYYYY = "MM/DD/YYYY";
let isKeyPress = false;
export default {
  data() {
    return {
      date: moment(new Date()).format(parseDateFormat),
      dateFormatted: this.value,
      display: false
    };
  },
  props: {
    id: {
      type: String
    },
    value: {
      type: String,
      default: moment(new Date()).format(defaultDateFormat)
    },
    label: {
      type: String,
      default: ""
    },
    width: {
      type: Number,
      default: 290
    },
    dateFormat: {
      type: String,
      default: defaultDateFormat
    },
    disabled: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: "primary"
    },
    prependicon: {
      type: String,
      default:
        "v-icon notranslate v-icon--link icon icon-r-calendar-line theme--light"
    },
    appendicon: {
      type: String,
      default:
        "v-icon notranslate v-icon--link icon icon-r-calendar-line theme--light"
    },
    minDate: {
      type: String,
      default: ""
    },
    maxDate: {
      type: String,
      default: ""
    },
    pickerDate: {
      required: false,
      type: String,
      default: moment(new Date()).format("YYYY-MM")
    },
    /**
     * rules
     */
    rules: {
      type: [String, Array, Object],
      default: () => [],
      required: false
    },
    /**
     * error-messages
     */
    errorMessages: {
      type: String,
      default: "",
      required: false
    },
    hideDetails: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    modeldate: {
      get() {
        return this.value;
      },
      set(setDate) {
        this.$emit("input", setDate);
      }
    },
    computedDateFormatted() {
      return this.formatDate(this.date);
    }
  },
  watch: {
    date(val) {
      if (!this.isKeyPress) {
        this.modeldate = this.formatDate(this.date);
      } else {
        this.isKeyPress = false;
      }
    }
  },
  mounted() {
    if (this.value != "") {
      this.date = moment(this.value, this.dateFormat).format(parseDateFormat);
    }
  },
  methods: {
    isGoogleChrome() {
      var isChrome =
        /Chrome/.test(navigator.userAgent) &&
        /Google Inc/.test(navigator.vendor);
      return isChrome;
    },
    formatDate(date) {
      if (!date) return null;
      return moment(date).format(this.dateFormat);
    },
    parseDate: function(date) {
      if (!date) return null;
      return moment(date).format(parseDateFormat);
    },
    selecteDate() {
      this.$refs.refComponentfDateTime.focus();
      this.display = false;
      this.modeldate = this.formatDate(this.date);
    },
    datePickerBlur: function(e) {
      //  this.$emit('blur', e);
      let strDate = this.modeldate;
      if (strDate != "") {
        strDate = this.parseDate(moment(strDate, this.dateFormat));
        strDate = moment(strDate);
        if (!strDate.isValid()) {
          this.modeldate = "";
        } else {
          this.date = moment(strDate).format(parseDateFormat);
          this.modeldate = moment(strDate).format(this.dateFormat);
        }
      }
      this.isKeyPress = false;
      this.$emit("blur", e);
    },
    onkeypress($event) {
      let keyCode = $event.keyCode ? $event.keyCode : $event.which;
      if (keyCode == 47) {
      } else if (keyCode > 31 && (keyCode < 48 || keyCode > 57)) {
        $event.preventDefault();
      }
      this.$emit("keypress", $event);
    },
    onkeyup() {
      this.isKeyPress = true;
      this.display = false;
    },
    dateclick: function() {
      let strDate = this.$refs.refComponentfDateTime.value;
      if (strDate != "") {
        strDate = this.parseDate(moment(strDate, this.dateFormat));
        strDate = moment(strDate);
        if (strDate.isValid()) {
          this.date = moment(strDate).format(parseDateFormat);
        }
      } else {
        if (this.isKeyPress == true) {
          this.date = moment(new Date()).format(parseDateFormat);
        }
      }
      this.$emit("click");
    },
    change(dtVal) {
      this.$emit("change", dtVal);
    },
    dateTimeTextChange(dtVal) {
      this.$emit("dateTimeTextChange", dtVal);
    },

    
    prependclick(e) {
      e.target.parentElement.parentElement.parentElement
        .getElementsByTagName("input")[0]
        .click();
    }
  }
};
</script>
 