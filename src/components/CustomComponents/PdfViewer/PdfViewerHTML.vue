<template>
  <surf-popupdialog ref="pdfViewerPopup" @popupDialogEvent="printPopupEvent">
    <template>
      <div style="overflow: hidden" elevation="0">
        <!-- <embed
          :src="pdfUrlPage"
          type="application/pdf"
          class="report-output"
          frameborder="0"
          width="100%"
          height="560px"
          :key="pdfUrlPage"
        />
       -->
        <div id="printDiv" v-html="HTMLPageData" 
        style="width:100%; height=560px; padding-left:10%; padding-right:5%;" />

      </div>
    </template>
  </surf-popupdialog>
</template>
<script>
export default {
  data() {
    return {
      pdfUrlPage: "",
      HTMLPageData: ""
    };
  },
  methods: {
    openPrintDialog(printHeading, htmlData, url = '') {
      debugger;
    //   var binaryString = window.atob(jData);
    //   var binaryLen = binaryString.length;
    //   var bytes = new Uint8Array(binaryLen);

    //   for (var i = 0; i < binaryLen; i++) {
    //     var ascii = binaryString.charCodeAt(i);
    //     bytes[i] = ascii;
    //   }
     this.HTMLPageData = htmlData;
     this.pdfUrlPage = url;
    //   var blob = new Blob([htmlData], {
    //     type: "plain/text",
    //   });

    //   let strPdfLink = window.URL.createObjectURL(blob);

    //   this.pdfUrlPage = strPdfLink;
      this.$refs.pdfViewerPopup.open(printHeading, "", {
        width: "80%",
        buttonList: [
        //      {
        //     name: "Print",
        //     class: "s-button s-swatch-primary",
        //   },
          {
            name: "Close",
            class: "s-border--outline",
          },
        ],
      });
    },
    printPopupEvent(res) {
     debugger;
      if (res == "Cancel") {
        this.urlPage = "";
        this.$refs.pdfViewerPopup.hide();
      }
      if (res == "Close") {
        this.urlPage = "";
        this.$refs.pdfViewerPopup.hide();
      }
       if (res == "Print") {
           debugger;
            // var printContents = document.getElementById("printDiv").innerHTML;
            // document.body.innerHTML = printContents;
            // var originalContents = document.body.innerHTML;
        //this.urlPage = "";
        //this.$refs.pdfViewerPopup.hide();
        this.print();
       // window.print();
        //document.body.innerHTML = originalContents;
      }
    },
  },
};
</script>