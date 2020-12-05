<template>
  <div id="app">
    <v-app id="inspire">
      <v-content>
        <router-view></router-view>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import axiosmixin from '../src/CommonHelper/Mixins/AxiosCommonMixin'
import methodmixin from '../src/CommonHelper/Mixins/MethodCommonMixin'
import directivesmixin from '../src/CommonHelper/Mixins/DirectivesCommonMixin'
import filtersmixin from '../src/CommonHelper/Mixins/FiltersCommonMixin'

  export default {
    //  mixins: [axiosmixin,methodmixin,directivesmixin,filtersmixin],
    methods: {
    },
    created() {
    
    },
    mounted() {
      
      
    },
  };

</script>
