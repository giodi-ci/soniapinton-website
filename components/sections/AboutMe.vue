<template>
	<section class="about-me">
        <title-simple :text="titleAboutMe" />
	</section>
</template>

<script>
import TitleSimple from './../ui/TitleSimple.vue';

export default {
	components: {
		TitleSimple,
	},
	data() {
		return {
			titleAboutMe: 'Su di me'
		}
	}
}
</script>

<style lang="scss" scoped>
.about-me {
	width: 100vw;
	height: 100vh;
}
</style>