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
                              class="s-padding-top--none userAccessRightGroupLabel">
                            </surf-textBox>
                             <div id="dvErrMsg" style="display:none">
                               <span style="color:red">Please enter access group name</span>
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
                        <!-- collapsed table -->
                       
                          <v-data-table
                          :headers="headers"
                          :items="BindAccessRightData"
                          :single-expand="singleExpand"
                          :expanded.sync="expanded"
                          item-key="Section"
                          show-expand
                          class="elevation-0 tableWidth"
                           hide-default-footer
                            @click:row="Clicked"
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
                                    <surf-checkbox style="" 
                                          v-model="opt.OptionCheck"
                                          :readonly="false"
                                          label=""
                                          :click="CheckPartial(item.Section, opt.Option,opt.OptionCheck)"
                                          
                                           />
                                  </td> 
                                  
                                 <td class=""> {{opt.Option}} </td>                                
                                
                                  <td class="text-start" > 
                                    <surf-checkbox
                                          v-model="opt.All"
                                          label="" 
                                          :click="CheckPartialAll(item.Section, opt.Option,opt.All)"
                                          />
                                  </td>
                                  <td class="text-start" > 
                                   
                                      <surf-checkbox
                                          v-model="opt.View"
                                          label=""  
                                          
                                          /> 
                                          <!-- :disabled="opt.All == true" -->
                                  </td>
                                   <td class="text-start" > 
                                      <surf-checkbox
                                          v-model="opt.Add"
                                          label="" 
                                         
                                          /> 
                                  </td>
                                   <td class="text-start" > 
                                      <surf-checkbox
                                          v-model="opt.Edit"
                                          label="" 
                                          
                                          /> 
                                  </td>
                                  <td class="text-start" > 
                                      <surf-checkbox
                                          v-model="opt.Delete"
                                          label="" 
                                          
                                          /> 
                                  </td>
                                  <td class="text-start" > 
                                      <surf-checkbox
                                          v-model="opt.Print"
                                          label=""
                                         
                                          /> 
                                  </td>
                                  <td class="text-start"> 
                                      <surf-checkbox
                                          v-model="opt.Email"
                                          :readonly="false"
                                          label="" 
                                          :disabled="item.Section != 'CUSTOMERS' ? true : false"
                                          /> 
                                  </td>
                              </tr>
                              </table>
                              
                              </td>
                          </template>
                          <template v-slot:item.SectionCheck="{item}">
                        
                                    <v-checkbox
                                          v-model="item.SectionCheck"   
                                        @change="CheckOptions(item.Section, item.SectionCheck)"                                             
                                          :indeterminate="item.Indeterminate"                                
                                          label=""                                          
                                          />


                                         
                          </template>
                          <template v-slot:item.All="{item}">
                        
                                    <surf-checkbox
                                          v-model="item.All"
                                         @change="CheckAllFunctions(item.Section, item.All)"
                                          label="" /> 
                          </template>
                          <template v-slot:item.View="{item}">
                        
                                    <surf-checkbox
                                          v-model="item.View"
                                          :change="CheckViewFunctions(item.Section, item.View)"
                                          
                                          label="" /> 
                                          <!-- :disabled="item.All == true" -->
                          </template>
                          <template v-slot:item.Add="{item}">
                        
                                    <surf-checkbox
                                          v-model="item.Add"
                                         :change="CheckAddFunctions(item.Section, item.Add)"
                                       
                                          label="" /> 
                          </template>
                          <template v-slot:item.Edit="{item}">
                        
                                    <surf-checkbox
                                          v-model="item.Edit"
                                         :change="CheckEditFunctions(item.Section, item.Edit)"
                                        
                                          label="" /> 
                          </template>
                          <template v-slot:item.Delete="{item}">
                        
                                    <surf-checkbox
                                          v-model="item.Delete"
                                          :change="CheckDeleteFunctions(item.Section, item.Delete)"
                                         
                                          label="" /> 
                          </template>
                          <template v-slot:item.Print="{item}">
                        
                                    <surf-checkbox
                                          v-model="item.Print"
                                          :change="CheckPrintFunctions(item.Section, item.Print)"
                                         
                                          label="" /> 
                          </template>
                           <template v-slot:item.Email="{item}">
                        
                                    <surf-checkbox
                                          v-model="item.Email"
                                           :change="CheckEmailFunctions(item.Section, item.Email)"
                                            :disabled="item.Section != 'CUSTOMERS' ? true : false"
                                          label="" /> 
                          </template>
                        </v-data-table>
                      </v-col>
                    </v-row>
                </div>
                 <div v-if="TabSectionName == 'CanSee'" class="s-box s-shadow--s" style="">
                    <v-row class="s-flex">
                      <v-col class="col-12 s-padding-top--none s-padding-bottom--none">
                        <!-- collapsed table -->
                         <v-data-table 
                          :headers="headersCANSee"
                          :items="AccessLevelData"
                          :single-expand="singleExpandCANSee"
                          :expanded.sync="expandedCANSee"
                          item-key="Section"
                          show-expand
                          class="elevation-0  CustomeTableWidth"
                          hide-default-footer
                          @click:row="ClickedAccessLevel"
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
                                 <td class="text-start s-padding-left--s"> {{opt.Option}} </td>                                      
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
                         
                          <template v-slot:item.All="{item}"> 
                                              
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
                          <template v-slot:item.Manager="{item}">                        
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
                          <template v-slot:item.Partner="{item}">
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
                          <template v-slot:item.JustMe="{item}">
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
                          <template v-slot:item.None="{item}">
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


                <surf-popupdialog ref="showStaffs" :showTitle="false">      
                <template>
                        <div class="s-box s-padding--none s-shadow--s">
                            <surf-grid
                            :headers="gridheaders"
                            :items="staffData"
                            :sort-by="sortfield"
                            :sort-desc="sortdesc"
                            :items-per-page="itemPerPage"
                            :noDataText="noData"
                            :page="pageno"
                            :item-key="'ID'"       
                            >   
                            <template v-slot:AssignTo="{ item }">
                                  <surf-checkbox style="" 
                                          v-model="item.ID"
                                          :readonly="false"
                                          label=""
                                          
                                          
                                           />
                                </template>
                            
                            <template v-slot:Code="{ item }">
                                  <!-- <a
                                    v-html="item.Code"
                                    class="textGray55 s-text-size--s"
                                    href="javascript:void(0)"
                                  ></a> -->
                                  <div class="s-avatar s-text-size--xs" v-text="item.Code"></div>
                                </template>
                                    
                          </surf-grid>
                          
                        </div>
                    </template>

              </surf-popupdialog>

            <!-- new UI -->
            <footer class="s-flex s-margin-top--l">
                <div class="s-expand">

                <surf-button @click.native="showStaffMembers" color="s-text-size--l" 
                    class="s-blockWidth--12 s-button-spacing--xl s-border--outline" value="Assign Staff" />


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
.tableWidth{
  td {width:8%;
   &:first-child{
   // width:4%;
    padding-right: 0 !important;
  } 
     &:nth-child(2){  
       padding-left: 0px !important;
    //width: 2% !important;
    
  } 
     &:nth-child(3){    
       width: 28%; 
    //width: 15% !important;
    padding: 0 !important;
  } 
  }

}



.CustomeTableWidth{
  td {width:15%;
   &:first-child{
    width:3%;
    padding-right: 0 !important;
  } 
      &:nth-child(2){  
       padding-left: 10px !important;   
    width: 50px;
  } 
  
  }

}
.userAccessRightGroupLabel{
  input{
    font-size:15px !important;
    // font-weight: 600;
  }
}

.settingsRowSelect {
    background-color: rgba(54, 188, 221, 0.07);
}


.indeterminate-fill:before {
    content: "\EB83";
}
}
</style>
<script src='./AccessRight.js'></script>