<template>
  <v-text-field
    :id="id"
    :value="value"
    :disabled="disabled"
    :readonly="readonly"
    :label="label"
    :placeholder="placeholder"
    :clearable="clearable"
    @blur="onBlurHandler"
    @input="onInputHandler"
    @focus="onFocusHandler"
    @keypress="onkeypress"
    @change="change"
    ref="numeric"
    v-model="amount"
    v-if="!readOnly"
    @click:append="clickicon"
    @click:append-outer="clickicon"
    @click:prepend="clickicon"
    @click:prepend-inner="clickicon"
    @keydown="keydown"
    
    autocomplete="off"
    @keyup="keyup"
    :hide-details="hideDetails"
    :error-messages="errorMessages"
    :rules="rules"
  >
  </v-text-field>
</template>

<script>
import accounting from "accounting-js";

export default {
  name: "VueNumeric",

  props: {
    /**
     * id.
     */
    id: {
      type: String,
      default: "",
      required: false
    },

    /**
     * Add input clear functionality, default icon is Material Icons clear.
     */
    clearable: {
      type: Boolean,
      default: false,
      required: false
    },
    /**
     * Disable the input.
     */
    disabled: {
      type: Boolean,
      default: false,
      required: false
    },

    /**
     * Puts input in readonly state
     */
    readonly: {
      type: Boolean,
      default: false,
      required: false
    },
    /**
     * Currency symbol.
     */
    currency: {
      type: String,
      default: "",
      required: false
    },

    /**
     * Maximum value allowed.
     */
    max: {
      type: Number,
      default: 2147483647, //Number.MAX_SAFE_INTEGER || 9007199254740991,
      required: false
    },

    /**
     * Minimum value allowed.
     */
    min: {
      type: Number,
      default: -2147483648, //Number.MIN_SAFE_INTEGER || -9007199254740991,
      required: false
    },

    /**
     * Enable/Disable minus value.
     */
    minus: {
      type: Boolean,
      default: false,
      required: false
    },

    /**
     * Sets the input’s placeholder text
     */
    placeholder: {
      type: String,
      default: "",
      required: false
    },

    /**
     *  Sets input label
     */
    label: {
      type: String,
      default: undefined,
      required: false
    },

    /**
     * Value when the input is empty
     */
    emptyValue: {
      type: [Number, String],
      default: "",
      required: false
    },

    /**
     * Number of decimals.
     * Decimals symbol are the opposite of separator symbol.
     */
    precision: {
      type: Number,
      default: 0,
      required: false
    },

    /**
     * Thousand showSeparator type.
     * Separator props accept either true or false (default).
     */
    showSeparator: {
      type: Boolean,
      default: false,
      required: false
    },

    /**
     * Thousand separator type.
     * Separator props accept either . or , (default).
     */
    separator: {
      type: String,
      default: ",",
      required: false
    },

    /**
     * Forced thousand separator.
     * Accepts any string.
     */
    thousandSeparator: {
      default: undefined,
      required: false,
      type: String
    },

    /**
     * Forced decimal separator.
     * Accepts any string.
     */
    decimalSeparator: {
      default: undefined,
      required: false,
      type: String
    },

    /**
     * The output type used for v-model.
     * It can either be String or Number (default).
     */
    outputType: {
      required: false,
      type: String,
      default: "Number"
    },

    /**
     * v-model value.
     */
    value: {
      type: [Number, String],
      default: "",
      required: true
    },

    /**
     * Hide input and show value in text only.
     */
    readOnly: {
      type: Boolean,
      default: false,
      required: false
    },

    /**
     * Class for the span tag when readOnly props is true.
     */
    readOnlyClass: {
      type: String,
      default: "",
      required: false
    },

    /**
     * Position of currency symbol
     * Symbol position props accept either 'suffix' or 'prefix' (default).
     */
    currencySymbolPosition: {
      type: String,
      default: "prefix",
      required: false
    },
    /**
     *Appends an icon to the component, uses the same syntax as v-icon
     */
    "append-icon": {
      type: String,
      default: undefined,
      required: false
    },
    /**
     *Appends an icon to the outside the component's input, uses same syntax as v-icon
     */
    "append-outer-icon": {
      type: String,
      default: undefined,
      required: false
    },
    /**
     *Prepends an icon to the component, uses the same syntax as v-icon
     */
    "prepend-icon": {
      type: String,
      default: undefined,
      required: false
    },
    /**
     *Prepends an icon inside the component's input, uses the same syntax as v-icon
     */
    "prepend-inner-icon": {
      type: String,
      default: undefined,
      required: false
    },
    hideDetails: {
      type: Boolean,
      default: true
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
  },

  data: () => ({
    amount: "",
    styles: {
      "text-align": "right"
    }
  }),

  computed: {
    /**
     * Number type of formatted value.
     * @return {Number}
     */
    amountNumber() {
      return this.unformat(this.amount);
    },

    /**
     * Number type of value props.
     * @return {Number}
     */
    valueNumber() {
      return this.unformat(this.value);
    },

    /**
     * Define decimal separator based on separator props.
     * @return {String} '.' or ','
     */
    decimalSeparatorSymbol() {
      if (typeof this.decimalSeparator !== "undefined")
        return this.decimalSeparator;
      if (this.separator === ",") return ".";
      return ",";
    },

    /**
     * Define thousand separator based on separator props.
     * @return {String} '.' or ','
     */
    thousandSeparatorSymbol() {
      if (this.showSeparator == false) return "";
      if (typeof this.thousandSeparator !== "undefined")
        return this.thousandSeparator;
      if (this.separator === ".") return ".";
      if (this.separator === "space") return " ";
      return ",";
    },

    /**
     * Define format position for currency symbol and value.
     * @return {String} format
     */
    symbolPosition() {
      if (!this.currency) return "%v";
      return this.currencySymbolPosition === "suffix" ? "%v %s" : "%s %v";
    }
  },

  watch: {
    /**
     * Watch for value change from other input with same v-model.
     * @param {Number} newValue
     */
    valueNumber(newValue) {
      if (this.$refs.numeric !== document.activeElement) {
        this.amount = this.format(newValue);
      }
    },

    /**
     * When readOnly is true, replace the span tag class.
     * @param {Boolean} newValue
     * @param {Boolean} oldValue
     */
    readOnly(newValue, oldValue) {
      if (oldValue === false && newValue === true) {
        this.$nextTick(() => {
          this.$refs.readOnly.className = this.readOnlyClass;
        });
      }
    },

    /**
     * Immediately reflect separator changes
     */
    separator() {
      this.process(this.valueNumber);
      this.amount = this.format(this.valueNumber);
    },

    /**
     * Immediately reflect currency changes
     */
    currency() {
      this.process(this.valueNumber);
      this.amount = this.format(this.valueNumber);
    },

    /**
     * Immediately reflect precision changes
     */
    precision() {
      this.process(this.valueNumber);
      this.amount = this.format(this.valueNumber);
    }
  },

  mounted() {
    // Set default value props when placeholder undefined.
    if (!this.placeholder) {
      this.process(this.valueNumber);
      this.amount = this.format(this.valueNumber);

      // In case of delayed props value.
      setTimeout(() => {
        this.process(this.valueNumber);
        this.amount = this.format(this.valueNumber);
      }, 500);
    }

    // Set read-only span element's class
    if (this.readOnly) this.$refs.readOnly.className = this.readOnlyClass;
  },

  methods: {
    /**
     * Handle click on icon.
     */
    clickicon(e) {
      this.$emit("clickicon", e);
    },
    /**
     * Handle keydown event.
     */
    keydown(e) {
      this.$emit("keydown", e);
    },
    keyup(e) {
      this.$emit("keyup", e);
    },
    /**
     * Handle blur event.
     * @param {Object} e
     */
    onBlurHandler(e) {
      // this.$emit('blur', e)
      this.process(this.amountNumber);
      this.amount = this.format(this.valueNumber);
      this.$emit("blur", e);
    },

    /**
     * Handle focus event.
     * @param {Object} e
     */
    onFocusHandler(e) {
      // this.$emit('focus', e)
      if (this.valueNumber === 0) {
        this.amount = null;
      } else {
        this.amount = accounting.formatMoney(this.valueNumber, {
          symbol: "",
          format: "%v",
          thousand: "",
          decimal: this.decimalSeparatorSymbol,
          precision: Number(this.precision)
        });
      }

      this.$emit("focus", e);
      e.target.select();
    },

    /**
     * Handle input event.
     */
    onInputHandler() {
      // this.process(this.amountNumber)
    },
    /**
     * change event
     */
    change(e) {
      this.$emit("change", e);
    },

    /**
     * Handle input event.
     */
    onkeypress($event) {
      let keyCode = $event.keyCode ? $event.keyCode : $event.which;
      if (keyCode > 31 && (keyCode < 48 || keyCode > 57)) {
        if (keyCode == 45 || keyCode == 46) {
        } else {
          $event.preventDefault();
        }
      }

      if (keyCode == 45) {
        if (this.minus == false) {
          $event.preventDefault();
        } else {
          if ($event.target.selectionStart > 0) {
            $event.preventDefault();
          }
          if (this.amount.indexOf("-") > 0) {
            $event.preventDefault();
          }
        }
      }

      if (this.precision == 0 && keyCode == 46) {
        $event.preventDefault();
      }
      if (
        this.amount != null &&
        this.amount.indexOf(".") >= 0 &&
        keyCode == 46 &&
        this.precision > 0
      ) {
        $event.preventDefault();
      }

      if (
        this.amount != null &&
        this.amount.indexOf(".") >= 0 &&
        this.precision > 0
      ) {
        if (
          parseInt(this.amount.indexOf(".")) + parseInt(this.precision) <
          parseInt($event.target.selectionStart)
        ) {
          $event.preventDefault();
        }
        if (
          this.amount.length - (parseInt(this.amount.indexOf(".")) + 1) >=
            parseInt(this.precision) &&
          parseInt($event.target.selectionStart) >
            parseInt(this.amount.indexOf("."))
        ) {
          $event.preventDefault();
        }
        //  if( this.amount.split(".")[1].length >= precision)
        //     $event.preventDefault();
      }
      this.$emit("keypress", $event);
    },

    /**
     * Validate value before update the component.
     * @param {Number} value
     */
    process(value) {
      if (value >= this.max) this.update(this.max);
      if (value <= this.min) this.update(this.min);
      if (value > this.min && value < this.max) this.update(value);
      if (!this.minus && value < 0)
        this.min >= 0 ? this.update(this.min) : this.update(0);
    },

    /**
     * Update parent component model value.
     * @param {Number} value
     */
    update(value) {
      const fixedValue = accounting.toFixed(value, this.precision);
      const output =
        this.outputType.toLowerCase() === "string"
          ? fixedValue
          : Number(fixedValue);
      this.$emit("input", output);
    },

    /**
     * Format value using symbol and separator.
     * @param {Number} value
     * @return {String}
     */
    format(value) {
      return accounting.formatMoney(value, {
        symbol: this.currency,
        format: this.symbolPosition,
        precision: Number(this.precision),
        decimal: this.decimalSeparatorSymbol,
        thousand: this.thousandSeparatorSymbol
      });
    },

    /**
     * Remove symbol and separator.
     * @param {Number} value
     * @return {Number}
     */
    unformat(value) {
      const toUnformat =
        typeof value === "string" && value === "" ? this.emptyValue : value;
      return accounting.unformat(toUnformat, this.decimalSeparatorSymbol);
    }
  }
};
</script>
//****************************************************************************************************************************************************************************************
//*      name                       type                            default                   description
//****************************************************************************************************************************************************************************************
//*     append-icon                 string                          undefined                 Appends an icon to the component, uses the same syntax as v-icon
//*     append-outer-icon           string                          undefined                 Appends an icon to the outside the component's input, uses same syntax as v-icon
//*     autofocus                   boolean                         false                     Enables autofocus
//*     background-color            string                          undefined                 Changes the background-color of the input
//*     clear-icon                  string                          '$vuetify.icons.clear'     Applied when using clearable and the input is dirty
//*     clearable                   boolean                         false                     Add input clear functionality, default icon is Material Icons clear
//*     color                       string                          undefined                 Applies specified color to the control - it can be the name of material color (for example success or purple) or css color (#033 or rgba(255, 0, 0, 0.5)). You can find list of built in classes on the colors page.
//*     counter                     boolean | number | string       undefined                 Creates counter for input length; if no number is specified, it defaults to 25. Does not apply any validation.
//*     dark                        boolean                         false                     Applies the dark theme variant to the component. This will default the components color to white unless you've configured your application theme to dark or if you are using the color prop on the component. You can find more information on the Material Design documentation for dark themes.
//*     disabled                    boolean                         false                     Disable the input
//*     error                       boolean                         false                     Puts the input in a manual error state
//*     error-count                 number | string                 1                         The total number of errors that should display at once
//*     error-messages              string | array                  []                        Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the rules prop. This field will not trigger validation
//*     filled                      boolean                         false                     Applies the alternate filled input style
//*     flat                        boolean                         false                     Removes elevation (shadow) added to element when using the solo or solo-inverted props
//*     full-width                  boolean                         false                     Designates input type as full-width
//*     height                      number | string                 undefined                 Sets the height of the input
//*     hide-details                boolean                         false                     Hides hint, validation errors
//*     hint                        string                          undefined                 Hint text
//*     id                          string                          undefined                 Sets the DOM id on the component
//*     label                       string                          undefined                 Sets input label
//*     light                       boolean                         false                     Applies the light theme variant to the component.
//*     loader-height               number | string                 2                         Specifies the height of the loader
//*     loading                     boolean | string                false                     Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - primary, secondary, success, info, warning, error) or a Boolean which uses the component color (set by color prop - if it's supported by the component) or the primary color
//*     messages                    string | array                  []                        Displays a list of messages or message if using a string
//*     outlined                    boolean                         false                     Applies the outline style to the input
//*     persistent-hint             boolean                         false                     Forces hint to always be visible
//*     placeholder                 string                          undefined                 Sets the input’s placeholder text
//*     prefix                      string                          undefined                 Displays prefix text
//*     prepend-icon                string                          undefined                 Prepends an icon to the component, uses the same syntax as v-icon
//*     prepend-inner-icon          string                          undefined                 Prepends an icon inside the component's input, uses the same syntax as v-icon
//*     readonly                    boolean                         false                     Puts input in readonly state
//*     reverse                     boolean                         false                     Reverses the input orientation
//*     rounded                     boolean                         false                     Adds a border radius to the input
//*     rules                       array                           []                        Accepts an array of functions that take an input value as an argument and return either true / false or a string with an error message
//*     shaped                      boolean                         false                     Round if outlined and increase border-radius if filled. Must be used with either outlined or filled
//*     single-line                 boolean                         false                     Label does not move on focus/dirty
//*     solo                        boolean                         false                     Changes the style of the input
//*     solo-inverted               boolean                         false                     Reduces element opacity until focused
//*     success                     boolean                         false                     Puts the input in a manual success state
//*     success-messages            string | array                  []                        Puts the input in a success state and passes through custom success messages.
//*     suffix                      string                          undefined                 Displays suffix text
//*     type                        string                          'text'                    Sets input type
//*     validate-on-blur            boolean                         false                     Delays validation until blur event
//*     value                       any                             undefined                 Input value
//********************************************************************************************************************************************************************************************************************************



