<template>
    <div
        class="post"
        :style="background"
    >
        <h3 class="post-placeholder">{{ placeholder }}</h3>
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
            placeholder: {
                type: String,
                default: '',
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
    margin: 3px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-basis: 33%;

    @media only screen and (max-width: $medium) {
        flex-basis: 50%;
    }

    @media only screen and (max-width: $small) {
        flex-basis: 100%;
    }

    &-placeholder {
        color: $azure-white;
    }
}
</style>
