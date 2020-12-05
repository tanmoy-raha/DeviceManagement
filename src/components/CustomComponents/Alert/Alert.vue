 <template>

   <section v-show="childData.alertMessages.lenght>0" v-model="childData" class="alertSection">
     <div v-bind="$props">
       <v-alert class="s-text-size--xm" v-for="item in childData.alertMessages" :key="item" dense outlined
         :type="childData.validatonType" icon="icon-r-error-warning-line">
         {{ item }}
       </v-alert>
     </div>
   </section>

 </template>
 <script>
   export default {
     props: {
       id: {
         type: String
       },
       value: {
         type: Object,
       },
     },
     computed: {
       childData: {
         get() {
           return this.value;
         },
         set(validatonMsg) {
           this.$emit("input", validatonMsg)
         }
       }
     },
   };

 </script>

 <style lang="scss">
   .alertSection {
     .error--text,
     .warning--text {
       border-color: #EE6352;
       color: #EE6352;
       font-size: 13px;
     }

     .success--text {
       border-color: #00C98D;
       color: #00C98D;
       font-size: 13px;
     }

     .info--text {
       border-color: #36BCDD;
       color: #36BCDD;
       font-size: 13px;
     }

     .v-alert__icon {
       margin-right: 9px;
       min-width: 0px;
     }
   }

 </style>
