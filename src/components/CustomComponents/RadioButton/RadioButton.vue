<template>
<div>
  <v-radio-group  v-model="modelData" @change="change" column :row="row" class="radioClass"> 
     <v-radio :label="item.text" :value="item.value" v-for="item in options" :key="item.value"  v-bind="$props"   ></v-radio>
  </v-radio-group>
</div>
</template>

<style lang="scss">
  .radioClass{
    .v-radio:first-child, .v-radio:last-child{
      padding-right: 15pt;
    }
  }
</style>

<script>
export default {
    data() {
      return {
        options: this.dataSource,
        radios: '',
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
      dataSource: {
            type: Array,
        },
          value: {
        type: String,
      },
      row: {
        type: Boolean,
        default: false
      },
    },
    methods: {
      change(){
        this.$emit("change");
      }
    },
    computed: {
      modelData: {
        get() {
          return this.value;
        },
        set(radios) {
          this.$emit("input", radios)
        }
      }
    },
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