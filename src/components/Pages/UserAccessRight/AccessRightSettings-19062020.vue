<template>
    <div>
        <div class="s-box s-shadow--s s-padding--s">
        
            
            <!-- <div class="s-margin-bottom s-text--semibold-size--xl"></div>
         <div class="s-flex--justified s-items-spacing"> -->
                      <!-- <div class="s-margin-bottom s-text--semibold-size--xl">Access Right Permission</div> -->
                      <!-- <div> -->
                        <!-- <span  class="s-text--bold">  Sections </span> -->
                         <!-- <v-list class="" style="background: #b3d4fc;"
                          v-for="(item, index) in SectionData" v-bind:key="index" v-model="SectionDataModel">

                              <v-list-item @click="LoadAccessRight(item.Value)"  id="" > 
                                <v-list-item-title class="s-text--bold" style="color:white">{{item.Description}}</v-list-item-title>       
                              </v-list-item>
                          </v-list> -->
                      <!-- </div> -->

                       <!-- <div class="s-items-spacingVertical" id="dvLoadDataGrid" >
        
<div class="s-margin-bottom s-text--semibold-size--xl UserAccessRight"> Access Right for {{AccessGroupModel.Description}}</div>
<div class="s-flex--justified s-items-spacing">
  <div></div>
  <div>
   <v-btn color="s-swatch-primary" class="s-blockWidth--15 s-button-spacing--xl"
                             @click="ResetAccessRights" style="float:right">
                              <span class="s-margin-right--xs"></span> Reset
                            </v-btn>
  </div>
</div>
                         <surf-grid
                          :headers="gridheaders"
                          :items="BindGridData"
                          show-expand="true"
                          item-key="Option" 
                          sortBy = "Option"
                         disable-pagination="true"
                         hide-default-footer="true"
                        >

                          <template v-slot:expanded-item="{ item }">
                            <a v-html="item.Option" class="textGray55 s-text-size--s" href="javascript:void(0)"></a>
                          </template>

                          <template v-slot:CanView="{ item }">    
                            <surf-checkbox class="s-margin--none" label="" v-model="item.CanView"
                            @input="ValidateAccessGrp(item.Option, 'View')"  />
                          </template>
                         <template v-slot:CanSave="{ item }">                           
                             <surf-checkbox class="s-margin--none" label="" v-model="item.CanSave"
                             @input="ValidateAccessGrp(item.Option, 'Save')"  />
                          </template>
                         <template v-slot:CanEdit="{ item }">  
                              <surf-checkbox class="s-margin--none" label="" v-model="item.CanEdit"
                             @input="ValidateAccessGrp(item.Option, 'Edit')"  />
                          </template>
                          <template v-slot:CanDelete="{ item }">                           
                            <surf-checkbox class="s-margin--none" label="" v-model="item.CanDelete"
                             @input="ValidateAccessGrp(item.Option, 'Delete')"  />
                          </template>
                          <template v-slot:CanPrint="{ item }">                           
                            <surf-checkbox class="s-margin--none" label="" v-model="item.CanPrint"
                             @input="ValidateAccessGrp(item.Option, 'Print')"  />
                          </template>
                        </surf-grid>
                      </div> -->
                      <!-- </div>    -->

              <!-- new UI -->
                <v-row style="" class="">
                    <v-col> 
                          <template>
                            <surf-textBox label="Access Group" :value="AccessGroupDesc"></surf-textBox>
                             <div id="dvErrMsg" style="display:none"></div> 
                          </template>
                    </v-col>  

                    <v-col>
                    </v-col>
                </v-row>
                <v-row style="" class="">
                    <v-col class="s-padding-bottom--none">
                        <div class="s-flex-item">
                            <div style="cursor:pointer" class="s-comment s-flex-items--center text-center s-padding float-left s-text--size--ml--semibold">What can I do</div>
                            <div style="cursor:pointer" class="s-comment s-flex-items--center text-center s-padding float-left s-text--size--ml--semibold timesheetTabBtvActive">What can I see</div>
                        </div>
                    </v-col>  
                </v-row>
                <div class="s-box s-shadow--s" style="">
                    <v-row class="s-flex">
                      <v-col class="col-12">
                        <!-- collapsed table -->
                      </v-col>
                    </v-row>
                </div>

            <!-- new UI -->
                        
                       
            </div> 
            <footer class="s-flex s-margin-top--l">
                <div class="s-expand">
                
                </div>
                <nav class="s-items-spacing--s">
                    
                <v-btn  class="s-blockWidth--15 s-button-spacing--xl s-border--outline" @click="GoBack">
                    Cancel
                </v-btn>
                <v-btn color="s-swatch-primary" class="s-blockWidth--15 s-button-spacing--xl" @click="SaveAccessRights">
                    <span class="icon-r-save-line s-margin-right--xs"></span>Save &amp; Continue
                </v-btn>
                <!-- <v-btn color="s-swatch-primary" class="s-blockWidth--15 s-button-spacing--xl">Continue<span class="icon-r-arrow-right-s-line s-margin-left--xs"></span></v-btn> -->
                </nav>
            </footer>
        </div>
