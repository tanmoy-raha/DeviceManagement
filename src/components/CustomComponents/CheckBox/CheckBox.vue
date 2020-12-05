<template>
  <v-checkbox :label="label"   v-bind="$props" v-model="checked" :hide-details="hideDetails"></v-checkbox>
</template>
<script>
  export default {
    data() {
      return {
        //checked: this.value
      }
    },
    props: {
      id: {
        type: String
      },
      label: {
        type: String,
        default: "Checkbox"
      },
      value: {
        type: Boolean,
        default: false
      },
      color: {
        type: String,
        default: "primary"
      },
      disabled: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
      error: {
        type: Boolean,
        default: false
      },
      'error-messages': {
        type: String,
        default: ''
      },
      indeterminate:{
        type: Boolean,
        default: false
      },
      hideDetails: {
      type: Boolean,
      default: true
    },
    },
    watch: {
      /*
      checked(val) {
        if (typeof val === 'undefined' || val === null) {
          val = false;
        }
        this.$emit('input', val);
      }
      */
    },
    computed:{
      checked: {
                get() { return this.value; },
                // We let the parent know if it is checked or not, by sending the ID
                set(val) {  
                  if (typeof val === 'undefined' || val === null) {
                  val = false;
                } this.$emit("input", val) }
            }
    }
  }

</script>





//********************************************************************************************************************************************************************
//*      name                       type                 default           description
//*********************************************************************************************************************************************************************
//*1.     id                        string                              Sets the DOM id on the component
//*2.     label                     string                              Sets input label
//*3.     color                     string                              Applies specified color to the control - it can be the name of material color (for example success or purple) or css color (#033 or rgba(255, 0, 0, 0.5)). You can find list of built in classes on the colors page.
//*4.     disabled                  boolean             false           Disable the input
//*5.     readonly                  boolean             false           Puts input in readonly state
//*6.     error                     boolean             false           Puts the input in a manual error state  
//*7.     error-messages            string                              Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the rules prop. This field will not trigger validation