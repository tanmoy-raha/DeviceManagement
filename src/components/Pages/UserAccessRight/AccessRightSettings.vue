<template>
    <div>
             <!-- new UI -->
             <div class="userAccessRight">
                <v-row style="" class="">
                    <v-col class="s-padding-top--none"> 
                          <template>
                            <surf-textBox label="Access Group" 
                              :value="AccessGroupModel.ID"
                              v-model="AccessGroupModel.Description"
                              :clearable="true"                               
                              :maxlength="60"                              
                              @keydown="clear"
                              @keypress="keyPressValidate"                                        
                              class="s-padding-top--none userAccessRightGroupLabel">
                            </surf-textBox>
                             <div id="dvErrMsg" style="display:none">
                               <!-- <span style="color:red">Please enter access group name</span> -->
                             </div> 
                          </template>
                    </v-col>  

                    <v-col>
                    </v-col>
                </v-row>
                <v-row style="" class="">
                    <v-col class="s-padding-top--none s-padding-bottom--none">
                        <div class="s-flex-item">
                            <div  @click="openTab('CanDo',$event)"  style="cursor:pointer" class="s-comment s-flex-items--center text-center s-padding float-left s-text--size--ml--semibold" :class="TabSectionName=='CanDo'? 'timesheetTabBtvActive':''">What can I do</div>
                            <div @click="openTab('CanSee',$event)"  style="cursor:pointer" class="s-comment s-flex-items--center text-center s-padding float-left s-text--size--ml--semibold" :class="TabSectionName=='CanSee'? 'timesheetTabBtvActive':''">What can I see</div>
                        </div>
                    </v-col>  
                </v-row>
                <div v-if="TabSectionName == 'CanDo'" class="s-box s-shadow--s" style="">
                    <v-row class="s-flex">
                      <v-col class="col-12 s-padding-top--none s-padding-bottom--none" >
                        <!-- collapsed table @click:row="Clicked"-->
                       
                          <v-data-table
                          :headers="headers"
                          :items="BindAccessRightData"
                          :single-expand="singleExpand"
                          :expanded.sync="expanded"
                          item-key="Section"
                          show-expand
                          class="elevation-0 tableWidth"
                           hide-default-footer
                            
                        >
                          <template v-slot:expanded-item="{ headers, item }">
                            <td :colspan="headers.length" 
                              v-if="item.Options != null " style="border:none !important">
                              <table class="elevation-0 settingsRowSelect tableWidth"> 
                                <tr>
                                <th class="checkBoxText"></th>                               
                                <th colspan="2" class=""></th>
                                <th class="text-start">ALL</th>
                                <th class="text-start">VIEW</th>
                                <th class="text-start">ADD</th>
                                <th class="text-start">EDIT</th> 
                                <th class="text-start">DELETE</th>
                                <th class="text-start">PRINT</th>
                                <th class="text-start">EMAIL</th>
                                </tr>
                                <tr v-for="(opt,index) in item.Options" :key="index">
                                   <td class=""></td>  
                                <td style=""  class="checkBoxText"> 
                                    <!-- <surf-checkbox style="" 
                                          v-model="opt.OptionCheck"
                                          :readonly="false"
                                          label=""
                                          :change="CheckPartial(item.Section, opt.Option,opt.OptionCheck)"
                                          
                                           /> -->
                                         <v-checkbox
                                          v-model="opt.All"
                                          label="" 
                                          @change="CheckPartialAll(item.Section, opt.Option,$event)"
                                          :indeterminate="opt.Indeterminate"
                                          />
                                  </td> 
                                  
                                 <td class=""> {{opt.Option}} </td>                                
                                
                                  <!-- <td class="text-start" >
                                  </td> -->
                                  <td class="text-start" > 
                                   
                                      <v-checkbox
                                          v-model="opt.View"
                                          label=""  
                                          @change="CheckIndivisualOption(item.Section, opt.Option, 'VIEW', $event)"
                                          /> 
                                          <!-- :disabled="opt.All == true" -->
                                  </td>
                                   <td class="text-start" > 
                                      <v-checkbox
                                          v-model="opt.Add"
                                          label="" 
                                         @change="CheckIndivisualOption(item.Section, opt.Option, 'ADD',$event)"
                                          /> 
                                  </td>
                                   <td class="text-start" > 
                                      <v-checkbox
                                          v-model="opt.Edit"
                                          label="" 
                                          @change="CheckIndivisualOption(item.Section, opt.Option, 'EDIT',$event)"
                                          /> 
                                  </td>
                                  <td class="text-start" > 
                                      <v-checkbox
                                          v-model="opt.Delete"
                                          label="" 
                                          @change="CheckIndivisualOption(item.Section, opt.Option, 'DELETE',$event)"
                                          /> 
                                  </td>
                                  <td class="text-start" > 
                                      <v-checkbox
                                          v-model="opt.Print"
                                          label=""
                                         @change="CheckIndivisualOption(item.Section, opt.Option, 'PRINT',$event)"
                                          /> 
                                  </td>
                                  <td class="text-start"> 
                                      <v-checkbox
                                          v-model="opt.Email"
                                          :readonly="false"
                                          label="" 
                                          :disabled="item.Section != 'CUSTOMERS' ? true : false"
                                          @change="CheckIndivisualOption(item.Section, opt.Option, 'EMAIL',$event)"

                                          /> 
                                  </td>
                              </tr>
                              </table>
                              
                              </td>
                          </template>
                           <template v-slot:data-table-expand="{item}">
                          <span v-show="item.Options != null">
                           <v-button 
                            @click="Clicked(item, item.Section)"
                            :class="item.cssExpand">
                            </v-button>
                          </span>
                         </template>
                          <template v-slot:All="{item}">
                        
                                    <!-- <v-checkbox
                                          v-model="item.SectionCheck"   
                                        @change="CheckOptions(item.Section, $event)"                                             
                                          :indeterminate="item.Indeterminate"                                
                                          label=""    
                                          
                                          /> -->
                                    <v-checkbox
                                          v-model="item.All"
                                        @change="CheckBoxAllCondition(item.Section, $event)"                                        
                                        :indeterminate="item.Indeterminate"
                                          label="" /> 

                                         
                          </template>
                          <!-- <template v-slot:All="{item}">
                          </template> -->
                          <template v-slot:View="{item}">
                        
                                    <v-checkbox
                                          v-model="item.View"
                                         @change="CheckParentNodeFunction(item.Section, 'VIEW' ,$event)"
                                          label="" 
                                           :indeterminate="item.ViewIndeterminate"
                                          
                                          /> 
                                          <!-- :disabled="item.All == true" -->
                          </template>
                          <template v-slot:Add="{item}">
                        
                                    <v-checkbox
                                          v-model="item.Add"                                         
                                          @change="CheckParentNodeFunction(item.Section, 'ADD' ,$event)"
                                        :indeterminate="item.AddIndeterminate"
                                          label="" /> 
                          </template>
                          <template v-slot:Edit="{item}">
                        
                                    <v-checkbox
                                          v-model="item.Edit"
                                          @change="CheckParentNodeFunction(item.Section, 'EDIT' ,$event)"
                                        :indeterminate="item.EditIndeterminate"
                                          label="" /> 
                          </template>
                          <template v-slot:Delete="{item}">
                        
                                    <v-checkbox
                                          v-model="item.Delete"
                                         @change="CheckParentNodeFunction(item.Section, 'DELETE' ,$event)"
                                         :indeterminate="item.DeleteIndeterminate"
                                          label="" /> 
                          </template>
                          <template v-slot:Print="{item}">
                        
                                    <v-checkbox
                                          v-model="item.Print"
                                          @change="CheckParentNodeFunction(item.Section, 'PRINT' ,$event)"
                                          :indeterminate="item.PrintIndeterminate"
                                          label="" /> 
                          </template>
                           <template v-slot:Email="{item}">
                        
                                    <v-checkbox
                                          v-model="item.Email"
                                            @change="CheckParentNodeFunction(item.Section, 'EMAIL' ,$event)"
                                            :disabled="item.Section != 'CUSTOMERS' ? true : false"
                                             :indeterminate="item.EmailIndeterminate"
                                          label="" /> 
                          </template>
                        </v-data-table>
                      </v-col>
                    </v-row>
                </div>
                 <div v-if="TabSectionName == 'CanSee'" class="s-box s-shadow--s" style="">
                    <v-row class="s-flex">
                      <v-col class="col-12 s-padding-top--none s-padding-bottom--none">
                        <!-- collapsed table  @click:row="ClickedAccessLevel"-->
                         <v-data-table 
                          :headers="headersCANSee"
                          :items="AccessLevelData"
                          :single-expand="singleExpandCANSee"
                          :expanded.sync="expandedCANSee"
                          item-key="Section"
                          show-expand
                          class="elevation-0  CustomeTableWidth"
                          hide-default-footer
                         
                        >
                          <template v-slot:expanded-item="{ headers, item }" >
                            <td :colspan="headers.length"
                              v-if="item.Options != null " style="border:none !important">
                              <table class="elevation-0 settingsRowSelect CustomeTableWidth"> 
                                <th class=""></th>   
                                <th class="text-start"></th>                               
                                <th class="text-start"></th>
                                <th class="text-start"></th>
                                <th class="text-start"></th>
                                <th class="text-start"></th>
                                <th class="text-start"></th> 
                                
                              <tr  v-for="(opt,index) in item.Options" :key="index">
                                 <td> </td>
                                 <td class="s-padding-left--s"> {{opt.Option}} </td>                                      
                                 <td  class="text-start" >       
                                                            
                                          
                                       <surf-checkbox
                                          v-model="opt.All"
                                          label="" />
                                         
                                  </td>
                                  <td class="text-start" > 
                                      <!-- <surf-radiobutton     
                                              :dataSource="AccessLevelManager"        
                                               v-model="item.Manager"                                            
                                          /> -->

                                           <surf-checkbox
                                          v-model="opt.Manager"                                         
                                          label="" />
                                  </td>
                                   <td class="text-start"> 
                                     <!-- <surf-radiobutton  
                                            :dataSource="AccessLevelPartner"            
                                            v-model="item.Partner"                                            
                                       /> -->

                                        <surf-checkbox
                                          v-model="opt.Partner"                                         
                                          label="" />
                                  </td>
                                   <td class="text-start"> 
                                      <!-- <surf-radiobutton    
                                            :dataSource="AccessLevelJustMe"                
                                            v-model="item.JustMe"                                            
                                       /> -->

                                        <surf-checkbox
                                          v-model="opt.JustMe"                                         
                                          label="" />
                                  </td>
                                  <td class="text-start"> 
                                     <!-- <surf-radiobutton    
                                            :dataSource="AccessLevelNone"                
                                            v-model="item.None"                                            
                                       /> -->
                                       <surf-checkbox
                                          v-model="opt.None"                                         
                                          label="" />
                                  </td>
                                 
                              </tr>
                              </table>
                              
                              </td>
                          </template>
                         <template v-slot:data-table-expand="{item}">
                          <span v-show="item.Section == 'Communication'">
                           <v-button 
                            @click="ClickedEvent(item)"
                            :class="cssExpand">
                            </v-button>
                          </span>
                         </template>
                          <template v-slot:All="{item}"> 
                                              
                                    <!-- <surf-radiobutton     
                                      :dataSource="AccessLevelAll"        
                                      v-model="item.All"  
                                     
                                      @change="SelectAllOptions(item.Section, item.All)"
                                    /> -->

                                    <surf-checkbox
                                          v-model="item.All"
                                         :change="SelectAllOptions(item.Section, item.All)"
                                         :disabled="item.None == true"
                                          label="" /> 
                          </template>
                          <template v-slot:Manager="{item}">                        
                                    <!-- <surf-radiobutton   
                                      :dataSource="AccessLevelManager"              
                                      v-model="item.Manager"  
                                       
                                      @change="SelectManagerOptions(item.Section, item.Manager)"                                          
                                    /> -->

                                    <surf-checkbox
                                          v-model="item.Manager"
                                         :change="SelectManagerOptions(item.Section, item.Manager)"
                                         :disabled="item.Partner == true || item.JustMe == true"
                                          label="" /> 
                          </template>
                          <template v-slot:Partner="{item}">
                                    <!-- <surf-radiobutton    
                                            :dataSource="AccessLevelPartner"           
                                            v-model="item.Partner" 
                                            
                                             @change="SelectPartnerOptions(item.Section, item.Partner)"                                              
                                    />  -->

                                      <surf-checkbox
                                          v-model="item.Partner"
                                         :change="SelectPartnerOptions(item.Section, item.Partner)"
                                         :disabled="item.Manager == true || item.JustMe == true"
                                          label="" /> 
                          </template>
                          <template v-slot:JustMe="{item}">
                                    <!-- <surf-radiobutton     
                                            :dataSource="AccessLevelJustMe"         
                                            v-model="item.JustMe" 
                                            
                                             @change="SelectJustMeOptions(item.Section, item.JustMe)"                                        
                                    />  -->

                                    <surf-checkbox
                                          v-model="item.JustMe"
                                         :change="SelectJustMeOptions(item.Section, item.JustMe)"
                                         :disabled="item.Manager == true || item.Partner == true"
                                          label="" /> 
                          </template>
                          <template v-slot:None="{item}">
                                     <!-- <surf-radiobutton      
                                            :dataSource="AccessLevelNone"        
                                            v-model="item.None"   
                                            
                                             @change="SelectNoneOptions(item.Section, item.None)"                                         
                                    />  -->

                                      <surf-checkbox
                                          v-model="item.None"
                                         :change="SelectNoneOptions(item.Section, item.None)"
                                         :disabled="item.All == true"
                                          label="" /> 
                          </template>
                          
                        </v-data-table>
                      </v-col>
                    </v-row>
                   

                </div>

                <surf-popupdialog ref="MessagePopup" :showTitle="false">
                  <template>
                    <v-container>
                      <div class="s-padding--xl pb-0">
                        <h3 class="s-margin-bottom s-text-align--center">
                          {{Message}}
                        </h3>
                      </div>
                      
                    </v-container>
                   
                  </template>
                </surf-popupdialog>

                
                <surf-popupdialog ref="showStaffs" :showTitle="true" @popupDialogEvent="staffDialogEventHandler">      
                <template>
                  <div class="s-flex s-padding--sm broHeader">
                     <div class="s-expand">
                     </div>
                  <div class="s-flex-items--center s-items-spacing--s s-padding--none" style="float:right;">
          
                        <surf-searchtextBox
                          right
                          class="s-padding--none"
                          id="txtSearch"
                          v-model="modelSearch"
                          :readonly="false"
                          :clearable="true"
                          :maxlength="200"
                          :counter="false"
                          @clear="clearSearch"
                          @clickicon="searchData"
                          @keydown="searchKeyDown"
                          label="Search"
                          single-line
                        />
                      </div>
                    </div>
                        <div class="s-padding--none">
                            <surf-grid
                             
                                      :headers="gridheaders"
                                      :items="staffData"
                                      :sort-by="sortfield"
                                      v-bind:sort-desc="sortdesc"
                                      @dataSorce="dataSorce"                                     
                                      :item-key="'ID'" 
                                      class="showStaffsAccessRight gridInline gridInlineTextOverflow"
                                      hide-default-footer
                                                                  >   
                            <template v-slot:Code="{ item }" >                                 
                                  <div  >
                                    <v-checkbox   label=""  @click="StoreStaffIDs(item.ID)"  />
                                  </div>
                            </template>
                          </surf-grid>


                        </div>

                         
                    </template>
              </surf-popupdialog>
            <!-- new UI -->
            <footer class="s-flex s-margin-top--l">
                <div class="s-expand">
                  
                 <surf-button @click.native="showStaffMembers" color="s-swatch-primary" 
                    class="s-blockWidth--15 s-button-spacing--xl" value="Who's in this group?" 
                     />
                  <!-- v-show="this.AccessGroupModel.ID != null && this.AccessGroupModel.ID != ''" -->
                </div>
                <nav class="s-items-spacing--s">
                    <surf-button @click.native="GoBack" color="s-text-size--l" 
                    class="s-blockWidth--12 s-button-spacing--xl s-border--outline" value="Cancel" />
                <!-- <v-btn  class="s-blockWidth--15 s-button-spacing--xl s-border--outline" @click="GoBack">
                    Cancel
                </v-btn> -->
                <v-btn color="s-swatch-primary" class="s-blockWidth--15 s-button-spacing--xl" 
                @click="SaveAccessRights" >
                    <span class="icon-r-save-line s-margin-right--xs"></span>Save &amp; Close
                </v-btn>
                
                  <!-- <surf-button @click.native="GoBack" color="s-text-size--l" value="Cancel" />
                      <surf-button color="s-swatch-primary s-button s-text-size--l" value="Save"
                        @click.native="SaveAccessRights" 
                        class="s-swatch-primary s-button s-text-size--xl"
                        /> -->
                <!--&amp; Continue-->
                <!-- <v-btn color="s-swatch-primary" class="s-blockWidth--15 s-button-spacing--xl">Continue<span class="icon-r-arrow-right-s-line s-margin-left--xs"></span></v-btn> -->
                </nav>
            </footer>
        </div>

        </div>
