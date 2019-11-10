<template>
	<section class="splash">
		<div class="splash__signature">
			<signature 
				class="splash__signature-initials" 
			>
				<h1 class="text text--left">
					AUTRICE DI
				</h1>
				<h1 class="text text--right">
					PAROLE IN MUSICA
				</h1>
			</signature>
			<feather class="splash__signature-feather" />
		</div>
		<div class="splash__profile" />
	</section>
</template>

<script>
import Signature from './../ui/Signature.vue';
import Feather from './../ui/Feather.vue';
export default {
	components: {
		Feather,
		Signature,
	}
}
</script>

<style lang="scss" scoped>
@import "~rfs/scss";
@import './../../scss/layout/responsive.scss';
@import './../../scss/ui/colors.scss';

.splash {
	width: 100vw;
	height: 100vh;
	position: relative;
	display: flex;
    flex-direction: column;
    justify-content: center;
	background-color: $gray;

	&__profile {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background-image: url('./../../assets/images/sonia-pinton-profile.png');
		background-repeat: no-repeat;
		background-position: left center;
		background-size: contain;
	}

	&__signature {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		width: calc(100vw - 5rem);
		height: calc(100vh - 5rem);
		position: relative;
		z-index: 1;
		background-color: rgba($azure-white, .5);
		margin: 0 auto;

		&-initials {
			position: relative;
			min-width: 140px;
			max-width: 300px;
			width: 30%;

			@media only screen and (max-width: $small) {
				width: 70%;
			}
		}

		.text {
			position: absolute;
			bottom: 0;
			@include font-size(2rem);
			font-family: 'Medium';
			&--left {
				left: -5%;
			}

			&--right {
				right: -70%;
			}

			@media only screen and (max-width: $large) {
				font-size: 1.3rem;
			}

			@media only screen and (max-width: $medium) {
				&--left {
					left: 0;
				}

				&--right {
					left: 0;
					bottom: -15%;
				}
			}
		}

		&-feather {
			min-width: 200px;
			width: 20%;
		}
	}
}

</style>