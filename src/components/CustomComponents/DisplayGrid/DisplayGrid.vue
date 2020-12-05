<template>
  <!-- <div v-if="showGridFun()"> -->
  <div v-show="showGridFun()">

    <v-data-table must-sort :headers="computedHeaders" v-bind="$props" :items="items" :options.sync="options"
      :loading="loading" @click:row="selectRow" :single-select="false" :page.sync='page'
      :sortBy.sync='sortBy' :sortDesc.sync='sortDesc' :itemsPerPage.sync='itemsPerPage'>

      <!-- v-model="selectVal" -->
      <template slot="no-data">
        <v-alert :value="true" color="info" v-html="noDataText">
        </v-alert>

      </template>
      <template v-slot:header.DisplayGridCheckbox="{ header }">
        <slot :name="'header-' + header.value">
                        <!-- <div>{{ item[header.value] }}</div> -->
        </slot>
          <!-- <v-checkbox primary hide-details :value="header.text" ></v-checkbox> -->
      </template>

      <!-- <template v-slot:item.template="{ item }">

            <div v-html="getHtml(item,item.template)" dark></div>
        </template>

        <template v-slot:item.icon="{ item }">

            <v-icon v-text="item.icon"></v-icon>
        </template>

        <template v-slot:item.action="{ item }">
            <v-menu bottom offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn text fab x-small v-on="on">...</v-btn>

                </template>
                <v-list>
                    <v-list-item v-for="(item, i) in menuitems" :key="i" @click="menuitemClick(item)">

                        <v-list-item-title>
                            <v-icon v-text="item.icon"></v-icon> {{ item.title }}
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </template> -->
      <template v-slot:item="{ item }">
        <tr @click="selectRow($event,item)" @mouseover="hoverRowIn" @mouseleave="hoverRowOut" :active="selectVal">
          <!-- <tr  :active="selected" @click="selected = !selected"> -->
          <td v-for='(header,h) in computedHeaders' :key="h" :width="header.width" :class="'text-' + header.align">
            <slot :name="header.value" :item="item">
              <div v-if="header.type == 'checkbox'">
                <v-checkbox primary hide-details :value="item[header.value]" v-model="selectVal"></v-checkbox>
              </div>
              <div v-else-if="header.type == 'icon'">
                <v-icon v-text="item[header.value]"></v-icon>
              </div>
              <div v-else-if="header.type === 'template'" v-html="getHtml(item,header)" dark />
              <!-- <div v-else-if="header.type === 'actionmenu'" v-show="true" class="rowActions"> -->
                   <div v-else-if="header.type === 'actionmenu'" v-show="true" >
                <v-menu bottom offset-y>
                  <template v-slot:activator="{ on }">
                    <!-- <v-btn fab text x-small icon v-on="on">...</v-btn>  -->
                    <a href="javascript:void(0)"  @click="selectRow($event,item)" class="textGray35 icon-r-more-fill s-text-size--xl" v-on="on"></a>
                  </template>
                  <v-list v-if="menuitems.length > 0">
                    <v-list-item v-for="(mitem, i) in menuitems" :key="i" @click="menuitemClick(mitem,item)"
                      :class="mitem.class">
                      <v-list-item-title>
                        <v-icon v-text="mitem.icon"></v-icon> {{ mitem.title }}
                      </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
              <div v-else>{{ getContent(item,header ,header.value) }}</div>
            </slot>
          </td>
        </tr>
      </template>
      <template v-slot:body.append v-if="showsummery">
        <tr>

          <td colspan="100%" v-bind:style="styles">
              <v-data-table :headers="computedHeaders" :hide-default-header="summerygridheader"
              :hide-default-footer="summerygridfooter" :items="summeryitem">

              <template v-slot:item="{ item }">

        <tr>

          <td v-for='(header,h) in computedHeaders' :key="h" :width="header.width" :class="'text-' + header.align">
            <div>{{ getContent(item,header ,header.value) }}</div>
          </td>
        </tr>
      </template>
          </v-data-table>
    </td>
    </tr>

</template>

<!-- <template v-if="showsummery" slot="footer">

                    <v-data-table :headers="computedHeaders" hide-default-header="true" hide-default-footer="true" :items="summeryitem" hide-actions="">

                <template v-slot:item="{ item }">

                    <tr>

                        <td v-for='(header,h) in computedHeaders' :key="h" :width="header.width" :class="'text-' + header.align">
                            <div>{{ getContent(item,header ,header.value) }}</div>
                        </td>
                    </tr>
                </template>
                    </v-data-table>

        </template> -->

</v-data-table>

</div>
</template>

