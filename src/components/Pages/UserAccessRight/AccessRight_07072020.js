
export default {
  data(){
      return{
        AccessGroupModel: { ID:"", Description: ""},          
        AccessGroupID : "",
        AccessGroupDesc: "",
        TabSectionName:"",
        TabComponentName:"",
        Message:"",

//------Start What Can I Do TAB---------------//
      expanded: [],
      singleExpand: false,
      headers: [

        { text: '', value: 'data-table-expand', width: '8%' },
        {
          text: '',
          align: 'start',
          sortable: false,
          value: 'SectionCheck',
          width: '8%'
        },
        {
          text: '',
          align: 'start',
          sortable: false,
          value: 'Section',
          width: '28%'
        },
        // { text: '', value: 'data-table-expand' },
        { text: 'ALL', value: 'All', width: '8%' },
        { text: 'VIEW', value: 'View', width: '8%' },
        { text: 'ADD', value: 'Add' , width: '8%'},
        { text: 'EDIT', value: 'Edit' , width: '8%'},
        { text: 'DELETE', value: 'Delete', width: '8%' },
        { text: 'PRINT', value: 'Print', width: '8%' },
        { text: 'EMAIL', value: 'Email', width: '8%' },
        
        
       
      ],

      BindAccessRightData:[],
      
      AccessRightData: [
      {
        SectionCheck:false,
        Section: 'SETTINGS',
        Options: [
          {
              OptionCheck:false,
              Option: 'Accounting Periods',
              All: false,
              View: false,
              Add: false,
              Edit: false,
              Delete: false,
              Print: false,
              Email: false
             
          },
          {
              OptionCheck:false,
              Option: 'VAT Setup',
              All: false,
              View: false,
              Add: false,
              Edit: false,
              Delete: false,
              Print: false,
              Email: false
          },
          {
              OptionCheck:false,
              Option: 'Practice Details',
              All: false,
              View: false,
              Add: false,
              Edit: false,
              Delete: false,
              Print: false,
              Email: false
          },
           {
              OptionCheck:false,
              Option: 'Dashboard Settings',
              All: false,
              View: false,
              Add: false,
              Edit: false,
              Delete: false,
              Print: false,
              Email: false
          },
         
            {
              OptionCheck:false,
              Option: 'Time Ledger',
              All: false,
              View: false,
              Add: false,
              Edit: false,
              Delete: false,
              Print: false,
              Email: false
          },
          {
            OptionCheck:false,
            Option: 'Reports',
            All: false,
            View: false,
            Add: false,
            Edit: false,
            Delete: false,
            Print: false,
            Email: false
        },
           {
              OptionCheck:false,
              Option: 'Quotation',
              All: false,
              View: false,
              Add: false,
              Edit: false,
              Delete: false,
              Print: false,
              Email: false
          },
          {
              OptionCheck:false,
              Option: 'Templates',
              All: false,
              View: false,
              Add: false,
              Edit: false,
              Delete: false,
              Print: false,
              Email: false
          },
          {
              OptionCheck:false,
              Option: 'Security Groups',
              All: false,
              View: false,
              Add: false,
              Edit: false,
              Delete: false,
              Print: false,
              Email: false
          },
          {
            OptionCheck:false,
            Option: 'My Subcription',
            All: false,
            View: false,
            Add: false,
            Edit: false,
            Delete: false,
            Print: false,
            Email: false
          },
          {
            OptionCheck:false,
            Option: 'Year End',
            All: false,
            View: false,
            Add: false,
            Edit: false,
            Delete: false,
            Print: false,
            Email: false
          },
          {
            OptionCheck:false,
            Option: 'Invoice Settings',
            All: false,
            View: false,
            Add: false,
            Edit: false,
            Delete: false,
            Print: false,
            Email: false
          },
          {
            OptionCheck:false,
            Option: 'Codes',
            All: false,
            View: false,
            Add: false,
            Edit: false,
            Delete: false,
            Print: false,
            Email: false
          },



        ],
        
        
        All: false,
        View: false,
        Add: false,
        Edit: false,
        Delete: false,
        Print: false,
        Email: false
        ,Indeterminate:false
      },
       
        {
          SectionCheck:false,
          Section: 'CUSTOMERS',
          Options:
          [
            {
                OptionCheck:false,
                Option: 'Services',
                All: false,
                View: false,
                Add: false,
                Edit: false,
                Delete: false,
                Print: false,
                Email: false
            },
            {
                OptionCheck:false,
                Option: 'People',
                All: false,
                View: false,
                Add: false,
                Edit: false,
                Delete: false,
                Print: false,
                Email: false
            },
            {
                OptionCheck:false,
                Option: 'AML',
                All: false,
                View: false,
                Add: false,
                Edit: false,
                Delete: false,
                Print: false,
                Email: false
            },
             {
                OptionCheck:false,
                Option: 'Engagement',
                All: false,
                View: false,
                Add: false,
                Edit: false,
                Delete: false,
                Print: false,
                Email: false
            },
              {
                OptionCheck:false,
                Option: 'Addressess',
                All: false,
                View: false,
                Add: false,
                Edit: false,
                Delete: false,
                Print: false,
                Email: false
            },
             {
                OptionCheck:false,
                Option: 'Sales Transaction History',
                All: false,
                View: false,
                Add: false,
                Edit: false,
                Delete: false,
                Print: false,
                Email: false
            },
            {
                OptionCheck:false,
                Option: 'Time Transaction History',
                All: false,
                View: false,
                Add: false,
                Edit: false,
                Delete: false,
                Print: false,
                Email: false
            },


          ],
          
          All: false,
          View: false,
          Add: false,
          Edit: false,
          Delete: false,
          Print: false,
          Email: false
          ,Indeterminate:false

        },
        {
          SectionCheck:false,
          Section: 'STAFF',
          Options:null,
          
          
          All: false,
          View: false,
          Add: false,
          Edit: false,
          Delete: false,
          Print: false,
          Email: false
          ,Indeterminate:false
        },
        {
          SectionCheck:false,
          Section: 'TIME',
          Options:
          [
            {
                OptionCheck:false,
                Option: 'Expense',
                All: false,
                View: false,
                Add: false,
                Edit: false,
                Delete: false,
                Print: false,
                Email: false
            },
            

          ],
          
          All: false,
          View: false,
          Add: false,
          Edit: false,
          Delete: false,
          Print: false,
          Email: false
          ,Indeterminate:false
        },
        {
          SectionCheck:false,
          Section: 'SALES',
          Options:
          [
            {
              OptionCheck:false,
                Option: 'Sales Invoice',
                All: false,
                View: false,
                Add: false,
                Edit: false,
                Delete: false,
                Print: false,
                Email: false
            },
            {
              OptionCheck:false,
                Option: 'Sales Credit Note',
                All: false,
                View: false,
                Add: false,
                Edit: false,
                Delete: false,
                Print: false,
                Email: false
            },
            {
              OptionCheck:false,
                Option: 'Sales Quotation',
                All: false,
                View: false,
                Add: false,
                Edit: false,
                Delete: false,
                Print: false,
                Email: false
            },

          ],
          
          All: false,
          View: false,
          Add: false,
          Edit: false,
          Delete: false,
          Print: false,
          Email: false
          ,Indeterminate:false
        },
        {
          SectionCheck:false,
          Section: 'COMMUNICATIONS',
          Options:
          [
            {
              OptionCheck:false,
                Option: 'Email',
                All: false,
                View: false,
                Add: false,
                Edit: false,
                Delete: false,
                Print: false,
                Email: false
            },
            {
              OptionCheck:false,
                Option: 'Phone',
                All: false,
                View: false,
                Add: false,
                Edit: false,
                Delete: false,
                Print: false,
                Email: false
            },
            {
              OptionCheck:false,
                Option: 'Calender',
                All: false,
                View: false,
                Add: false,
                Edit: false,
                Delete: false,
                Print: false,
                Email: false
            },
             {
              OptionCheck:false,
                Option: 'Tasks',
                All: false,
                View: false,
                Add: false,
                Edit: false,
                Delete: false,
                Print: false,
                Email: false
            },
             {
              OptionCheck:false,
                Option: 'Memos',
                All: false,
                View: false,
                Add: false,
                Edit: false,
                Delete: false,
                Print: false,
                Email: false
            },

          ],
          
          All: false,
          View: false,
          Add: false,
          Edit: false,
          Delete: false,
          Print: false,
          Email: false
          ,Indeterminate:false
        },
        {
          SectionCheck:false,
          Section: 'REPORTS',
          Options: null,
          
          
          All: false,
          View: false,
          Add: false,
          Edit: false,
          Delete: false,
          Print: false,
          Email: false
          ,Indeterminate:false

        },
        {
          SectionCheck:false,
          Section: 'CSS',
          Options:null,
          
          
          All: false,
          View: false,
          Add: false,
          Edit: false,
          Delete: false,
          Print: false,
          Email: false
          ,Indeterminate:false
        },

      ], //End AccessRightData
        
//--------End What Can I Do TAB------------//

//-------Start What Can I See TAB----------//

        // timeManageViewOptions: [
        //   {
        //     text: "Week View",
        //     value: "1"
        //   },
        //   {
        //     text: "Staff View",
        //     value: "2"
        //   }
        // ],

        // AccessLevelAll:[
        //                 {  text:'', value: 0 },
        //                 // {  text:'Manager', value:1 },
        //                 // {  text:'Partner', value:2 },
        //                 // {  text:'JustMe', value:3 },
        //                 // {  text:'None', value:0 },
        // ],
        
        // AccessLevelManager:[
        //   {
        //     text:'',
        //     value: 1
        //   }
        // ],
        // AccessLevelPartner:[
        //   {
        //     text:'',
        //     value:2
        //   }
        // ],
        // AccessLevelJustMe:[
        //   {
        //     text:'',
        //     value: 3
        //   }
        // ],
        // AccessLevelNone:[
        //   {
        //     text:'',
        //     value:4
        //   }
        // ],
        isAllChecked : false,
        expandedCANSee: [],
        singleExpandCANSee: false,
        headersCANSee: [
          { text: '', value: 'data-table-expand' },
          {
            text: '',
            align: 'start',
            sortable: false,
            value: 'Section',
          },
         
          { text: 'ALL', value: 'All' },
          { text: 'I AM MANAGER', value: 'Manager' },
          { text: 'I AM PARTNER', value: 'Partner' },
          { text: 'JUST ME', value: 'JustMe' },
          { text: 'NONE', value: 'None' },
        
        ],


        BindAccessLevelData:[],

        AccessLevelData: [
          
          {
            
            Section: 'Customer',
            Options: null,              
            All: false,
            Manager: false,
            Partner: false,
            JustMe: false,
            None: false,
           

          },
          {
            
            Section: 'Services',
            Options: null,              
            All: false,
            Manager: false,
            Partner: false,
            JustMe: false,
            None: false,
           

          },  
          {
            
            Section: 'Staff',
            Options: null,              
            All: false,
            Manager: false,
            Partner: false,
            JustMe: false,
            None: false,
           

          },  
          // // {
            
          // //   Section: 'TIME',
          // //   Options: null,              
          // //   All: false,
          // //   Manager: false,
          // //   Partner: false,
          // //   JustMe: false,
          // //   None: false,
           

          // // }, 
          // // {
            
          // //   Section: 'SALES',
          // //   Options: null,              
          // //   All: false,
          // //   Manager: false,
          // //   Partner: false,
          // //   JustMe: false,
          // //   None: false,
           

          // // },  
         {
            
            Section: 'Communication',
            Options: 
            [
              {
                  Option: 'Email',
                  All: false,
                  Manager: false,
                  Partner: false,
                  JustMe: false,
                  None: false,
              },
              {
                  Option: 'Phone',
                  All: false,
                  Manager: false,
                  Partner: false,
                  JustMe: false,
                  None: false,
              },
              {
                  Option: 'Calender',
                  All: false,
                  Manager: false,
                  Partner: false,
                  JustMe: false,
                  None: false,
              },
              {
                  Option: 'Tasks',
                  All: false,
                  Manager: false,
                  Partner: false,
                  JustMe: false,
                  None: false,
              },
              {
                  Option: 'Documents',
                  All: false,
                  Manager: false,
                  Partner: false,
                  JustMe: false,
                  None: false,
              },

            ]
            ,            
            All: false,
            Manager: false,
            Partner: false,
            JustMe: false,
            None: false,
           

          }, 
          // {
            
          //   Section: 'REPORTS',
          //   Options: null,              
          //   All: false,
          //   Manager: false,
          //   Partner: false,
          //   JustMe: false,
          //   None: false,
           

          // },  
          // {
            
          //   Section: 'CSS',
          //   Options: null,              
          //   All: false,
          //   Manager: false,
          //   Partner: false,
          //   JustMe: false,
          //   None: false,
           

          // },   

        ],


//-------End What Can I See TAB----------//
//-------STAFF---------------------------//
  //staff grid only
  gridheaders: [
    {
      text: "ID",
      align: "left",
      sortable: false,
      value: "ID",
      display: false,
      type: "text",
      class: "cellHidden"
    },
    {
      text: "",
      align: "left",
      sortable: true,
      value: "AssignTo",
      display: true,
      type: "Boolean",
      width: "5%"
    },
    {
      text: "Code",
      align: "left",
      sortable: true,
      value: "Code",
      display: true,
      type: "text",
      width: "5%"
    },
    {
      text: "Name",
      align: "left",
      sortable: true,
      value: "Name",
      display: true,
      type: "text",
      class: "s-width--expand",
      width: "30%"
    },
    
  ],
  staffData: [],
  sortfield: "Code",
  sortdesc: false,
  pageno: 1,
  itemlength: -1,
  selectgridchecklist: [],
  showGrid: false,
  noData: "",
  menuitems: [],
  itemlength: 0,
  itemPerPage: 300,
  menuitems: [],

  //
  // other variables
  chkActiveStaff: false,
  modelSearch: "",
  isSearchPress: false,
  //menu related
  menuClickedItem: "",

  //----------------------------------
  totalStaffCount: ""

//-------END STAFF-----------------------//

            
      } //End return
  },
  methods:{
      openTab(tab, e) {
         
          if (tab == "CanDo") {
              this.TabSectionName = "CanDo"
              this.TabComponentName = "CanDoComponent"
          }
          if (tab == "CanSee") {

              this.TabSectionName = "CanSee"
              this.TabComponentName = "CanSeeComponent"
          }
      },
      GoBack(){
        let vm = this;
        if(vm.$session.get("AccessRightID") != null 
        || vm.$session.get("AccessRightID") != undefined)
        {
          vm.$session.set("AccessRightID", null);
        }

        if(vm.$session.get("AccessRightDesc") != null 
          || vm.$session.get("AccessRightDesc") != undefined)
        {
          vm.$session.set("AccessRightDesc", null);
        }
          this.$router.push('AccessRight')
      },

      DoSomething(section ,value){
        // alert('section ===>' + section)
        // alert('val === > '+ value)
        console.log('View Clicked in section  ===>  ', section);
        console.log('value is ===> ', value);
      },
      CheckOptions(sectionName, sectionCheck){
        let vm = this;
        var index = -1;
        var val =sectionName;
        var countTotalOption= 0;
        var countSelectedOption = 0;
        if(sectionCheck == true){
         
          var filteredObj = vm.AccessRightData.find(function(item, i)
          {
            if(item.Section == val)
            {
                 index = i;
                 var optionArr = vm.AccessRightData[index].Options;
                 //countTotalOption = optionArr.length;
                 if(optionArr != null && optionArr.length > 0){
                    for(var i = 0; i<optionArr.length; i++){
                      optionArr[i].OptionCheck = true;
                     // countSelectedOption = countSelectedOption + 1;
                    }
                 }

               
              
            }
          });

        }
        else{
          var filteredObj = vm.AccessRightData.find(function(item, i)
          {
            if(item.Section == val)
            {
                 index = i;
                 var optionArr = vm.AccessRightData[index].Options;
                 if(optionArr != null && optionArr.length > 0){
                    for(var i = 0; i<optionArr.length; i++){
                      optionArr[i].OptionCheck = false;
                    }
                 }
              
            }
          });
          
        }
      },  
      
      CheckPartial(sectionName, optionName, checkCondition){
        let vm = this;
        var index = -1;
        var val =sectionName;
        var countTotalOption= 0;
        var countSelectedOption = 0;
        //alert('section ===>'+sectionName);
       
        if(checkCondition == true)
        {

          console.log('section name in partial === >', sectionName);
          var filteredObj = vm.BindAccessRightData.find(function(item, i)
          {
            if(item.Section == val)
            {
                 index = i;
                 var optionArr = vm.BindAccessRightData[index].Options;
                 //countTotalOption = optionArr.length;
                 if(optionArr != null && optionArr.length > 0){
                    for(var i = 0; i<optionArr.length; i++)
                    {
  
                      if(optionArr[i].Option == optionName)
                      {
                        optionArr[i].OptionCheck = true;
                        break;
                      }
                     
                    }
                 }
  
  
              
             }
          });
        }
        else
        {
          console.log('section name in partial === >', sectionName);
          var filteredObj = vm.BindAccessRightData.find(function(item, i)
          {
            if(item.Section == val)
            {
                 index = i;
                 var optionArr = vm.BindAccessRightData[index].Options;
                 //countTotalOption = optionArr.length;
                 if(optionArr != null && optionArr.length > 0){
                    for(var i = 0; i<optionArr.length; i++)
                    {
  
                      if(optionArr[i].Option == optionName)
                      {
                        
                          optionArr[i].OptionCheck=false;
                          break;
                        
                      }
                     
                    }
                 }
  
  
              
             }
          });
        }

        var filteredObj44 = vm.BindAccessRightData.find(function(item, i)
        {
          if(item.Section == val)
          {
               index = i;
               var optionArr = vm.BindAccessRightData[index].Options;
               countTotalOption = optionArr.length;
               if(optionArr != null && optionArr.length > 0){
                  for(var i = 0; i<optionArr.length; i++)
                  {

                    if(optionArr[i].OptionCheck == true)
                    {
                      countSelectedOption = countSelectedOption + 1;
                    }
                   
                  }
               }

              // console.log('Total option === > ', countTotalOption)
               //console.log('selected option count ===>', countSelectedOption)


               if(countSelectedOption < countTotalOption)
               {
                 item.Indeterminate = true;
                 //item.SectionCheck=true;

               }
               else
               {
                 item.SectionCheck = true;
                 item.Indeterminate=false;
               }
            
           }
        });




      },

      CheckPartialAll(sectionName, optionName, checkCondition){
        let vm = this;
        var index = -1;
        var val =sectionName;
       
       
        if(checkCondition == true)
        {

          
          var filteredObj = vm.BindAccessRightData.find(function(item, i)
          {
            if(item.Section == val)
            {
                 index = i;
                 var optionArr = vm.BindAccessRightData[index].Options;
                 //countTotalOption = optionArr.length;
                 if(optionArr != null && optionArr.length > 0){
                    for(var i = 0; i<optionArr.length; i++)
                    {
  
                      if(optionArr[i].Option == optionName)
                      {
                        //optionArr[i].OptionCheck = true;
                        optionArr[i].View = true;
                        optionArr[i].Add = true;
                        optionArr[i].Edit = true;
                        optionArr[i].Delete = true;
                        optionArr[i].Print = true;
                        if(sectionName == "CUSTOMERS")
                        {
                          optionArr[i].Email = true;
                        }
                        break;
                      }
                     
                    }
                 }


             }
          });
        }
        else
        {
          var filteredObj = vm.BindAccessRightData.find(function(item, i)
          {
            if(item.Section == val)
            {
                 index = i;
                 var optionArr = vm.BindAccessRightData[index].Options;
                 //countTotalOption = optionArr.length;
                 if(optionArr != null && optionArr.length > 0){
                    for(var i = 0; i<optionArr.length; i++)
                    {
  
                      if(optionArr[i].Option == optionName)
                      {
                        //optionArr[i].OptionCheck = true;
                        optionArr[i].View = false;
                        optionArr[i].Add = false;
                        optionArr[i].Edit = false;
                        optionArr[i].Delete = false;
                        optionArr[i].Print = false;
                        if(sectionName == "CUSTOMERS")
                        {
                          optionArr[i].Email = false;
                        }

                        break;
                      }
                     
                    }
                 }
                 item.All=false;

             }
          });
        }

        



      },

      CheckAllFunctions(sectionName, allCheckCondition){
        
        let vm = this;
        var index = -1;
        var val =sectionName;

       
        if(allCheckCondition==true){
          
          var filteredObj = vm.BindAccessRightData.find(function(item, i)
          {
            if(item.Section == val)
            {
                 index = i;
                 var optionArr = vm.BindAccessRightData[index].Options;
                 if(optionArr != null && optionArr.length > 0){
                    for(var i = 0; i<optionArr.length; i++){
                      optionArr[i].All = true;
                      optionArr[i].View = true;
                      optionArr[i].Add = true;
                      optionArr[i].Edit = true;
                      optionArr[i].Delete = true;
                      optionArr[i].Print = true;
                      if(item.Section == "CUSTOMERS")
                      optionArr[i].Email = true;
                    }
                    
                 }

                 item.View = true;
                 item.Add = true;
                 item.Edit = true;
                 item.Delete = true;
                 item.Print = true;
                 if(item.Section == "CUSTOMERS")
                 item.Email = true;
            }
          });
        }
        else{
         
          var filteredObj = vm.BindAccessRightData.find(function(item, i)
          {
            if(item.Section == val)
            {
                 index = i;
                 var optionArr = vm.BindAccessRightData[index].Options;
                 if(optionArr != null && optionArr.length > 0){
                    for(var i = 0; i<optionArr.length; i++){
                      optionArr[i].All = false;
                      
                     
                      // optionArr[i].View = false;
                      
                      // optionArr[i].Add = false;
                      
                      // optionArr[i].Edit = false;
                      
                      // optionArr[i].Delete = false;
                      
                      // optionArr[i].Print = false;
                      
                      // optionArr[i].Email = false;

                     }
                   
                 }
                 
                 
                //  item.View = false;
                 
                //  item.Add = false;
               
                //  item.Edit = false;
                 
                //  item.Delete = false;
                 
                //  item.Print = false;
                 
                //  item.Email = false;
              
            }
          });

        }
        //console.log('check all called');
      },

      //CheckAllFunctions(sectionName, checkCondition){        
      // await this.CheckFunction(sectionName, 'ALL', checkCondition); 
        // this.CheckFunction(sectionName, 'VIEW', checkCondition);
        // this.CheckFunction(sectionName, 'ADD', checkCondition);
        // this.CheckFunction(sectionName, 'EDIT', checkCondition);
        // this.CheckFunction(sectionName, 'DELETE', checkCondition);
        // this.CheckFunction(sectionName, 'PRINT', checkCondition);
        // this.CheckFunction(sectionName, 'EMAIL', checkCondition);
      //},
     CheckViewFunctions(sectionName, checkCondition){         
      
      let vm = this;
      var index = -1;
      var val =sectionName;
      
      


      if(checkCondition == true){

        //vm.isAllChecked = false;
       
        var filteredObj = vm.BindAccessRightData.find(function(item, i)
        {
          if(item.Section == val)
          {
               index = i;
               var optionArr = vm.BindAccessRightData[index].Options;
               if(optionArr != null && optionArr.length > 0){
                  for(var i = 0; i<optionArr.length; i++){
                    optionArr[i].View = true;
                  }
               }
               item.View = true;
          }
        });

      }
      else
      {
            var filteredObj = vm.BindAccessRightData.find(function(item, i)
            {
              if(item.Section == val)
              {
                  index = i;
                  var optionArr = vm.BindAccessRightData[index].Options;
                  if(optionArr != null && optionArr.length > 0){
                      for(var i = 0; i<optionArr.length; i++){
                        if(optionArr[i].Add == false && optionArr[i].Edit == false && optionArr[i].Delete == false
                          && optionArr[i].Print == false)
                        optionArr[i].View = false;
                      }
                  }

                  if(item.Add == false && item.Edit == false && item.Delete == false
                    && item.Print == false)
                    item.View = false;
                    else
                    item.View =true;
                
              }
            });          
        }
      },
      CheckAddFunctions(sectionName, checkCondition){         
        //await  this.CheckFunction(sectionName, 'ADD', checkCondition);
        
      let vm = this;
      var index = -1;
      var val =sectionName;
      if(checkCondition == true){
       
        var filteredObj = vm.BindAccessRightData.find(function(item, i)
        {
          if(item.Section == val)
          {
               index = i;
               var optionArr = vm.BindAccessRightData[index].Options;
               if(optionArr != null && optionArr.length > 0){
                  for(var i = 0; i<optionArr.length; i++){
                    optionArr[i].Add = true;
                    if(optionArr[i].View==false){
                      optionArr[i].View=true;
                    }
                  }
               }
            
               if(item.View == false){
                 item.View =true;
               }
          }
        });

      }
      else
      {
            var filteredObj = vm.BindAccessRightData.find(function(item, i)
            {
              if(item.Section == val)
              {
                  index = i;
                  var optionArr = vm.BindAccessRightData[index].Options;
                  if(optionArr != null && optionArr.length > 0){
                      for(var i = 0; i<optionArr.length; i++){
                        optionArr[i].Add = false;
                      }
                  }

                  
                
              }
            });          
        }
      },
      CheckEditFunctions(sectionName, checkCondition){         
        //await  this.CheckFunction(sectionName, 'EDIT', checkCondition);
        
      let vm = this;
      var index = -1;
      var val =sectionName;
      if(checkCondition == true){
       
        var filteredObj = vm.BindAccessRightData.find(function(item, i)
        {
          if(item.Section == val)
          {
               index = i;
               var optionArr = vm.BindAccessRightData[index].Options;
               if(optionArr != null && optionArr.length > 0){
                  for(var i = 0; i<optionArr.length; i++){
                    optionArr[i].Edit = true;
                    if(optionArr[i].View==false){
                      optionArr[i].View=true;
                    }
                  }
               }

               if(item.View == false){
                item.View =true;
              }
            
          }
        });

      }
      else
      {
            var filteredObj = vm.BindAccessRightData.find(function(item, i)
            {
              if(item.Section == val)
              {
                  index = i;
                  var optionArr = vm.BindAccessRightData[index].Options;
                  if(optionArr != null && optionArr.length > 0){
                      for(var i = 0; i<optionArr.length; i++){
                        optionArr[i].Edit = false;
                      }
                  }
                
              }
            });          
        }
      },
      CheckDeleteFunctions(sectionName, checkCondition){         
          //await  this.CheckFunction(sectionName, 'DELETE', checkCondition);
          
      let vm = this;
      var index = -1;
      var val =sectionName;
      if(checkCondition == true){
       
        var filteredObj = vm.BindAccessRightData.find(function(item, i)
        {
          if(item.Section == val)
          {
               index = i;
               var optionArr = vm.BindAccessRightData[index].Options;
               if(optionArr != null && optionArr.length > 0){
                  for(var i = 0; i<optionArr.length; i++){
                    optionArr[i].Delete = true;
                    if(optionArr[i].View==false){
                      optionArr[i].View=true;
                    }
                  }
               }

               if(item.View == false){
                item.View =true;
              }
            
          }
        });

      }
      else
      {
            var filteredObj = vm.BindAccessRightData.find(function(item, i)
            {
              if(item.Section == val)
              {
                  index = i;
                  var optionArr = vm.BindAccessRightData[index].Options;
                  if(optionArr != null && optionArr.length > 0){
                      for(var i = 0; i<optionArr.length; i++){
                        optionArr[i].Delete = false;
                      }
                  }
                
              }
            });          
        }
      },
      CheckPrintFunctions(sectionName, checkCondition){         
        //await this.CheckFunction(sectionName, 'PRINT', checkCondition);
        
      let vm = this;
      var index = -1;
      var val =sectionName;
      if(checkCondition == true){
       
        var filteredObj = vm.BindAccessRightData.find(function(item, i)
        {
          if(item.Section == val)
          {
               index = i;
               var optionArr = vm.BindAccessRightData[index].Options;
               if(optionArr != null && optionArr.length > 0){
                  for(var i = 0; i<optionArr.length; i++){
                    optionArr[i].Print = true;
                    if(optionArr[i].View==false){
                      optionArr[i].View=true;
                    }
                  }
               }

               if(item.View == false){
                item.View =true;
              }
            
          }
        });

      }
      else
      {
            var filteredObj = vm.BindAccessRightData.find(function(item, i)
            {
              if(item.Section == val)
              {
                  index = i;
                  var optionArr = vm.BindAccessRightData[index].Options;
                  if(optionArr != null && optionArr.length > 0){
                      for(var i = 0; i<optionArr.length; i++){
                        optionArr[i].Print = false;
                      }
                  }
                
              }
            });          
        }
      },
      CheckEmailFunctions(sectionName, checkCondition){         
         //await this.CheckFunction(sectionName, 'EMAIL', checkCondition);

         
      let vm = this;
      var index = -1;
      var val =sectionName;
      if(checkCondition == true){
       
        var filteredObj = vm.BindAccessRightData.find(function(item, i)
        {
          if(item.Section == val)
          {
               index = i;
               var optionArr = vm.BindAccessRightData[index].Options;
               if(optionArr != null && optionArr.length > 0){
                  for(var i = 0; i<optionArr.length; i++){
                    optionArr[i].Email = true;
                  }
               }
            
          }
        });

      }
      else
      {
            var filteredObj = vm.BindAccessRightData.find(function(item, i)
            {
              if(item.Section == val)
              {
                  index = i;
                  var optionArr = vm.BindAccessRightData[index].Options;
                  if(optionArr != null && optionArr.length > 0){
                      for(var i = 0; i<optionArr.length; i++){
                        optionArr[i].Email = false;
                      }
                  }
                
              }
            });          
        }
      },


   async  CheckFunction(sectionName, functionName, checkCondition){
        let vm = this;
        var index = -1;
        var val =sectionName;
        if(checkCondition == true){
            var filteredObj = vm.AccessRightData.find(function(item, i)
            {
              if(item.Section == val)
              {
                   index = i;
                   var optionArr = vm.AccessRightData[index].Options;
                   if(optionArr != null && optionArr.length > 0){
                      for(var i = 0; i<optionArr.length; i++){
                        if(functionName == 'ALL'){
                          optionArr[i].All = true;
                          
                        }
                        if(functionName == 'VIEW'){
                          optionArr[i].View = true;
                          
                        }
                        if(functionName == 'ADD'){
                          optionArr[i].Add = true;
                          
                        }
                        if(functionName == 'EDIT'){
                          optionArr[i].Edit = true;
                          
                        }
                        if(functionName == 'DELETE'){
                          optionArr[i].Delete = true;
                          
                        }
                        if(functionName == 'PRINT'){
                          optionArr[i].Print = true;
                          
                        }
                        if(functionName == 'EMAIL'){
                          optionArr[i].Email = true;
                          
                        }
                        
                      }
                   }
                
              }
            });

          

        }//End if

        else{

          
            var filteredObj = vm.AccessRightData.find(function(item, i)
            {
              if(item.Section == val)
              {
                   index = i;
                   var optionArr = vm.AccessRightData[index].Options;
                   if(optionArr != null && optionArr.length > 0){
                      for(var i = 0; i<optionArr.length; i++){
                        if(functionName == 'ALL'){
                          //optionArr[i].All = false;
                          
                        }
                        if(functionName == 'VIEW'){
                          //optionArr[i].View = false;
                          
                        }
                        if(functionName == 'ADD'){
                          //optionArr[i].Add = false;
                          
                        }
                        if(functionName == 'EDIT'){
                          //optionArr[i].Edit = false;
                          
                        }
                        if(functionName == 'DELETE'){
                          //optionArr[i].Delete = false;
                          
                        }
                        if(functionName == 'PRINT'){
                          //optionArr[i].Print = false;
                         
                        }
                        if(functionName == 'EMAIL'){
                         // optionArr[i].Email = false;
                          
                        }
                        
                      }
                   }
                
              }
            });            

        }//End else
      },
      
    async  UnCheckOptions(sectionName, functionName){
        
        let vm = this;
        var index = -1;
        var val =sectionName;
        var filteredObj = vm.AccessRightData.find(function(item, i)
        {
          if(item.Section == val)
          {
               index = i;
               var optionArr = vm.AccessRightData[index].Options;
               if(optionArr != null && optionArr.length > 0){
                  for(var i = 0; i<optionArr.length; i++){
                    if(functionName == 'ALL'){
                      optionArr[i].All = false;
                      
                    }
                    if(functionName == 'VIEW'){
                      optionArr[i].View = false;
                      
                    }
                    if(functionName == 'ADD'){
                      optionArr[i].Add = false;
                      
                    }
                    if(functionName == 'EDIT'){
                      optionArr[i].Edit = false;
                      
                    }
                    if(functionName == 'DELETE'){
                      optionArr[i].Delete = false;
                      
                    }
                    if(functionName == 'PRINT'){
                     optionArr[i].Print = false;
                     
                    }
                    if(functionName == 'EMAIL'){
                      optionArr[i].Email = false;
                      
                    }
                    
                  }
               }
            
          }
        }); 
      },


      Clicked(item){
        //alert('ITEM  ====' + item)
        let vm = this;
        vm.expanded.push(item)
      },
      ClickedAccessLevel(item){
        //alert('ITEM  ====' + item)
        let vm = this;
        vm.expandedCANSee.push(item)
      },

      //-------What Can I See -----//  
      SelectAllOptions(sectionName, allCheckCondition){

        let vm = this;
        var index = -1;
        var val =sectionName;
        if(allCheckCondition==true){
          var filteredObj = vm.AccessLevelData.find(function(item, i)
          {
            if(item.Section == val)
            {
                 index = i;
                 var optionArr = vm.AccessLevelData[index].Options;
                 if(optionArr != null && optionArr.length > 0){
                    for(var i = 0; i<optionArr.length; i++){
                      optionArr[i].All = true;
                      // optionArr[i].View = true;
                      // optionArr[i].Add = true;
                      // optionArr[i].Edit = true;
                      // optionArr[i].Delete = true;
                      // optionArr[i].Print = true;
                      // optionArr[i].Email = true;
                    }
                    
                 }

                  //item.None = false;
                //  item.Add = true;
                //  item.Edit = true;
                //  item.Delete = true;
                //  item.Print = true;
                //  item.Email = true;
            }
          });
        }
        else{

          var filteredObj = vm.AccessLevelData.find(function(item, i)
          {
            if(item.Section == val)
            {
                 index = i;
                 var optionArr = vm.AccessLevelData[index].Options;
                 if(optionArr != null && optionArr.length > 0){
                    for(var i = 0; i<optionArr.length; i++){
                      optionArr[i].All = false;
                      // optionArr[i].View = false;
                      // optionArr[i].Add = false;
                      // optionArr[i].Edit = false;
                      // optionArr[i].Delete = false;
                      // optionArr[i].Print = false;
                      // optionArr[i].Email = false;
                    }
                   
                 }

                //  item.View = false;
                //  item.Add = false;
                //  item.Edit = false;
                //  item.Delete = false;
                //  item.Print = false;
                //  item.Email = false;
              
            }
          });

        }


        // var CheckCondition = false;
        // if(value != null){
        //   CheckCondition= true;
        // }

        // //alert('check condition ==>' + CheckCondition);
        // this.SelectOptions(sectionName, 'ALL', CheckCondition);
        // this.AccessLevelAll[0].value = true;  
      },
      SelectManagerOptions(sectionName, value){
        let vm = this;
        var index = -1;
        var val =sectionName;
        var filteredObj = vm.AccessLevelData.find(function(item, i)
        {
          //alert('item section ===> '+ item.Section);  

          if(item.Section == val)
          {
              index = i;
              var optionArr = vm.AccessLevelData[index].Options;
              if(optionArr != null && optionArr.length > 0){
                for(var i = 0; i<optionArr.length; i++){
                    if(value == true)
                    optionArr[i].Manager = true;
                    else
                    optionArr[i].Manager = false;
                  
                }
              }
              // item.Partner=false;
              // item.JustMe=false;
              //item.None=false;
          }
        });
        // var CheckCondition = false;
        // if(value != null){
        //   CheckCondition= true;
        // }
        // this.SelectOptions(sectionName, 'MANAGER', CheckCondition);
        // this.AccessLevelManager[0].value=true;

      },
      SelectPartnerOptions(sectionName, value){

        let vm = this;
        var index = -1;
        var val =sectionName;
        var filteredObj = vm.AccessLevelData.find(function(item, i)
        {
          //alert('item section ===> '+ item.Section);  

          if(item.Section == val)
          {
            index = i;
            var optionArr = vm.AccessLevelData[index].Options;
            if(optionArr != null && optionArr.length > 0){
              for(var i = 0; i<optionArr.length; i++){
                  if(value == true)
                  optionArr[i].Partner = true;
                  else
                  optionArr[i].Partner = false;
                
              }
            }
              //item.Manager=false;
              //item.Partner=false;
              //item.JustMe=false;
              //item.None=false;
          }
        });
        // var CheckCondition = false;
        // if(value != null){
        //   CheckCondition= true;
        // }
        // this.SelectOptions(sectionName, 'PARTNER', CheckCondition);
        // this.AccessLevelPartner[0].value=true;
      },
      SelectJustMeOptions(sectionName, value){

        let vm = this;
        var index = -1;
        var val =sectionName;
        var filteredObj = vm.AccessLevelData.find(function(item, i)
        {
          //alert('item section ===> '+ item.Section);  

          if(item.Section == val)
          {
            index = i;
            var optionArr = vm.AccessLevelData[index].Options;
            if(optionArr != null && optionArr.length > 0){
              for(var i = 0; i<optionArr.length; i++){
                  if(value == true)
                  optionArr[i].JustMe = true;
                  else
                  optionArr[i].JustMe = false;
                
              }
            }
              //item.Manager=false;
              //item.Partner=false;
              //item.JustMe=false;
              //item.None=false;
          }
        });
        // var CheckCondition = false;
        // if(value != null){
        //   CheckCondition= true;
        // }
        // this.SelectOptions(sectionName, 'JUSTME', CheckCondition);
        // this.AccessLevelJustMe[0].value=true;
      },
      SelectNoneOptions(sectionName, value){

        let vm = this;
        var index = -1;
        var val =sectionName;
        var filteredObj = vm.AccessLevelData.find(function(item, i)
        {
          //alert('item section ===> '+ item.Section);  

          if(item.Section == val)
          {
              //item.All=false;
              index = i;
              var optionArr = vm.AccessLevelData[index].Options;
              if(optionArr != null && optionArr.length > 0){
                for(var i = 0; i<optionArr.length; i++){
                    if(value == true)
                    optionArr[i].None = true;
                    else
                    optionArr[i].None = false;
                  
                }
              }
          }
        });
        // var CheckCondition = false;
        // if(value != null){
        //   CheckCondition= true;
        // }
        // this.SelectOptions(sectionName, 'NONE', CheckCondition);
        // this.AccessLevelNone[0].value=true;
      },

      SelectOptions(sectionName, accessLevelName, checkCondition){
        let vm = this;
        var index = -1;
        var val =sectionName;
        if(checkCondition == true){
         
          var filteredObj = vm.AccessLevelData.find(function(item, i)
          {
            //alert('item section ===> '+ item.Section);  

            if(item.Section == val)
            {

                 index = i;
                 var optionArr = vm.AccessLevelData[index].Options;
                 if(optionArr != null && optionArr.length > 0){
                    for(var i = 0; i<optionArr.length; i++){
                      
                      if(accessLevelName == "ALL"){                         
                          optionArr[i].All = true;                            
                      }
                      if(accessLevelName == "MANAGER"){
                        optionArr[i].Manager = true;
                      }
                      if(accessLevelName == "PARTNER"){
                        optionArr[i].Partner = true;
                      }
                      if(accessLevelName == "JUSTME"){
                        optionArr[i].JustMe = true;
                      }
                      if(accessLevelName == "NONE"){
                        optionArr[i].None = true;
                      }
                    }
                 }
              
            }
          });

        }
        else{
          var filteredObj = vm.AccessLevelData.find(function(item, i)
          {
            if(item.Section == val)
            {
                 index = i;
                 var optionArr = vm.AccessLevelData[index].Options;
                 if(optionArr != null && optionArr.length > 0){
                    for(var i = 0; i<optionArr.length; i++){
                      
                      if(accessLevelName == "ALL"){
                          optionArr[i].All = false;
                      }
                      if(accessLevelName == "MANAGER"){
                        optionArr[i].Manager = false;
                      }
                      if(accessLevelName == "PARTNER"){
                        optionArr[i].Partner = false;
                      }
                      if(accessLevelName == "JUSTME"){
                        optionArr[i].JustMe = false;
                      }
                      if(accessLevelName == "NONE"){
                        optionArr[i].None = false;
                      }
                    }
                 }
              
            }
          });
          
        }
      },

      //------ End-----------------//

      //-------Save----------------//
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
      
      ValidateAccessRights(){

        let vm = this;
        var index = -1;
        var isValid =false;
        var filteredObj = vm.BindAccessRightData.find(function(item, i)
        {
          
               index = i;
               var optionArr = vm.BindAccessRightData[index].Options;
               if(optionArr != null && optionArr.length > 0)
               {
                  for(var i = 0; i<optionArr.length; i++)
                  {
                      if(optionArr[i].All == true){
                         isValid=true;
                         break; 
                      }
                      if(optionArr[i].View == true){
                        isValid=true;
                        break; 
                      }
                      if(optionArr[i].Add == true){
                        isValid=true;
                        break; 
                      }
                      if(optionArr[i].Edit == true){
                        isValid=true;
                        break; 
                      }
                      if(optionArr[i].Delete == true){
                        isValid=true;
                        break; 
                      }
                      if(optionArr[i].Print == true){
                        isValid=true;
                        break; 
                      }
                      if(optionArr[i].Email == true){
                        isValid=true;
                        break; 
                      }

                    } //End for loop                
            
                } //End if

                if(item.All == true || item.View == true || item.Add == true || item.Edit == true 
                  || item.Delete == true || item.Print == true || item.Email == true)
                {
                  isValid=true;
                  
                }
                
         }); 

         return isValid;

      },

      ValidateAccessLevels(){

        let vm = this;
        var index = -1;
        var isValid =false;
        var filteredObj = vm.AccessLevelData.find(function(item, i)
        {
          
               index = i;
               var optionArr = vm.AccessLevelData[index].Options;
               if(optionArr != null && optionArr.length > 0)
               {
                  for(var i = 0; i<optionArr.length; i++)
                  {
                      if(optionArr[i].All == true || optionArr[i].None == true){
                         isValid=true;
                         break; 
                      }
                      if(optionArr[i].Manager == true || optionArr[i].Partner == true || optionArr[i].JustMe == true ){
                        isValid=true;
                        break; 
                      }
                      
                      

                    } //End for loop                
            
                } //End if

                if(item.All == true || item.None == true )
                {
                  isValid=true;
                  
                }
                if(item.Manager == true || item.Partner == true || item.JustMe == true ){
                  isValid=true;
                 
                }
                
         }); 

         return isValid;

      },

      SaveAccessRights(){
        var dvMsg = document.getElementById("dvErrMsg");
         if(this.AccessGroupModel.Description == "" || this.AccessGroupModel.Description == null){
          dvMsg.removeAttribute('style'); 
          dvMsg.setAttribute('style','display: block');
          //dvMsg.innerHTML = '<span>Enter access group name</span>';
          //this.ShowMessage("Please enter access group name");
          return;
         }
         else
         {
            dvMsg.removeAttribute('style');
            dvMsg.setAttribute('style','display: none');
         }
         if(this.ValidateAccessRights() == false){
           this.ShowMessage("Please provide access rights");
           return;
         }
         if(this.ValidateAccessLevels() == false){
          this.ShowMessage("Please provide 'what can I see' values");
          return;
         } 

          let vm = this;
          // let AccessGroupId = null;
          // if(vm.AccessGroupModel.ID != null || vm.AccessGroupModel.ID != undefined)
          // {
          //     AccessGroupId = vm.AccessGroupModel.ID;
          // } 

          const JsonAccessRightData = {
              AccessGroupID: vm.AccessGroupModel.ID,
              AccessGroupDesc: vm.AccessGroupModel.Description,                  
              AccessRights:  vm.BindAccessRightData,
              AccessLevels: vm.AccessLevelData
          }; 


          //console.log('JsonAccessRightData == ', JsonAccessRightData)
            vm.showLoaderMixin();

            vm.axiosPostMixin('/api/AccessRight/DoSaveAccessRights', JsonAccessRightData)
            .then(function(response){

                  vm.hideLoaderMixin();

                  console.log('DoSaveAccessRights response',response)

                  if(response.status == true)
                  {         
                    if(response.jsondata != null){

                      let jstring = response.jsondata.toString();
                      let jResponse = JSON.parse(jstring);
                      let jResponseTable1 = jResponse.Table;
                      let jResponseTable2 = jResponse.Table1;
                      let jResponseTable3 = jResponse.Table2;

                      if(jResponseTable3 != null || jResponseTable3 != undefined)
                      {
                        vm.AccessGroupModel.ID = jResponseTable3;


                      }  

                      vm.ShowMessageAndClose('Access rights saved successfully');

                      // if(vm.AccessGroupModel.ID != null || vm.AccessGroupModel.ID != undefined)
                      // {
                       
                      //   vm.LoadAccessRightGrid();
                      // }

                     



                    }
                    
                      //console.log('response.AccessGroupID ===>', response.accessGroupID);
                      
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

            //console.log('Accesss right data ==> ',vm.BindAccessRightData)
            //console.log('Accesss level data ===> ', vm.AccessLevelData)
            //vm.hideLoaderMixin();

            
          },
          
          ShowMessage(message){
            let vm = this;

            vm.Message = message;

            vm.$refs.MessagePopup
            .open("Message", "", {
              width: 600,
              buttonList: [
                  {
                      name: "OK",
                      class: "s-swatch-primary s-button"
                  }
              ]
                }) .then(res => {

                    if (res.toLowerCase() == "ok") {

                        this.$refs.MessagePopup.hide();
                        
                    } else {
                        this.$refs.MessagePopup.hide();
                    }
                });
               
        },

        ShowMessageAndClose(message){
          let vm = this;

          vm.Message = message;

          vm.$refs.MessagePopup
          .open("Message", "", {
            width: 600,
            buttonList: [
                {
                    name: "OK",
                    class: "s-swatch-primary s-button"
                }
            ]
              }) .then(res => {

                  if (res.toLowerCase() == "ok") {

                      this.$refs.MessagePopup.hide();
                      vm.$router.push('AccessRight');
                      
                  } else {
                      this.$refs.MessagePopup.hide();
                  }
              });
             
      },


      //-------End-----------------//
      LoadAccessRightGrid(){
        let vm = this;
        
    
        var JsonAccessRightData = {
            AccessGroupID: vm.AccessGroupModel.ID.toString().trim(),
            
        }; 
        
        this.showLoaderMixin();

          this.axiosPostMixin("/api/AccessRight/DoLoadAccessRightsAndAccesssLevels", JsonAccessRightData)
          .then(function (response) {

           // console.log('Response== ', response);  
          //  console.log('Response Access right data === ', response.jsondata);
            //let jData = vm.removeNULLMixin(response.jsondata);
            if(response.jsondata != null)
            {
                let jsonStr = response.jsondata.toString();               
                let jResponse = JSON.parse(jsonStr);

                console.log('json response === > ', jResponse);

                var jResponseTable1 = jResponse.Table;
                var jResponseTable2 = jResponse.Table1;


                var filteredObj = jResponseTable1.find(function(item, i)
                {
                    if(item.View == true && item.Add == true && item.Edit == true && item.Delete == true && item.Print == true && item.Email == true)
                    {
                      item.All = true;
                    }

                    vm.BindAccessRightGrid(item.Section, item.Option, 
                      item.All, item.View, item.Add, item.Edit, item.Delete, item.Print, item.Email);

                });


                var filteredObj = jResponseTable1.find(function(item, i)
                { 
                    vm.ResetSectionHeaderCheckboxes(item.Section);

                });

                var filteredObj3 = jResponseTable2.find(function(item, i)
                { 
                    vm.BindAccessLevelGrid(item.Section, item.Option, item.CanSee, item.AccessLevel);

                });

            }
            
            // if(response.jsonAccessLevelData != null)
            // {
            //     let jsonStr2 = response.jsonAccessLevelData.toString();               
            //     let jResponse2 = JSON.parse(jsonStr2);
            //     console.log('Response Access Level ==>', jResponse2);

               
            // }
            
            

            
            vm.hideLoaderMixin();
          })
          .catch(function (error) {
           
            vm.hideLoaderMixin();
          });

      },

      ReplaceAllNULLsToFalse(Obj) {
      Obj = Obj.replace(/null/g, "false");
      return Obj;
      },

      BindAccessRightGrid(sectionName, optionName, All, View, Add, Edit, Delete, Print, Email){
        let vm = this;
        var index = -1;
        var val =sectionName;
      console.log('section',sectionName) 
        var filteredObj = vm.BindAccessRightData.find(function(item, i)
        {
          if(item.Section == val)
          {
               index = i;
               var optionArr = vm.BindAccessRightData[index].Options;
               if(optionArr != null && optionArr.length > 0){
                  for(var i = 0; i<optionArr.length; i++){
                    if(optionArr[i].Option === optionName){

                      if(All == true){
                        optionArr[i].All = All;
                       
                      }
                      else{
                        optionArr[i].View = View;
                        optionArr[i].Add = Add;
                        optionArr[i].Edit = Edit;
                        optionArr[i].Delete = Delete;
                        optionArr[i].Print = Print;
                        optionArr[i].Email = Email;
                      }
                      
                    
                    }
                  }
               }
               if(optionName == null)
               {
                  if(All == true)
                  {
                    item.All = true;
                  }
                  else
                  {
                    item.View = View;
                    item.Add = Add;
                    item.Edit = Edit;
                    item.Delete = Delete;
                    item.Print = Print;
                    item.Email = Email;
                  }
               }
          }
        }); 


      },

      ResetSectionHeaderCheckboxes(sectionName){
        let vm = this;
        var index = -1;
        var val =sectionName;
        var countAll = 0;
        var countView = 0;
        var countAdd = 0;
        var countEdit = 0;
        var countDelete = 0;
        var countPrint = 0;
        var countEmail = 0;

        var filteredObj = vm.BindAccessRightData.find(function(item, i)
        {
          if(item.Section == val)
          {
               index = i;
               var optionArr = vm.BindAccessRightData[index].Options;
               if(optionArr != null && optionArr.length > 0){
                  for(var i = 0; i<optionArr.length; i++){
                      
                      if(optionArr[i].All == true){
                        countAll = countAll + 1;
                      }
                      if(optionArr[i].View == true){
                        countView = countView + 1;
                      }
                      if(optionArr[i].Add == true){
                        countAdd = countAdd + 1;
                      }
                      if(optionArr[i].Edit == true){
                        countEdit = countEdit + 1;
                      }
                      if(optionArr[i].Delete == true){
                        countDelete = countDelete + 1;
                      }
                      if(optionArr[i].Print == true){
                        countPrint = countPrint + 1;
                      }
                      if(optionArr[i].Email == true){
                        countEmail = countEmail + 1;
                      }
                  }
               }

               if(optionArr != null) {
                  if(optionArr.length == countAll){
                    item.All = true;
                  }
                  if(optionArr.length == countView){
                    item.View = true;
                  }
                  if(optionArr.length == countAdd){
                    item.Add = true;
                  }
                  if(optionArr.length == countEdit){
                    item.Edit = true;
                  }
                  if(optionArr.length == countDelete){
                    item.Delete = true;
                  }
                  if(optionArr.length == countEmail){
                    item.Email = true;
                  }

               }
          }
        }); 
      },
     
      BindAccessLevelGrid(sectionName, optionName, canSee, accessLevel){

        // console.log('section ==> ', sectionName);
        // console.log('option ==>', optionName );
        // console.log('can see ==>', canSee);
        // console.log('accessLevel ==>', accessLevel);

        let vm = this;
        var index = -1;
        var val =sectionName;
       
        var filteredObj = vm.AccessLevelData.find(function(item, i)
        {
          if(item.Section == val)
          {
               index = i;
              // if(optionName != "NULL"){
                var optionArr = vm.AccessLevelData[index].Options;
                if(optionArr != null && optionArr.length > 0){
                   for(var i = 0; i<optionArr.length; i++){
                     if(optionArr[i].Option == optionName){

                       if(canSee == 1){
                         optionArr[i].All = true;
                        
                       }
                       if(canSee == 0){
                        optionArr[i].None = true;
                       
                      }
                       if(accessLevel === 1){
                        optionArr[i].Partner = true;
                       }
                        if(accessLevel === 2){
                        optionArr[i].Manager = true;
                       }
                       else{
                        optionArr[i].JustMe = true;
                       }
                       
                     
                     }
                   }
                }
               //}
               
               //else
               {
                      if(canSee == 1){
                        item.All = true;
                      
                      }
                    else if(canSee == 2){
                      item.None = true;
                      
                    }
                      if(accessLevel == 1){
                      item.Partner = true;
                      }
                      else if(accessLevel == 2){
                      item.Manager = true;
                      }
                       else if(accessLevel == 4){
                      item.JustMe = true;
                      }
               }
          }
        }); 
      },


      

    //-----STAFF------------------------------//

        showStaffMembers(){

          let vm = this;
          //vm.ID = accessGrpID;

          vm.loadStaffGrid(
            this.pageno,
            this.sortfield,
            this.sortdesc == true ? "DESC" : "ASC",
            this.itemPerPage
          );

          vm.$refs.showStaffs.open("", "", {
            width: 600,
            buttonList: [
              {
                name: "Cancel",
                class: "s-border--outline"
              },
              {
                name: "Assign",
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

      // load staff data using api call
      loadStaffGrid(pageNumber, sortColumn, sortDirection, rowPerPage) {
        var staffJsonParam = {
          PageNumber: pageNumber,
          SortColumn: sortColumn,
          SortDirection: sortDirection,
          RowPerPage: rowPerPage,
          SeachText: this.modelSearch,
          ClientType: this.chkActiveStaff ? "Yes" : "No",
          Alphabet: ""
        };
        let vm = this;

        this.showLoaderMixin();

        this.axiosPostMixin("/api/Staff/DoFetchStaffData", staffJsonParam)
          .then(function(response) {
            let jData = vm.removeNULLMixin(response.jsondata);
            vm.staffData = eval(jData);
            vm.itemlength = response.rowcount;

            if (vm.itemlength === 0) {
              vm.noData = "No data Found /No record found";
            } else {
              vm.totalStaffCount = response.rowcount;
            }
            vm.hideLoaderMixin();
          })
          .catch(function(error) {
            // currentObj.output = error;
            vm.hideLoaderMixin();
          });
      },

    //----END STAFF---------------------------//

  },
  created()
  {
      //   this.createBreadcrumbDataMixin(
      //   [
      //       {
      //         pageName: "AccessRightSettings",
      //         text: "Security Groups",
      //         href: "AccessRightSettings"
      //       }
      //   ],
      //   true
      //  );

       this.createBreadcrumbDataMixin(
        [
          {
            pageName: "AccessRightSettings",
            text: "Access Right Settings",
            href: "AccessRightSettings"
          }
        ]
        
      );

      this.TabSectionName = "CanDo"
      this.TabComponentName = "CanDoComponent"
      this.LoadAccessGroupData();

      if(this.AccessGroupModel.ID != null || this.AccessGroupModel.ID != undefined){
        this.LoadAccessRightGrid();
      }

      this.BindAccessRightData = this.AccessRightData;
      this.BindAccessLevelData = this.AccessLevelData;
  }
}
