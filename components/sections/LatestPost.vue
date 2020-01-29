<template>
	<div class="latest-post">
		<title-simple :text="text.title" />
		<div class="latest-post__all-post">
			<post
				v-for="(post, index) in allPost"
				:key="post.id"
				:background="post.image"
				:lyric="post.lyric ? post.lyric : ''"
				:placeholder="post.placeholder ? post.placeholder : ''"
				:class="`single-post__0${index}`"
			/>
		</div>
	</div>
</template>

<script>
import { post, central } from './../../data/post.json';

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
	computed: {
		lyricPost() {
			return post;
		},
		centralPost() {
			return central;
		},
		allPost() {
			this.lyricPost.splice(4, 0, this.centralPost);
			return this.lyricPost;
		},
	},
};

</script>

<style lang="scss" scoped>

.latest-post {
	&__all-post {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
}

</style>