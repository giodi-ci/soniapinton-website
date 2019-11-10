<template>
	<div class="splash">
		<div 
			class="splash-screen bg-grey"
			ref="splash"
		>
			<div class="profile" />
			<div class="signature flex flex-col items-center">
				<div class="svg-initials" />
				<div class="feather" />
			</div>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import './../../scss/layout/responsive.scss';

.splash-screen {
		width: 100vw;
		height: 100vh;

		@media only screen and (max-width: $small) {
			width: 100%;
		    height: 220px;
		}

		.profile {
			position: absolute;
			width: 100%;
			height: 100%;
			pointer-events: none;
			background: {
				image: url('../../assets/images/sonia-pinton-profile.png');
				size: contain;
				repeat: no-repeat;
				position: left;
			}
			@media only screen and (max-width: $small) {
				height: 220px;
			}
		}


		
		.signature {
			position: relative;
			width: 50%;
			height: 100vh;
			margin: 0 auto;

			.svg-initials {
				position: relative;
				top: 10%;
				width: 450px;
				height: 450px;
				background: {
					image: url('../../assets/icons/signature.svg');
					size: auto;
					repeat: no-repeat;
					position: center;
				}

				&::before, 
				&::after {
					font-weight: bold;
				}

				&::before {
					content: 'AUTRICE';
					position: absolute;
					bottom: 0;
					left: 25%;
				}
				&::after {
					content: 'PAROLE IN MUSICA';
					position: absolute;
					bottom: 0;
					right: -22%;
				}

			}

			@media only screen and (max-width: $large) {
				height: 300px;
				top: 10%;

				.svg-initials {
					&::before, 
					&::after {
						font-size: 0.8rem;
					}

					&::before {
						left: 30%;
					}
					&::after {
						right: -8%;
					}
				}
			}
			
			@media only screen and (max-width: $medium) {
				height: 200px;
			}
			
			@media only screen and (max-width: $small) {
				height: 110px;
				top: 0;

				.svg-initials {
					width: 180px;

					&::before,
					&::after {
						font-size: 0.6rem;
					}

					&::before {
						left: 12%;
    					bottom: -5%;
					}

					&::after {
						right: -24%;
    					top: 105%;
					}
				}
			}
			

			.feather {
				width: 280px;
				height: 90px;
				position: absolute;
				bottom: 10%;
				background: {
					image: url('../../assets/icons/feather.svg');
					size: auto;
					repeat: no-repeat;
					position: center;
				}

				@media only screen and (max-width: $large) {
					height: 240px;
					bottom: -100%;
				}

				@media only screen and (max-width: $medium) {
					height: 60px;
					bottom: -60%;
				}
				
				@media only screen and (max-width: $small) {
					height: 30px;
    				bottom: -80%;
				}
			}
		}
	}

</style>