</template>
<style lang="scss">

.timesheetTabBtvActive {
    box-shadow: rgba(9, 23, 26, 0.07) 0px -4px 8px;
    border-radius: 10px 10px 0px 0px;
    color: #09171A;
    background-color: #fff;
}


.data-table{
  width: 90%;
  border: 0pt;
}
.row-display{
  display: none;
}
</style>
<script>

export default {
    data(){
        return{

          Message:'',
           expanded: [],
           singleExpand: true,
           showAccessGrpErrorMsg : false,
           errorMsgForAccessGrp:'',      
           showSectionErrorMsg : false,
           errorMsgForSection:'',     
          AccessGrpJSONData :[],
           AccessGroupItems :['Administrator', 'Manager', 'Partner', 'Lead Staff', 'Staff', 'Others' ],
           AccessGroupModel: { ID:"", Description: ""},
          
          AccessGroupID : "",
          AccessGroupDesc: "",
          AccessRightJSONData : [],

          SectionData :[
                          {
                            Description: "Settings",
                            Value: "Settings"
                          },
                          {
                            Description: "Dashboard",
                            Value: "Dashboard"
                          },
                          {
                            Description: "Customer",
                            Value: "Customer"
                          },
                          {
                            Description: "Staff",
                            Value: "Staff"
                          },
                          {
                            Description: "WIP Ledger",
                            Value: "WIPLedger"
                          },
                          {
                            Description: "Fees Ledger",
                            Value: "FeesLedger"
                          },
                          {
                            Description: "Communication",
                            Value: "Communication"
                          }, 
                          {
                            Description: "Reports",
                            Value: "Reports"
                          },


          ],
          
          SectionDataModel:{ Description: "", Value: ""},
          BindGridData: [],
           DummyData: [

             {
            Section: "Settings",
            Options:[
                      {
                        Option: "Access Group",
                        CanView: false,
                        CanSave: false,
                        CanEdit: false,
                        CanDelete: false,
                        CanPrint: false,
                      },
                      {
                        Option: "Access Right",
                        CanView: false,
                        CanSave: false,
                        CanEdit: false,
                        CanDelete: false,
                        CanPrint: false,
                      },

                      {
                        Option: "Practice",
                        CanView: false,
                        CanSave: false,
                        CanEdit: false,
                        CanDelete: false,
                        CanPrint: false,
                      },

                      {
                        Option: "Invoice Template",
                        CanView: false,
                        CanSave: false,
                        CanEdit: false,
                        CanDelete: false,
                        CanPrint: false,
                      }



            ],            
            // CanView: false,
            // CanSave: false,
            // CanEdit: false,
            // CanDelete: false,
            // CanPrint: false,
            
          },
              {
            Section: "Dashboard",
            Options:[

                      {
                        Option: "Home",
                        CanView: false,
                        CanSave: false,
                        CanEdit: false,
                        CanDelete: false,
                        CanPrint: false,
                      },
                      
            ],            
            // CanView: false,
            // CanSave: false,
            // CanEdit: false,
            // CanDelete: false,
            // CanPrint: false,
            
          },
            {
            Section: "Customer",
            Options:[
              
                      {
                        Option: "Customer",
                        CanView: false,
                        CanSave: false,
                        CanEdit: false,
                        CanDelete: false,
                        CanPrint: false,
                      },
            ],            
            // CanView: false,
            // CanSave: false,
            // CanEdit: false,
            // CanDelete: false,
            // CanPrint: false,
            
          },
           {
            Section: "Staff",
            Options:[
                      {
                        Option: "Staff",
                        CanView: false,
                        CanSave: false,
                        CanEdit: false,
                        CanDelete: false,
                        CanPrint: false,
                      },
            ],            
            // CanView: false,
            // CanSave: false,
            // CanEdit: false,
            // CanDelete: false,
            // CanPrint: false,
            
            
          },

           {
            Section: "WIPLedger",
            Options:[
                      {
                        Option: "Time Sheet",
                        CanView: false,
                        CanSave: false,
                        CanEdit: false,
                        CanDelete: false,
                        CanPrint: false,
                      },


            ],            
            // CanView: false,
            // CanSave: false,
            // CanEdit: false,
            // CanDelete: false,
            // CanPrint: false,
            
            
          },
           {
            Section: "FeesLedger",
            Options:[
                      {
                        Option: "Invoice",
                        CanView: false,
                        CanSave: false,
                        CanEdit: false,
                        CanDelete: false,
                        CanPrint: false,
                      },  
                      {
                        Option: "Receipts",
                        CanView: false,
                        CanSave: false,
                        CanEdit: false,
                        CanDelete: false,
                        CanPrint: false,
                      },
                      {
                        Option: "Recurring Invoice",
                        CanView: false,
                        CanSave: false,
                        CanEdit: false,
                        CanDelete: false,
                        CanPrint: false,
                      },



            ],    
            // CanView: false,
            // CanSave: false,
            // CanEdit: false,
            // CanDelete: false,
            // CanPrint: false,
            
          },
           {
            Section: "Communication",
           Options:[
                     {
                        Option: "Email",
                        CanView: false,
                        CanSave: false,
                        CanEdit: false,
                        CanDelete: false,
                        CanPrint: false,
                      },

                      {
                        Option: "Phone",
                        CanView: false,
                        CanSave: false,
                        CanEdit: false,
                        CanDelete: false,
                        CanPrint: false,
                      },

                      {
                        Option: "Calender",
                        CanView: false,
                        CanSave: false,
                        CanEdit: false,
                        CanDelete: false,
                        CanPrint: false,
                      },
                      {
                        Option: "Task",
                        CanView: false,
                        CanSave: false,
                        CanEdit: false,
                        CanDelete: false,
                        CanPrint: false,
                      },
                      {
                        Option: "Notes",
                        CanView: false,
                        CanSave: false,
                        CanEdit: false,
                        CanDelete: false,
                        CanPrint: false,
                      },
                       {
                        Option: "Documents",
                        CanView: false,
                        CanSave: false,
                        CanEdit: false,
                        CanDelete: false,
                        CanPrint: false,
                      },

           ],    
            // CanView: false,
            // CanSave: false,
            // CanEdit: false,
            // CanDelete: false,
            // CanPrint: false,
            
          },
            {
            Section: "Reports",
            Options:[

                       {
                        Option: "Report",
                        CanView: false,
                        CanSave: false,
                        CanEdit: false,
                        CanDelete: false,
                        CanPrint: false,
                      },

            ],    
            // CanView: false,
            // CanSave: false,
            // CanEdit: false,
            // CanDelete: false,
            // CanPrint: false,
            
          },
         
        ],

        gridTempData :[],

         gridheaders: [],



                stuffJSonData:[],
                stuffDataModel:{ID: "", Name: "", StaffType: ""},
                
                sortfield: "Code",
                sortdesc: false,
                pageno: 1,
                //itemlength: -1,
                selectgridchecklist: [],
                showGrid: false,
                noData: "",
                menuitems: [],
                itemlength: 0,
                itemPerPage: 50,
                menuitems: [],
                chkActiveStaff: false,
                modelSearch: "",
                isSearchPress: false,
                //menu related
                menuClickedItem: "",

                staffType:""

               //For access right 
                ,accessRightFunctions : [],        
                canSave: false,
                canEdit: false,
                canView: false,
                canDelete: false,
                canPrint: false,
                //End For access right
        }
    },
    methods:{
        GoBack(){
            this.$router.push('AccessRight')
        },
        LoadAccessGroupData(){
            let vm = this;
              if(vm.$session.get("AccessRightID") != null 
              || vm.$session.get("AccessRightID") != undefined)
              {
                  vm.AccessGroupModel.ID  = vm.$session.get("AccessRightID");
                  vm.AccessGroupID = vm.$session.get("AccessRightID");
              }
              if(vm.$session.get("AccessRightDesc") != null 
              || vm.$session.get("AccessRightDesc") != undefined)
              {
                  vm.AccessGroupModel.Description  = vm.$session.get("AccessRightDesc");
                  vm.AccessGroupDesc = vm.$session.get("AccessRightDesc");
              }
        },

        ShowMessage(message){
            let vm = this;

            vm.Message = message;

            vm.$refs.MessagePopup
            .open("Message", "", {
                    width: 350,
                    buttonList: [{
                            name: "Ok",
                            class: ""
                        },
                       
                    ]
                }) .then(res => {

                    if (res.toLowerCase() == "ok") {

                        this.$refs.MessagePopup.hide();
                        
                    } else {
                        this.$refs.MessagePopup.hide();
                    }
                });
               
        },

        DisplayErrMsg(hasError){
            //var dvErrMsg = document.getElementById('dvErrMsg');
            if(hasError == true){
              // if(dvErrMsg != null && dvErrMsg.hasAttribute('style')){
              //   dvErrMsg.removeAttribute('style');
              // }
              // dvErrMsg.setAttribute('style','display: block');
              // dvErrMsg.innerHTML="<span style='color:red'>Select access group </span>";
              this.showAccessGrpErrorMsg =true;
              this.errorMsgForAccessGrp = "Select access group";
            }
            else{
              // dvErrMsg.innerHTML=null;
              // if(dvErrMsg != null && dvErrMsg.hasAttribute('style')){
              //   dvErrMsg.removeAttribute('style');
              // }
              // dvErrMsg.setAttribute('style','display: none');
              this.showAccessGrpErrorMsg=false;
            }
        },

        DisplayErrMsgSection(hasError){
            //var dvErrMsg = document.getElementById('dvErrMsgSection');
            if(hasError == true){
              // if(dvErrMsg != null && dvErrMsg.hasAttribute('style')){
              //   dvErrMsg.removeAttribute('style');
              // }
              // dvErrMsg.setAttribute('style','display: block');
              // dvErrMsg.innerHTML="<span style='color:red'>Select section </span>";
              this.showSectionErrorMsg=true;
              this.errorMsgForSection = "Please select section";
            }
            else{
              // dvErrMsg.innerHTML=null;
              // if(dvErrMsg != null && dvErrMsg.hasAttribute('style')){
              //   dvErrMsg.removeAttribute('style');
              // }
              // dvErrMsg.setAttribute('style','display: none');
              this.showSectionErrorMsg=false;
            }
        },
        ValidateAndLoadAccessRight(sectionValue){

            // if(this.SectionDataModel.Value == null || this.SectionDataModel.Value == undefined){
            //   //this.DisplayErrMsgSection(true);
            //   return;
            // }

            // var index = -1;
            // var val =sectionValue;
            // var filteredObj = this.DummyData.find(function(item, i)
            // {
            //   if(item.Section == val)
            //   {
            //       return index = i;
                
            //   }
            // });

          

           
            if(this.AccessGroupModel.ID == null || this.AccessGroupModel.ID == undefined)
            {
              //this.DisplayErrMsg(true);
              return;
            }
            else
            {
             
              //this.BindGridData = this.DummyData[index].Options;
                this.LoadAccessRightGrid(sectionValue);
            }

        },


        ShowHideGrid(hasValue)
        {
            var dvLoadDataGrid = document.getElementById("dvLoadDataGrid");
            var dvDummyDataGrid = document.getElementById("dvDummyDataGrid");

            if( dvLoadDataGrid == null){
              return;
            }
            if(dvDummyDataGrid == null){
              return;
            }


            if(hasValue == true){

              if(dvLoadDataGrid != null && dvLoadDataGrid.hasAttribute('style')){
                  dvLoadDataGrid.removeAttribute('style');
              }
              
              dvLoadDataGrid.setAttribute('style','display: block');

              if(dvDummyDataGrid != null &&  dvDummyDataGrid.hasAttribute('style')){
                  dvDummyDataGrid.removeAttribute('style');
              }

              
              dvDummyDataGrid.setAttribute('style','display: none');
            }
            else{
              if(dvLoadDataGrid != null && dvLoadDataGrid.hasAttribute('style')){
                  dvLoadDataGrid.removeAttribute('style');
              }
              dvLoadDataGrid.setAttribute('style','display: none');

              
              if(dvDummyDataGrid != null && dvDummyDataGrid.hasAttribute('style')){
                  dvDummyDataGrid.removeAttribute('style');
              }
              dvDummyDataGrid.setAttribute('style','display: block');
            }

          
        },

        LoadAccessRight(sectionValue){
         // alert(sectionValue);
          this.SectionDataModel.Value = sectionValue;
          if(this.AccessGroupModel.ID != null || this.AccessGroupModel.ID != undefined)
          {
              //this.DisplayErrMsg(false);
               if (sectionValue != null || sectionValue != undefined)
               {
                this.ValidateAndLoadAccessRight(sectionValue);
               }
              
          }
         
        },

      SetDummyData(){
        //alert(this.DummyData);
        this.$session.set('DummyData',this.DummyData)

      },
      ResetAccessRights(){

        this.DummyData = null;
        this.DummyData = this.$session.get('DummyData');

         var index = -1;
            var val =this.SectionDataModel.Value;
            var filteredObj = this.DummyData.find(function(item, i)
            {
              if(item.Section == val)
              {
                  return index = i;
                
              }
            });

            this.BindGridData =  this.DummyData[index].Options;
      },

        
        LoadAccessRightGrid(sectionValue){
                  let vm = this;
                  //alert('vm.SectionDataModel.Value ==> ' + sectionValue);
                  //alert('vm.AccessGroupModel.ID ==> ' + vm.AccessGroupModel.ID);
                  var index = -1;
                  var val = sectionValue;
                  var filteredObj = this.DummyData.find(function(item, i)
                  {
                    if(item.Section == val)
                    {
                        return index = i;
                      
                    }
                  });

          
           
              
          var JsonAccessRightData = {
              AccessGroupID: vm.AccessGroupModel.ID.toString().trim(),
              Section: sectionValue.toString().trim()
          }; 
          
          this.showLoaderMixin();

            this.axiosPostMixin("/api/AccessRight/DoLoadAccessRights", JsonAccessRightData)
            .then(function (response) {

              console.log('Response== ', response);  
              console.log('Response Access right data === ', response.jsondata);
               //let jData = vm.removeNULLMixin(response.jsondata);
               if(response.jsondata != null)
               {
                 let jsonStr = response.jsondata.toString();
                  console.log('jsonStr ====>', jsonStr)
                 let modifiedJSON = vm.ReplaceAllNULLsToFalse(jsonStr);
                  console.log('modifiedJSON ====>', modifiedJSON)
                  let jResponse = JSON.parse(modifiedJSON);
                 
                  
                  console.log('jResponse ====>', jResponse)

                  vm.BindGridData = jResponse;
                  vm.hideLoaderMixin();
                  //vm.ShowHideGrid(true);
               }
               
               else{

                  vm.hideLoaderMixin();

                console.log('grid temp data === ', vm.$session.get('DummyData'));
                  vm.DummyData = null;
                  vm.DummyData = vm.$session.get('DummyData');
                    vm.BindGridData =  vm.DummyData[index].Options;
                    // console.log('Dummy data  else bolck ===', vm.DummyData)
               }


              
               vm.hideLoaderMixin();
            })
            .catch(function (error) {
              //vm.ShowHideGrid(false);
              // currentObj.output = error;
             //console.log('Dummy data in error ===', vm.DummyData)
               vm.DummyData = null;
                  vm.DummyData = vm.$session.get('DummyData');
                    vm.BindGridData =  vm.DummyData[index].Options;
              vm.hideLoaderMixin();
            });

            //console.log('Dummy data in outside  ===', vm.DummyData)

        },

      ReplaceAllNULLsToFalse(Obj) {
      Obj = Obj.replace(/null/g, "false");
      return Obj;
    },


        ValidateAccessGrp: function(sectionName, functionName)
        {
            var index = -1;
            var val =sectionName;
            var filteredObj = this.DummyData.find(function(item, i)
            {
              if(item.Section == val)
              {
                  return index = i;
                
              }
            });

          

            //alert(this.AccessGroupModel.ID);
            if(this.AccessGroupModel.ID != null || this.AccessGroupModel.ID != undefined)
            {
              this.DisplayErrMsg(false);
              //console.log('Dummy data ==> ', JSON.stringify(this.DummyData));
            }
            else
            {
              this.DisplayErrMsg(true);
              if(functionName == 'View'){
                  this.DummyData[index].CanView=null;
              }              
              if(functionName == 'Save'){
                  this.DummyData[index].CanSave=null;
              }              
              if(functionName == 'Edit'){
                this.DummyData[index].CanEdit=null;
              }              
              if(functionName == 'Delete'){
                 this.DummyData[index].CanDelete=null;
              }              
              if(functionName == 'Print'){
                  this.DummyData[index].CanPrint=null;
              }              
              
            }
        },

        SaveAccessRights(){

            if(this.AccessGroupModel.ID == null || this.AccessGroupModel.ID == undefined)
            {
              this.DisplayErrMsg(true);

            }
            else
            {
                //console.log('Dummy data ==> ', JSON.stringify(this.DummyData));
              let vm = this;
              var JsonAccessRightData = {
                  AccessGroupID: vm.AccessGroupModel.ID.toString().trim(),
                  Section : vm.SectionDataModel.Value.toString().trim(),
                  AccessRights:  vm.BindGridData
              }; 

                vm.showLoaderMixin();

                vm.axiosPostMixin('/api/AccessRight/DoSaveAccessRights', JsonAccessRightData)
                .then(function(response){

                      vm.hideLoaderMixin();

                      console.log('DoSaveAccessRights response',response)

                      if(response.status == true)
                      {
                          //alert('Access rights saved successfully');

                          vm.ShowMessage('Access rights saved successfully');
                         // vm.GoBack();
                      }
                      else
                      {
                         vm.ShowMessage('Server connection error occured. Please try again while reset');
                      }
                      
                })
                .catch(function(error){
                    
                    vm.ShowMessage('Server connection error occured. Please try again while reset');
                    console.log(error); 
                    vm.hideLoaderMixin();

                });



               
            }

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

              console.log('Response Access Group data === ', response.jsondata);
               //let jData = vm.removeNULLMixin(response.jsondata);
               let jResponse = JSON.parse(response.jsondata);
               vm.AccessGrpJSONData = jResponse;
               console.log('JResponse === > ', jResponse);
               let searchItem = vm.retriveJsonKeyValueMixin(vm.AccessGrpJSONData,jResponse[0].ID, jResponse[0].Description);
               vm.AccessGroupModel = searchItem;

               console.log('Access grp model ==>', vm.AccessGroupModel);
               vm.hideLoaderMixin();
            })
          .catch(function (error) {
            // currentObj.output = error;
            vm.hideLoaderMixin();
          });


        },
       
        staffDataChange(){
//             console.log('id --->', this.stuffDataModel.ID);
// console.log('id --->', this.stuffDataModel.Name);
// console.log('id --->', this.stuffDataModel.StaffType);

this.staffType = this.stuffDataModel.StaffType;

        }
    },
    created()
    {
       this.createBreadcrumbDataMixin(
      [
        {
          pageName: "AccessRightSettings",
          text: "Security Groups",
          href: "AccessRightSettings"
        }
      ],
      true
    );
          //   this.LoadStuffData(
          //   this.pageno,
          //   this.sortfield,
          //   this.sortdesc == true ? "DESC" : "ASC",
          //   this.itemPerPage
          // );

          //this.LoadAccessGroup(this.pageno, this.sortfield, this.sortdesc == true ? "DESC" : "ASC", this.itemPerPage);
          this.LoadAccessGroupData();
          this.SetDummyData();
          //this.LoadAccessRightGrid();

          this.gridheaders = [
        //     {
        //   text: "ID",
        //   align: "left",
        //   sortable: false,
        //   value: "ID",
        //   display: false,
        //   type: "text",
        //   class: 'cellHidden'
        // },
        {
          text: "Menu Option",
          align: "left",
          sortable: true,
          value: "Option",
          display: true,
          type: "text"
        },
        // {
        //   text: "Option",
        //   align: "left",
        //   sortable: true,
        //   value: "Options",
        //   display: true,
        //   type: Array
        // },
        {
          text: "View",
          align: "left",
          sortable: true,
          value: "CanView",
          display: true,
          type: Boolean,
          class: "s-blockWidth--15"
        },
        {
          text: "Save",
          align: "left",
          sortable: true,
          value: "CanSave",
          display: true,
          type: Boolean,
          class: "s-blockWidth--15"
        },
        {
          text: "Edit",
          align: "left",
          sortable: true,
          value: "CanEdit",
          display: true,
          type: Boolean,
          class: "s-blockWidth--15"
        },
        {
          text: "Delete",
          align: "left",
          sortable: true,
          value: "CanDelete",
          display: true,
          type: Boolean,
           class: "s-blockWidth--15"
        },
        {
          text: "Print",
          align: "left",
          sortable: true,
          value: "CanPrint",
          display: true,
          type: Boolean,
           class: "s-blockWidth--15"
        },
        // {
        //   text: "Status",
        //   align: "left",
        //   sortable: true,
        //   value: "StaffStatusDesc",
        //   display: true,
        //   type: "text"
        // },
        // {
        //   text: "",
        //   value: "action",
        //   sortable: false,
        //   display: true,
        //   type: "actionmenu"
        // }
      ];

      this.GetAccessRightSettings('Settings', 'AccessRight');
    }
}
</script>