<template>
    <nav>
        <ul>
            <li><NuxtLink to="/works">WORKS</NuxtLink></li>
            <li><NuxtLink to="/about">ABOUT</NuxtLink></li>
            <li><NuxtLink to="/resume">RESUME</NuxtLink></li>
        </ul>
    </nav>
</template>

<style lang="scss">
nav {
    width: 100%;
    > ul {
        display: flex;
        justify-content: flex-end;
        gap: 2rem;
    }
}
</style>
