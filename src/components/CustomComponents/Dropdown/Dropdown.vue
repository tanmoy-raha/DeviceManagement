<template>
  <v-select
    v-model="model"
    :items="items"
    v-bind="$props"
    :search-input.sync="nodataval"
    @change="change"
    @click:clear="clear($event)"
    @focus="focus"
    :value="value"
    @blur="blur"
    :error-messages="errorMessages"
    :hide-details="hideDetails"
    :rules="rules"
  >
    <template slot="item" slot-scope="{ item }">
      <div
        v-if="$props.multiple && $props.headers"
        class="v-list-item__content"
      >
        <div class="v-list-item__title">
          <tr>
            <td
              v-for="(header, h) in $props.headers"
              :key="h"
              :width="header.width"
              :class="'text-' + header.align"
            >
              {{ getContent(item, header, header.value) }}
            </td>
          </tr>
        </div>
      </div>
      <div class="v-list-item__content" v-else>
        <div class="v-list-item__title">{{ item[$props.itemText] }}</div>
      </div>
    </template>

    <template
      v-if="$props.multiple && $props.changeSelectionAppearance"
      v-slot:selection="{ item, index }"
    >
      <span v-if="index === 0">
        <span v-if="$props.maxCharacter > 0">
          {{
            item[$props.itemText].length > $props.maxCharacter
              ? item[$props.itemText].substring(0, $props.maxCharacter) + "..."
              : item[$props.itemText]
          }}
        </span>
        <span v-else>{{ item[$props.itemText] }} </span>
      </span>
      <span v-if="index === 1" class="grey--text caption"
        >&nbsp;(+{{ model.length - 1 }})</span
      >
    </template>
    <template v-else-if="$props.maxCharacter > 0" v-slot:selection="{ item }">
      <span>
        {{
          item[$props.itemText].length > $props.maxCharacter
            ? item[$props.itemText].substring(0, $props.maxCharacter) + "..."
            : item[$props.itemText]
        }}
      </span>
    </template>
  </v-select>
</template>

