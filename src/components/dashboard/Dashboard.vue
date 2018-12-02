<template>
    <div id="dashboard">
        <h1>That's the dashboard</h1>
        <p>You shoul only get here if you are authenticated</p>
      
            <p v-if="email">Your email: {{ email }} </p>
        
    </div>
</template>

<script>
    import axios from 'axios';
    
    export default {
        data() {
            return {
                checkLoginEmail: this.$store.state.userEmail
            }
        },
       computed: {
           email() {
               return !this.$store.getters.user ? false : this.$store.getters.user.email
            }
        },
        created () {
           this.$store.dispatch('fetchUser')
        }
    }
</script>
    
    
<style scoped>
    h1,p {
        text-align: center;
    }
    
    p {
        color: red;
    }

</style>