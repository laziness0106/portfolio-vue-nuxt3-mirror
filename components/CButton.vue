<template>
    <button :class="[typeClass, sizeClass]">
        {{ text }}
    </button>
</template>

<script>
export default {
    name: 'CButton',
    props: {
        /* button의 내용 */
        text: {
            type: String,
            default: 'button',
        },
        /* button의 타입
         * 'primary'
         * 'secondary'
         * 'ghost'
         */
        type: {
            type: String,
            default: 'primary',
        },
        /* button의 크기
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

<style lang="scss">
button {
    white-space: nowrap;
    &.primary {
        background-color: var(--primary-color);
        color: white;
    }
    &.secondary {
        background-color: var(--secondary-color);
        color: white;
    }
    &.ghost {
        background-color: transparent;
        color: var(--primary-color);
        border: 1px solid var(--primary-color);
    }
    &.sm {
        @include font-cap();
        padding: 0.4rem 0.8rem;
        border-radius: 0.4rem;
    }
    &.md {
        @include font-content();
        padding: 0.8rem 2rem;
        border-radius: 0.4rem;
    }
    &.lg {
        @include font-h3();
        padding: 1.6rem 2.4rem;
        border-radius: 0.4rem;
    }
}
</style>
