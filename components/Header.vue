<template>
    <header>
        <NuxtLink to="/">Logo</NuxtLink>
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
    justify-content: space-around;
    width: 100%;
    padding: 2rem 4rem;
    bacgkround: rgba(255, 255, 255, 0.4);
}
</style>
