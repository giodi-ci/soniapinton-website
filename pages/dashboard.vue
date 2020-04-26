<template>
    <div class="dashboard">
        DASHBOARD
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
                redirect('/sp-admin');
            }
        } else {
            const user = firebase.auth().currentUser;

            if (!user) {
                redirect('/sp-admin');
            }
        }
    },
};
</script>

<style lang="scss" scoped>

</style>