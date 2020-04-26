<template>
	<div>
		<nav 
			class="admin-navigation"
			v-if="loggedIn"
		>
			<nuxt-link 
				to="/"
				:class="{ 'route-active': currentRoute === 'index' }"
			>
				<div class="icon icon-landing-page" />
				Landing Page
			</nuxt-link>
			<nuxt-link 
				to="/dashboard"
				:class="{ 'route-active': currentRoute === 'dashboard' }"
			>
				<div class="icon icon-dashboard" />
				Dashboard
			</nuxt-link>
			<a 
				class="logout"
				@click="logout"
			>
				<div class="icon icon-close" />
				Logout
			</a>
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
	computed: {
		currentRoute() {
			return this.$route.name;
		}
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
		},
		logout() {
            firebase.auth().signOut().then(() => {
                this.$router.push('/')
            });
        },
	},
}
</script>

<style lang="scss">
@import './../scss/global.scss';

.admin-navigation {
	width: 100vw;
	height: 30px;
	background-color: $navigation-background;
	color: $azure-white;
	display: flex;
	justify-content: flex-start;
	align-items: center;

	a {
		display: flex;
		margin: 0 .8rem;
		transition: all .2s linear;

		&:hover {
			text-decoration: underline;
			transform: scale(1.2);
		}
	}

	.route-active {
		text-decoration: underline;
	}

	.logout {
		margin-left: auto;
	}

	.icon {
		width: 20px;
		height: 20px;
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
		padding-right: 1.5rem;

		&-landing-page {
			background-image: url('../assets/icons/home.svg');
		}

		&-dashboard {
			background-image: url('../assets/icons/dashboard.svg');
		}

		&-close {
			background-image: url('../assets/icons/close.svg');
		}
	}
}

</style>
