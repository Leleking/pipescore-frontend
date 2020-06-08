import AuthServices from '../services/Auth/auth'
export default {
    data() {
        return {
            user: {

                username: "",
                password: "",
            }
        }
    },
    created(){
        if(this.$store.state.authStore.authUser){
            this.$router.go(-1)
        }
       

    },
    methods: {
         signIn() {
            
            this.$validator.validateAll()
                .then(() => {
                    if(!this.errors.any()) {
                        
                        this.authenticateUser()

                    }
                })
        },
        authenticateUser() {
                this.$store.dispatch('setFetching',true)
                AuthServices.signIn(this.user).then((payload) => {
                    this.$store.dispatch('loginUser',payload)
                    AuthServices.getUser()
                    .then((response) => {
                        console.log(response)
                    
                        this.$store.dispatch('setFetching',false)
                        this.$store.dispatch('setAuthUser',response)
                        this.$router.push({path: '/panel/dashboard'})


                    })
                    .catch((error) => {
                        this.$store.dispatch('setFetching',false)
                        console.log(error)
                    })

                }).catch((error) => {
                    this.$store.dispatch('setFetching',false)
                    this.$snotify.error("No active account found with the given credentials")
                })
        }
    },
    
   
}