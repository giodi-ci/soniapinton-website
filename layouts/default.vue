<template>
	<div>
		<nav 
			class="admin-navigation"
			v-if="loggedIn"
		>
			<nuxt-link to="/">Landing Page</nuxt-link>
			<nuxt-link to="/dashboard">Dashboard</nuxt-link>
		</nav>
		<nuxt />
	</div>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/auth';
import Cookies from 'js-cookie';

export default {
	data() {
		return {
			loggedIn: false,
		};
	},
	mounted() {
		this.setUpFirebase();
	},
	methods: {
		setUpFirebase() {
            firebase.auth().onAuthStateChanged(user => {
                if (user) {
					this.loggedIn = true;
					firebase.auth().currentUser.getIdToken(true)
						.then(token => {
							Cookies.set('access_token', token);
						})
                } else {
					this.loggedIn = false;
					Cookies.remove('access_token');
                }
            })
        }
	}
}
</script>

<style lang="scss">
@import './../scss/global.scss';

</style>
