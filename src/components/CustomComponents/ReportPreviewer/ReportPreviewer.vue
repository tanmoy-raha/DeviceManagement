<template>
  <div>
    <header>
      <div class="s-flex s-relative s-padding-y--s s-margin-bottom">
        <div>
          <a
            class="textGray55 s-text-size--l--semibold s-flex-items--center s-inline--block"
            @click="rptPreviewerBack"
          >
            <span
              class="s-text-size--xl icon-r-arrow-left-s-line s-margin-right--xs"
            ></span
            >Back
          </a>
        </div>
        <div class="s-expand"></div>
        <div class="s-position--center"> 
          <div
            class="s-button s-border--outline s-text-align--center--semibold s-blockWidth--20 textGray55"
          >
            <surf-dropdown
              id="ddlQuickReport"
              label="Reports"
              v-model="quickReportList"
              :items="QuickReportListDataSource"
              :hide-selected="true"
              :multiple="false"
              item-text="text"
              item-value="val"
              :clearable="false"
              @change="quickReportChange"
            />
          </div>
        </div>
        <div class="s-items s-flex-items--center">
          <a
            href="javascript:void(0);"
            class="textGray55 s-text--semibold s-flex-items--center"
            ><span
              class="s-text-size--xl icon-r-mail-line s-margin-right--xs"
            ></span
            ><span>Email</span></a
          >
          <a
            href="javascript:void(0);"
            class="textGray55 s-text--semibold s-flex-items--center"
            @click="clickPrint"
            ><span
              class="s-text-size--xl icon-r-printer-line s-margin-right--xs"
            ></span
            ><span>Print</span></a
          >
          <a
            href="javascript:void(0);"
            class="textGray55 s-text--semibold s-flex-items--center"
            @click="clickSave"
            ><span
              class="s-text-size--xl icon-r-arrow-down-circle-line s-margin-right--xs"
            ></span
            ><span>Save As</span></a
          >
          <a
            href="javascript:void(0);"
            class="textGray55 s-text--semibold s-flex-items--center"
            @click="clickExcel"
            ><span
              class="s-text-size--xl icon-r-file-excel-line s-margin-right--xs"
            ></span
            ><span>Excel</span></a
          >
        </div>
      </div>
    </header>
    <div class="builderReport s-grid-spacing--none s-shadow--m">
      <aside class="s-col-2 s-swatch-default s-shape-rounded--left">
        <div class="s-padding s-padding-top--xl">
          <div class="s-text--caps--bold s-margin-bottom--l">
            Generate Report
          </div>

          <div class="s-items-spacingVertical--s s-margin-bottom--l">
            <slot name="leftSideContainer"></slot>
          </div>
          <div class="s-items-spacingVertical--xs">
            <v-btn
              class="s-button s-swatch-primary s-width--expand"
              @click="clickRunReport"
              >Run<span class="icon-r-play-fill s-margin-left--xxs"></span
            ></v-btn>
            <v-btn
              class="s-button s-border--outline theme--light s-width--expand"
              @click="clickAdvanced"
              >Advanced</v-btn
            >
          </div>
        </div>
      </aside>
      <div class="s-col-10">
        <div class="s-swatch-default s-padding--none s-shape-rounded--right">
          <div style="padding:40px 40px 0px 40px;">
            <table
              style="width:100%;"
              cellpadding="0"
              cellspacing="0"
              id="divReportHeader"
            >
              <tr>
                <td>
                  <h2>{{ ReportName }}</h2>
                  <div class="s-text-size--l">
                    {{ CompanyName }}
                  </div>
                </td>
                <td
                  class="s-text-size--xl reportHeaderPaddingRight"
                  align="right"
                  valign="top"
                >
                  <span>{{ ReportCriteriaFrom }}</span>
                  <span
                    v-if="
                      ReportCriteriaFrom.trim() != '' &&
                        ReportCriteriaTo.trim() != ''
                    "
                    >–</span
                  >
                  <span>{{ ReportCriteriaTo }}</span>
                </td>
              </tr>
            </table>
          </div>

          <div style="padding:20px 40px 10px 40px; min-height:280pt">
            <slot name="bodyContainer"></slot>
          </div>

          <div style="padding:0px 40px 15px 40px" v-show="ReportFooterDisplay">
            <v-divider class="mb-5 mt-0"></v-divider>
            <table
              style="width:100%;"
              cellpadding="0"
              cellspacing="0"
              id="divReportFooter"
            >
              <tr>
                <td>
                  <span class="s-text-size--xs--bold float-left"
                    >Printed By</span
                  >
                  <span class="s-text-size--xs s-margin-left--xs float-left "
                    >{{ FooterReportPrintBy }}&nbsp;on&nbsp;{{
                      FooterReportPrintDate
                    }}</span
                  >
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>

    <surf-popupdialog
      ref="popupDialogAdvance"
      @popupDialogEvent="handlerPopupDialogAdvance"
    >
      <template>
        <v-container class="scroll">
          <div class="s-items-spacingVertical s-padding-top--xs">
            <div class="s-flex--justified s-items-spacing">
              <div>

                <v-simple-table height="300px" fixed-header class="overflow-y-auto scroll columnChooser">
                  <template v-slot:default>
                    <thead class="thead-dark">
                      <tr>
                        <th scope="col" colspan="2" style="padding-left:0px">
                          Column Details
                        </th>
                      </tr>
                    </thead>
                    <VueDraggable tag="tbody"
                     v-model="jDataColumnList"
                    >
                      <tr
                        v-for="(item, index) in jDataColumnList"
                        :key="item.ControlCaption"
                        style="cursor:move;"
                      >
                        <td style="width:5px">
                          <v-checkbox
                            hide-details
                            v-model="item.ControlSelectedValue"
                          ></v-checkbox>
                        </td>
                        <td>{{ item.ControlCaption }}</td>
                      </tr>
                    </VueDraggable>
                  </template>
                </v-simple-table>
              </div>
              <div style="padding-left:5px">
                <v-row class="s-padding-top--s">
                  <surf-dropdown
                    label="Sort By 1"
                    v-model="modelSortOrder1"
                    :items="jDataSortBy"
                    class="s-padding--none"
                    :hide-selected="true"
                    item-text="text"
                    item-value="value"
                    :clearable="false"
                  />
                </v-row>
                <v-row class="s-padding-top--xs" v-show="DisplaySort1">
                  <surf-switches
                    label="Display Heading"
                    class="ma-0 textGray35 s-padding-left--xs"
                    v-model="modelSort1DisplayHeading"
                  />
                </v-row>
                <v-row class="s-padding-top--xs" v-show="DisplaySort1Total">
                  <surf-switches 
                  label="Total" 
                  class="ma-0 textGray35"
                  v-model="modelSort1Total"
                   />
                </v-row>

                <v-row class="s-padding-top--l">
                  <surf-dropdown
                    label="Sort By 2"
                    v-model="modelSortOrder2"
                    :items="jDataSortBy"
                    class="s-padding--none"
                    :hide-selected="true"
                    item-text="text"
                    item-value="value"
                  />
                </v-row>
                <v-row class="s-padding-top--xs" v-show="DisplaySort2">
                  <surf-switches
                    label="Display Heading"
                    class="ma-0 textGray35 s-padding-left--xs"
                    v-model="modelSort2DisplayHeading"
                  />
                </v-row>
                <v-row class="s-padding-top--xs" v-show="DisplaySort2Total">
                  <surf-switches 
                  label="Total" 
                  class="ma-0 textGray35"
                  v-model="modelSort2Total" />
                </v-row>
              </div>
            </div>
          </div>
        </v-container>
      </template>
    </surf-popupdialog>
  </div>
