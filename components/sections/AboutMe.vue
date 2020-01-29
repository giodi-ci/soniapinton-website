<template>
	<section class="about-me">
		<title-simple :text="text.title" />
		<div class="about-me__content">
			<quote
				class="about-me__content-quote"
				:quoteText="text.quote"
			>
				<button-primary
					:button-text="text.button"
					fill="true"
				/>
			</quote>
			<div class="about-me__content-image" />
		</div>
	</section>
</template>

<script>
import TitleSimple from './../ui/TitleSimple.vue';
import Quote from './../ui/Quote.vue';
import ButtonPrimary from './../ui/ButtonPrimary.vue';

export default {
	components: {
		TitleSimple,
		Quote,
		ButtonPrimary,
	},
	data() {
		return {
			text: {
				title: 'Su di me',
				quote: 'Earum hic voluptatum optio sint dolorem et. Impedit numquam vel corrupti. Totam nobis et iste accusamus explicabo modi ut velit.<br> Aut corrupti quo quae assumenda odio ut. Quia nostrum nostrum qui aut in minus sunt. Provident ratione quia accusamus saepe aut. Enim rem deserunt aliquam sed non.',
				button: 'CTA',
			}
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../../scss/ui/_colors.scss';
@import './../../scss/layout/responsive.scss';

.about-me {
	width: 100%;
	height: 100vh;

	&__content {
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		height: 100%;

		@media only screen and (max-width: $medium) {
			flex-direction: column;
		}

		&-image {
			min-width: 260px;
			min-height: 260px;
			border-radius: 50%;
			border: 1px solid $blue;
			background-image: url('../../assets/images/sonia-pinton-about-me.png');
			background-repeat: no-repeat;
			background-size: cover;
			background-position: right;
		}
	}
}
</style>