<template>
  <v-dialog
    persistent
    retain-focus
    :scrollable="scrollable"
    v-model="dialog"
    :max-width="options.width"
    :style="{ zIndex: options.zIndex }"
  >
    <v-card class="popupDialog">
      <v-toolbar  :color="options.color" dense flat v-show="showTitle">
        <v-toolbar-title class="s-expand">
           <h5 class="textGray65 s-text--caps">{{ title }}</h5>
        </v-toolbar-title>
      </v-toolbar>
      <v-divider style="margin:0px"></v-divider>
      <a v-show="showCloseIcon"
        class="icon-r-close-line s-position--topRight s-text-size--3xl-baseline--single s-margin--xs textGray35"
        @click="buttonClick('Close')"
      ></a>
      <v-card-text><slot></slot></v-card-text>
       <v-divider style="margin:0px"></v-divider>
      <v-card-actions class="s-padding--s">
        <v-spacer></v-spacer>

        <div v-show="!!options.buttonList">
          <v-btn
            v-for="buttonListItem in options.buttonList"
            :key="buttonListItem.name"
            @click="buttonClick(buttonListItem.name)"
            :color="buttonListItem.class"
            class="s-button-spacing--l s-blockWidth--10"
          >
            {{ buttonListItem.name }}
          </v-btn>
        </div>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
/**
 * Vuetify Confirm Dialog component
 * Insert component where you want to use it:
 * <confirm ref="confirm"></confirm>
 * Call it:
 * this.$refs.confirm.open('Delete', 'Are you sure?', { color: 'red' }).then((confirm) => {})
 * Or use await:
 * let res = await this.$refs.confirm.open('Delete', 'Are you sure?', { color: 'red' }))
 **/
import dialogMovable from "../dialog-movable.js";
export default {
  props: {
    scrollable: {
      type: Boolean,
      default: true
    },
    showTitle: {
      type: Boolean,
      default: true
    },
    showCloseIcon: {
      type: Boolean,
      default: true
    },
    toolbar: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    dialog: false,
    resolve: null,
    reject: null,
    message: null,
    title: null,

    options: {
      color: "",
      width: 400,
      zIndex: 200,
      buttonList: {
        type: Array
        //   default: [{
        //     name: 'Close',
        //     class: ''
        //   }]
      }
    }
  }),
  methods: {
    open(title, message, options) {
      this.dialog = true;
      this.title = title;
      this.message = message;

      //console.log(options);
      if (typeof options === "undefined") {
        options = [];
        if (
          typeof options.buttonList === "undefined" ||
          options.buttonList === null
        ) {
          options.buttonList = [
            {
              name: "Close",
              class: ""
            }
          ];
        }
      }

      this.options = Object.assign(this.options, options);
      //console.log(this.options);
      //console.log(this.options.buttonList);
      // if (typeof (this.options.buttonList) === 'undefined' ||this. options.buttonList === null) {
      //   this.options.buttonList = [{
      //     name: 'Close',
      //     class: ''
      //   }]
      // }
      return new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
    },
    buttonClick(buttonText) {
      this.resolve(buttonText);
      if (buttonText == "Close") {
        this.hide();
      }

      this.$emit('popupDialogEvent', buttonText)
    },
    hide() {
      this.dialog = false;
      const dialog = document.querySelector(".v-dialog.v-dialog--active");
      if (dialog != null) {
        dialog.style.removeProperty("margin");
        dialog.style.removeProperty("left");
        dialog.style.removeProperty("top");
        dialog.style.removeProperty("position");
      }
    }
  }
};
</script>
<style lang="scss">
.v-dialog-popup-header {
  cursor: grab;
}

.v-dialog.v-dialog--active .popup-header-active {
  cursor: grabbing;
}
/*
.popupDialog {
  .v-card__text {
    padding: 0 !important;
  }
}
*/
</style>
