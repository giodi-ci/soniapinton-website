<template>
    <div 
        class="post"
        :style="background"
    >

    </div>
</template>

<script>
    export default {
        props: {
            background: {
                type: String,
                required: true,
            },
            lyric: {
                type: String,
                required: true,
            },
        },
    }
</script>

<style lang="scss" scoped>
@import './../../scss/ui/_colors.scss';

.post {
    flex-grow: 1;
	width: 25%;
	height: 400px;
    margin: 0.5%;
    border: 2px solid $blue;
    background-position: center center;
    background-size: cover;
}
</style>