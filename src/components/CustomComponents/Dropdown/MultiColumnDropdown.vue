<template>
  <div class="multiColumnDropdown">
    <v-menu
      left
      offset-y
      v-model="multiColumnDropdownVcardOpen"
      transition="scale-transition"
      ref="refMultiColumnDropdownMenu"
      :disabled="disabled"
    >
      <template v-slot:activator="{ on }">
        <v-text-field
          :id="id"
          v-on="on"
          @focus="$event.target.select()"
          ref="multiColumnDropdownInput"
          :class="'multiColumnDropdownInputCustom ' + textBoxClass"
          :append-icon="icon"
          :clearable="clearable"
          v-model="searchTextModel"
          :rules="rules"
          :error-messages="errormessages"
          @keydown.up="multiColumnDropdownKeyUp"
          @keydown.down="multiColumnDropdownKeyDown"
          @keydown.enter="multiColumnDropdownSelectItemByEnter"
          @blur="multiColumnDropdownBlur"
          @keyup="multiColumnDropdownSearch"
          @click="multiColumnDropdownTextClick"
          @click:clear="multiColumnDropdownClear()"
          @click:append="toggleMarker"
          :label="label"
          :autocomplete="isGoogleChrome() ? 'disabled' : 'off'"
          :hide-details="hideDetails"
          :disabled="disabled"
          :maxlength="maxlength"
        ></v-text-field>
      </template>
      <v-card
        class="multiColumnDropdownListItem"
        tile
        :style="
          'height:' +
            ((showButton == true ? newbuttonHeight : 0) + menuHeight) +
            'px!important;overflow :none;'
        "
      >
        <v-list-item
          @click="multiColumnDropdownVlistClick"
          :ripple="false"
          class="s-box s-shadow--none s-padding--none"
        >
          <v-simple-table
            class="s-text-size--s multiColumnDropdown-v-data-table"
            ref="optionsList"
            v-model="modelData"
            fixed-header
            :style="'height:' + menuHeight + 'px!important;overflow :auto'"
          >
            <thead>
              <!-- <tr><th colspan="3" style="box-shadow:none;"><a href="javascript:void(0)" id="btnTopAdd" class="addbtn">New</a></th></tr>-->
              <tr>
                <th
                  v-for="(item, index) in headers"
                  :key="index"
                  :class="item.align"
                  v-bind:style="{
                    width: item.width,
                    display: [item.display ? '' : 'none']
                  }"
                >
                  {{ item.text }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-bind:id="'rowID_' + (index + 1)"
                :class="{
                  'multiColumnDropdown-highlighted-row': selected == index
                }"
                v-for="(item, index) in modelDataSource"
                :key="index"
                @click="multiColumnDropdownSelectRow(index)"
                @mousedown="multiColumnDropdownMousedown"
              >
                <td
                  v-bind:style="{
                    width: headerItem.width,
                    display: [headerItem.display ? '' : 'none']
                  }"
                  v-for="(headerItem, headerIndex) in headers"
                  :key="headerIndex"
                >
                  <!-- v-html="highlight(item[headerItem.value])" -->
                  <span
                    class="s-avatar s-margin-right--xs"
                    v-show="showAvatar && headerIndex === 0"
                  >
                    {{getAvatar(item, headerItem)}}</span
                  >
                  <span v-html="highlight(item[headerItem.value])"></span>
                </td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-list-item>

        <div v-if="showButton">
          <hr class="ma-0" />
          <!-- <v-btn style="height:20px;" >{{textButton}}</v-btn> -->

          <!-- <v-btn
            small
            @click="buttonClickMultiColumnDropdown"
            :min-width="60"
            color="s-swatch-mint s-button s-text-size--s ma-2"
            ><span class="icon-plus s-margin-right--xs"></span
            >{{ textButton }}</v-btn
          > -->

          <v-btn
            class="s-button s-swatch-primary ma-1"
            :min-width="60"
            @click="buttonClickMultiColumnDropdown"
            ><span class="icon-r-add-line s-margin-right--xs"></span
            >{{ textButton }}</v-btn
          >
        </div>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
