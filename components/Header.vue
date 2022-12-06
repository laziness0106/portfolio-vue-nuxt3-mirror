<template>
    <header>
        <NuxtLink to="/">
            <CLogo />
        </NuxtLink>
        <Gnb />
    </header>
</template>

<style lang="scss">
header {
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 2rem 4rem;
    background: rgba(255, 255, 255, 0.4);
    @include tablet {
        padding: 2rem;
    }
    @include mobile {
        padding: 1.6rem;
    }
}
</style>
