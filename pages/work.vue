<template>
    <div class="page-container">
        <h2 data-aos="fade-up" data-aos-delay="200">WORK</h2>
        <section data-aos="fade-up" data-aos-delay="400">
            <ul class="work-list-container">
                <li class="work-item">
                    <NuxtLink to="/design-system">
                        <span>Design System</span>
                    </NuxtLink>
                </li>
                <li class="work-item">
                    <NuxtLink to="/jestina">
                        <span>J.ESTINA</span>
                    </NuxtLink>
                </li>
                <li class="work-item">
                    <a href="#" class="comming">
                        <span>함께 해봐요</span>
                    </a>
                </li>
                <li class="work-item">
                    <a href="#" class="comming">
                        <span>함께 해봐요</span>
                    </a>
                </li>
                <li class="work-item">
                    <a href="#" class="comming">
                        <span>함께 해봐요</span>
                    </a>
                </li>
                <li class="work-item">
                    <NuxtLink to="/domino">
                        <span>Domino's Pizza</span>
                    </NuxtLink>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
definePageMeta({
    layout: 'default',
});
</script>

<style lang="scss" scoped>
.layout-default {
    .page-container {
        padding: 8.4rem 0;
        h2 {
            padding: 4rem;
            text-align: left;
            @include tablet {
                padding: 2rem;
            }
            @include mobile {
                padding: 1.2rem;
            }
        }
        section {
            width: 100%;
            height: 100%;
            padding: 4rem;
            @include tablet {
                padding: 0 2rem;
            }
            @include mobile {
                padding: 0 1.2rem;
            }
            .work-list-container {
                width: 100%;
                display: grid;
                grid-template-columns: 50% 1fr 1fr;
                gap: 0.4rem;
                grid-auto-flow: dense;
                align-items: stretch;
                @include tablet {
                }
                @include mobile {
                    display: flex;
                    flex-direction: column;
                }
                .work-item {
                    background: #888888;
                    text-align: center;
                    border-radius: 0.8rem;
                    height: 100%;
                    min-height: 16rem;
                    display: flex;
                    @include tablet {
                    }
                    @include mobile {
                        align-items: center;
                    }
                    a {
                        position: relative;
                        opacity: 0;
                        width: 100%;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        transition: 0.4s;
                        @include tablet {
                            opacity: 1;
                        }
                        @include mobile {
                            opacity: 1;
                        }
                        span {
                            font-size: 6.8rem;
                            line-height: 8.8rem;
                            color: var(--text-color);
                            @include tablet {
                                font-size: 4.8rem;
                                line-height: 5.2rem;
                                width: 100%;
                                background: rgba(255, 255, 255, 0.8);
                            }
                            @include mobile {
                                font-size: 2.8rem;
                                line-height: 3.2rem;
                                width: 100%;
                                background: rgba(255, 255, 255, 0.8);
                            }
                        }
                        &:hover {
                            opacity: 1;
                            background: rgba(255, 255, 255, 0.6);
                            @include tablet {
                                background: none;
                            }
                            @include mobile {
                                background: none;
                            }
                        }
                        &.comming {
                            @include tablet {
                                align-items: flex-end;
                                text-align: right;
                                padding: 1.2rem;
                            }
                            @include mobile {
                                align-items: flex-end;
                                text-align: right;
                                padding: 1.2rem;
                            }
                            span {
                                cursor: default;
                                font-size: 4rem;
                                line-height: 6rem;
                                @include tablet {
                                    background: none;
                                    font-size: 2.4rem;
                                    line-height: 2.8rem;
                                    opacity: 0.7;
                                }
                                @include mobile {
                                    background: none;
                                    font-size: 1.6rem;
                                    line-height: 2rem;
                                    opacity: 0.7;
                                }
                            }
                        }
                    }
                }
                .work-item:nth-child(1) {
                    grid-column: 1 / span 1;
                    grid-row: 1 / span 2;
                    background: var(--secondary-color);
                    background-image: url(@/assets/images/work-item01.png);
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: 40%;
                }
                .work-item:nth-child(2) {
                    grid-column: 2 / span 2;
                    background: var(--pink-light-color);
                    background-image: url(@/assets/images/work-item02.png);
                    background-size: cover;
                    background-position: 60%;
                }
                .work-item:nth-child(3) {
                    background: var(--yellow-color);
                    @include mobile {
                        display: none;
                    }
                }
                .work-item:nth-child(4) {
                    background: var(--tertiary-color);
                    @include mobile {
                        display: none;
                    }
                }
                .work-item:nth-child(5) {
                    background: var(--primary-color);
                    @include mobile {
                        display: none;
                    }
                }
                .work-item:nth-child(6) {
                    grid-column: 2 / span 2;
                    background: var(--blue-color);
                    background-image: url(@/assets/images/work-item03.png);
                    background-size: cover;
                    background-position: 25% 75%;
                }
            }
        }
    }
}
</style>
