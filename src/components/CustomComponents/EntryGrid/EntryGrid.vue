<template>
<div v-show="showGridFun()">

    <v-data-table :headers="computedHeaders"  v-bind="$props" :items="items" :options.sync="options" :loading="loading" single-expand expand :expanded.sync="mexpanded" @click:row="selectRow" @update:expanded="updateexpanded" item-selected hide-default-footer disable-pagination @item-expanded="itemexpanded">
        <!-- v-model="selectVal" -->
        <template slot="no-data">
            <!-- <v-alert :value="true" color="info">{{nodatatext}}</v-alert> -->

        </template>

        <template v-slot:item="{ item }">
            <tr @click="selectRow(item)" v-show="expandrow(item , expanded)" @mouseover="hoverRowIn" @mouseleave="hoverRowOut">
                <td v-for='(header,h) in computedHeaders' :key="h" :width="header.width" :class="'text-' + header.align">
                    <slot :name="header.value" :item="item">
                        <div v-if="header.type == 'checkbox'">
                            <v-checkbox primary hide-details :value="item[header.value]" v-model="selectVal"></v-checkbox>
                        </div>
                        <div v-if="header.type == 'switches'">
                            <!-- <v-checkbox primary hide-details :value="item[header.value]" v-model="selectVal"></v-checkbox> -->
                            <surf-switches label="" v-model="selectVal" :value="item[header.value]"  class="ma-0 textGray35"/>
                        </div>
                        <div v-else-if="header.type == 'icon'">
                            <v-icon v-text="item[header.value]"></v-icon>
                        </div>
                        <div v-else-if="header.type === 'template'" v-html="getHtml(item,header)" dark />
                        <div v-else-if="header.type === 'actionmenu'" v-show="true">
                            <v-menu bottom offset-y>
                                <template v-slot:activator="{ on }">
                                    <!-- <v-btn fab text x-small icon v-on="on">...</v-btn>  -->
                                    <v-icon class="icon-r-more-fill s-text-size--xl" v-on="on"> </v-icon>
                                </template>
                                <v-list>
                                    <v-list-item v-for="(mitem, i) in menuitems" :key="i" @click="menuitemClick(mitem,item)" :class="mitem.class">
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
        <template v-slot:expanded-item="{ headers , item }">
            <tr class="expanded expanded__content">
                <td :colspan="headers.length">
                    <v-card flat>
                        <div>

                            <v-data-table :headers="computedHeaders" hide-default-header hide-default-footer :items="expanditem(item)" class="s-padding--none s-margin--none">
                                <template v-slot:item="{ item }">
            <tr class="s-padding--none s-margin--none ">
                <td v-for='(header,h) in computedHeaders' :key="h" :width="header.width" :class="'text-' + header.align" class="s-padding--none s-margin--none ">
                    <slot :name="'entry-' +header.value">
                        <div>{{ item[header.value] }}</div>
                    </slot>

                </td>
            </tr>
        </template>
           </v-data-table>
</div>
</v-card>
</td>
<div>
    <slot name="entryRowHover"></slot>
</div>
</tr>
</template>
<template v-slot:body.append v-if="showsummery">
    <tr class="timeSheetGridFoot">

        <td colspan="100%" v-bind:style="styles">
               <v-data-table :headers="computedHeaders" hide-default-header hide-default-footer :items="summeryitem">
                <template v-slot:item="{ item }">
    <tr>

        <td v-for='(header,h) in computedHeaders' :key="h" :width="header.width" :class="'text-' + header.align">
            <!-- <div>{{ getContent(item,header ,header.value) }}</div> -->
            <slot :name="'summery-' + header.value">
                <div>{{ getContent(item,header ,header.value) }}</div>
            </slot>
        </td>
    </tr>
</template>
     </v-data-table>
</td>
</tr>
</template>
</v-data-table>
</div>
</template>

