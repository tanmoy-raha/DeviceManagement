<template>
<v-text-field v-model="inputVal" v-bind="$props" @keydown="keydown" @blur="blur" @input="onInputHandler" @focus="focus" @keypress="keypress" @change="change" @click:clear="clear" @click:append="clickicon" @click:append-outer="clickicon" @click:prepend="clickicon" @click:prepend-inner="clickicon" :autocomplete="isGoogleChrome()? 'disabled' : 'off'">
    <template slot="append">
        <i role="button" @click="clickicon" class="v-icon icon-r-search-line v-icon--link"></i>
    </template>
</v-text-field>
</template>

<script>
export default {
    name: 'Vuetextbox',
    props: {
        /**
         * id.
         */
        id: {
            type: String,
            default: '',
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
         * v-model value.
         */
        value: {
            type: [String],
            default: '',
            required: true
        },
        /**
         * Add input clear functionality, default icon is Material Icons clear
         */
        clearable: {
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
            default: '',
            required: false
        },
        /**
         * Maximum number of characters
         */
        maxlength: {
            type: Number,
            default: undefined,
            required: false
        },
        /**
         * Value when the input is empty
         */
        emptyValue: {
            type: [Number, String],
            default: '',
            required: false
        },
        /**
         * Creates counter for input length; if no number is specified, it defaults to 25. Does not apply any validation.
         */
        counter: {
            type: Boolean,
            default: undefined,
            required: false
        },
        /**
         * Sets input type
         */
        type: {
            type: String,
            default: 'text',
            required: false
        },
        'single-line': {
            type: Boolean,
            default: false,
        },
        'hide-details':{
            type: Boolean,
            default: true,
        }
        //append-icon,append-outer-icon,prepend-icon and prepend-inner-icon is not required here, by default search icon is already provided for this control.
    },
    computed: {

        inputVal: {
            get() {
                if (this.maxlength && this.maxlength > 0) {
                    if (this.value != null) {
                        return this.value.substring(0, this.maxlength);
                    } else {
                        return this.value;
                    }
                } else {
                    return ""
                }
            },
            // We let the parent know if it is checked or not, by sending the ID
            set(val) {
                 if (val != null) {
                this.$emit("input", val)
                 }
                 else{
                      this.$emit("input", "")
                 }
            }
        }
    },
    methods: {
        /**
         * Handle click on icon.
         */
        clickicon(e) {

            this.$emit('clickicon', e)
        },
        /**
         * Handle input event.
         */
        onInputHandler() {

            // this.process(this.amountNumber)
        },
        /**
         * Handle keydown event.
         */
        keydown(e) {

            this.$emit('keydown', e)
        },

        /**
         * Blur event
         */

        blur(e) {
            this.$emit('blur', e)
        },

        /**
         * Keypress event
         */
        keypress(e) {
            this.$emit('keypress', e)
        },

        /**
         * change event
         */
        change(e) {
            this.$emit('change', e)
        },

        /**
         * click:clear event
         */
        clear(e) {
            this.inputVal = "";
            this.$emit('clear', e)
        },
        /**
         * focus event
         */
        focus(e) {
            this.$emit('focus', e)
        },
         isGoogleChrome(){
            var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
            return isChrome;
        }

    },

}
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
