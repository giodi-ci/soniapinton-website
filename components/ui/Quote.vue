<template>
    <div class="quote">
        <div class="quote__symbol">“</div>
		<p 
            class="quote__text"
            v-html="quoteText"
        />
        <slot />
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

    &__symbol {
        position: absolute;
        top: 0;
        left: -15%;
        color: $blue;
        @include font-size(9rem);
        line-height: 0;
    }
}
</style>