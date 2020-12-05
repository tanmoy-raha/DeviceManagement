<template>
  <div
    class="breadcrumb s-padding-x--m s-text--caps--semibold-size--m-baseline--single s-items-spacing--xxs s-flex-items--center"
  >
    <v-breadcrumbs :items="dataSource">
      <template v-slot:divider>
        <span
          class="textGray20 icon-r-arrow-right-s-line s-text-size--l"
        ></span>
      </template>
      <template
        v-slot:item="{ item }"
      >
        <a
          href="javascript:void(0)"
          :class="
            item.disabled
              ? 'hrefDisabled textGray55 s-text--bold-size--xl'
              : 'textGray55'
          "
          v-text="item.text.toUpperCase()"
          @click="onBreadcrumbClick(item)"
        >
        </a>
      </template>
    </v-breadcrumbs>
  </div>
</template>
<script>
export default {
  name: "breadcrumbs",
  props: {
    dataSource: {
      type: [String, Array, Object],
      default: [],
      required: false
    }
  },
  created: function() {
  },
  data() {
    return {
      //     items: [
      //     {
      //       text: "Invoices",
      //       disabled: false,
      //       href: "breadcrumbs_dashboard"
      //     },
      //     {
      //       text: "Add Invoice",
      //       disabled: true,
      //       href: "breadcrumbs_link_1"
      //     }
      //   ]
    };
  },

  methods: {
    onBreadcrumbClick(item) {
      this.$emit("breadcrumbClick", item);
    },
  }
};
</script>
