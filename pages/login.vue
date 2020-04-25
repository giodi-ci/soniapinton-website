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
                console.log('try to log in');  
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>