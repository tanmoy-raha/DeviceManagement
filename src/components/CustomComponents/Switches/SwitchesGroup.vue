<template>
  <div>
    <v-switch v-for="item in options" :key="item.value" v-model="modelData" :label="item.text" :value="item.value" v-bind="$props"></v-switch>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        options: this.dataSource,
        selected: []
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
        type: Array,
        default: []
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
      flat:{
             type: Boolean,
        default: false
        },
         
    },
    methods:{
        selectAllItems: function () {
          this.selected = []
        if (this.allSelected) {
            for (let item in this.options) {
            this.selected.push(this.dataSource[item].value.toString());
           }
           this.childData = this.selected
          return this.value; 
        }
        else{ 
          this.childData=[];
        }
      },
      onItemClick : function () {
       this.allSelected = false

      }
    },
    computed: {
      modelData: {
        get() {
          if(this.value.length == this.options.length){
              this.allSelected = true
          }
          return this.value;
        },
        set(selectedId) {
          this.$emit("input", selectedId)
        }
      }
    },
     watch: {
      
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
//*8.     flat                      boolean             false           Switch render without elevation of thumb using flat.