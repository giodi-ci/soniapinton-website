<template>
	<div class="index">
		<!-- Nuxt - only client side rendering -->
		<client-only placeholder="loading...">
			<scroll-full-page>
				<splash />
				<about-me />
				<section class="index__third-part-section">
					<latest-post />
					<footer-section />
				</section>
			</scroll-full-page>
		</client-only>
	</div>
</template>

<script>
import ScrollFullPage from './../components/utils/ScrollFullPage.vue';
import Splash from './../components/sections/Splash.vue';
import AboutMe from './../components/sections/AboutMe.vue';
import LatestPost from './../components/sections/LatestPost.vue';
import FooterSection from './../components/sections/FooterSection.vue';

	export default {
		components: {
			ScrollFullPage,
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
