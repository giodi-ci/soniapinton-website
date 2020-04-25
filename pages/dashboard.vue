<template>
    <div class="dashboard">
        <div 
            class="lougout"
            @click="logout"
        >
            Lougout
        </div>
    </div>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/auth';
import Cookies from 'js-cookie';

import { getUserFromCookie } from '@/helpers';

export default {
    asyncData({ req, redirect }) {
        if (process.server) {
            const user = getUserFromCookie(req);
            
            if (!user) {
                redirect('/login');
            }
        } else {
            const user = firebase.auth().currentUser;

            if (!user) {
                redirect('/login');
            }
        }
    },
    methods: {
        logout() {
            firebase.auth().signOut().then(() => {
                this.$router.push('/')
            });
        },
    },
};
</script>

<style lang="scss" scoped>

</style>