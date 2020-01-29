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
@import './../../scss/layout/responsive.scss';

.post {
	height: 300px;
    border: 2px solid $blue;
    background-position: center center;
    background-size: cover;
    flex-basis: 33%;
    margin: 3px 0;

    @media only screen and (max-width: $medium) {
        flex-basis: 50%;
    }

    @media only screen and (max-width: $small) {
        flex-basis: 100%;
    }
}
</style>