<script>
export default {
    name: 'v-entrygrid',
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
            default: undefined,
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
        // /**
        //  * Used only when data is provided by a server. Should be set to the total amount of items available on server so that pagination works correctly.
        //  */
        // 'server-items-length': {
        //     type: Number,
        //     default: -1,
        //     required: false
        // },
        /**
         * Changes how many items per page should be visible. Can be used with .sync modifier
        //  */
        // 'items-per-page': {
        //     type: Number,
        //     default: 5,
        //     required: false
        // },

        // /**
        //  * Changes which page of items is displayed. Can be used with .sync modifier
        //  */
        // page: {
        //     type: Number,
        //     default: 1,
        //     required: false
        // },
        /**
         * v-model value.
         */
        value: {
            type: [String, Array, Object],
            default: '',
            required: false
        },
        /**
         * Text shown when search prop is used and there are no results
         */
        //'no-data-text'
        'no-data-text': {
            type: String,
            default: '',
            required: false
        },
        //'no-results-text'
        'no-results-text': {
            type: String,
            default: '',
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
        // 'footer-props': {
        //     type: Object,
        //     default: {
        //         'items-per-page-options': [10, 50, 100],
        //         showFirstLastPage: false,

        //     },
        //     required: false
        // },

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
         * Shows the select checkboxes in both the header and rows (if using default rows)
         */
        'single-select': {
            type: Boolean,
            default: false,
            required: false
        },

        /**
         * If true and no items are provided, then a loading text will be shown
         */
        expanded: {
            type: Array,
            default: [],
            required: false
        },

        /**
         * validation check status
         */
        validationstatus: {
            type: Boolean,
            default: true,
            required: false
        },
        /**
         * enable/disable entry grid
         */
        enablegrid: {
            type: Boolean,
            default: true,
            required: false
        },

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

            // expanded: [],
            // totalitems:[{
            //          value: ':',
            //         name: 'Total',
            //         calories: 1000,
            //         fat: 16.0,
            //         carbs: 23,
            //         protein: 6.0,
            //         iron: '7%',
            //           icon:'',
            //      template:''
            //     }]
            // HTMLcontent: '<button type="button" class="mx-2 v-btn v-btn--contained v-btn--fab v-btn--round theme--dark v-size--small primary"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate material-icons theme--dark">remove</i>$(item.name)</span></button>'
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
        validationstatus: function (val, oldVal) {

        },
        headers: function (val, oldVal) {
            {

                this.showGrid = true
                this.$emit('dataSorce', this.options)
            }

        }

    },
    mounted() {

    },
    computed: {
        mexpanded: {
            get() {
                return this.expanded
            },
            set(val) {
                this.$emit('update:modal', val)
            }
        },

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
        expandrow(v1, v2) {
            v2 = JSON.parse(JSON.stringify(v2))
            let arr = []
            arr.push(JSON.parse(JSON.stringify(v1)))

            var obj1 = v2[0];
            var obj2 = arr[0];
            //  return true
            if (obj1 == undefined || obj2 == undefined) {
                return true
            }
            var flag = false;

            if (Object.keys(obj1).length == Object.keys(obj2).length) {
                for (let key in obj1) {

                    if (obj1[key] == obj2[key]) {
                        continue;
                    } else {
                        flag = true;
                        break;
                    }
                }
            } else {
                flag = true;
            }
            if (this.validationstatus == false) {
                flag = true;
            }

            return flag
        },
        itemexpanded(i, v) {

        },
        expanditem(item) {

            let edititem = []
            edititem.push(item)

            return edititem

        },
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
        selectRow(valrow) {
            if (this.enablegrid == false) //Enable or Disable entry grid
            {
                return false;
            }
            //*************/validation and Save *********************
            // this.validationstatus=true
            this.$emit('selectRow', valrow)

            if (this.validationstatus == false) {
                return false
            }
            //*************/validation and Save *********************

            this.mexpanded = []
            this.mexpanded.push(valrow);
            // this.$emit('selectRow', valrow)

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

        updateexpanded(valitem) {

            this.selectVal = JSON.parse(JSON.stringify(this.selectVal))

        }
    },
    updated: function () {

    },

    // created () {
    // this.items.forEach(i => {
    //   this.$set(this.expanded, i.name, false)
    // })

    //   }

}
</script>
//****************************************************************************************************************************************************************************************
//*      name                       type                            default                   description
//****************************************************************************************************************************************************************************************
//*     id                          string                          undefined                 Sets the DOM id on the component
//*     headers                     array                           undefined                 An array of objects that each describe a header column. See the example below for a definition of all properties
//*                                                                                           Example
//*                                                                                             {
//*                                                                                               text: string
//*                                                                                               value: string
//*                                                                                               align?: 'start' | 'center' | 'end'
//*                                                                                               sortable?: boolean
//*                                                                                               divider?: boolean
//*                                                                                               class?: string | string[]
//*                                                                                               width?: string | number
//*                                                                                               filter?: (value: any, search: string, item: any) => boolean
//*                                                                                               sort?: (a: any, b: any) => number
//*                                                                                               display?: boolean,
//*                                                                                               type?: text |number | template | icon | actionmenu
//*                                                                                             }
//*     items                       array                           undefined                 The array of items to display
//*     items-per-page              number                          10                        Changes how many items per page should be visible. Can be used with .sync modifier
//*     hide-actions                boolean                         false                     Hide footer section
//*     value                       array                           []                        Used for controlling selected rows
//*     server-items-length         number                          -1                        Used only when data is provided by a server. Should be set to the total amount of items available on server so that pagination works correctly
//*     show-select                 boolean                         false                     Shows the select checkboxes in both the header and rows (if using default rows)
//*     sort-by                     string | array                  []                        Changes which item property (or properties) should be used for sort order. Can be used with .sync modifier
//*     sort-desc                   boolean | array                 []                        Changes which direction sorting is done. Can be used with .sync modifier
//*     page                        number                          1                         Changes which page of items is displayed. Can be used with .sync modifier
//*     no-data-text                string                          '$vuetify.noDataText'     Text shown when search prop is used and there are no results
//*     item-key                    string                          ''                        Unique key for chekbox field
//*     loading                     boolean | string                undefined                 If true and no items are provided, then a loading text will be shown
