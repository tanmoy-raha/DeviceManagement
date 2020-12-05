<template>
  <v-btn v-bind="$props">{{value}}</v-btn>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: "Button"
    },
    color: {
      type: String,
      default: "success"
    },
    id:{
      type: String,
    },
    absolute: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    },
    bottom: {
      type: Boolean,
      default: false
    },
    dark: {
      type: Boolean,
      default: false
    },
    depressed: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    fab: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    },
    href: {
      type: String,
      default: ""
    },
    icon: {
      type: Boolean,
      default: false
    },
    large: {
      type: Boolean,
      default: false
    },
    left: {
      type: Boolean,
      default: false
    },
    light: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    outlined: {
      type: Boolean,
      default: false
    },
    right: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    text: {
      type: Boolean,
      default: false
    },
    tile: {
      type: Boolean,
      default: false
    },
    top: {
      type: Boolean,
      default: false
    },
    'x-large': {
      type: Boolean,
      default: false
    },
    'x-small': {
      type: Boolean,
      default: false
    },
    
  }
  /*
  props: [
    "buttontext",
    "absolute",
    "activeclass",
    "append",
    "block",
    "bottom",
    "color",
    "dark",
    "depressed",
    "disabled",
    "elevation",
    "exact",
    "exactactiveclass",
    "fab",
    "fixed",
    "height",
    "href",
    "icon",
    "inputvalue",
    "large",
    "left",
    "light",
    "link",
    "loading",
    "maxheight",
    "maxwidth",
    "minheight",
    "minwidth",
    "nuxt",
    "outline",
    "replace",
    "right",
    "ripple",
    "rounded",
    "small",
    "tag",
    "target",
    "text",
    "tile",
    "to",
    "top",
    "type",
    "value",
    "width",
    "xlarge",
    "xsmall",
    "flat"
  ]
  */
};
</script>

//********************************************************************************************************************************************************************
//*      name                       type                 default           description
//*********************************************************************************************************************************************************************
//*1.     absolute                   boolean              false             Applies position: absolute to the component.
//*2.     active-class               string                                 Configure the active CSS class applied when the link is active. You can find more information about the active-class prop on the vue-router documentation.
//*3.     append                     boolean              false             Setting append prop always appends the relative path to the current path. You can find more information about the append prop on the vue-router documentation.
//*4.     block                      boolean              false             Expands the button to 100% of available space.
//*5.     bottom                     boolean              false             Aligns the component towards the bottom.
//*6.     color                      string               undefined         Applies specified color to the control - it can be the name of material color (for example success or purple) or css color (#033 or rgba(255, 0, 0, 0.5)). You can find list of built in classes on the colors page.
//*7.     dark                       boolean              false             Applies the dark theme variant to the component. You can find more information on the Material Design documentation for dark themes.
//*8.     depressed                  boolean              false             Removes the button box shadow.
//*9.     disabled                   boolean              false             Removes the ability to click or target the component.
//*10.    elevation                  number | string      undefined         Designates an elevation applied to the component between 0 and 24. You can find more information on the elevation page.
//*11.    exact                      boolean              false             Exactly match the link. Without this, '/' will match every route. You can find more information about the exact prop on the vue-router documentation.
//*12.    exact-active-class         string               undefined         Configure the active CSS class applied when the link is active with exact match. You can find more information about the exact-active-class prop on the vue-router documentation.
//*13.    fab                        boolean              false             Designates the button as a floating-action-button - round.
//*14.    fixed                      boolean              false             Applies position: fixed to the component.
//*15.    height                     number | string      undefined         Sets the height for the component.
//*16.    href                       string | object      undefined         Designates the component as anchor and applies the href attribute.
//*17.    icon                       boolean              false             Designates the button as icon - round and flat
//*18.    input-value                any                  undefined         Controls the button's active state.
//*19.    large                      boolean              false             Makes the component large.
//*20.    left                       boolean              false             Aligns the component towards the left. This should be used with the absolute or fixed props.
//*21.    light                      boolean              false             Applies the light theme variant to the component.
//*22.    link                       boolean              false             Designates that the component is a link. This is automatic when using the href or to prop.
//*23.    loading                    boolean              false             Adds a loading icon animation
//*24.    max-height                 number | string      undefined         Sets the maximum height for the component.
//*25.    max-width                  number | string      undefined         Sets the maximum width for the component.
//*26.    min-height                 number | string      undefined         Sets the minimum height for the component.
//*27.    min-width                  number | string      undefined         Sets the minimum width for the component.
//*28.    nuxt                       boolean              false             Specifies the link is a nuxt-link. For use with the nuxt framework.
//*29.    outline                    boolean              false             Makes the background transparent and applies a thin border.
//*30.    replace                    boolean              false             Setting replace prop will call router.replace() instead of router.push() when clicked, so the navigation will not leave a history record. You can find more information about the replace prop on the vue-router documentation.
//*31.    right                      boolean              false             Aligns the component towards the right. This should be used with the absolute or fixed props.   
//*32.    ripple                     boolean | object     undefined         Applies the v-ripple directive.
//*33.    rounded                    boolean              false             Applies a large border radius on the button.
//*34.    small                      boolean              false             Makes the component small.
//*35.    tag                        string               button            Specify a custom tag used on the root element.
//*36.    target                     string               undefined         Designates the target attribute. This should only be applied when using the href prop.
//*37.    text                       boolean              false             Makes the background transparent.
//*38.    tile                       boolean              false             Removes the component's border-radius.
//*39.    to                         string | object      undefined         Denotes the target route of the link. You can find more information about the to prop on the vue-router documentation.
//*40.    top                        boolean              false             Aligns the content towards the top.   
//*41.    type                       default              'button'          Set the button's type attribute
//*42.    value                      any                  undefined         The value used when the component is selected in a group. If not provided, the index will be used.
//*43.    width                      number | string      undefined         Sets the width for the component.
//*44.    x-large                    boolean              false             Makes the component extra large.
//*45.    x-small                    boolean              false             Makes the component extra small.

//** FOR MORE PLEASE VISIT "https://vuetifyjs.com/en/components/buttons"
//*******************************************************************************************************************************************************************

