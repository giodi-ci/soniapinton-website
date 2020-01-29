<template>
    <div class="title-simple">
		<h2>{{ text }}</h2>
    </div>
</template>

<script>
    export default {
		props: {
			text: {
				required: true
			}
		}
    }
</script>

<style lang="scss" scoped>
@import './../../scss/ui/_colors.scss';

.title-simple {
	width: 100%;
    display: flex;
    align-items: center;
	justify-content: center;
	text-transform: uppercase;
	position: relative;

	h2 {
		color: $blue;
		background-color: white;
		padding: 0 1rem;
	}

	&::before {
		content: '';
		position: absolute;
		top: 50%;
		z-index: -1;
		width: 100%;
		height: 1px;
		background-color: $gray;
	}
}
</style>