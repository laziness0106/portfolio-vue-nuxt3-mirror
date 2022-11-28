<template>
    <main class="layout-works">
        <NuxtLink to="/works" class="btn-close">닫기</NuxtLink>
        <slot />
    </main>
</template>

<style lang="scss">
html,
body,
#__nuxt {
    width: 100%;
    height: 100%;
}
.layout-works {
    width: 100%;
    height: 100%;
    .btn-close {
        position: absolute;
        top: 0;
        right: 0;
        padding: 2rem;
    }
}
</style>
