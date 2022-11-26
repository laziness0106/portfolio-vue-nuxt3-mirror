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
    padding: 8rem 4rem 4rem 4rem;
}
</style>
