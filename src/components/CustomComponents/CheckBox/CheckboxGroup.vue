<template>
  <div>
    <div v-if="selectall">
      <v-checkbox :label="selectalllabel" v-model="allSelected" @change="selectAllItems" ></v-checkbox>
      <div v-for="item in options">
        <v-checkbox v-model="childData" :label="item.text" :value="item.value" @change="onItemClick($event)"></v-checkbox>
      </div>
    </div>
    <div v-else>
      <div v-for="item in options">
        <v-checkbox v-model="childData" :label="item.text" :value="item.value"></v-checkbox>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        options: this.dataSource,
         allSelected: false,
          selected: []
      }
    },
    // model: {
    //    props: ['value']
    // },
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
      selectall: {
        type: Boolean,
        default: false
      },
      selectalllabel: {
        type: String,
        default: 'Select All'
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
      childData: {
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