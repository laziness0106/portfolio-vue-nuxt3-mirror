<template>
    <nav>
        <ul>
            <li><NuxtLink to="/work">WORK</NuxtLink></li>
            <li><NuxtLink to="/about">ABOUT</NuxtLink></li>
            <li><NuxtLink to="/career">CAREER</NuxtLink></li>
        </ul>
    </nav>
</template>

<style lang="scss">
nav {
    width: 100%;
    > ul {
        display: flex;
        justify-content: flex-end;
        gap: 8rem;
        li {
            a {
                font-size: 2rem;
                font-weight: bold;
            }
        }
    }
}
</style>
