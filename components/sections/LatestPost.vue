<template>
	<div class="latest-post">
		<title-simple :text="text.title" />
		<post />
	</div>
</template>

<script>
import TitleSimple from './../ui/TitleSimple.vue';
import Post from './../ui/Post.vue';

export default {
	components: {
		TitleSimple,
		Post,
	},
	data() {
		return {
			text: {
				title: 'Latest from',
			},
		};
	},
}
</script>

<style lang="scss" scoped>

</style>