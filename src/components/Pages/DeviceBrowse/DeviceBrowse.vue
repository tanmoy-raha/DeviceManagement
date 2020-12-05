<template>
  <div>
    <div class="s-box s-padding--none s-shadow--s">
      <div class="s-flex s-padding--sm broHeader">
        <div class="s-expand">
          <div class="s-width--expand">
            <v-btn color="primary" @click="AddNewRecord">
              <span class="icon-r-add-line s-margin-right--xs"></span>Add
            </v-btn>
          </div>
        </div>
        <div
          class="s-flex-items--center s-items-spacing--s s-padding--none"
        ></div>
      </div>

      <div>
        <dm-grid
          :headers="gridheaders"
          :items="BindData"
          v-bind:sort-by="sortfield"
          v-bind:sort-desc="sortdesc"
          :menuitems="menuitems"
          @selectRow="selectRow"
          @menuitemClick="menuitemClick"
          @dataSorce="dataSorce"
          hide-default-footer
        >
          <template v-slot:CreatedBy="{ item }">
            <span class="">
              {{ item.CreatedBy }}
            </span>
          </template>

          <template v-slot:CreatedOn="{ item }">
            <span class="">
              {{ item.CreatedOn }}
            </span>
          </template>
        </dm-grid>
        <dm-popupdialog ref="deleteConfirmationPopup" :showTitle="false">
          <template>
            <v-container>
              <div class="s-padding--xl pb-0">
                <h3 class="s-margin-bottom s-text-align--center">
                  {{ delmsg }}
                </h3>
              </div>
            </v-container>
          </template>
        </dm-popupdialog>
        <dm-popupdialog
          ref="addPopup"
          :showTitle="true"
          @popupDialogEvent="addDialogEventHandler"
        >
          <template>
            <v-container>
              <div class="s-padding--s">
                <v-form v-model="validForm" ref="addForm">
                 <v-row>
                    <v-col class="s-col-6 s-padding-bottom--none">
                      <dm-textBox
                        label="Name"
                        v-model="DeviceDetails.Name"
                        :maxlength="20"
                        :rules="requiredRules"
                        :hideDetails="false"
                        
                      ></dm-textBox>
                    </v-col>
                    <v-col class="s-col-6 s-padding-bottom--none">
                      <dm-textBox
                        label="Address"
                        v-model="DeviceDetails.Address"
                        :maxlength="50"
                        :rules="requiredRules"
                        :hideDetails="false"
                      ></dm-textBox>
                    </v-col>
                  </v-row>   
                  <v-row>
                    <v-col class="s-col-6 s-padding-bottom--none">
                      <dm-textBox
                        label="Device IMEI"
                        v-model="DeviceDetails.DeviceIMEI"
                        :maxlength="20"
                        :rules="requiredRules"
                        :hideDetails="false"
                        :disabled="IsDisable"
                      ></dm-textBox>
                    </v-col>
                    <v-col class="s-col-6 s-padding-bottom--none">
                      <dm-textBox
                        label="Model"
                        v-model="DeviceDetails.Model"
                        :maxlength="50"
                        :rules="requiredRules"
                        :hideDetails="false"
                      ></dm-textBox>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col class="s-col-6 s-padding-top--none">
                      <dm-numerictextBox
                        label="SIM Card Number"
                        v-model="DeviceDetails.SIMCardNumber"
                        :maxlength="20"
                        :rules="requiredRules"
                        :hideDetails="false"
                        :showSeparator="false"                       
                      ></dm-numerictextBox>
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
            </v-container>
          </template>
        </dm-popupdialog>
      </div>
    </div>
  </div>
