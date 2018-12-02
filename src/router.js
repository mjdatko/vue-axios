import Vue from 'vue';
import VueRouter from 'vue-router';

import store from './store'

import WelcomePage   from './components/welcome/Welcome.vue';
import DashboardPage from './components/dashboard/Dashboard.vue';
import SignupPage    from './components/auth/Signup.vue';
import SigninPage    from './components/auth/Signin.vue';

Vue.use(VueRouter);

const routes = [
    {path: '/',          component: WelcomePage },
    {path: '/signup',    component: SignupPage },
    {path: '/signin',    component: SigninPage },
    {path: '/dashboard', 
        component: DashboardPage,
        beforeEnter ( to, from, next){
            if(store.state.idToken){
                next()
               } else {
                   next('/signin')
               }           
        }  
    }
    ];
    
export default new VueRouter({mode: 'history', routes});