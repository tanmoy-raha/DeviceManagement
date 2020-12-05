<template>
  <v-dialog
    persistent
    retain-focus
    :scrollable="scrollable"
    v-model="dialog"
    :max-width="width"
    :style="'zIndex='+ zIndex"
  >
    <v-card class="popupDialog">
      <v-toolbar dense flat v-show="showTitle">
        <v-toolbar-title class="s-expand">
          <h2 class="textGray35 s-text--regular">{{ title }}</h2>
        </v-toolbar-title>
      </v-toolbar>
      <v-divider style="margin:0px"></v-divider>
      <a
        v-show="showCloseIcon"
        class="icon-r-close-line s-position--topRight s-text-size--3xl-baseline--single s-margin--xs textGray35"
        @click="buttonClick('Close')"
      ></a>
      <v-card-text>
        <div>
          <div class="s-padding--s s-text-align--center s-padding-top--l">
            <div
              class="s-avatar--s s-text-size--7xl s-effect-danger s-margin-bottom"
            >
              <div class="icon-r-alert-fill"></div>
            </div>

            <div
              class="s-text--semibold-size--xxl textBody errorBody"
              v-for="item in errorList"
              :key="item"
            >
              {{ item }}
            </div>
          </div>
        </div>
      </v-card-text>
      <v-divider style="margin:0px"></v-divider>
      <v-card-actions class="pt-3">
        <v-spacer></v-spacer>

        <div>
          <v-btn
            @click="buttonClick('Close')"
            class="s-button-spacing--xl s-border--outline"
          >
            Cancel
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
    },
    zIndex: {
      type: Number,
      default: 200
    }
  },
  computed: {
    //    childData: {
    //      get() {
    //        return this.value;
    //      },
    //      set(validatonMsg) {
    //        this.$emit("input", validatonMsg)
    //      }
    //    }
  },
  data: () => ({
    dialog: false,
    resolve: null,
    reject: null,
    message: null,
    title: null,
    errorList: [],
    width: 400
  }),
  methods: {
    open(title, errMessage, popupWidth) {
      this.dialog = true;
      if (title && title != "") {
        this.title = title;
      }
      this.errorList = errMessage;
      if (popupWidth && popupWidth != "") {
        this.width = popupWidth;
      }
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

      this.$emit("popupDialogEvent", buttonText);
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
</style>
