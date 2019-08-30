<template>
	<div>
		<nuxt />
	</div>
</template>

<style lang="scss">
	html {
		@font-face {
			font-family: 'HelveticaNeue';
			src: url('../assets/fonts/HelveticaNeue-01.ttf');		
		}
		font-family: HelveticaNeue, 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
		font-size: 1.6rem;
		-ms-text-size-adjust: 100%;
		-webkit-text-size-adjust: 100%;
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
		box-sizing: border-box;
	}

	*,
	*:before,
	*:after {
		@apply text-black;
		box-sizing: border-box;
		margin: 0;
	}
</style>