</template>
<script>
// import ShowStaffComponent from "./Shared/ShowStaffComponent";
import AddDevice from "./Shared/AddDevice";
export default {
  components: {
    AddDevice,
  },
  data() {
    return {
      ID: "",
      BindData: [],
      //menu related
      menuClickedItem: "",
      gridheaders: [],
      staffData: [],
      sortfield: "Description",
      sortdesc: false,
      pageno: 1,
      itemlength: -1,
      selectgridchecklist: [],
      showGrid: false,
      noData: "",
      menuitems: [],
      itemlength: 0,
      itemPerPage: 50,
      menuitems: [],
      delmsg: "",
      IsValid: false,
      showValidation: false,
      validForm: false,
      requiredRules: [(value) => !!value.trim() || "Required"],

      showValidationIMEI: false,
      showValidationModel: false,
      showValidationSIM: false,
      IsDisable:false,
      DeviceDetails: {
        DeviceIMEI: "",
        Model: "",
        SIMCardNumber: "",
        CreatedBy: "",
        Enabled: "",
        ID: "",
        Name:"",
        Address:"",
      },

      types: [
        {
          text: "Enabled",
          value: "Enabled",
        },
        {
          text: "Disabled",
          value: "Disabled",
        },
      ],
    };
  },
  methods: {
    AddNewRecord() {
        this.IsDisable = false;
      this.$refs.addPopup.open("Add Device", "", {
        width: 650,
        buttonList: [
          {
            name: "Cancel",
            class: "s-border--outline",
          },
          {
            name: "Save",
            class: "s-swatch-primary s-button",
          },
        ],
      });
    },
    addDialogEventHandler(res) {
      if (res.toLowerCase() == "save") {
        debugger;

        this.doSave();
      } else if (res.toLowerCase() == "cancel") {
        debugger;
        this.clearForm();

        this.$refs.addPopup.hide();
      } else {
        this.$refs.addPopup.hide();
      }
    },
    clearForm() {
      debugger;
      this.$refs.addForm.resetValidation();
      this.showValidation = false;

      this.DeviceDetails.DeviceIMEI = "";
      this.DeviceDetails.Model = "";
      this.DeviceDetails.SIMCardNumber = "";
      this.DeviceDetails.Enabled = "";
      this.DeviceDetails.CreatedBy = "";
      this.DeviceDetails.ID = "";
       this.DeviceDetails.Name = "";
        this.DeviceDetails.Address = "";
      this.IsValid = true;
    },
    doValidate() {
      debugger;
      this.IsValid = this.$refs.addForm.validate();
    },
    doSave() {
      debugger;
      this.doValidate();
      if (this.IsValid == true) {
        this.showLoaderMixin();
        var jsonParam = {
            CreatedBy: this.DeviceDetails.CreatedBy,
            DeviceIMEI: this.DeviceDetails.DeviceIMEI,
            Enabled: this.DeviceDetails.Enabled,
            Model: this.DeviceDetails.Model,
            SIMCardNumber: this.DeviceDetails.SIMCardNumber.toString(),
            ID:  this.DeviceDetails.ID,
            Name: this.DeviceDetails.Name,
            Address: this.DeviceDetails.Address,
        };

        let vm = this;
        this.axiosPostMixin("/api/DeviceManage/SaveDeviceDetails", jsonParam)
          .then(function (response) {
            debugger;

            vm.clearForm();
            vm.$refs.addPopup.hide();
            vm.hideLoaderMixin();
            //vm.BindData = response;
            vm.LoadData();

          })
          .catch(function (error) {
            vm.hideLoaderMixin();
          });
      }
    },
    EditDetails(item)
    {
        debugger;
        this.LoadDataByID(item.ID);

        this.IsDisable = true;
        this.$refs.addPopup.open("Add Device", "", {
        width: 650,
        buttonList: [
          {
            name: "Cancel",
            class: "s-border--outline",
          },
          {
            name: "Save",
            class: "s-swatch-primary s-button",
          },
        ],
      });
      
      

    },
    LoadData() {
      debugger;
      let vm = this;
      var JsonParam = {};
      vm.showLoaderMixin();
      debugger;
      vm.axiosGetMixin("/api/DeviceManage/GetAllDeviceDetails", "")
        .then(function (response) {
          debugger;
          if (response != null) {
            console.log("jsondata --->", response);
            // if(response.jsondata != null || response.jsondata != undefined)
            // {
            //let jResponse = JSON.parse(response);
            vm.BindData = response;

            // }
            // else
            // {
            //         vm.BindData=vm.DummyData;
            // }
          }

          console.log("BindData --->", vm.BindData);
          vm.hideLoaderMixin();
        })
        .catch(function (error) {
          debugger;
          // currentObj.output = error;
          vm.hideLoaderMixin();
        });
    },
    LoadDataByID(id) {
      debugger;
      let vm = this;
      var JsonParam = {
          ID: id
      };
      vm.showLoaderMixin();
      debugger;
      vm.axiosPostMixin("/api/DeviceManage/GetDeviceDetails", JsonParam)
        .then(function (response) {
          debugger;
          if (response != null) {
            console.log("jsondata --->", response);
            // if(response.jsondata != null || response.jsondata != undefined)
            // {
            //let jResponse = JSON.parse(response);
            vm.DeviceDetails.SIMCardNumber = response[0].SIMCardNumber;
            vm.DeviceDetails.Model = response[0].Model;
            vm.DeviceDetails.DeviceIMEI = response[0].DeviceIMEI;
            vm.DeviceDetails.ID = response[0].ID;
            vm.DeviceDetails.Enabled = (response[0].IsEnabled == true) ? "Enabled" : "Disabled";
            vm.DeviceDetails.Name = response[0].Name;
            vm.DeviceDetails.Address=response[0].Address;
            // }
            // else
            // {
            //         vm.BindData=vm.DummyData;
            // }
          }

          console.log("BindData --->", vm.BindData);
          vm.hideLoaderMixin();
        })
        .catch(function (error) {
          debugger;
          // currentObj.output = error;
          vm.hideLoaderMixin();
        });
    },
    selectRow(roweliment) {
         this.menuClickedItem = roweliment;
      this.menuitems = [];

      this.menuitems = [
        {
          title: "Edit",
          icon: "icon-r-edit-line",
        },
        {
          title: "Delete",
          icon: "icon-r-delete-bin-line",
        },
      ];
    },
    menuitemClick: function (selecteditem) {
      switch (selecteditem.title) {
        case "Edit":
          this.EditDetails(this.menuClickedItem);
          break;
        case "Delete":
          this.openDeleteConfurmation(this.menuClickedItem);
          break;
      }
    },

    //Delete section
    openDeleteConfurmation(item) {
      this.delmsg = "Are you sure you want to delete?";
      this.$refs.deleteConfirmationPopup
        .open("Confirmation Message", "", {
          width: 600,
          buttonList: [
            {
              name: "Cancel",
              class: "s-border--outline",
            },
            {
              name: "OK",
              class: "s-swatch-primary s-button",
            },
          ],
        })
        .then((res) => {
          //debugger;
          if (res.toLowerCase() == "ok") {
            this.$refs.deleteConfirmationPopup.hide();
            this.checkTransactionOnDelete(item);
          } else {
            this.$refs.deleteConfirmationPopup.hide();
          }
        });
    },
    checkTransactionOnDelete(item) {
      debugger;
      var JsonParam = {
        AccessGroupID: item.ID,
      };
      this.showLoaderMixin();
      let vm = this;
      vm.axiosPostMixin(
        "/api/AccessRight/DoCheckAccessGroupInTransaction",
        JsonParam
      )
        .then(function (response) {
          console.log("check delete response   ====> ", response);
          if (response != null || response != undefined) {
            vm.hideLoaderMixin();
            if (response.status == true) {
              vm.delmsg =
                "Cannot delete this access group as it is belongs to a staff member";
              vm.$refs.deleteConfirmationPopup
                .open("Confirmation Message", "", {
                  width: 600,
                  buttonList: [
                    {
                      name: "OK",
                      class: "s-swatch-primary s-button",
                    },
                  ],
                })
                .then((res) => {
                  //debugger;
                  if (res.toLowerCase() == "ok") {
                    vm.$refs.deleteConfirmationPopup.hide();
                  }
                });
            } else {
              vm.onDelete(item);
            }
          } else {
            vm.onDelete(item);
          }
        })
        .catch(function (error) {
          // currentObj.output = error;
          vm.hideLoaderMixin();
          console.log(error);
        });
    },
    showMsg() {
      this.delmsg =
        "Cannot delete this access group as it is belongs to a staff member";
      this.$refs.deleteConfirmationPopup
        .open("Confirmation Message", "", {
          width: 600,
          buttonList: [
            {
              name: "OK",
              class: "s-swatch-primary s-button",
            },
          ],
        })
        .then((res) => {
          //debugger;
          if (res.toLowerCase() == "ok") {
            this.$refs.deleteConfirmationPopup.hide();
          } else {
            this.$refs.deleteConfirmationPopup.hide();
          }
        });
    },

    showDefaultMsg() {
      this.delmsg = "Cannot delete this access group as it is system defined";
      this.$refs.deleteConfirmationPopup
        .open("Confirmation Message", "", {
          width: 600,
          buttonList: [
            {
              name: "OK",
              class: "s-swatch-primary s-button",
            },
          ],
        })
        .then((res) => {
          //debugger;
          if (res.toLowerCase() == "ok") {
            this.$refs.deleteConfirmationPopup.hide();
          } else {
            this.$refs.deleteConfirmationPopup.hide();
          }
        });
    },
    onDelete(item) {
      //alert('id ===> ' + item.ID)

      var JsonParam = {
        AccessGroupID: item.ID,
      };

      let vm = this;
      this.axiosPostMixin(
        "/api/AccessRight/DoDeleteAccessGroup",
        JsonParam
      ).then(function (response) {
        if (response != null || response != undefined) {
          if (response.jsondata != undefined || response.jsondata != null) {
            let jData = vm.removeNULLMixin(response.jsondata);
            jData = eval(jData);
            if (jData.length > 0) {
              vm.LoadAccessGroup(
                vm.pageno,
                vm.sortfield,
                vm.sortdesc == true ? "DESC" : "ASC",
                vm.itemPerPage
              );
            }
          }
        }
      });
    },
    dataSorce: function (options) {
      //   this.sortfield = options.sortBy[0];
      //   this.sortdesc = options.sortDesc[0];
      //   this.pageno = options.page;
      //   this.itemPerPage = options.itemsPerPage;

      this.LoadData();
    },
  },
  created() {
    this.setTitleAndDescriptionMixin("Device Management");

    this.gridheaders = [
      {
        text: "ID",
        align: "left",
        sortable: false,
        value: "ID",
        display: false,
        type: "text",
      },
      {
        text: "Device IMEI",
        align: "left",
        sortable: false,
        value: "DeviceIMEI",
        display: true,
        type: "text",
        width: "20%",
      },
      {
        text: "Model",
        align: "left",
        sortable: false,
        value: "Model",
        display: true,
        type: "text",
        width: "10%",
      },
      {
        text: "SIM Card Number",
        align: "center",
        sortable: false,
        value: "SIMCardNumber",
        display: true,
        type: "text",
        width: "10%",
      },
      {
        text: "Enable / Disabled",
        align: "left",
        sortable: false,
        value: "IsEnabled",
        display: true,
        type: "text",
        width: "10%",
      },
      {
        text: "Created Date Time",
        align: "left",
        sortable: false,
        value: "CreatedDateTime",
        display: true,
        type: "text",
        width: "10%",
      },
      {
        text: "Created By",
        align: "left",
        sortable: false,
        value: "CreatedBy",
        display: true,
        type: "text",
        width: "5%",
      },

      {
        text: "Actions",
        value: "action",
        sortable: false,
        display: true,
        type: "actionmenu",
        width: "5%",
      },
    ];

    //this.LoadAccessGroup(this.pageno, this.sortfield, this.sortdesc == true ? "DESC" : "ASC", this.itemPerPage);
  },
};
</script>


<style lang="scss">
.showMemberAccessRight {
  .v-data-table__wrapper {
    table {
      th,
      td {
        padding: 0.6rem 1.6rem !important;
      }
    }
  }
}
</style>