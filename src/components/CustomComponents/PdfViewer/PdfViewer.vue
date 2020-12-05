<template>
  <surf-popupdialog ref="pdfViewerPopup" @popupDialogEvent="printPopupEvent">
    <template>
      <div style="overflow: hidden" elevation="0">
        <embed
          :src="pdfUrlPage"
          type="application/pdf"
          class="report-output"
          frameborder="0"
          width="100%"
          height="560px"
          :key="pdfUrlPage"
        />
      </div>
    </template>
  </surf-popupdialog>
</template>
<script>
export default {
  data() {
    return {
      pdfUrlPage: "",
    };
  },
  methods: {
    openPrintDialog(printHeading, jData) {
      debugger;
      var binaryString = window.atob(jData);
      var binaryLen = binaryString.length;
      var bytes = new Uint8Array(binaryLen);

      for (var i = 0; i < binaryLen; i++) {
        var ascii = binaryString.charCodeAt(i);
        bytes[i] = ascii;
      }

      var blob = new Blob([bytes], {
        type: "application/pdf",
      });

      let strPdfLink = window.URL.createObjectURL(blob);

      this.pdfUrlPage = strPdfLink;
      this.$refs.pdfViewerPopup.open(printHeading, "", {
        width: "80%",
        buttonList: [
          {
            name: "Close",
            class: "s-border--outline",
          },
        ],
      });
    },
    printPopupEvent(res) {
      if (res == "Cancel") {
        this.urlPage = "";
        this.$refs.pdfViewerPopup.hide();
      }
      if (res == "Close") {
        this.urlPage = "";
        this.$refs.pdfViewerPopup.hide();
      }
    },
  },
};
</script>