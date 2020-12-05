
export default {
  data(){
      return{
        AccessGroupModel: { ID:"", Description: ""},          
        AccessGroupID : "",
        AccessGroupDesc: "",
        TabSectionName:"",
        TabComponentName:"",
        Message:"",


        selected:[],
//------Start What Can I Do TAB---------------//
      expanded: [],
      singleExpand: false,
      headers: [

        { text: '', value: 'data-table-expand' },
        { text: '', value: 'All' },
        {
          text: '',
          align: 'start',
          sortable: false,
          value: 'Section',
        },
        // { text: '', value: 'data-table-expand' },
        // { text: 'ALL', value: 'All' },
        { text: 'VIEW', value: 'View' },
        { text: 'ADD', value: 'Add' },
        { text: 'EDIT', value: 'Edit' },
        { text: 'DELETE', value: 'Delete' },
        { text: 'PRINT', value: 'Print' },
        { text: 'EMAIL', value: 'Email' },
        
        
       
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
              ,Indeterminate:false
             
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
              ,Indeterminate:false
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
              ,Indeterminate:false
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
              ,Indeterminate:false
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
              ,Indeterminate:false
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
            ,Indeterminate:false
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
              ,Indeterminate:false
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
              ,Indeterminate:false
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
              ,Indeterminate:false
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
            ,Indeterminate:false

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
            ,Indeterminate:false
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
            ,Indeterminate:false
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
            ,Indeterminate:false
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

        ,ViewIndeterminate:false
        ,AddIndeterminate:false
        ,EditIndeterminate:false
        ,DeleteIndeterminate:false
        ,PrintIndeterminate:false
        ,EmailIndeterminate:false

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
                ,Indeterminate:false
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
                ,Indeterminate:false
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
                ,Indeterminate:false
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
                ,Indeterminate:false
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
                ,Indeterminate:false
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
                ,Indeterminate:false
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
                ,Indeterminate:false
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

          ,ViewIndeterminate:false
          ,AddIndeterminate:false
          ,EditIndeterminate:false
          ,DeleteIndeterminate:false
          ,PrintIndeterminate:false
          ,EmailIndeterminate:false
        

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

          ,ViewIndeterminate:false
          ,AddIndeterminate:false
          ,EditIndeterminate:false
          ,DeleteIndeterminate:false
          ,PrintIndeterminate:false
          ,EmailIndeterminate:false

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
                ,Indeterminate:false
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

          ,ViewIndeterminate:false
          ,AddIndeterminate:false
          ,EditIndeterminate:false
          ,DeleteIndeterminate:false
          ,PrintIndeterminate:false
          ,EmailIndeterminate:false

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
                ,Indeterminate:false
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
                ,Indeterminate:false
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
                ,Indeterminate:false
                
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

          ,ViewIndeterminate:false
          ,AddIndeterminate:false
          ,EditIndeterminate:false
          ,DeleteIndeterminate:false
          ,PrintIndeterminate:false
          ,EmailIndeterminate:false

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
                ,Indeterminate:false
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
                ,Indeterminate:false
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
                ,Indeterminate:false
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
                ,Indeterminate:false
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
                ,Indeterminate:false

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

          ,ViewIndeterminate:false
          ,AddIndeterminate:false
          ,EditIndeterminate:false
          ,DeleteIndeterminate:false
          ,PrintIndeterminate:false
          ,EmailIndeterminate:false


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

          ,ViewIndeterminate:false
          ,AddIndeterminate:false
          ,EditIndeterminate:false
          ,DeleteIndeterminate:false
          ,PrintIndeterminate:false
          ,EmailIndeterminate:false

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

          ,ViewIndeterminate:false
          ,AddIndeterminate:false
          ,EditIndeterminate:false
          ,DeleteIndeterminate:false
          ,PrintIndeterminate:false
          ,EmailIndeterminate:false

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

  headers123: [
    {
      text: 'Dessert (100g serving)',
      align: 'start',
      sortable: false,
      value: 'name',
    },
    { text: 'Calories', value: 'calories' },
    { text: 'Fat (g)', value: 'fat' },
    { text: 'Carbs (g)', value: 'carbs' },
    { text: 'Protein (g)', value: 'protein' },
    { text: 'Iron (%)', value: 'iron' },
  ],
  desserts123: [
    {
      name: 'Frozen Yogurt',
      calories: 159,
      fat: 6.0,
      carbs: 24,
      protein: 4.0,
      iron: '1%',
    },
    {
      name: 'Ice cream sandwich',
      calories: 237,
      fat: 9.0,
      carbs: 37,
      protein: 4.3,
      iron: '1%',
    },
    {
      name: 'Eclair',
      calories: 262,
      fat: 16.0,
      carbs: 23,
      protein: 6.0,
      iron: '7%',
    },
    {
      name: 'Cupcake',
      calories: 305,
      fat: 3.7,
      carbs: 67,
      protein: 4.3,
      iron: '8%',
    },
    {
      name: 'Gingerbread',
      calories: 356,
      fat: 16.0,
      carbs: 49,
      protein: 3.9,
      iron: '16%',
    },
    {
      name: 'Jelly bean',
      calories: 375,
      fat: 0.0,
      carbs: 94,
      protein: 0.0,
      iron: '0%',
    },
    {
      name: 'Lollipop',
      calories: 392,
      fat: 0.2,
      carbs: 98,
      protein: 0,
      iron: '2%',
    },
    {
      name: 'Honeycomb',
      calories: 408,
      fat: 3.2,
      carbs: 87,
      protein: 6.5,
      iron: '45%',
    },
    {
      name: 'Donut',
      calories: 452,
      fat: 25.0,
      carbs: 51,
      protein: 4.9,
      iron: '22%',
    },
    {
      name: 'KitKat',
      calories: 518,
      fat: 26.0,
      carbs: 65,
      protein: 7,
      iron: '6%',
    },
  ],




  gridheaders: [
    // {
    //   text: "ID",
    //   align: "left",
    //   sortable: false,
    //   value: "ID",
    //   display: false,
    //   type: "text",
    //   class: "cellHidden"
    // },    
    {
      text: "",
      align: "left",
      sortable: false,
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
      width: "80%"
    },
    
  ],
  staffData: [],
  sortfield: "Code",
  sortdesc: false,
  pageno: 1,
  itemlength: -1,
  selectgridchecklist: [],
  showGrid: false,
  noData: "No Data Found",
  menuitems: [],
 itemlength: 0,
  itemPerPage: 1000,
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

  ,StaffDataIDList:[]
  ,StaffDataModel :{ StaffDATAID:[] }

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
      clear(){
        //alert('heeellooo');
        //if(e == true){
          var dvMsg = document.getElementById("dvErrMsg");
          dvMsg.removeAttribute('style');
          dvMsg.setAttribute('style','display: none');
        //}
        

      },
      keyPressValidate(){
        var dvMsg = document.getElementById("dvErrMsg");
        // if(this.AccessGroupModel.Description.trim() == "" || this.AccessGroupModel.Description == null){
        //   dvMsg.removeAttribute('style'); 
        //   dvMsg.setAttribute('style','display: block');
        //   dvMsg.innerHTML = '<span style="color:red">Enter access group name</span>';
        //   this.AccessGroupModel.Description = this.AccessGroupModel.Description.replace(/[^\w\s]/gi, '');
        //   //this.ShowMessage("Please enter access group name");
        //   return;
        //  }
        if(this.AccessGroupModel.Description != null)
         {
            if(this.AccessGroupModel.Description.match(/[&\/\\#,+()$~%.'":*?<>{}@]/g) !=null)
            {
              dvMsg.removeAttribute('style'); 
              dvMsg.setAttribute('style','display: block');
              dvMsg.innerHTML = '<span style="color:red">Invalid access group name</span>';
              //this.ShowMessage("Please enter access group name");
              return;
            }
            // else if(this.AccessGroupModel.Description.match(/^\s+$/g) !=null)
            // {
              
            //   dvMsg.removeAttribute('style'); 
            //   dvMsg.setAttribute('style','display: block');
            //   dvMsg.innerHTML = '<span style="color:red">Enter access group name</span>';
            //   this.AccessGroupModel.Description = this.AccessGroupModel.Description.replace(/[^\w\s]/gi, '');
            //   //this.ShowMessage("Please enter access group name");
            //   return;
            // }
            else if(this.AccessGroupModel.Description.match(/[0-9]/g) !=null)
            {
              dvMsg.removeAttribute('style'); 
              dvMsg.setAttribute('style','display: block');
              dvMsg.innerHTML = '<span style="color:red">Invalid access group name. Please remove number(s) from access group name</span>';
              //this.ShowMessage("Please enter access group name");
              return;
            }
            else{
              dvMsg.removeAttribute('style');
              dvMsg.setAttribute('style','display: none');
            }

          
         }
      },
      keyDownValidate(){
        this.clear();
        var dvMsg = document.getElementById("dvErrMsg");
        // if(this.AccessGroupModel.Description.trim() == "" || this.AccessGroupModel.Description == null){
        //   dvMsg.removeAttribute('style'); 
        //   dvMsg.setAttribute('style','display: block');
        //   dvMsg.innerHTML = '<span style="color:red">Enter access group name</span>';
        //   this.AccessGroupModel.Description = this.AccessGroupModel.Description.replace(/[^\w\s]/gi, '');
        //   //this.ShowMessage("Please enter access group name");
        //   return;
        //  }
        if(this.AccessGroupModel.Description != null)
         {
            if(this.AccessGroupModel.Description.match(/[&\/\\#,+()$~%.'":*?<>{}@]/g) !=null)
            {
              dvMsg.removeAttribute('style'); 
              dvMsg.setAttribute('style','display: block');
              dvMsg.innerHTML = '<span style="color:red">Invalid access group name</span>';
              //this.ShowMessage("Please enter access group name");
              return;
            }
            // else if(this.AccessGroupModel.Description.match(/^\s+$/g) !=null)
            // {
              
            //   dvMsg.removeAttribute('style'); 
            //   dvMsg.setAttribute('style','display: block');
            //   dvMsg.innerHTML = '<span style="color:red">Enter access group name</span>';
            //   this.AccessGroupModel.Description = this.AccessGroupModel.Description.replace(/[^\w\s]/gi, '');
            //   //this.ShowMessage("Please enter access group name");
            //   return;
            // }
            else if(this.AccessGroupModel.Description.match(/[0-9]/g) !=null)
            {
              dvMsg.removeAttribute('style'); 
              dvMsg.setAttribute('style','display: block');
              dvMsg.innerHTML = '<span style="color:red">Invalid access group name. Please remove number(s) from access group name</span>';
              //this.ShowMessage("Please enter access group name");
              return;
            }
            else{
              dvMsg.removeAttribute('style');
              dvMsg.setAttribute('style','display: none');
            }

          
         }
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

      CheckOptionAll(sectionName, optionName)
      {
        let vm = this;
        var index = -1;
        var val =sectionName;
        var countTotalOption= 0;
        var countSelectedOption = 0;
        
        var filteredObj44 = vm.BindAccessRightData.find(function(item, i)
        {
          if(item.Section == val)
          {
               index = i;
               var optionArr = vm.BindAccessRightData[index].Options;
               countTotalOption = (val == 'CUSTOMERS') ? 6 : 5;
               if(optionArr != null && optionArr.length > 0)
               {
                  for(var i = 0; i<optionArr.length; i++)
                  {
                    if(optionArr[i].Option == optionName)  
                    {
                      if(optionArr[i].View == true){
                        //console.log('count selected option ', countSelectedOption)
                        countSelectedOption = countSelectedOption + 1;
                        //console.log('count after', countSelectedOption);
                      }
                      if(optionArr[i].Add == true){
                          countSelectedOption = countSelectedOption + 1;
                      }
                      if(optionArr[i].Edit == true){
                        countSelectedOption = countSelectedOption + 1;
                      }
                      if(optionArr[i].Delete == true){
                        countSelectedOption = countSelectedOption + 1;
                      }
                      if(optionArr[i].Print == true){
                        countSelectedOption = countSelectedOption + 1;
                      }
                      if(val == 'CUSTOMERS')
                      {
                        if(optionArr[i].Email == true){
                          countSelectedOption = countSelectedOption + 1;
                        }
                      }
                      // else
                      // {
                      //   if(optionArr[i].Email == false){
                      //     countSelectedOption = countSelectedOption + 1;
                      //   } 
                      // }
                       
                    }     
                  } //For loop end
                  
                  //console.log('Total option ==== ', countTotalOption);
                  //console.log('selected option count ==== ', countSelectedOption);


                  if(countSelectedOption == 0)
                  {

                    for(var j = 0; j<optionArr.length; j++)
                    {
                      if(optionArr[j].Option == optionName)  
                      {
                          optionArr[j].All = false;
                          optionArr[j].Indeterminate = null;
                          break;
                      }

                    }
                  }
                  
                  else if(countSelectedOption < countTotalOption)
                  {

                    for(var j = 0; j<optionArr.length; j++)
                    {
                      if(optionArr[j].Option == optionName)  
                      {
                          
                          optionArr[j].All = false;
                          optionArr[j].Indeterminate = true;
                          break;
                      }

                    }
                  }
                  else if(countTotalOption == countSelectedOption)
                  {
                    //console.log('match count')
                    for(var j = 0; j<optionArr.length; j++)
                    {
                      //console.log('option name ===>', optionName)
                      //console.log('Option ===>', optionArr[j].Option)
                      if(optionArr[j].Option == optionName)  
                      {
                          //console.log('Options matched ')
                          optionArr[j].All = true;
                          optionArr[j].Indeterminate = null;
                          break;
                      }

                    }
                  }
                  

               }  
               
               
           }
        });

        countSelectedOption = 0;
        countTotalOption = 0;

        this.CheckIntermediate(sectionName);


      },
      CheckIntermediate(sectionName)
      {
        let vm = this;
        var index = -1;
        var val =sectionName;
        var countTotalOption= 0;
        var countSelectedOption = 0;
        var countIndeterminate = 0;

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

                    if(optionArr[i].All == true)
                    {
                      countSelectedOption = countSelectedOption + 1;
                    }
                    if(optionArr[i].Indeterminate == true)
                    {
                      countIndeterminate = countIndeterminate + 1;
                    }
                   
                  }
               }


               
               if(countIndeterminate > 0){
                item.Indeterminate = true;
                item.View = false;
                item.Add = false;
                item.Edit = false;
                item.Delete =false;
                item.Print = false;
                if(val == 'CUSTOMERS') item.Email=false;
              }
               
                    else if(countSelectedOption == 0){
                  
                      item.All = false;                 
                      item.Indeterminate = null;
                      item.View = false;
                      item.Add = false;
                      item.Edit = false;
                      item.Delete =false;
                      item.Print = false;
                      if(val == 'CUSTOMERS') item.Email=false;
    
                    }
                    else if(countSelectedOption < countTotalOption)
                    {
                      item.Indeterminate = true;
                      item.All = false;
                      item.View = false;
                      item.Add = false;
                      item.Edit = false;
                      item.Delete =false;
                      item.Print = false;
                      if(val == 'CUSTOMERS') item.Email=false;
                    }
                    else
                    {                 
                      item.Indeterminate=false;
                      item.All = true;
                      item.View = true;
                      item.Add = true;
                      item.Edit = true;
                      item.Delete = true;
                      item.Print = true;
                      if(val == 'CUSTOMERS') item.Email=true;
                    }
               
               
            
           }
        });

      },

      CheckIndivisualOption(sectionName, optionName, functionName,checkCondition)
      {
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
                        if(functionName == 'VIEW')  
                        optionArr[i].View = true;
                        if(functionName == 'ADD') 
                        {
                          optionArr[i].Add = true;
                          if(optionArr[i].View == false) 
                          optionArr[i].View=true;
                        } 
                        
                        if(functionName == 'EDIT')  
                        {
                          optionArr[i].Edit = true;
                          if(optionArr[i].View == false) 
                          optionArr[i].View=true;
                        } 
                        
                        if(functionName == 'DELETE')  
                        {
                          optionArr[i].Delete = true;
                          if(optionArr[i].View == false) 
                          optionArr[i].View=true;
                        } 
                        
                        if(functionName == 'PRINT')  
                        {
                          optionArr[i].Print = true;
                          if(optionArr[i].View == false) 
                          optionArr[i].View=true;
                        } 
                        
                        if(functionName == 'EMAIL')  
                        {
                          optionArr[i].Email = true;
                          if(optionArr[i].View == false) 
                          optionArr[i].View=true;
                        } 
                        
  

                        optionArr[i].Indeterminate = true;
                        break;
                      }
                     
                    }
                 }
                 
                 item.Indeterminate=true;

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

                        if(functionName == 'VIEW')  
                        optionArr[i].View = false;
                        if(functionName == 'ADD')  
                        optionArr[i].Add = false;
                        if(functionName == 'EDIT')  
                        optionArr[i].Edit = false;
                        if(functionName == 'DELETE')  
                        optionArr[i].Delete = false;
                        if(functionName == 'PRINT')  
                        optionArr[i].Print = false;
                        if(functionName == 'EMAIL')  
                        optionArr[i].Email = false;
  
                        //optionArr[i].OptionCheck = true;
                        optionArr[i].Indeterminate = null;
                        
                        break;
                      }
                     
                    }
                 }
                 

             }
          });

        }

        this.CheckOptionAll(sectionName, optionName);
        //this.CheckIntermediate(sectionName, checkCondition);
       
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
                 

             }
          });
        }

        this.CheckIntermediate(sectionName);
      
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
                      
                     
                      optionArr[i].View = false;
                      
                      optionArr[i].Add = false;
                      
                      optionArr[i].Edit = false;
                      
                      optionArr[i].Delete = false;
                      
                      optionArr[i].Print = false;
                      if(val == "CUSTOMERS")
                      optionArr[i].Email = false;

                     }
                   
                 }
                 
                 
                 item.View = false;
                 
                 item.Add = false;
               
                 item.Edit = false;
                 
                 item.Delete = false;
                 
                 item.Print = false;
                 if(val == "CUSTOMERS" )
                 item.Email = false;
              
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
      
      


      if(checkCondition == true)
      {

        //vm.isAllChecked = false;
       
        var countTotalOption = 0;
        var countIndivisualOption =0; 
        var filteredObj = vm.BindAccessRightData.find(function(item, i)
        {
          if(item.Section == val)
          {
               index = i;
               var optionArr = vm.BindAccessRightData[index].Options;
               if(optionArr != null && optionArr.length > 0){
                 countTotalOption = optionArr.length;
                  for(var i = 0; i<optionArr.length; i++){
                    optionArr[i].View = true;
                    optionArr[i].Indeterminate = true;
                    countIndivisualOption = countIndivisualOption + 1;
                  }
               }
               
                   if(countIndivisualOption == 0){
                     item.ViewIndeterminate = null;
                   }

                   if(countIndivisualOption < countTotalOption)
                   {
                     item.All = false;
                     item.Indeterminate = true;

                     item.ViewIndeterminate = true;                          
                     item.View = false;
                     
                     
                   }
                   else if(countIndivisualOption == countTotalOption)
                   {
                      item.All = false;
                      item.Indeterminate = true;
  
                      item.ViewIndeterminate = null;                          
                      item.View = true;
                      
                     
                   }
               
               



          }
        });

      }
      else
      {

            var countTotalOption = 0;
            var countIndivisualOption =0; 
            var filteredObj = vm.BindAccessRightData.find(function(item, i)
            {
              if(item.Section == val)
              {
                  index = i;
                  var optionArr = vm.BindAccessRightData[index].Options;
                  if(optionArr != null && optionArr.length > 0){
                      countTotalOption = optionArr.length;
                      for(var i = 0; i<optionArr.length; i++){
                        // if(optionArr[i].Add == false && optionArr[i].Edit == false && optionArr[i].Delete == false
                        //   && optionArr[i].Print == false)
                        // optionArr[i].View = false;
                        optionArr[i].Indeterminate = null;
                        optionArr[i].All = false;
                        optionArr[i].View = false;
                        optionArr[i].Add = false;
                        optionArr[i].Edit = false;
                        optionArr[i].Delete = false;
                        optionArr[i].Print = false;
                        if(val == "CUSTOMERS")
                        optionArr[i].Email = false;
                        
                        countIndivisualOption = countIndivisualOption + 1;
                      }
                  }

                  // if(item.Add == false && item.Edit == false && item.Delete == false
                  //   && item.Print == false)
                  //   item.View = false;
                  //   else
                  //   {
                  //     item.View =true;
                  //   }

                 
                    if(val == "CUSTOMERS")
                    {
                        // if(item.Add == false && item.Edit == false && item.Delete == false
                        //   && item.Print == false && item.Email == false)
                        //   {
                        //     item.View = false;
                        //   }                          
                        //   else
                        //   {
                        //     item.ViewIndeterminate = true;
                        //     item.View = false;
                        //   }
                        if(countIndivisualOption == 0){
                          item.ViewIndeterminate = null;
                          item.View = false;
                        }
                        if(countIndivisualOption < countTotalOption)
                        {
                          item.All = false;
                          item.Indeterminate = true;

                          item.ViewIndeterminate = true;                          
                          item.View = false;
                          
                          item.AddIndeterminate = true;                          
                          item.EditIndeterminate = true;
                          item.DeleteIndeterminate = true;
                          item.PrintIndeterminate = true;
                          item.EmailIndeterminate = true;
                        }
                        else if(countIndivisualOption == countTotalOption)
                        {
                          item.All = false;
                          item.Indeterminate = null;

                          item.ViewIndeterminate = true;                          
                          item.View = false;
                          
                          item.Add = false;
                          item.Edit = false;
                          item.Delete = false;
                          item.Print = false;
                          item.Email = false;

                          item.AddIndeterminate = null;                          
                          item.EditIndeterminate = null;
                          item.DeleteIndeterminate = null;
                          item.PrintIndeterminate = null;
                          item.EmailIndeterminate = null;
                        }
                    }
                    else
                    {

                      if(countIndivisualOption == 0){
                        item.ViewIndeterminate = null;
                        item.View = false;
                      }
                      if(countIndivisualOption < countTotalOption)
                      {
                        item.All = false;
                        item.Indeterminate = true;

                        item.ViewIndeterminate = true;                          
                        item.View = false;
                        
                        item.AddIndeterminate = true;                          
                        item.EditIndeterminate = true;
                        item.DeleteIndeterminate = true;
                        item.PrintIndeterminate = true;
                        
                      }
                      else if(countIndivisualOption == countTotalOption)
                      {
                        item.All = false;
                        item.Indeterminate = null;

                        item.ViewIndeterminate = true;                          
                        item.View = false;
                        
                        item.Add = false;
                        item.Edit = false;
                        item.Delete = false;
                        item.Print = false;
                        

                        item.AddIndeterminate = null;                          
                        item.EditIndeterminate = null;
                        item.DeleteIndeterminate = null;
                        item.PrintIndeterminate = null;
                        
                      }



                    }
                
              }
            });        
            
            //this.CheckIntermediate(sectionName);
        }
      },
      CheckBoxViewCondtion(sectionName, e){
          
            this.CheckViewFunctions(sectionName, e);
          

          //console.log(e);
          //console.log('this event is ===> ',e)
      },

      CheckBoxAllCondition(sectionName, e){
        this.CheckAllFunctions(sectionName, e);
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
            
            //this.CheckIntermediate(sectionName);
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
            this.CheckIntermediate(sectionName);     
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
            this.CheckIntermediate(sectionName);       
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
            this.CheckIntermediate(sectionName);      
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
            this.CheckIntermediate(sectionName);        
        }
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

        // var strDescription = this.AccessGroupModel.Description;
        // strDescription = strDescription.replace(/[^a-zA-Z]/g, '');
        // this.AccessGroupModel.Description=strDescription;


        var dvMsg = document.getElementById("dvErrMsg");
         if(this.AccessGroupModel.Description == "" || this.AccessGroupModel.Description == null){
          dvMsg.removeAttribute('style'); 
          dvMsg.setAttribute('style','display: block');
          dvMsg.innerHTML = '<span style="color:red">Enter access group name</span>';
         
          //this.ShowMessage("Please enter access group name");
          return;
         }
         else
         {
            if(this.AccessGroupModel.Description.match(/[&\/\\#,+()$~%.'":*?<>{}@]/g) !=null)
            {
              dvMsg.removeAttribute('style'); 
              dvMsg.setAttribute('style','display: block');
              dvMsg.innerHTML = '<span style="color:red">Invalid access group name</span>';
              //this.ShowMessage("Please enter access group name");
              return;
            }
            else if(this.AccessGroupModel.Description.match(/^\s+$/g) !=null)
            {
              
              dvMsg.removeAttribute('style'); 
              dvMsg.setAttribute('style','display: block');
              dvMsg.innerHTML = '<span style="color:red">Enter access group name</span>';
              if(this.AccessGroupModel.Description != null)
              this.AccessGroupModel.Description = this.AccessGroupModel.Description.replace(/[^\w\s]/gi, '');
              //this.ShowMessage("Please enter access group name");
              return;
            }
            else if(this.AccessGroupModel.Description.match(/[0-9]/g) !=null)
            {
              dvMsg.removeAttribute('style'); 
              dvMsg.setAttribute('style','display: block');
              dvMsg.innerHTML = '<span style="color:red">Invalid access group name. Please remove number(s) from access group name</span>';
              //this.ShowMessage("Please enter access group name");
              return;
            }
            else{
              dvMsg.removeAttribute('style');
              dvMsg.setAttribute('style','display: none');
            }

          
         }
         if(this.ValidateAccessRights() == false){
           this.ShowMessage("Please provide access rights");
           return;
         }
         if(this.ValidateAccessLevels() == false){
          this.ShowMessage("Please provide 'what can I see' values");
          return;
         } 
          debugger;
          let vm = this;
          // let AccessGroupId = null;
          // if(vm.AccessGroupModel.ID != null || vm.AccessGroupModel.ID != undefined)
          // {
          //     AccessGroupId = vm.AccessGroupModel.ID;
          // } 

          const JsonAccessRightData = {
              AccessGroupID: vm.AccessGroupModel.ID,
              AccessGroupDesc: vm.AccessGroupModel.Description.trim(),                  
              AccessRights:  vm.BindAccessRightData,
              AccessLevels: vm.AccessLevelData,
              StaffIDList : vm.StaffDataModel
          }; 


          console.log('JsonAccessRightData == ', vm.BindAccessRightData);
          
            vm.showLoaderMixin();

            vm.axiosPostMixin('/api/AccessRight/DoSaveAccessRights', JsonAccessRightData)
            .then(function(response){

                  vm.hideLoaderMixin();

                  console.log('DoSaveAccessRights response',response)
                  debugger;
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
                      vm.$router.push('AccessRight');
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
                 //debugger;
                    // if(item.Section == "CUSTOMERS")
                    // {
                    //     if(item.View == true && item.Add == true && item.Edit == true && item.Delete == true && item.Print == true
                    //        && item.Email == true)
                    //     {
                    //       item.All = true;
                    //     }
                    // }
                    // else
                    // {
                    //       if(item.View == true && item.Add == true && item.Edit == true && item.Delete == true && item.Print == true
                    //         )
                    //         {
                    //           item.All = true;
                    //         }
                    // }
                    console.log('section name before call ==>', item.Section);
                    vm.BindAccessRightGrid(item.Section, item.Option, 
                      item.All, item.View, item.Add, item.Edit, item.Delete, item.Print, item.Email);

                });


                // jResponseTable1.forEach(item => {
                //   console.log('item  ===>', item)
                //   console.log('section name before call ==>', item.Section);
                  // vm.BindAccessRightGrid(item.Section, item.Option, 
                    //item.All, item.View, item.Add, item.Edit, item.Delete, item.Print, item.Email);
                // });

                // for(var i = 0; i<=jResponseTable1.length; i++){
                //   debugger;
                //   console.log(i);
                //   console.log('length  ',jResponseTable1.length)
                //   console.log('section name before call ==>', jResponseTable1[i].Section);
                //   vm.BindAccessRightGrid(jResponseTable1[i].Section, jResponseTable1[i].Option, 
                //     jResponseTable1[i].All, jResponseTable1[i].View, jResponseTable1[i].Add, jResponseTable1[i].Edit, 
                //     jResponseTable1[i].Delete, jResponseTable1[i].Print, jResponseTable1[i].Email);

                // }

               //this.BindGrid(jResponseTable1);
                // var filteredObj = jResponseTable1.find(function(item, i)
                // { 
                //     vm.ResetSectionHeaderCheckboxes(item.Section);

                // });

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

      BindGrid(jsonArray){
          let vm = this;
          var index = 0;

          for(var i = 0; i< jsonArray.length; i++)
          {

              var filteredObj = vm.BindAccessRightData.find(function(item, i)
              {
                    if(item.Section == jsonArray[i].Section)
                    {
                      console.log('Match section ==>', item.Section);
                    }

              });
          }



      },



      BindAccessRightGrid(sectionName, optionName, All, View, Add, Edit, Delete, Print, Email){
        debugger;
        let vm = this;
        var index = -1;
        var val =sectionName;
      console.log('section',sectionName) 
        var filteredObj = vm.BindAccessRightData.find(function(item, i)
        {
          debugger;
          if(item.Section.trim().toUpperCase() == val.trim().toUpperCase())
          {
               index = i;
               var optionArr = vm.BindAccessRightData[index].Options;
               if(optionArr != null && optionArr.length > 0){
                  for(var i = 0; i<optionArr.length; i++)
                  {
                    console.log('Option name === ', optionName)
                    if(optionArr[i].Option.trim().toUpperCase() === optionName.trim().toUpperCase())
                    {
                      
                        //optionArr[i].All = All;
                        optionArr[i].View = View;
                        optionArr[i].Add = Add;
                        optionArr[i].Edit = Edit;
                        optionArr[i].Delete = Delete;
                        optionArr[i].Print = Print;
                        optionArr[i].Email = Email;
                      
                    }
                  }//for loop end
               }
               //if(optionName.trim().toUpperCase() == item.Section.trim().toUpperCase())
               else
               {  
                    item.All = true;
                    item.View = View;
                    item.Add = Add;
                    item.Edit = Edit;
                    item.Delete = Delete;
                    item.Print = Print;
                    item.Email = Email;
                  
               }
               
          }
         
        }); 
        

        this.BindCheckOptionAll(sectionName, optionName);

        index=-1;
        var countAll =0;
        var countTotal = 0;
        var filteredObj2 = vm.BindAccessRightData.find(function(item, i)
        {
          if(item.Section == val)
          {
               index = i;
               var optionArr = vm.BindAccessRightData[index].Options;
               
               if(optionArr != null && optionArr.length > 0)
               {
                countTotal = optionArr.length;
                  for(var i = 0; i<optionArr.length; i++)
                  {
                    if(optionArr[i].Indeterminate == true || optionArr[i].All == true)
                    {
                       countAll = countAll + 1;
                    }
                    // else{

                    // }
                  }
               }
               

               if(countAll > 0 &&  countAll < countTotal)
               {
                 item.Indeterminate = true;
               }
               else if (countAll > 0 &&  countAll == countTotal)
               {
                 item.All = true;
                 item.Indeterminate = null;
                 item.View = true;
                 item.Add = true;
                 item.Edit = true;
                 item.Delete = true;
                 item.Print = true;
                 if(item.Section == 'CUSTOMERS') item.Email = true;
               }
               
          }
        }); 





        //this.CheckOptionAll(sectionName, optionName);
      },

      BindCheckOptionAll(sectionName, optionName)
      {
        let vm = this;
        var index = -1;
        var val =sectionName;
        var countTotalOption= 0;
        var countSelectedOption = 0;
        
        var filteredObj44 = vm.BindAccessRightData.find(function(item, i)
        {
          if(item.Section == val)
          {
               index = i;
               var optionArr = vm.BindAccessRightData[index].Options;
               countTotalOption = (val == 'CUSTOMERS') ? 6 : 5;
               if(optionArr != null && optionArr.length > 0)
               {
                  for(var i = 0; i<optionArr.length; i++)
                  {
                    if(optionArr[i].Option == optionName)  
                    {
                      if(optionArr[i].View == true){
                        //console.log('count selected option ', countSelectedOption)
                        countSelectedOption = countSelectedOption + 1;
                        //console.log('count after', countSelectedOption);
                      }
                      if(optionArr[i].Add == true){
                          countSelectedOption = countSelectedOption + 1;
                      }
                      if(optionArr[i].Edit == true){
                        countSelectedOption = countSelectedOption + 1;
                      }
                      if(optionArr[i].Delete == true){
                        countSelectedOption = countSelectedOption + 1;
                      }
                      if(optionArr[i].Print == true){
                        countSelectedOption = countSelectedOption + 1;
                      }
                      if(val == 'CUSTOMERS')
                      {
                        if(optionArr[i].Email == true){
                          countSelectedOption = countSelectedOption + 1;
                        }
                      }
                      // else
                      // {
                      //   if(optionArr[i].Email == false){
                      //     countSelectedOption = countSelectedOption + 1;
                      //   } 
                      // }
                       
                    }     
                  } //For loop end
                  
                  //console.log('Total option ==== ', countTotalOption);
                  //console.log('selected option count ==== ', countSelectedOption);


                  if(countSelectedOption == 0)
                  {

                    for(var j = 0; j<optionArr.length; j++)
                    {
                      if(optionArr[j].Option == optionName)  
                      {
                          optionArr[j].All = false;
                          optionArr[j].Indeterminate = null;
                          break;
                      }

                    }
                  }
                  
                  else if(countSelectedOption < countTotalOption)
                  {

                    for(var j = 0; j<optionArr.length; j++)
                    {
                      if(optionArr[j].Option == optionName)  
                      {
                          
                          optionArr[j].All = false;
                          optionArr[j].Indeterminate = true;
                          break;
                      }

                    }
                  }
                  else if(countTotalOption == countSelectedOption)
                  {
                    //console.log('match count')
                    for(var j = 0; j<optionArr.length; j++)
                    {
                      //console.log('option name ===>', optionName)
                      //console.log('Option ===>', optionArr[j].Option)
                      if(optionArr[j].Option == optionName)  
                      {
                          //console.log('Options matched ')
                          optionArr[j].All = true;
                          optionArr[j].Indeterminate = null;
                          break;
                      }

                    }
                  }
                  

               }  
               
               
           }
        });

       
        //this.CheckIntermediate(sectionName);


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
        var index = 0;
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
      dataSorce(options) {
        this.sortfield = options.sortBy[0];
        this.sortdesc = options.sortDesc[0];
        this.pageno = options.page;
        this.itemPerPage = options.itemsPerPage;
  
        let vm = this;
        //vm.ID = accessGrpID;

        vm.loadStaffGrid(
          this.pageno,
          this.sortfield,
          this.sortdesc == true ? "DESC" : "ASC",
          this.itemPerPage
        );
      }, 
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
          if (res.toLowerCase() == "assign") {
            
            //this.checkTransactionOnDelete(item);
            this.$refs.showStaffs.hide();
            this.AssignStaffs();  
            
            
          } else{
            this.$refs.showStaffs.hide();
          }
        });


    },

    clearSearch() {
      this.modelSearch = "";
      if (this.isSearchPress == true) {
        this.modelSearch = "";
        this.isSearchPress = false;
        this.pageno = 1;

        this.loadStaffGrid(
          this.pageno,
          this.sortfield,
          this.sortdesc == true ? "DESC" : "ASC",
          this.itemPerPage
        );
      }
    },
    searchKeyDown(e) {
      if (e.keyCode == "13") {
        this.searchData();
      }
    },
    searchData() {
      if (
        (this.isSearchPress === true && this.modelSearch.trim() == "") ||
        this.modelSearch.trim() != ""
      ) {
        if (this.modelSearch.trim() == "") {
          this.isSearchPress = false;
        } else {
          this.isSearchPress = true;
        }
        this.modelSearch = this.modelSearch.trim();
        this.pageno = 1;

        this.isSearchPress = true;
        this.loadStaffGrid(
          this.pageno,
          this.sortfield,
          this.sortdesc == true ? "DESC" : "ASC",
          this.itemPerPage
        );
      }
    },
    // load staff data using api call
    loadStaffGrid(pageNumber, sortColumn, sortDirection, rowPerPage) {
      var staffJsonParam = {
        PageNumber: pageNumber,
        SortColumn: sortColumn,
        SortDirection: sortDirection,
        RowPerPage: 100,
        SeachText: this.modelSearch,
        ClientType: this.chkActiveStaff ? "Yes" : "No",
        Alphabet: ""
      };
      let vm = this;

      this.showLoaderMixin();

      this.axiosPostMixin("/api/AccessRight/DoFetchStaffData", staffJsonParam)
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
    
		 
    StoreStaffIDs(staffId){
      //alert('hi');
      //console.log('hiiiiiii')
      let vm = this;
      vm.StaffDataIDList.push(staffId); 
      //console.log('Staff Data in List', vm.StaffDataIDList) 
      
    },

    AssignStaffs()
    {
      debugger;
        let vm = this;
        console.log('ssss before ===>', vm.StaffDataIDList)
        var newJsonObject = vm.StaffDataIDList.map(JSON.stringify);
       //console.log(newJsonObject);
        var uniqueSet = new Set(newJsonObject); 
        var	staffIdList = Array.from(uniqueSet).map(JSON.parse);     
       //console.log(staffIdList); 

       vm.StaffDataIDList =null;
       vm.StaffDataIDList=staffIdList;
       console.log('sssss after', vm.StaffDataIDList)


       vm.StaffDataModel.StaffDATAID = vm.StaffDataIDList;

        var jsonStaffData ={
          AccessGroupID: vm.AccessGroupModel.ID,
          StaffIDList : vm.StaffDataModel
        };
         var json = JSON.stringify(jsonStaffData);
         console.log('Staff data ==>', json);

        if(vm.AccessGroupModel.ID != null || vm.AccessGroupModel.ID != "")
        {
          vm.showLoaderMixin();

          this.axiosPostMixin("/api/AccessRight/DoAssignStaff", jsonStaffData)
            .then(function (response) {
  
              
              vm.hideLoaderMixin();
              if(response.status == true){
  
                
                vm.ShowMessage("Assigned access rights to the selected staff members");
                //this.$refs.showStaffs.hide();
              }
  
  
            })
            .catch(function(error) {
              // currentObj.output = error;
              vm.ShowMessage('Server error occured');
              vm.hideLoaderMixin();
            });
  
        }
        

    },

  //----END STAFF---------------------------//

  },
  created()
  {

    this.setTitleAndDescriptionMixin("Access Right Settings | " + this.globalProjectInitials);
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
