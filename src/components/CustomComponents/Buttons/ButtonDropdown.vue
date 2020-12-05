<template>
  <!-- <v-overflow-btn :items="dropdownItems" :label="value" :segmented="segmented" :editable="editable"></v-overflow-btn> -->
  <v-overflow-btn :items="dropdownItems" :label="value" v-bind="$props">
  </v-overflow-btn>
</template>
<script>
  export default {
    props: {
      value: {
        type: String,
        default: ""
      },
      id: {
        type: String
      },
      segmented: {
        type: Boolean
      },
      editable: {
        type: Boolean
      },
      dropdownItems: {
        type: Array
      },
    }
  }

</script>
