<template>
<div>
    <div class="s-box s-padding--none s-shadow--s">
        <div class="s-flex s-padding--sm broHeader">
        <div class="s-expand">
          <div class="s-width--expand">
            <v-btn color="primary" @click="AddAccessGroup">
              <span class="icon-r-add-line s-margin-right--xs"></span>Add
            </v-btn>
             <!-- <surf-button color="s-swatch-primary s-button s-text-size--l" value="+ Add"
                        @click.native="AddAccessGroup" 
                        class="s-swatch-primary s-button s-text-size--xl"
                        /> -->
          </div>
        </div>
        <div class="s-flex-items--center s-items-spacing--s s-padding--none">
          
        </div>
      </div>
  <!-- :items="BindAccessGroupData" keep this for actual data from API-->
   <div>
        <surf-grid
        :headers="gridheaders"
        :items="BindAccessGroupData"
       v-bind:sort-by="sortfield"
        v-bind:sort-desc="sortdesc"
     
        :menuitems="menuitems"
        @selectRow="selectRow"
        @menuitemClick="menuitemClick"
        @dataSorce="dataSorce"
        hide-default-footer
      >

        <template v-slot:Description="{ item }">
          <a v-html="item.Description" class="s-text--semibold textBody" href="javascript:void(0)"
          @click="ShowAccessRight(item.ID, item.Description)" ></a>
        </template>
        <template v-slot:AssignTo="{ item }">
          <a
            v-text="item.AssignTo"
            class="s-text--semibold textBody"
            href="javascript:void(0)"
            @click="showStaffMembers(item.ID)"
          ></a>
        </template>
        <template v-slot:IsSystemDefined="{ item }">
            <span v-if="item.IsSystemDefined == true">
                <span
                  class="icon-r-lock-2-line s-text-size--xxl textGrey35 s-margin-right--xs"
                ></span>
              </span>
              <span v-if="item.IsSystemDefined == false"> </span>
        
        </template>
        <template v-slot:CreatedBy="{ item }">
          <span class="">
             {{item.CreatedBy}}
          </span>
        
        </template>

        <template v-slot:CreatedOn="{ item }">
           <span class="">
             {{item.CreatedOn}}
          </span>
         
        </template>
         <!-- <template  v-slot:action="{item}">
                
        </template> -->
      </surf-grid>
     <surf-popupdialog ref="deleteConfirmationPopup" :showTitle="false">
      <template>
        <v-container>
          <div class="s-padding--xl pb-0">
            <h3 class="s-margin-bottom s-text-align--center">
              {{ delmsg }}
            </h3>
          </div>
        </v-container>
      </template>
    </surf-popupdialog>

    <surf-popupdialog ref="showStaffs" :showTitle="true">      
      <!-- <template>
              <div class="s-box s-padding--none s-shadow--s">
                  <surf-grid
                  :headers="Headers"
                  :items="BindStaffData"
                  hide-default-footer
                >        
                </surf-grid>
                
              </div>
          </template> -->

        <template>
              <div class=" s-padding--none s-margin-top--s">
                  <surf-grid
                  :headers="Headers"
                  :items="BindStaffData"
                  hide-default-footer
                  class="gridInline gridInlineTextOverflow showMemberAccessRight"
                >        
                </surf-grid>
              </div>
          </template>

    </surf-popupdialog>


    </div>
    </div>
  </div>
