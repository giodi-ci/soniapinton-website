<template>
    <div class="login">
        <form @submit.prevent="login">
            <label>User email</label>
            <input 
                type="text" 
                placeholder="Email"
                v-model="loginForm.email"
            >
        
            <label>Password</label>
            <input 
                type="password" 
                placeholder="password"
                v-model="loginForm.password"
            >
            <button type="submit">Login</button>
        </form>

        <div 
            class="error"
            v-if="error"
        >
            {{ error.message }}
        </div>
    </div>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/auth';

export default {
    data() {
        return {
            loginForm: {
                email: '',
                password: '',
            },
            error: '',
        };
    },
    methods: {
        login() {
            firebase.auth().signInWithEmailAndPassword(this.loginForm.email, this.loginForm.password)
                .then(data => {
                    this.$router.push('/dashboard');
                }).catch(error => {
                    this.error = error;
                })
        },
    },
};
</script>

<style lang="scss" scoped>

</style>