<script>
  export default {
    name: 'v-grid',
    props: {

      /**
       * id.
       */
      id: {
        type: String,
        default: '',
        required: false
      },
      /**
       * Can be an array of objects or array of strings. When using objects, will look for a text and value field. This can be changed using the item-text and item-value props..
       */
      items: {
        type: Array,
        default: undefined,
        required: true

      },
      /**
       * An array of objects that each describe a header column. See the example below for a definition of all properties
       */
      headers: {
        type: Array,
        default: undefined,
        required: true

      },
      /**
       * Changes which item property (or properties) should be used for sort order. Can be used with .sync modifier
       */

      'sort-by': {
        type: [String, Array],
        default: [],
        required: false
      },
      /**
       * Changes which direction sorting is done. Can be used with .sync modifier
       */

      'sort-desc': {
        type: [Boolean, Array],
        default: false,
        required: false
      },
      /**
       * Used only when data is provided by a server. Should be set to the total amount of items available on server so that pagination works correctly.
       */
      'server-items-length': {
        type: Number,
        default: -1,
        required: false
      },
      /**
       * Changes how many items per page should be visible. Can be used with .sync modifier
       */
      'items-per-page': {
        type: Number,
        default: 50,
        required: false
      },

      /**
       * Changes which page of items is displayed. Can be used with .sync modifier
       */
      page: {
        type: Number,
        default: 1,
        required: false
      },
      /**
       * v-model value.
       */
      value: {
        type: [String, Array, Object],
        default: function () {
          return []
        },
        required: false
      },
      /**
       * Text shown when search prop is used and there are no results
       */
      //'no-data-text'
      noDataText: {
        type: String,
        default: 'No data Found /No record found',
        required: false
      },
      /**
       * Shows the select checkboxes in both the header and rows (if using default rows)
       */
      'show-select': {
        type: Boolean,
        default: false,
        required: false
      },
      /**
       * Unique key for chekbox field
       */
      'item-key': {
        type: String,
        default: '',
        required: false
      },
      /**
       * array of act or array of strings. When using objects, will look for a text and value field. This can be changed using the item-text and item-value props..
       */
      menuitems: {
        type: Array,
        default: undefined,
        required: false

      },
      /**
       * If true and no items are provided, then a loading text will be shown
       */
      loading: {
        type: [Boolean | String],
        default: undefined,
        required: false
      },

      /**
       * If true and no items are provided, then a loading text will be shown
       */
      'footer-props': {
        type: Object,
        default: () => ({
          'items-per-page-options': [10, 50, 100],
          showFirstLastPage: false,
        }),
        required: false
      },

      /**
       * Shows the select checkboxes in both the header and rows (if using default rows)
       */
      showsummery: {
        type: Boolean,
        default: false,
        required: false
      },

      /**
       * If true and no items are provided, then a loading text will be shown
       */
      summeryitem: {
        type: Array,
        default: undefined,
        required: false
      },

       /**
       * Hides default header
       */
      'hide-default-header': {
        type: Boolean,
        default: false,
        required: false
      },

      /**
       * Hides default footer
       */
      'hide-default-footer': {
        type: Boolean,
        default: false,
        required: false
      },
      /**
       * Disables pagination completely
       */
      'disable-pagination': {
        type: Boolean,
        default: false,
        required: false
      }

    },
    data() {
      return {
        selected: [],
        options: {},
        showGrid: false,
        footerheader: false,
        actionbuttonshow: true,
        styles: {
          'padding': 0
        },
        summerygridheader: true,
        summerygridfooter: true,

      }
    },
    watch: {
      options: {
        handler() {
          if (this.headers == null || this.headers == [] || this.headers.length == 0) {

          } else {
            this.showGrid = true;
            this.$emit('dataSorce', this.options)
          }
        },
        deep: true,
      },
      // showGrid: function(val, oldVal) {
      //     if(val == true)
      //     {

      //     },
      headers: function (val, oldVal) {
        {

          this.showGrid = true
          this.$emit('dataSorce', this.options)
        }

      },
      // page: function (val, oldVal){
      //   debugger
      //     this.options.page=val;
      //     // this.$emit('dataSorce', this.options)
      // },
      //  sortBy: function (val, oldVal){

      //     this.$emit('dataSorce', this.options)
      // },
      //  sortDesc: function (val, oldVal){

      //     this.$emit('dataSorce', this.options)
      // },

    },
    mounted() {

    },
    computed: {

      computedHeaders() {

        return this.headers.filter(h => h.display)
      },
      //  selectrow() {

      //     alert()
      // },
      selectVal: {
        get() {

          return this.value;
        },
        // We let the parent know if it is checked or not, by sending the ID
        set(val) {
          this.$emit("input", val)
        }
      },

    },
    methods: {
      getContent(item, header, headervalue) {

        if (header.text == 'Attached' || header.text == 'Actions') {
          return ''
        } else {
          return item[headervalue];
        }
      },
      hoverRowIn(e) {

        if (e.currentTarget.childElementCount > 0) {
          // if (e.currentTarget.childNodes[e.currentTarget.childElementCount - 1].getElementsByTagName('div').length > 0) {
          //     let x = e.currentTarget.childNodes[e.currentTarget.childElementCount - 1].getElementsByTagName('div')[0]
          //     x.style.display = "";
          // }
          this.$emit('hoverRowIn', e)
        }
      },
      hoverRowOut(e) {
        if (e.currentTarget.childElementCount > 0) {
          // if (e.currentTarget.childNodes[e.currentTarget.childElementCount - 1].getElementsByTagName('div').length > 0) {
          //     let x = e.currentTarget.childNodes[e.currentTarget.childElementCount - 1].getElementsByTagName('div')[0]
          //     x.style.display = "none";
          // }
          this.$emit('hoverRowOut', e)
        }

      },
      showGridFun() {
        return this.showGrid;
      },
      selectRow(event,valrow) {
        let shadesEl = document.querySelector('.rowSelect')
        if (shadesEl){
          shadesEl.classList.remove('rowSelect')
        }
        if (event.target.closest('tr')){
          let parent = event.target.closest('tr')
          parent.classList.toggle("rowSelect")
        }

        this.$emit('selectRow', valrow)
      },
      menuitemClick(selecteditem, item) {
        this.$emit('menuitemClick', selecteditem, item)
      },

      getHtml(itemval, headerval) {

        // let strReturn = "";

        // strReturn = '<i aria-hidden="true" class="v-icon notranslate mdi mdi-account theme--light"></i> ' + Itemval.name + '<br>' + Itemval.fat

        let teplHtml = headerval.value;
        var regExp = /\(\$\:([^)]+)\:\$\)/g;
        var matches = teplHtml.match(regExp);
        if (matches != null) {
          for (var i = 0; i < matches.length; i++) {
            var str = matches[i];
            teplHtml = teplHtml.replace(matches[i], itemval[str.substring(3, str.length - 3).trim()]);
          }
        }
        //= teplHtml;

        return teplHtml
      },
      total1(column) {

        const table = this.$refs.table
        //console.log('table',table);
        return table ? table.filteredItems.reduce((s, i) => {
          return s + parseInt(i[column.value], 10)
        }, 0) : 0
      }
    },
    updated: function () {

    },
    filters: {
      total: function (data, name) {

        let total = 0

        data.forEach(function (item) {
          total = total + parseFloat(item[name])
        })
        return typeof data === 'NaN' ? '' : total.toFixed(2)
      },
      format: function (data) {

        return data.toFixed(2);
      }
    }

  }

