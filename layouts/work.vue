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
        background-repeat: no-repeat;
        background-position: 0% 40%;
        @include mobile {
            display: flex;
            align-items: flex-end;
            background-position: 10% -20%;
            background-size: 120%;
        }
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
            @include tablet {
                gap: 3.2rem;
            }
            @include mobile {
                display: block;
                width: 100%;
                height: 84%;
                padding: 1.6rem;
                gap: 1.2rem;
            }
            .work-contents {
                display: flex;
                flex-direction: column;
                gap: 2.4rem;
                @include tablet {
                    gap: 1.6rem;
                }
                @include mobile {
                    display: block;
                }
                + .work-contents {
                    @include mobile {
                        margin-top: 1.6rem;
                    }
                }
                > :not(:first-child) {
                    color: #888;
                    @include mobile {
                        margin-top: 0.8rem;
                    }
                }
                ul {
                    display: flex;
                    justify-content: center;
                    gap: 1.2rem;
                    flex-wrap: wrap;
                    li {
                        font-size: 1.6rem;
                    }
                }
            }
        }
    }
}
</style>
