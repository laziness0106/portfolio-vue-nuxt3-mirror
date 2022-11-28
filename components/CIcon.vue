<template>
    <i :class="[typeClass, sizeClass]">
        <span class="ally-hidden">{{ typeClass }}</span>
    </i>
</template>

<script>
export default {
    name: 'CIcon',
    props: {
        /* icon의 타입
         * 'ic-close'
         * 'ic-lang-html5'
         * 'ic-lang-css3'
         * 'ic-lang-vue'
         * 'ic-lang-tailwind'
         * 'ic-lang-typescript'
         * 'ic-lang-storybook'
         */
        type: {
            type: String,
            default: 'ic-close',
        },
        /* icon의 크기
         * 'sm'
         * 'md'
         * 'lg'
         */
        size: {
            type: String,
            default: 'md',
        },
    },
    data() {
        return {
            typeClass: this.type,
            sizeClass: this.size,
        };
    },
};
</script>

<style lang="scss" scoped>
i {
    display: block;
    background-position: center;
    background-repeat: no-repeat;
    &.sm {
        width: 2rem;
        height: 2rem;
    }
    &.md {
        width: 3.2rem;
        height: 3.2rem;
    }
    &.lg {
        width: 4.4rem;
        height: 4.4rem;
    }
    &.ic-close {
        background-image: url(@/assets/images/icons/ic-close.svg);
    }
    &.ic-lang-html5 {
        background-image: url(@/assets/images/icons/ic-lang-html5.svg);
    }
    &.ic-lang-css3 {
        background-image: url(@/assets/images/icons/ic-lang-css3.svg);
    }
    &.ic-lang-vue {
        background-image: url(@/assets/images/icons/ic-lang-vue.svg);
    }
    &.ic-lang-tailwind {
        background-image: url(@/assets/images/icons/ic-lang-tailwind.svg);
    }
    &.ic-lang-typescript {
        background-image: url(@/assets/images/icons/ic-lang-typescript.svg);
    }
    &.ic-lang-storybook {
        background-image: url(@/assets/images/icons/ic-lang-storybook.svg);
    }
}
</style>
