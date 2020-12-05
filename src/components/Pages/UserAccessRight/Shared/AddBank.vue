<template>
<div>
    <v-form v-model="validForm" ref="bankForm">
        <v-row>
            
            <v-col class="s-col-12 s-padding-bottom--none">
              
                 <surf-radiobutton
                  :dataSource="fileTypes"
                  v-model="BankDetails.DDFileType"
                  @change="changeLabel"
                  
                  row
                />

                
            </v-col>
        </v-row>
        <v-row>
            <v-col class="s-col-12 s-padding-bottom--none">
                <surf-textBox label="Bank Name" v-model="BankDetails.BankName" :maxlength="100" :rules="requiredRules" :hideDetails="false"></surf-textBox>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="s-col-6 s-padding-top--none">
                <surf-textBox :label="BICLabelText" v-model="BankDetails.BIC" :maxlength="20"></surf-textBox>
            </v-col>
            <v-col class="s-col-6 s-padding-top--none">
                <surf-textBox :label="IBANLableText" v-model="BankDetails.IBAN" :maxlength="40"></surf-textBox>
            </v-col>
        </v-row>
       <!--  <v-row>
            <v-col class="s-col-6">
                <surf-textBox label="Sort Code" v-model="bankSortCode" :maxlength="40"></surf-textBox>
            </v-col>
            <v-col class="s-col-6">
                <surf-textBox label="Account Number" v-model="bankAccountNumber" :maxlength="40"></surf-textBox>
            </v-col>
        </v-row> -->

    </v-form>
</div>
</template>

<script>
"use strict";
export default {
    name: "Bank",
    props: {
        BankID: {
            type: [String],
            default: ""
        },
        BankDetails:{
            type: [Array],
            default: null
        }
    },
    data() {
        return {
            showValidation: false,
            validForm: false,

            bankName: "",
            bankBIC: "",
            bankIBAN: "",
            bankSortCode: "",
            bankAccountNumber: "",
            requiredRules: [value => !!value.trim() || "Required"],


            BankDetail : [{
                ID: "",
                BankName: "",
                BIC: "",
                IBAN: "",
                SortCode: "",
                AccountNumber: ""

            }],

            fileTypes: [
                {
                text: "SEPA",
                value: "SEPA"
                },
                {
                text: "BACS",
                value: "BACS"
                }
            ],
            
            BICLabelText:"BIC",
            IBANLableText: "IBAN",
            ///////////////////////////

            //////////////////////////
        };
    },    
    // created:function(){
    //         this.BankDetails.DDFileType = "SEPA";
    // },
    mounted: function () {
      //this.GetBankList();
         
    },     
    methods: {

        doSaveBank() {

            debugger;
            let a = this.$refs.bankForm.validate();
            if (a == false) {
                this.hideLoaderMixin();
                return false;
            }

            this.showLoaderMixin();
            var jsonParam = {
                BankID: this.BankID,
                BankName: this.BankDetails.BankName,
                IBAN: this.BankDetails.IBAN,
                BIC: this.BankDetails.BIC,
                SortCode: this.BankDetails.SortCode,
                AccountNumber: this.BankDetails.AccountNumber,
                DDFileType : this.BankDetails.DDFileType
                

            };

            let vm = this;
            this.axiosPostMixin(
                    "/api/Settings/SaveBank",
                    jsonParam
                )
                .then(function (response) {
                    debugger;
                    let strContactID = "";
                    let jData = vm.removeNULLMixin(response.jsondata);
                    jData = JSON.parse(jData);
                    debugger;
                    if (jData[0].Result === 1) {

                        vm.clearForm();
                        vm.$refs.bankForm.resetValidation();
                         vm.handlerSaveCallback();
                        
                    } else {

                    }

                    vm.hideLoaderMixin();
                })
                .catch(function (error) {
                    vm.hideLoaderMixin();
                });

        },

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

        changeLabel(){
            debugger;

            if(this.BankDetails.DDFileType == "BACS"){
                this.BICLabelText = "SWIFT";
                this.IBANLableText = "ACCOUNT NUMBER";
            }
            else
            {
                this.BICLabelText = "BIC";
                this.IBANLableText = "IBAN";
            }
        }
    }
};
</script>
