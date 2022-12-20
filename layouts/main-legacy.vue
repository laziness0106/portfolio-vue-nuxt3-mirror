<template>
    <Header />
    <main class="layout-main">
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
.layout-main {
    width: 100%;
    height: 100%;
    background: url('@/assets/images/bg-main.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 0 80%;
    .page-container {
        padding: 8.4rem 4rem 4rem 4rem;
        @include tablet {
            padding: 2rem;
        }
        @include mobile {
            padding: 1.6rem;
        }
    }
}
</style>
