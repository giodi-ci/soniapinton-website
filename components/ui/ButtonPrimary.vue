<template>
    <div 
        class="button-primary"
        :class="{ 'fill': fill }"    
    >
        <button>{{ buttonText }}</button>
    </div>
</template>

<script>
    export default {
        props: {
            buttonText: {
                required: true,
            },
            fill: {
                default: false,
            }
        }
    }
</script>

<style lang="scss" scoped>
@import "~rfs/scss";
@import './../../scss/ui/_colors.scss';

.button-primary {
    width: 155px;
    height: 45px;
    margin: 2rem 0;
    cursor: pointer;

    button {
        width: 100%;
        height: 100%;
        background-color: transparent;
        color: $blue;
        border: 1px solid $blue;
        box-shadow: 1px 4px 8px 2px $gray;
        border-radius: 5px;
        @include font-size(1.3rem);
    }
    
    &.fill {
        button {
            background-color: $blue;
            color: $azure-white;
        }
    }
}
</style>