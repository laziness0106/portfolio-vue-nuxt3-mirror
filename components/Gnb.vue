<template>
    <nav>
        <ul>
            <li>
                <NuxtLink to="/work" @click="clickGnb">WORK</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/about" @click="clickGnb">ABOUT</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/career" @click="clickGnb">CAREER</NuxtLink>
            </li>
        </ul>
    </nav>
</template>
<script>
export default {
    emits: ['clickGnb'],
    methods: {
        clickGnb() {
            this.$emit('clickGnb', false);
        },
    },
};
</script>
<style lang="scss" scoped>
nav {
    width: 100%;
    @include mobile {
        height: 100%;
        position: absolute;
        left: 0;
        z-index: 1010;
        background: rgba(255, 255, 255, 0.6);
    }
    > ul {
        display: flex;
        justify-content: flex-end;
        gap: 8rem;
        margin-right: 8rem;
        @include mobile {
            height: 100%;
            justify-content: start;
            align-items: center;
            gap: 3%;
            margin-right: 0;
            margin-left: 2%;
        }
        li {
            a {
                font-size: 2rem;
                font-weight: bold;
            }
        }
    }
}
</style>
