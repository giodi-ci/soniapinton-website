<template>
	<div class="container">
		<div class="splash-screen bg-grey">
			<div class="profile" />
			<div class="signature flex flex-col items-center">
				<div class="initials" />
				<div class="maxim font-bold flex justify-between">
					<span>{{ maxim.left }}</span>
					<span>{{ maxim.right }}</span>
				</div>
				<div class="feather" />
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				maxim: {
					left: 'AUTRICE',
					right: 'PAROLE IN MUSICA'
				}
			}
		}
	}
</script>

<style lang="scss">
	.splash-screen {
		width: 100vw;
		height: 100vh;

		.profile {
			width: 100%;
			height: 100vh;
			position: absolute;
			pointer-events: none;
			background: {
				image: url('../assets/images/sonia-pinton-profile.png');
				size: auto;
				repeat: no-repeat;
				position: left;
			}
		}

		.signature {
			position: relative;
			width: 50%;
			margin-left: 30%;
			padding-top: 10%;

			.initials {
				width: 450px;
				height: 450px;
				background: {
					image: url('../assets/svg/signature.svg');
					size: auto;
					repeat: no-repeat;
					position: center;
				}
			}

			.maxim {
				width: 450px;
				position: absolute;
				bottom: 25%;
				left: 34%;
			}

			.feather {
				width: 200px;
				height: 200px;
				background: {
					image: url('../assets/svg/feather.svg');
					size: auto;
					repeat: no-repeat;
					position: center;
				}
				transform: rotate(45deg);
			}
		}
	}
</style>
