<template>
    <span class="clabel" :class="[typeClass, sizeClass]">
        {{ text }}
    </span>
</template>

<script>
export default {
    name: 'CLabel',
    props: {
        /* label의 내용 */
        text: {
            type: String,
            default: 'button',
        },
        /* label의 타입
         * 'primary'
         * 'secondary'
         * 'tertiary'
         * 'pink'
         * 'pink-light'
         * 'yellow'
         * 'blue'
         * 'blue-light'
         */
        type: {
            type: String,
            default: 'primary',
        },
        /* label의 크기
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
.clabel {
    display: inline-flex;
    align-items: center;
    white-space: nowrap;
    cursor: default;
    &.sm {
        padding: 0.8rem;
        font-size: 0.4rem;
        line-height: 0.4rem;
        border-radius: 0.4rem;
    }
    &.md {
        padding: 0.8rem 1.2rem;
        font-size: 1.2rem;
        line-height: 1.6rem;
        border-radius: 0.4rem;
    }
    &.lg {
        padding: 2rem 2.4rem;
        font-size: 2rem;
        line-height: 2rem;
        border-radius: 0.4rem;
    }
    &.primary {
        background-color: var(--primary-color);
        color: var(--on-background-color);
    }
    &.secondary {
        background-color: var(--secondary-color);
        color: var(--on-background-color);
    }
    &.tertiary {
        background-color: var(--tertiary-color);
        color: var(--on-background-color);
    }
    &.pink {
        background-color: var(--pink-color);
        color: var(--text-color);
    }
    &.pink-light {
        background-color: var(--pink-light-color);
        color: var(--text-color);
    }
    &.yellow {
        background-color: var(--yellow-color);
        color: var(--text-color);
    }
    &.blue {
        background-color: var(--blue-color);
        color: var(--on-background-color);
    }
    &.blue-light {
        background-color: var(--blue-light-color);
        color: var(--text-color);
    }
    &.blue-dark {
        background-color: var(--blue-dark-color);
        color: var(--on-background-color);
    }
}
</style>
