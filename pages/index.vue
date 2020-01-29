<template>
	<div class="index">
		<splash />
		<div class="wrapper">
			<about-me />
			<latest-post />
		</div>
		<footer-section />
	</div>
</template>

<script>
import Splash from './../components/sections/Splash.vue';
import AboutMe from './../components/sections/AboutMe.vue';
import LatestPost from './../components/sections/LatestPost.vue';
import FooterSection from './../components/sections/FooterSection.vue';

	export default {
		components: {
			Splash,
			AboutMe,
			LatestPost,
			FooterSection,
		},
	}
</script>

<style lang="scss" scoped>

.index {
	.wrapper {
		padding: 0 1em;
	}
}

</style>

