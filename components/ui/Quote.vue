<template>
    <div class="quote">
        <div class="quote__symbol">“</div>
        <div class="quote__content">
            <p 
                class="quote__content-text"
                v-html="quoteText"
            />
            <slot />
        </div>
    </div>
</template>

<script>
    export default {
        props: {
			quoteText: {
				required: true
			}
		}  
    }
</script>

<style lang="scss" scoped>
@import "~rfs/scss";
@import './../../scss/ui/_colors.scss';

.quote {
    position: relative;
    max-width: 500px;
    display: flex;

    &__content {
        display: flex;
        flex-direction: column;
    }

    &__symbol {
        color: $blue;
        @include font-size(9rem);
        line-height: 0;
    }
}
</style>