</template>
<style lang="scss">
.userAccessRight{
  .text-bold{
  font-weight: bold;
}
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

table.table {
    margin:0 auto;
    width: 98%;
    max-width: 98%;
}

.datatable-cell-wrapper {
    width: inherit;
    position: relative;
    z-index: 4;
    padding: 10px 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.datatable__expand-content .card__text {
    z-index: 3;
    position: relative;
}
.datatable-container {
    position: absolute;
    background-color: white;
    top: -50px;
    left: -14px;
    right: -14px;
    bottom: 0;
    z-index: 2;
    border:1px solid #ccc;
    box-shadow: 0 4px 5px 0 rgba(0,0,0,0.15), 0 1px 10px 0 rgba(0,0,0,0.15), 0 2px 4px -1px rgba(0,0,0,0.2);
}
.v-messages{
  display: none;
}
.v-input__slot{
  margin-bottom:0px !important;
}
.v-data-table__expanded__content{
  box-shadow: none !important;
  &>td{
    padding: 0;
    
    th{
      display: none;
    }
  }
}
.text-start{
  font-weight: bold;
}
.tableWidth{
  td {  width: 8%;
      max-width: 100px !important;
    min-width: 100px !important;
   &:first-child{
    width: 60px !important;
    max-width: 60px !important;
    min-width: 60px !important;
    padding-right: 0 !important;
  } 
     &:nth-child(2){  
       padding-left: 0px !important;
       width: 60px !important;
    max-width: 60px !important;
    min-width: 60px !important;
    padding-right: 0 !important;
    
  } 
     &:nth-child(3){     
  width: 36%;
    padding: 0 !important;
     max-width: 100px !important;
    min-width: 100px !important;
  } 
  }

}


.CustomeTableWidth{
  td { width: 7%;
      max-width: 150px !important;
    min-width: 150px !important;
   &:first-child{
      padding-left: 0px !important;
       width: 60px !important;
    max-width: 60px !important;
    min-width: 60px !important;
    padding-right: 0 !important;
  } 
      &:nth-child(2){  
     width: 30%;
    padding: 0 !important;
     max-width: 150px !important;
    min-width: 150px !important;
  } 
  
  }

}
.userAccessRightGroupLabel{
  input{
    font-size: 1.43rem;
    font-weight: 300;
  }
}

.settingsRowSelect {
    background-color: rgba(54, 188, 221, 0.07);
}

.v-input--indeterminate{
.mdi-minus-box{
  &:before{
    content: "\F375" !important;
    color: #36bcdd !important;
    font: normal normal normal 24px/1 "Material Design Icons" !important;
    top: 7px;
    position: relative;
  }
}
 }
}

.showStaffsAccessRight{
  .v-data-table__wrapper{
   table {
   th, td{
padding: 0.6rem 1.6rem !important;
   }
   }
   }
  .v-input__control{
.v-input__slot{
  margin-bottom: 0 !important;
}
.v-messages{
  display: none !important;
}
}
}

</style>
<script src='./AccessRight.js'></script>