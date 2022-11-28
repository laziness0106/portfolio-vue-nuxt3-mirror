<template>
    <main class="layout-works">
        <NuxtLink to="/work" class="btn-close">
            <CIcon type="ic-close" size="sm" />
        </NuxtLink>
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
    .page-container {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        article {
            width: 40rem;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 5.6rem;
            padding: 4rem;
            margin-left: auto;
            overflow-y: auto;
            background: white;
            box-shadow: -0.1rem 0 2rem rgba(0, 0, 0, 0.1);
            text-align: center;
            .work-contents {
                display: flex;
                flex-direction: column;
                gap: 2.4rem;
                :not(:first-child) {
                    color: #888;
                }
                ul {
                    display: flex;
                    justify-content: center;
                    gap: 1.2rem;
                    li {
                        font-size: 1.6rem;
                    }
                }
            }
        }
    }
}
</style>