<script>
export default {
  name: "Vueselectdropdown",
  props: {
    /**
     * id.
     */
    id: {
      type: String,
      default: "",
      required: false,
    },
    /**
     * Can be an array of objects or array of strings. When using objects, will look for a text and value field. This can be changed using the item-text and item-value props..
     */
    items: {
      type: Array,
      default: [],
      required: false,
    },
    /**
     * Set property of items's text value.
     */
    "item-text": {
      type: String,
      default: undefined,
      required: false,
    },
    /**
     * Set property of items's value - must be primitive. Dot notation is supported.
     */
    "item-value": {
      type: String,
      default: undefined,
      required: false,
    },
    /**
     * Search value. Can be use with .sync modifier.
     */
    "search-input": {
      type: String,
      default: undefined,
      required: false,
    },
    /**
     *  Allow the menu to overflow off the screen.
     */
    "allow-overflow": {
      type: Boolean,
      default: true,
      required: false,
    },
    /**
     *  Specifies which DOM element that this component should detach to.String can be any valid querySelector and Object can be any valid Node. This will attach to the root v-app component by default.
     */
    attach: {
      type: String,
      default: undefined,
      required: false,
    },
    /**
     *  When searching, will always highlight the first option
     */
    "auto-select-first": {
      type: Boolean,
      default: false,
      required: false,
    },
    /**
     * Add input clear functionality, default icon is Material Icons clear
     */
    clearable: {
      type: Boolean,
      default: true,
      required: false,
    },
    /**
     * Creates counter for input length; if no number is specified, it defaults to 25. Does not apply any validation.
     */
    counter: {
      type: Boolean,
      default: undefined,
      required: false,
    },
    /**
     * Hides the menu when there are no options to show. Useful for preventing the menu from opening before results are fetched asynchronously. Also has the effect of opening the menu when the items array changes if not already open.
     */
    "hide-no-data": {
      type: Boolean,
      default: false,
      required: false,
    },
    /**
     * Do not display in the select menu items that are already selected
     */
    "hide-selected": {
      type: Boolean,
      default: false,
      required: false,
    },
    /**
     * Disable the input.
     */
    disabled: {
      type: Boolean,
      default: false,
      required: false,
    },
    /**
     *  Sets input label
     */
    label: {
      type: String,
      default: undefined,
      required: false,
    },
    /**
     * Set property of items's value - must be primitive. Dot notation is supported.
     */
    "menu-props": {
      type: [String, Array, Object],
      default: function () {
        return {
          closeOnClick: false,
          closeOnContentClick: false,
          openOnClick: false,
          maxHeight: 300,
          offsetY: true,
          offsetOverflow: true,
          transition: false,
        };
      },
      required: false,
    },
    /**
     *  Changes select to multiple. Accepts array for value
     */
    multiple: {
      type: Boolean,
      default: false,
      required: false,
    },
    /**
     *  Display text when there is no data
     */
    "no-data-text": {
      type: String,
      default: "$vuetify.noDataText",
      required: false,
    },
    /**
     *  Do not apply filtering when searching. Useful when data is being filtered server side
     */
    "no-filter": {
      type: Boolean,
      default: false,
      required: false,
    },
    /**
     * Sets the input’s placeholder text
     */
    placeholder: {
      type: String,
      default: "",
      required: false,
    },
    /**
     * Puts input in readonly state
     */
    readonly: {
      type: Boolean,
      default: false,
      required: false,
    },
    /**
     * Changes the selection behavior to return the object directly rather than the value specified with item-value
     */
    "return-object": {
      type: Boolean,
      default: true,
      required: false,
    },
    /**
     * Changes display of selections to chips
     */
    chips: {
      type: Boolean,
      default: false,
      required: false,
    },
    /**
     * v-model value.
     */
    value: {
      type: [String, Array, Object],
      default: "",
      required: true,
    },
    /**
     * v-model value.
     */
    mustbevalid: {
      type: Boolean,
      default: false,
      required: false,
    },
    hideDetails: {
      type: Boolean,
      default: true,
    },
    maxwidth: {
      type: String,
      default: "",
    },
    changeSelectionAppearance: {
      type: Boolean,
      default: false,
    },
    maxCharacter: {
      type: Number,
      default: 0,
    },
    autofocus: {
      type: Boolean,
      default: false,
    },

    rules: {
      type: [String, Array, Object],
      default: () => [],
      required: false,
    },
    /**
     * error-messages
     */
    errorMessages: {
      type: String,
      default: "",
      required: false,
    },
    headers: {
      type: Array,
      default: undefined,
      required: false,
    },
  },

  data: () => ({
    nodataval: null,
  }),
  computed: {
    model: {
      get() {
        return this.value;
      },

      set(val) {
        this.$emit("input", val);
      },
    },
  },
  methods: {
    /**
     * Blur event
     */
    blur(e) {
      this.$emit("blur", e);
    },

    /**
     * change event
     */
    change(itval) {
      this.$emit("change", itval);
    },

    /**
     * click:clear event
     */
    clear(e) {
      this.$emit("clear", e);
    },

    /**
     * focus event
     */
    focus(e) {
      this.$emit("focus", e);
    },

    /**
     * update:search-input event
     */
    updatesearchinput(strval) {
      this.$emit("update:search-input", strval);
    },
    getContent(item, header, headervalue) {
      if (item[headervalue]) {
        return item[headervalue].length > 25
          ? item[headervalue].substring(0, 25) + "..."
          : item[headervalue];
      } else {
        return "";
      }
    },
  },
};
</script>
//****************************************************************************************************************************************************************************************
//*      name                       type                            default                   description
//****************************************************************************************************************************************************************************************
//*     allow-overflow              boolean                         true                      Allow the menu to overflow off the screen
//*     attach                      any                             false                     Specifies which DOM element that this component should detach to.String can be any valid querySelector and Object can be any valid Node. This will attach to the root v-app component by default.
//*     auto-select-first           boolean                         false                     When searching, will always highlight the first option
//*     clearable                   boolean                         false                     Add input clear functionality, default icon is Material Icons clear
//*     chips                       boolean                         false                     Changes display of selections to chips
//*     counter                     boolean | number | string       undefined                 Creates counter for input length; if no number is specified, it defaults to 25. Does not apply any validation.
//*     disabled                    boolean                         false                     Disable the input
//*     hide-no-data                boolean                         false                     Hides the menu when there are no options to show. Useful for preventing the menu from opening before results are fetched asynchronously. Also has the effect of opening the menu when the items array changes if not already open
//*     hide-selected               boolean                         false                     Do not display in the select menu items that are already selected
//*     id                          string                          undefined                 Sets the DOM id on the component
//*     items                       array                           []                        Can be an array of objects or array of strings. When using objects, will look for a text and value field. This can be changed using the item-text and item-value props.
//*                                                                                              {
//*                                                                                                 text: string | number | object
//*                                                                                                 value: string | number | object
//*                                                                                              }
//*     item-text                   string | array | function       text                      Set property of items's text value
//*     item-value                  string | array | function       value                     Set property of items's value - must be primitive. Dot notation is supported
//*     menu-props                  string | array | object         {"closeOnClick":false,    Pass props through to the v-menu component. Accepts either a string for boolean props menu-props="auto, overflowY", or an object :menu-props="{ auto: true, overflowY: true }"
//*                                                                   "closeOnContentClick":false, 
//*                                                                    "openOnClick":false, 
//*                                                                    "maxHeight":300, 
//*                                                                    "offsetY":true, 
//*                                                                    "offsetOverflow":true, 
//*                                                                    "transition":false}
//*     multiple                    boolean                         false                     Changes select to multiple. Accepts array for value
//*     no-filter                   boolean                         false                     Do not apply filtering when searching. Useful when data is being filtered server side
//*     no-data-text                string                          '$vuetify.noDataText'     Display text when there is no data    
//*     placeholder                 string                          undefined                 Sets the input’s placeholder text
//*     readonly                    boolean                         false                     Puts input in readonly state
//*     return-object               boolean                         true                      Changes the selection behavior to return the object directly rather than the value specified with item-value

