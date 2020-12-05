<template>
  <v-btn v-bind="$props">
    <v-icon :dark="dark">{{value}}</v-icon>
  </v-btn>
</template>
<script>
  export default {
    props: {
      value: {
        type: String,
        default: ""
      },
      text: {
        type: Boolean,
      },
      fab: {
        type: Boolean,
      },
      dark: {
        type: Boolean,
      },
      small: {
        type: Boolean,
      },
      large: {
        type: Boolean,
      },
      color: {
        type: String,
      },
      icon: {
        type: Boolean,
      },
      disabled: {
        type: Boolean,
      },
    }
    /*
    props: [
       "value",
       "flat",
        "fab",
        "dark",
        "small",
        "large",
        "color",
        "icon",
        "disabled"
    ]
    */
  }

</script>
