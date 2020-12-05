<template>
<div>
    <v-form v-model="validForm" ref="addForm">
       
        <v-row>
            <v-col class="s-col-6 s-padding-bottom--none">
                <dm-textBox label="Device IMEI" v-model="DeviceDetails.DeviceIMEI" :maxlength="20" :rules="requiredRules" :hideDetails="false"></dm-textBox>
            </v-col>
             <v-col class="s-col-6 s-padding-bottom--none">
                <dm-textBox label="Model" v-model="DeviceDetails.Model" :maxlength="50" :rules="requiredRules" :hideDetails="false"></dm-textBox>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="s-col-6 s-padding-top--none">
                <dm-textBox label="SIM Card Number" v-model="DeviceDetails.SIMCardNumber" :maxlength="20" :rules="requiredRules" :hideDetails="false"></dm-textBox>
            </v-col>
             <v-col class="s-col-6">
                 <dm-radiobutton
                  :dataSource="types"
                  v-model="DeviceDetails.Enabled"                  
                  :rules="requiredRules"
                  row
                />
            </v-col>
        </v-row>
         

    </v-form>
</div>
</template>

<script>
"use strict";
export default {
    name: "Device",
    // props: {
    //     ID: {
    //         type: [String],
    //         default: ""
    //     },
    //     Details:{
    //         type: [Array],
    //         default: null
    //     }
    // },
    data() {
        return {
            showValidation: false,
            validForm: false,
            requiredRules: [value => !!value.trim() || "Required"],

            DeviceDetails : [{
                ID: "",
                DeviceIMEI: "",
                Model: "",
                SIMCardNumber: "",
                CreatedBy: "",
                Enabled: false

            }],
            types:[
                
                {
                    text: "Enabled",
                    value: 1
                },
                {
                    text: "Disabled",
                    value: 0
                }
                
            ],

            
        };
    },    
    // created:function(){
    //         this.BankDetails.DDFileType = "SEPA";
    // },
    mounted: function () {
      //this.GetBankList();
         
    },     
    methods: {

        
        clearForm() {
            this.showValidation = false;

            this.bankName = "";
            this.bankBIC = ""
            this.bankIBAN = ""
            this.bankSortCode = ""
            this.bankAccountNumber = ""
            this.$refs.bankForm.resetValidation()
        },
        handlerSaveCallback() {
            this.$emit("callbackSaveBank");
        },
        
        
        GetBankList() {
            debugger;
            let vm = this;     
            vm.BankID = vm.BankDetails.ID;
            vm.bankName = vm.BankDetails.BankName;
            vm.bankBIC = vm.BankDetails.BIC;
            vm.bankIBAN = vm.BankDetails.IBAN;

            
        },

        
    }
};
</script>
