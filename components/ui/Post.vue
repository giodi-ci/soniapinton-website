<template>
    <div
        class="post"
        :style="background"
    >
        <h3
            class="post-placeholder"
            v-html="placeholder"
        />
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
    background-position: center center;
    background-size: cover;
    margin: 3px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0;
    margin: 5px;
    flex: 0 0 calc(33.3333% - 10px);

    @media only screen and (max-width: $small) {
        flex-basis: 100%;
    }

    &-placeholder {
        color: $azure-white;
    }

    .single-post {
        &__04 {
            font-size: 2rem;
        }
    }
}
</style>