</script>
<style lang="scss">
  .rowSelect {
    background-color:rgba(54, 188, 221, 0.07);
  }
  //BLOCK BY SS ON 14082020, Becaue all the v-menu contect are not diplay properly in Select Dropdown
  // .v-menu__content
  // {
  //   min-width: 0px !important;
  // }
  </style>
//****************************************************************************************************************************************************************************************
//* name type default description
//****************************************************************************************************************************************************************************************
//* id string undefined Sets the DOM id on the component
//* headers array undefined An array of objects that each describe a header column. See the example below for a
definition of all properties
//* Example
//* {
//* text: string
//* value: string
//* align?: 'start' | 'center' | 'end'
//* sortable?: boolean
//* divider?: boolean
//* class?: string | string[]
//* width?: string | number
//* filter?: (value: any, search: string, item: any) => boolean
//* sort?: (a: any, b: any) => number
//* display?: boolean,
//* type?: text |number | template | icon | actionmenu
//* }
//* items array undefined The array of items to display
//* items-per-page number 10 Changes how many items per page should be visible. Can be used with .sync modifier
//* hide-actions boolean false Hide footer section
//* value array [] Used for controlling selected rows
//* server-items-length number -1 Used only when data is provided by a server. Should be set to the total amount of
items available on server so that pagination works correctly
//* show-select boolean false Shows the select checkboxes in both the header and rows (if using default rows)
//* sort-by string | array [] Changes which item property (or properties) should be used for sort order. Can be used
with .sync modifier
//* sort-desc boolean | array [] Changes which direction sorting is done. Can be used with .sync modifier
//* page number 1 Changes which page of items is displayed. Can be used with .sync modifier
//* no-data-text string '$vuetify.noDataText' Text shown when search prop is used and there are no results
//* item-key string '' Unique key for chekbox field
//* loading boolean | string undefined If true and no items are provided, then a loading text will be shown
