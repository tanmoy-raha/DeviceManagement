<template>
    <div>
        <div class="s-box s-shadow--s s-padding--xl">
        
             <div class="s-items-spacingVertical--s">
                      <div class="s-margin-bottom s-text--semibold-size--xl UserAccessRight">User Access Group</div>
                      <div class="s-items-spacingVertical">
                        <div class="s-flex--justified s-items-spacing">
                          <div>
                             <surf-textBox label="Description" :value="Description"></surf-textBox>
                             <div id="dvErrMsg" style="display:none"></div> 
                         
                          </div>
                          <div>
                            
                          </div>
                        </div>
                      
                      </div>
            </div>
           
      
            <footer class="s-flex s-margin-top--l">
                <div class="s-expand">
                
                </div>
                <nav class="s-items-spacing--s">
                    
                <v-btn  class="s-blockWidth--15 s-button-spacing--xl s-border--outline" @click="GoBack">
                    Cancel
                </v-btn>
                <v-btn color="s-swatch-primary" class="s-blockWidth--15 s-button-spacing--xl" @click="SaveAccessGroup">
                    <span class="icon-r-save-line s-margin-right--xs"></span>Save &amp; Exit
                </v-btn>
                <!-- <v-btn color="s-swatch-primary" class="s-blockWidth--15 s-button-spacing--xl">Continue<span class="icon-r-arrow-right-s-line s-margin-left--xs"></span></v-btn> -->
                </nav>
            </footer>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
                Description:""           
        }
    },
    methods:{
         GoBack(){
            this.$router.push('AccessGroup')
        },
        DisplayErrMsg(hasError){
            var dvErrMsg = document.getElementById('dvErrMsg');
            if(hasError == true){
              if(dvErrMsg != null && dvErrMsg.hasAttribute('style')){
                dvErrMsg.removeAttribute('style');
              }
              dvErrMsg.setAttribute('style','display: block');
              dvErrMsg.innerHTML="<span style='color:red'>Please enter description </span>";
            }
            else{
              dvErrMsg.innerHTML=null;
              if(dvErrMsg != null && dvErrMsg.hasAttribute('style')){
                dvErrMsg.removeAttribute('style');
              }
              dvErrMsg.setAttribute('style','display: none');
            }
        },
        SaveAccessGroup(){
                if(this.Description == null || this.Description == ""){
                    this.DisplayErrMsg(true);
                    return;
                }
        },
    }
}
</script>
