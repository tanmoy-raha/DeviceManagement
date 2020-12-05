  <template>
  <v-app>
    <v-content>
      <div class="s-padding--xl">
        <div class="s-margin-bottom--xl">
          <img :src="getImgUrlMixin('/src/assets/images/logo-symbol-aqua.svg')" height="160" />
        </div>
        <h1 class="s-margin-bottom--xl">{{ msg }}</h1>
        <div class="s-text--bold--caps-size--xs s-margin-bottom--xs">Libraries</div>
        <router-link v-bind:to="'/VisualComponentNew'">Visual Components</router-link>
        <br />
        <!-- <router-link v-bind:to="'/VisualComponent'">Visual Components With Vuetify</router-link><br /> -->
        <router-link v-bind:to="'/DeveloperComponent'">Developer Components</router-link>
        <hr />
        <div class="s-text--bold--caps-size--xs s-margin-bottom--xs">Pages</div>
        <router-link v-bind:to="'/Login'">Login</router-link>
        <br />
        <router-link v-bind:to="'/ContactBrowse'">Contact Browse</router-link>
        <br />
        <router-link v-bind:to="'/ContactEdit'">Contact Edit</router-link>
        <br />
        <input type="Button" value="Open Toast Notification" @click="open"/>
      </div>
    </v-content>
  </v-app>
</template>
<script>
export default {
  name: "index",
  data() {
    return {
      msg: "Surf PM Development"
    };
  },
  created() {
 
  debugger;
    if (location.pathname == "/ui/Email") {      
      let pushurl = location.origin + "#" + location.pathname + location.search;
      //window.open('https://login.microsoftonline.com/e78fd193-d040-432c-bfeb-6bf730fad07a/oauth2/logout', '_blank');
      window.location.assign(pushurl);      
    }

    if (location.pathname == "/ui/Diary1") {      
      let pushurl = location.origin + "#" + location.pathname + location.search;      
      window.location.assign(pushurl);      
    }
  },
  methods:{
    open(){
      this.$toast.open({
    message: 'This is a sample message',
    type: 'success',
    // all other options may go here
      });

       this.$toast.open({
    message: 'This is a sample message',
    type: 'error',
    // all other options may go here
      });

      this.$toast.open({
    message: 'This is a sample message',
    type: 'info',
    // all other options may go here
      });

      this.$toast.open({
    message: 'This is a sample message',
    type: 'warning',
    // all other options may go here
      });
    }
  }
};
</script>
