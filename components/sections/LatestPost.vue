<template>
	<div class="latest-post">
		<title-simple :text="text.title" />
		<div class="latest-post__all-post">
			<post 
				v-for="post in latestPost"
				:key="post.id"
				:background="post.image"
				:lyric="post.lyric"
			/>
		</div>
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
			latestPost: [
				{
					lyric: 'Lorem',
					image: 'background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg);'
				}, 
				{
					lyric: 'Ipsum',
					image: 'background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg);',
				}, 
				{
					lyric: 'Sonia',
					image: 'background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg);',
				},
				{
					lyric: 'Lorem',
					image: 'background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg);',
				}, 
				{
					lyric: 'Ipsum',
					image: 'background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg);',
				}, 
				{
					lyric: 'Sonia',
					image: 'background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg);',
				},
				{
					lyric: 'Lorem',
					image: 'background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg);',
				}, 
				{
					lyric: 'Ipsum',
					image: 'background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg);',
				}, 
				{
					lyric: 'Sonia',
					image: 'background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg);',
				}
			]
		};
	},
}
</script>

<style lang="scss" scoped>

.latest-post {
	&__all-post {
		display: flex;
		flex-wrap: wrap;
	}
}

</style>