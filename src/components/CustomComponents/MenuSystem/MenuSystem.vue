<template v-model="modelData">
    <aside class="sidebar s-flex-direction--column s-swatch-primary s-text-align--center s-items-spacingVertical--xs">
      <a href="javascript:void(0)" class="s-text-font--clear s-block s-padding--l">
        <img src="/src/assets/images/logo-symbol.svg" height="80">
      </a>
      <nav class="s-expand s-flex-direction--column s-items-spacingVertical--s">
        <a v-on:click="setActive('Dashboard')" :class="{ 'router-link-active': isActive('Dashboard') }"
          class="s-flex-items--center s-items-spacing--xs s-padding-left--s s-padding-right--s"
          href="javascript:void(0)">
          <span class="icon-layout s-text-size--xxl"></span>
          <span class="s-text--semibold-size--s">Dashboard</span>
        </a>
        <a v-on:click="setActive('Timesheets')" :class="{ 'router-link-active': isActive('Timesheets') }"
          class="s-flex-items--center s-items-spacing--xs s-padding-left--s s-padding-right--s"
          href="javascript:void(0)">
          <span class="s-block icon-r-time-line s-text-size--xxl"></span>
          <span class="s-text--semibold-size--s">Timesheets</span>
        </a>
        <a v-on:click="setActive('Contacts')" :class="{ 'router-link-active': isActive('Contacts') }"
          class="s-flex-items--center s-items-spacing--xs s-padding-left--s s-padding-right--s"
          href="javascript:void(0)">
          <span class="s-block icon-user s-text-size--xxl"></span>
          <span class="s-text--semibold-size--s">Contacts</span>
        </a>
        <a v-on:click="setActive('Diary')" :class="{ 'router-link-active': isActive('Diary') }"
          class="s-flex-items--center s-items-spacing--xs s-padding-left--s s-padding-right--s"
          href="javascript:void(0)">
          <span class="s-block icon-calendar s-text-size--xxl"></span>
          <span class="s-text--semibold-size--s">Diary</span>
        </a>
        <a v-on:click="setActive('Ledger')" :class="{ 'router-link-active': isActive('Ledger') }"
          class="s-flex-items--center s-items-spacing--xs s-padding-left--s s-padding-right--s"
          href="javascript:void(0)">
          <span class="s-block icon-book-open s-text-size--xxl"></span>
          <span class="s-text--semibold-size--s">Ledger</span>
        </a>
        <a v-on:click="setActive('Bank')" :class="{ 'router-link-active': isActive('Bank') }"
          class="s-flex-items--center s-items-spacing--xs s-padding-left--s s-padding-right--s"
          href="javascript:void(0)">
          <span class="s-block icon-dollar-sign s-text-size--xxl"></span>
          <span class="s-text--semibold-size--s">Bank</span>
        </a>
        <a v-on:click="setActive('Reports')" :class="{ 'router-link-active': isActive('Reports') }"
          class="s-flex-items--center s-items-spacing--xs s-padding-left--s s-padding-right--s"
          href="javascript:void(0)">
          <span class="s-block icon-pie-chart s-text-size--xxl"></span>
          <span class="s-text--semibold-size--s">Reports</span>
        </a>
      </nav>
    </aside>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    props: {
      value: {
        type: String,
        default: 'Dashboard'
      },
      id: {
        type: String,
      },
    },
    methods: {
      isActive: function (menuItem) {
        return this.value === menuItem
      },
      setActive: function (menuItem) {
        this.modelData = menuItem
        return this.value;
      }
    },
    computed: {
      modelData: {
        get() {
          return this.value;
        },
        set(activeItem) {
          this.$emit("input", activeItem)
        }
      }
    }
  }

</script>