</template>
<script>
// import ShowStaffComponent from "./Shared/ShowStaffComponent";
export default {
  // components: {

  //       ShowStaffComponent
  //   },
    data(){
        return{
        ID:"", 
        BindAccessGroupData : [],
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
        delmsg:"",
        DummyData :[
            {
                Description: 'Administrator',
                CreatedBy:'Suditpta Sanyal',
                CreatedOn: '10-April-2020'
            },
            {
                Description: 'Manager',
                CreatedBy:'Suditpta Sanyal',
                CreatedOn: '10-April-2020'
            },
             {
                Description: 'Partner',
                CreatedBy:'Suditpta Sanyal',
                CreatedOn: '10-April-2020'
            },
            {
                Description: 'Senior',
                CreatedBy:'Suditpta Sanyal',
                CreatedOn: '10-April-2020'
            },
             {
                Description: 'Junior',
                CreatedBy:'Suditpta Sanyal',
                CreatedOn: '10-April-2020'
            }



        ],

        //ID:"",
        BindStaffData:[],
                Headers:[
                  {
                    text: "Code",
                    align: "left",
                    sortable: false,
                    value: "Code",
                    display: true,
                    type: "text",
                    width:'20%'
                    //class: 'cellHidden'     
                  },
                  {
                    text: "Staff Name",
                    align: "left",
                    sortable: true,
                    value: "StaffName",
                    display: true,
                    type: "text",
                    width: '80%'
                  },
                ]



        }
    },
    methods:{

      LoadStaff(){
             let vm = this;
             
            var accessGrpJsonParam = {
            AccessGroupID: vm.ID
            
            };
            this.showLoaderMixin();

             this.axiosPostMixin("/api/AccessRight/DoFetchStaffFromAccessGroup", accessGrpJsonParam)
            .then(function (response) {

              vm.hideLoaderMixin();

              if(response.jsondata != null || response.jsondata != undefined){
               let jResponse = JSON.parse(response.jsondata);
               vm.BindStaffData=null;
               vm.BindStaffData = jResponse;
              
              }
              
                //vm.hideLoaderMixin();

            })
          .catch(function (error) {
            // currentObj.output = error;
            vm.hideLoaderMixin();
          });
        },

         AddAccessGroup(){
           this.$session.set('AccessRightID', null);
           this.$session.set('AccessRightDesc', null);
        this.$router.push('AccessRightSettings')
      },
      ShowAccessRight(id, desc){
          if(id != null || id != undefined){
            this.$session.set('AccessRightID', id);
          }
          if(desc != null || desc != undefined){
            this.$session.set('AccessRightDesc', desc);
          }
          this.$router.push('AccessRightSettings');
      },
      LoadAccessGroup(pageNumber, sortColumn, sortDirection, rowPerPage){
             let vm = this;
            var accessGrpJsonParam = {
            PageNumber: pageNumber,
            SortColumn: sortColumn,
            SortDirection: sortDirection,
            RowPerPage: rowPerPage
            
            };
            this.showLoaderMixin();

            this.axiosPostMixin("/api/AccessRight/DoFetchAccessGroups", accessGrpJsonParam)
            .then(function (response) {

              if(response.jsondata != null || response.jsondata != undefined){
               let jResponse = JSON.parse(response.jsondata);
               vm.BindAccessGroupData = jResponse;
              
              }
              else
              {
                vm.BindAccessGroupData=vm.DummyData;
              }

                vm.hideLoaderMixin();

            })
          .catch(function (error) {
            // currentObj.output = error;
            vm.hideLoaderMixin();
          });
        },
        selectRow(roweliment) {

          if(roweliment.IsSystemDefined == false){

              this.menuClickedItem = roweliment;
              this.menuitems = [];

              this.menuitems = [
                
                {
                  title: "Delete",
                  icon: "icon-r-delete-bin-line"
                }
              ];
          }
           else{
             this.menuitems =null;
           }
        },
        menuitemClick: function(selecteditem) {
         // alert(this.menuClickedItem)
this.openDeleteConfurmation(this.menuClickedItem);

        },
        
          // alert(this.menuClickedItem);
          
          //     switch (selecteditem.title) {
            
          //       case "Delete":
          //       this.openDeleteConfurmation(this.menuClickedItem);

          //     break;
           

          //   default:
          //         this.$refs.deleteConfirmationPopup.hide();
          //     break;
          
          // }


//            if(selecteditem.title == "Delete"){
//               this.openDeleteConfurmation(this.menuClickedItem);
//            }
// else{
//   return;
// }
          
//         },


        showStaffMembers(accessGrpID){

            let vm = this;
            vm.ID = accessGrpID;

             vm.LoadStaff();

            vm.$refs.showStaffs.open("", "", {
              width: 600,
              buttonList: [
                {
                  name: "Cancel",
                  class: "s-border--outline"
                },
                {
                  name: "OK",
                  class: "s-swatch-primary s-button"
                }
              ]
            })
            .then(res => {
              //debugger;
              if (res.toLowerCase() == "ok") {
                this.$refs.showStaffs.hide();
                //this.checkTransactionOnDelete(item);

                
              } else {
                this.$refs.showStaffs.hide();
              }
            });


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
                  class: "s-border--outline"
                },
                {
                  name: "OK",
                  class: "s-swatch-primary s-button"
                }
              ]
            })
            .then(res => {
              //debugger;
              if (res.toLowerCase() == "ok") {
                this.$refs.deleteConfirmationPopup.hide();
                this.checkTransactionOnDelete(item);
                
              } else {
                this.$refs.deleteConfirmationPopup.hide();
              }
            });
        },
        checkTransactionOnDelete(item){
          debugger;
          var JsonParam = {
              AccessGroupID: item.ID,
              
            };
            this.showLoaderMixin();
            let vm = this;
            vm.axiosPostMixin("/api/AccessRight/DoCheckAccessGroupInTransaction", JsonParam)
            .then(function(response){
              console.log('check delete response   ====> ', response);
              if(response != null || response != undefined){
                vm.hideLoaderMixin();
                 if(response.status == true){
                   vm.delmsg = "Cannot delete this access group as it is belongs to a staff member";
          vm.$refs.deleteConfirmationPopup
            .open("Confirmation Message", "", {
              width: 600,
              buttonList: [
                
                {
                  name: "OK",
                  class: "s-swatch-primary s-button"
                }
              ]
            })
            .then(res => {
              //debugger;
              if (res.toLowerCase() == "ok") {
                vm.$refs.deleteConfirmationPopup.hide();
               
                
              } 
            });

                 }
                 else{
                   vm.onDelete(item);
                 }
                  
              }
              else{
                   vm.onDelete(item);
                 }
            })
             .catch(function (error) {
            // currentObj.output = error;
            vm.hideLoaderMixin();
           console.log(error);
          });
           
        },
        showMsg(){
this.delmsg = "Cannot delete this access group as it is belongs to a staff member";
          this.$refs.deleteConfirmationPopup
            .open("Confirmation Message", "", {
              width: 600,
              buttonList: [
                
                {
                  name: "OK",
                  class: "s-swatch-primary s-button"
                }
              ]
            })
            .then(res => {
              //debugger;
              if (res.toLowerCase() == "ok") {
                this.$refs.deleteConfirmationPopup.hide();
               
                
              } else {
                this.$refs.deleteConfirmationPopup.hide();
              }
            });

        },

        showDefaultMsg(){
this.delmsg = "Cannot delete this access group as it is system defined";
          this.$refs.deleteConfirmationPopup
            .open("Confirmation Message", "", {
              width: 600,
              buttonList: [
                
                {
                  name: "OK",
                  class: "s-swatch-primary s-button"
                }
              ]
            })
            .then(res => {
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
                  this.axiosPostMixin("/api/AccessRight/DoDeleteAccessGroup", JsonParam)
                  .then(function(response){
                    
                    if(response != null || response != undefined){
                    if(response.jsondata != undefined || response.jsondata != null){   
                        let jData = vm.removeNULLMixin(response.jsondata);
                        jData = eval(jData);
                          if (jData.length > 0) 
                          {
                              vm.LoadAccessGroup(
                                vm.pageno, vm.sortfield, 
                                vm.sortdesc == true ? "DESC" : "ASC", 
                                vm.itemPerPage);
                          }
                    }
                    }
                  });  
           
             
        },   
        dataSorce: function(options) {
      this.sortfield = options.sortBy[0];
      this.sortdesc = options.sortDesc[0];
      this.pageno = options.page;
      this.itemPerPage = options.itemsPerPage;

     this.LoadAccessGroup(this.pageno, this.sortfield, this.sortdesc == true ? "DESC" : "ASC", this.itemPerPage);
    }, 
    },
    created(){
          this.setTitleAndDescriptionMixin("Security Groups | " + this.globalProjectInitials);
          // this.createBreadcrumbDataMixin(
          //   [
          //     {
          //       pageName: "AccessRight",
          //       text: "Security Groups",
          //       href: "AccessRight"
          //     }
          //   ],
          //   true
          // );
           this.createBreadcrumbDataMixin(
            [
              {
                pageName: "AccessRight",
                text: "Security Groups",
                href: "AccessRight"
              }
            ]
            
          );
        this.gridheaders = [{
          text: "ID",
          align: "left",
          sortable: false,
          value: "ID",
          display: false,
          type: "text",
          class: 'cellHidden'     
        },
        {
          text: "Description",
          align: "left",
          sortable: true,
          value: "Description",
          display: true,
          type: "text",
          width: '45%'
        },
        {
          text: "Assigned To",
          align: "left",
          sortable: true,
          value: "AssignTo",
          display: true,
          type: "text",
          width: '20%'
        },
        {
          text: "",
          align: "center",
          sortable: false,
          value: "IsSystemDefined",
          display: true,
          type: "text",
          width: "5%"
        },
        {
          text: "Created By",
          align: "left",
          sortable: true,
          value: "CreatedBy",
          display: true,
          type: "text"
        },
        {
          text: "Created On",
          align: "left",
          sortable: true,
          value: "CreatedOn",
          display: true,
          type: "text"
        },        
        {
          text: "",
          value: "action",
          sortable: false,
          display: true,
          type: "actionmenu"
        
        }
      ];

         //this.LoadAccessGroup(this.pageno, this.sortfield, this.sortdesc == true ? "DESC" : "ASC", this.itemPerPage);
    }
}
</script>


<style lang="scss">

.showMemberAccessRight{
   .v-data-table__wrapper{
   table {
   th, td{
padding: 0.6rem 1.6rem !important;
   }
   }
   }
}
</style>