</template>

<style lang="scss">
.columnChooser{
  .v-data-table th, .v-data-table td{
    padding-left: 0px;
  }
}
</style>
<script>
"use strict";
const cloneDeep = require("clone-deep");
const Entities = require("html-entities").XmlEntities;
export default {
  name: "ReportPreviewer",
  props: {
    ReportName: {
      type: String,
      default: "Report",
      required: false
    },
    CompanyName: {
      type: String,
      default: "",
      required: false
    },
    ReportCriteriaFrom: {
      type: String,
      default: "",
      required: false
    },
    ReportCriteriaTo: {
      type: String,
      default: "",
      required: false
    },
    QuickReportListDataSource: {
      type: [String, Array, Object],
      default: ""
    },
    SelectQuickReportList: {
      type: [String, Array, Object],
      default: ""
    },
    FooterReportPrintBy: {
      type: [String],
      default: ""
    },
    FooterReportPrintDate: {
      type: [String],
      default: ""
    },
    ReportFooterDisplay: {
      type: Boolean,
      default: false
    },
    AvailableColumnData: {
      type: [String, Array, Object],
      default: ""
    },
    DisplaySort1: {
      type: Boolean,
      default: false
    },
    DisplaySort1Total: {
      type: Boolean,
      default: false
    },
    DisplaySort2: {
      type: Boolean,
      default: false
    },
    DisplaySort2Total: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      quickReportList: this.SelectQuickReportList,
      jDataColumnList: [],
      jDataSourceIncludeColumn: [],
      jDataSourceExcludeColumn: [],

      jDataSortBy: [],
      modelSortOrder1: {},
      modelSortOrder2: {},

      modelSort1DisplayHeading: false,
      modelSort1Total: false,
      modelSort2DisplayHeading: false,
      modelSort2Total: false,
    };
  },

  methods: {
    clickRunReport() {
      this.$emit("handlerRunReport");
    },
    clickAdvanced() {
      this.$refs.popupDialogAdvance.open("Advanced Settings", "", {
        width: 600,
        buttonList: [
          {
            name: "Cancel",
            class: "s-border--outline"
          },
          {
            name: "Reset",
            class: "s-border--outline"
          },
          {
            name: "Update",
            class: "s-swatch-primary s-button"
          }
        ]
      });
      this.$emit("handlerAdvanced");
    },
    clickPrint() {
      const entities = new Entities();
      let strHeaderHtml =
        "<div class='reportHeaderPaddingLeft' style='width:100%'>" +
        document.getElementById("divReportHeader").outerHTML +
        "</div>";
      strHeaderHtml = strHeaderHtml.replace(/\s\s\s/g, "");
      //strHeaderHtml.replace(/\s+/g, " ");
      strHeaderHtml = entities.encode(strHeaderHtml);
      this.$emit("handlerPrint", strHeaderHtml);
    },
    clickSave() {
      const entities = new Entities();
      let strHeaderHtml =
        "<div class='reportHeaderPaddingLeft' style='width:100%'>" +
        document.getElementById("divReportHeader").outerHTML +
        "</div>";
      strHeaderHtml = strHeaderHtml.replace(/\s+/g, " ");
      strHeaderHtml = entities.encode(strHeaderHtml);
      this.$emit("handlerSave", strHeaderHtml);
    },
    clickExcel(){
      this.$emit("handlerSaveExcel");
    },
    rptPreviewerBack(e) {
      //const params = new URLSearchParams(location.search);
      // let formulateQueryString = {
      //   id: params.get("id")
      // };
      this.$router.push({
        path: "/ui/" + "Report"
      });
    },
    reportDrillDown(strFieldName, strRefID) {
      this.$emit("handlerReportDrillDown", strFieldName, strRefID);
    },
    quickReportChange() {
      this.$router.push({
        path: "/ui/" + this.quickReportList.val
      });
    },
    handlerPopupDialogAdvance(res) {
      if (res.toLowerCase() == "update") {
        this.jDataSourceIncludeColumn = [];
        this.jDataSourceExcludeColumn = [];

        let lstColumnDummy = cloneDeep(this.jDataColumnList);
        for (var i = 0; i < lstColumnDummy.length; i++) {
          if (lstColumnDummy[i].ControlSelectedValue) {
            lstColumnDummy[i].ControlSelectedValue = "Y";
            this.jDataSourceIncludeColumn.push(lstColumnDummy[i]);
          } else {
            lstColumnDummy[i].ControlSelectedValue = "N";
            this.jDataSourceExcludeColumn.push(lstColumnDummy[i]);
          }
        }
        this.$refs.popupDialogAdvance.hide();
        this.$emit("handlerAdvanceUpdate");
      } else if (res.toLowerCase() == "reset") {
        this.$refs.popupDialogAdvance.hide();
        this.$emit("handlerReset");
      } else {
        this.$refs.popupDialogAdvance.hide();
      }
    },
    updateColumnList(jDataList) {
      let lstColumnDummy = cloneDeep(jDataList);
      for (var i = 0; i < lstColumnDummy.length; i++) {
        if (lstColumnDummy[i].ControlSelectedValue === "Y") {
          lstColumnDummy[i].ControlSelectedValue = true;
        } else {
          lstColumnDummy[i].ControlSelectedValue = false;
        }
      }
      this.jDataColumnList = lstColumnDummy;
    },
  
  }
};
</script>
