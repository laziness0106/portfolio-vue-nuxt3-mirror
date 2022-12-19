<template>
    <Header />
    <main class="layout-default">
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

.layout-default {
    width: 100%;
    height: 100%;
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
