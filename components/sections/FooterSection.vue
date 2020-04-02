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
			made with &#9825;
			<a
				href="https://github.com/giodi-ci"
				target="_blank"
				rel="noopener noreferrer"
			>
				by GiodiCI
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
@import './../../scss/layout/responsive.scss';

.footer {
	background-color: $blue;
	width: 100%;
	min-height: 50px;
	display: flex;
    justify-content: space-between;
	align-items: center;
	color: $azure-white;
	padding: 0 1.5em;
	flex-wrap: wrap-reverse;

	& > div {
		@media only screen and (max-width: $medium) {
			flex-basis: 100%;
			margin: 1em 0;
		}
	}

	&-socials {
		display: flex;

		.social {
			width: 25px;
			height: 25px;
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: $azure-white;
			border-radius: 50%;
			color: $blue;
			margin: 0 .3em;
		}
	}

    &-copyright {
        font-size: 0.8em;
    }
}

</style>
