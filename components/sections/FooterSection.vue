<template>
	<div class="footer">
		<div class="footer-socials">
			<div class="social social__facebook">
				<a
					href="https://www.facebook.com/raccontilascia/"
					target="_blank"
					rel="noopener noreferrer"
				>
					f
				</a>
			</div>
			<div class="social social__instagram">
				<a
					href="https://www.instagram.com/lascia_racconti/"
					target="_blank"
					rel="noopener noreferrer"
				>
					i
				</a>
			</div>
		</div>

		<div class="footer-copyrigth">
			Proudly powered by
			<a
				href="https://github.com/giodi-ci"
				target="_blank"
				rel="noopener noreferrer"
			>
				Diletta - GiodiCI
			</a>
		</div>

		<div class="footer-contact-me">
			<a href="mailto:soniacb@gmail.com">Ask Me Anything</a>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../../scss/ui/_colors.scss';

.footer {
	background-color: $blue;
	width: 100%;
	height: 50px;
	display: flex;
    justify-content: space-between;
	align-items: center;
	color: $azure-white;
	padding: 0 2em;

	&-socials {
		display: flex;

		.social {
			padding: .5em;
			width: 30px;
			height: 30px;
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: $azure-white;
			border-radius: 50%;
			color: $blue;
			margin: 0 .2em;
		}
	}
}

</style>
