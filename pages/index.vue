<template>
	<div class="index">
		<splash />
		<about-me />
		<latest-post />
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
		data() {
			return {
				
			}
		},
	}
</script>

<style lang="scss" scoped>

</style>
