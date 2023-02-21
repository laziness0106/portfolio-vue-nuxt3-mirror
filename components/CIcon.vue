<template>
    <i v-if="type == 'ic-scroll-btn'" :class="[typeClass]">
        <span class="mouse">
            <span></span>
        </span>
        <i class="ic-arrow-down">
            <span></span>
        </i>
    </i>

    <i v-else :class="[typeClass, sizeClass]">
        <span class="ally-hidden">{{ typeClass }}</span>
    </i>
</template>

<script>
export default {
    name: 'CIcon',
    props: {
        /* icon의 타입
         * 'ic-close'
         * 'ic-check'
         * 'ic-dot'
         * 'ic-lang-html5'
         * 'ic-lang-css3'
         * 'ic-lang-vue'
         * 'ic-lang-tailwind'
         * 'ic-lang-typescript'
         * 'ic-lang-storybook'
         * 'ic-lang-jsp'
         * 'ic-lang-jquery'
         * 'ic-lang-javascript'
         * 'ic-lang-bootstrap'
         * 'ic-scroll-btn'
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
    background-size: contain;
    &.xs {
        width: 0.8rem;
        height: 0.8rem;
    }
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
    &.ic-check {
        background-image: url(@/assets/images/icons/ic-check.svg);
    }
    &.ic-dot {
        background-image: url(@/assets/images/icons/ic-dot.svg);
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
    &.ic-lang-jsp {
        background-image: url(@/assets/images/icons/ic-lang-jsp.svg);
    }
    &.ic-lang-jquery {
        background-image: url(@/assets/images/icons/ic-lang-jquery.svg);
    }
    &.ic-lang-javascript {
        background-image: url(@/assets/images/icons/ic-lang-javascript.svg);
    }
    &.ic-lang-bootstrap {
        background-image: url(@/assets/images/icons/ic-lang-bootstrap.svg);
    }
    &.ic-scroll-btn {
        .mouse {
            position: relative;
            display: block;
            width: 3.5rem;
            height: 5.5rem;
            margin: 0 auto 0.4rem;
            border: 0.3rem solid white;
            border-radius: 2.3rem;
            opacity: 0.75;
            z-index: 1;

            span {
                position: absolute;
                display: block;
                top: 29%;
                left: 50%;
                width: 0.8rem;
                height: 0.8rem;
                margin: -0.4rem 0 0 -0.4rem;
                background: white;
                border-radius: 50%;
                animation: ani-mouse 1.8s linear infinite;
            }
        }

        .ic-arrow-down {
            text-align: center;
            span {
                display: inline-block;
                width: 1.5rem;
                height: 1.5rem;
                border: 0.3rem solid transparent;
                border-right-color: rgb(210 210 215 / 75%);
                border-bottom-color: rgb(210 210 215 / 75%);
                border-radius: 0.3rem;
                transform: rotate(45deg);
                animation: arrow-down 0.6s alternate infinite;
            }
        }
    }
}

@keyframes ani-mouse {
    0% {
        opacity: 1;
        transform: translate(0, 29%);
    }

    15% {
        opacity: 1;
        transform: translate(0, 150%);
    }

    50% {
        opacity: 0;
        transform: translate(0, 150%);
    }

    100% {
        opacity: 0;
        transform: translate(0, 29%);
    }
}

@keyframes arrow-down {
    0% {
        opacity: 0;
    }

    25% {
        opacity: 0.25;
    }

    50% {
        opacity: 0.5;
    }

    75% {
        opacity: 0.75;
    }

    100% {
        opacity: 1;
    }
}
</style>