"use strict";
export default {
  props: {
    headers: {
      type: [String, Array, Object],
      default: ""
    },
    dataSource: {
      type: [String, Array, Object],
      default: ""
    },
    value: {
      type: [String, Array, Object],
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    searchText: {
      type: String,
      default: ""
    },
    clearable: {
      type: Boolean,
      default: false,
      required: false
    },
    icon: {
      type: String,
      default: "icon-r-search-line"
    },
    showButton: {
      type: Boolean,
      default: false,
      required: false
    },
    textButton: {
      type: String,
      default: "Add"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: ""
    },
    /**
     * rules
     */
    rules: {
      type: [String, Array, Object],
      default: () => [],
      required: false
    },
    /**
     * error-messages
     */
    errormessages: {
      type: String,
      default: "",
      required: false
    },
    hideDetails: {
      type: Boolean,
      default: true
    },
    showAvatar: {
      type: Boolean,
      default: false
    },
    maxlength:{
      type: Number,
      default: 100
    },
    textBoxClass:{
      type: String,
      default: ""
    }
  },
  data() {
    return {
      itemHeight: 39,
      selectedItem: null,
      selected: 0,
      searchTextModel: "",
      boolkeyPress: false,
      boolRecordSelected: false,
      jDataMultiColumnDropdown: [],
      boolTextClick: false,
      multiColumnDropdownVcardOpen: false,
      boolItemSelect: false,
      boolKeyUpDownPress: false,
      boolSearchKeyPress: false,
      menuHeight: 345,
      newbuttonHeight: 45
    };
  },
  methods: {
    isGoogleChrome() {
      var isChrome =
        /Chrome/.test(navigator.userAgent) &&
        /Google Inc/.test(navigator.vendor);
      return isChrome;
    },
    buttonClickMultiColumnDropdown(e) {
      this.$emit("buttonClickMultiColumnDropdown", e);
    },
    retriveJsonKeyValuePositionMixin(jObj, key, value) {
      var findIndex = -1;
      for (let index = 0; index < jObj.length; index++) {
        if (jObj[index][key] == value) {
          findIndex = index;
        }
      }
      return findIndex;
    },
    focusTextField(
      strValue //it is used from outside from the page
    ) {
      //this.$refs.multiColumnDropdownInput.focus();
      //this.searchTextModel = strValue;
      //this.modelData = "";
      //this.$refs.multiColumnDropdownInput.select();
      //document.getElementById("txtMultiColumnDropdown").select();
    },
    highlight(text) {
      text = this.escapeHTML(text);
      if (this.searchTextModel != "undefined" && this.searchTextModel != "") {
        if (this.boolKeyPress && this.boolKeyUpDownPress === false) {
          text = text
            .toString()
            .replace(
              new RegExp(this.searchTextModel, "gi"),
              '<span class="multiColumnDropdown-highlighted-text">$&</span>'
            );
        }
      }
      return text;
    },
    escapeHTML(text) {
      var escape = document.createElement("textarea");
      escape.textContent = text;
      return escape.innerHTML;
    },
    toggleMarker(e) {
      //  document.getElementById("txtMultiColumnDropdown").click();
      e.target.parentElement.parentElement.parentElement
        .getElementsByTagName("input")[0]
        .click();
    },
    multiColumnDropdownSelectItem() {
      if (!this.modelDataSource.length) {
        return;
      }
      this.boolRecordSelected = true;
      this.selectedItem = this.modelDataSource[this.selected];

      if (this.shouldReset) {
        this.searchTextModel = "";
        this.selected = 0;
      }
      this.boolTextClick = false;
      let selectedItemArry = [];
      selectedItemArry.push(this.selectedItem);
      this.modelData = selectedItemArry;
      this.$emit("selectedItem", selectedItemArry);
    },
    multiColumnDropdownSelectRow(index) {
      this.selected = index;
      this.boolKeyPress = false;
      this.multiColumnDropdownSelectItem();
      this.multiColumnDropdownVcardOpen = false;
      this.$refs.multiColumnDropdownInput.focus();
      this.boolItemSelect = true;
    },
    multiColumnDropdownSelectItemByEnter() {
      if (this.multiColumnDropdownVcardOpen === true) {
        this.multiColumnDropdownSelectRow(this.selected);
        this.multiColumnDropdownVcardOpen = false;
      } else {
        let strDropdownInputVal = this.$refs.multiColumnDropdownInput.value;
        this.multiColumnDropdownVcardOpen = false;
      }
      //this.visible = false;
      this.boolKeyPress = false;
      this.boolItemSelect = true;
    },
    multiColumnDropdownKeyUp() {
      if (this.selected == 0) {
        return;
      }
      this.selected -= 1;
      this.multiColumnDropdownScrollToItem();
      this.boolKeyUpDownPress = true;
    },
    multiColumnDropdownKeyDown() {
      if (this.selected >= this.modelDataSource.length - 1) {
        return;
      }
      this.selected += 1;
      //console.log(this.selected)
      this.multiColumnDropdownScrollToItem();
      this.boolKeyUpDownPress = true;
    },
    multiColumnDropdownScrollToItem() {
      var dataTable = this.$refs.optionsList;
      var container = dataTable.$el.querySelector(".v-data-table__wrapper");
      container.scrollTop = this.selected * this.itemHeight;

      //console.log("multiColumnDropdownScrollToItem");
    },
    multiColumnDropdownVlistClick() {
      this.boolKeyPress = false;
      //this.visible = false;
      this.selected = 1;
      this.multiColumnDropdownKeyDown();
    },
    multiColumnDropdownBlur() {
      let boolExists = false;
      let strDropdownInputVal = this.$refs.multiColumnDropdownInput.value;

      if (strDropdownInputVal === "") {
        this.modelData = "";
        this.searchTextModel = "";
        this.selectedItem = null;
      }
      this.$emit("blur", this.modelData, strDropdownInputVal);
    },
    multiColumnDropdownSearch(e) {
      if (e.key == "ArrowDown" || e.key == "ArrowUp") {
        this.boolKeyPress = false;
      } else if (e.keyCode == "13") {
        this.multiColumnDropdownVcardOpen = false;
        this.boolKeyPress = false;
        let strDropdownInputVal = this.$refs.multiColumnDropdownInput.value;
        this.$emit("keyup", strDropdownInputVal);
      } else if (e.keyCode == "9") {
        let strDropdownInputVal = this.$refs.multiColumnDropdownInput.value;
        this.$emit("keyup", strDropdownInputVal);
      } else {
        let strMultiColumnDropdownVcardOpen = this.multiColumnDropdownVcardOpen;
        this.boolSearchKeyPress = true;
        this.multiColumnDropdownVcardOpen = true;
        this.boolKeyUpDownPress = false;
        this.boolKeyPress = true;

        let valchange = false;
        if (this.modelData.length > 0) {
          valchange = true;
        }

        this.modelData = "";
        if (strMultiColumnDropdownVcardOpen === false) {
          this.multiColumnDropdownTextClick(e);
        }

        if (valchange == true) {
          this.$emit("selectedItem", this.modelData);
        }

        let strTextData = e.target.parentElement.parentElement.parentElement.getElementsByTagName(
          "input"
        )[0].value;
        this.$emit("keyup", strTextData);
      }
    },
    multiColumnDropdownClear() {
      this.modelData = "";
      this.searchTextModel = "";
      this.selectedItem = null;
      this.$emit("clear", "");
    },
    multiColumnDropdownMousedown(e) {
      e.preventDefault();
    },
    multiColumnDropdownTextClick(e) {
      let dropdownContainer = e.target.parentElement.parentElement.parentElement.getElementsByTagName(
        "input"
      )[0];
      let position = dropdownContainer.getBoundingClientRect().top + 30;
      let buttonHeight = dropdownContainer.getBoundingClientRect().height;
      let winheight = window.innerHeight;
      let boolAssignTop = false;

      if (
        winheight - position < this.menuHeight &&
        position > winheight - position
      ) {
        boolAssignTop = true;
      }

      this.boolTextClick = true;
      if (this.searchTextModel != "") {
        this.boolKeyPress = false;
      } else {
        this.boolKeyPress = true;
      }

      if (this.modelData != "") {
        let selectedItemJson = JSON.parse(JSON.stringify(this.modelData));
        let strSelectdIndex = 0;

        try {
          if (selectedItemJson[0]) {
            strSelectdIndex = this.retriveJsonKeyValuePositionMixin(
              this.modelDataSource,
              "ID",
              selectedItemJson[0].ID
            );
          } else {
            strSelectdIndex = this.retriveJsonKeyValuePositionMixin(
              this.modelDataSource,
              "ID",
              selectedItemJson.ID
            );
          }
        } catch (err) {}

        this.selected = strSelectdIndex;
      }
      let vm = this;
      setTimeout(function() {
        const activeTile = document.getElementsByClassName(
          "menuable__content__active"
        );
        if (activeTile[0]) {
          if (boolAssignTop) {
            let activeMenuTop = activeTile[0].style.top.replace("px", "");
            //dropdownContainer = document.getElementById("txtMultiColumnDropdown")
            winheight = window.innerHeight;
            let divTop = dropdownContainer.getBoundingClientRect().top;
            divTop = divTop - 300 + window.scrollY + 10;
            if (vm.showButton) {
              divTop = divTop - vm.newbuttonHeight;
            }
            position = divTop;
            activeTile[0].style.top = position + "px";
          }
          if (!vm.hideDetails) {
            let divTop = parseFloat(
              vm.$refs.multiColumnDropdownInput.$el.getBoundingClientRect().top
            );
            divTop = divTop + window.scrollY + 50;
            activeTile[0].style.top = divTop + "px";
          }
          let dropdownLeftPosition = dropdownContainer.getBoundingClientRect()
            .left;
          activeTile[0].style.left = dropdownLeftPosition + "px";
        }
      }, 1);
      this.$emit("click", e);
    },
    searchData(result) {
      if (result.length > 0) {
        result = result.filter(item =>
          Object.keys(item)
            .map(key =>
              item[key]
                .toString()
                .toLowerCase()
                .includes(this.searchTextModel.toString().toLowerCase())
            )
            .includes(true)
        );
      }
      return result;
    },
    offset(el) {
      var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return {
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft
      };
    },
    getAvatar(item, headerItem){
     return this.getNameInShort(item[headerItem.value])
    },
    getNameInShort(strName) {
      strName = strName.replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, '');
      let strNameInShort = "";
      if (strName.trim() != "") {
        strName = strName.trim();
        let res = strName.split(" ");
        let strFistName = res[0];
        let strFistNameFirstChar = res[0].charAt(0);
        strNameInShort = strFistNameFirstChar.toUpperCase();
        if (res.length > 1) {
          let strLastName = res[res.length - 1];
          let strLastNameFirstChar = res[res.length - 1].charAt(0);
          strNameInShort += strLastNameFirstChar.toUpperCase();
        }
        if (strNameInShort.length === 1) {
          let strNameSecondChar = res[res.length - 1].charAt(1);
          strNameInShort += strNameSecondChar.toUpperCase();
        }
      }
      return strNameInShort;
    },
  },
  watch: {
    searchTextModel: function(newVal, oldVal) {
      if (
        oldVal != "" &&
        this.boolRecordSelected === false &&
        oldVal != newVal
      ) {
        this.boolKeyPress = true;
      }
    },
    multiColumnDropdownVcardOpen() {
      if (this.multiColumnDropdownVcardOpen === false) {
        this.boolItemSelect = false;
        this.selected = 0;
      } else {
        this.boolItemSelect = true;
        this.boolSearchKeyPress = false;
      }
    }
  },
  computed: {
    modelDataSource() {
      let result = this.dataSource;
      this.jDataMultiColumnDropdown = result;

      if (this.searchTextModel == "") {
        this.boolKeyPress = true;
      }

      if (this.boolKeyUpDownPress == true) {
        if (this.boolSearchKeyPress == true) {
          result = this.searchData(result);
        } else {
          result = this.dataSource;
        }
        this.boolKeyUpDownPress = false;
      } else if (
        this.multiColumnDropdownVcardOpen &&
        this.boolKeyPress == true
      ) {
        result = this.searchData(result);
        this.boolRecordSelected = false;
      }
      if (typeof result === "undefined" || result.length === 0) {
        result = this.dataSource;
      }

      if (result.length == 1) {
        this.selected = 0;
      }

      if (this.dataSource.length === 0) {
        this.menuHeight = 80;
      } else {
        this.menuHeight = 300;
      }
      return result;
    },
    modelData: {
      get() {
        if (this.searchText != "") {
          this.searchTextModel = this.searchText;
        }
        return this.value;
      },
      set(selectedId) {
        this.$emit("input", selectedId);
      }
    }
  },

  mounted() {},

  created() {},

  beforeDestroy() {
    //console.log("beforeDestroy")
  }
};
</script>
<style lang="scss">
// .multiColumnDropdownInputCustom .v-text-field__details {
//   display: none;
// }

.multiColumnDropdownInputCustom .v-input__slot {
  margin: 0px;
}

.multiColumnDropdown-v-data-table {
  width: 100%;
}

.multiColumnDropdown-highlighted-text {
  background-color: Yellow;
}

.multiColumnDropdown-highlighted-row {
  background-color: #f0fbff;
}

.multiColumnDropdown-v-data-table .v-data-table__wrapper {
  overflow: initial;
}

.multiColumnDropdownListItem .v-list-item {
  padding: 0px;
}

.multiColumnDropdownListItem {
  .v-list-item--link:hover:before {
    opacity: 0 !important;
  }
}
</style>
