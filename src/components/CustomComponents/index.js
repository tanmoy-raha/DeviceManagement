import Vue from 'vue'
import VueApexCharts from 'vue-apexcharts'
import VueDraggable from "vuedraggable";
import VueDraggableResizable from "vue-draggable-resizable";

Vue.component('apexchart', VueApexCharts);
Vue.component('VueDraggable', VueDraggable);
Vue.component("VueDraggableResizable", VueDraggableResizable);

Vue.component('dm-button', require('./Buttons/Button.vue').default);
Vue.component('dm-dropdownbutton', require('./Buttons/ButtonDropdown.vue').default);
Vue.component('dm-floatingbutton', require('./Buttons/ButtonFloating.vue').default);
Vue.component('dm-buttonimage', require('./Buttons/ButtonImage.vue').default);
Vue.component('dm-alert', require('./Alert/Alert.vue').default);
Vue.component('dm-checkbox', require('./CheckBox/CheckBox.vue').default);
Vue.component('dm-checkboxgroup', require('./CheckBox/CheckboxGroup.vue').default);
Vue.component('dm-numerictextBox', require('./TextBox/NumericTextBox.vue').default);
Vue.component('dm-textBox', require('./TextBox/TextBox.vue').default);
Vue.component('dm-textarea', require('./TextBox/Textarea.vue').default);
Vue.component('dm-radiobutton', require('./RadioButton/RadioButton.vue').default);
Vue.component('dm-switches', require('./Switches/Switches.vue').default);
Vue.component('dm-switchesgroup', require('./Switches/SwitchesGroup.vue').default);
Vue.component('dm-editabledropdown', require('./Dropdown/EditableDropdown.vue').default);
Vue.component('dm-dropdown', require('./Dropdown/Dropdown.vue').default);
Vue.component('dm-menusystem', require('./MenuSystem/MenuSystem.vue').default);
Vue.component('dm-toolbar', require('./Toolbar/Toolbar.vue').default);
Vue.component('dm-datepicker', require('./DatePicker/DatePicker.vue').default);
Vue.component('dm-grid', require('./DisplayGrid/DisplayGrid.vue').default);
Vue.component('dm-popupdialog', require('./Popups/PopupDialog.vue').default);
Vue.component('dm-multicolumndropdown', require('./Dropdown/MultiColumnDropdown.vue').default);
Vue.component('dm-entrygrid', require('./EntryGrid/EntryGrid.vue').default);
Vue.component('dm-searchtextBox', require('./TextBox/SearchTextBox.vue').default);

Vue.component('dm-breadcrumbs', require('./Breadcrumbs/Breadcrumb.vue').default);
Vue.component('dm-reportPreviewer', require('./ReportPreviewer/ReportPreviewer.vue').default);
Vue.component('dm-errorMessagePopup', require('./Popups/ErrorMessagePopup.vue').default);

Vue.component('pdfViewerPopup', require('./PdfViewer/PdfViewer.vue').default);

Vue.component('pdfViewerPopupHTML', require('./PdfViewer/PdfViewerHTML.vue').default);



