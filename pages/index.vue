<template>
    <div class="page-container">
        <section>
            <h2>홍순현</h2>
            <ul>
                <li>
                    <CLabel type="primary" text="html" size="md" />
                </li>
                <li>
                    <CLabel type="secondary" text="sass" size="md" />
                </li>
                <li>
                    <CLabel type="tertiary" text="JavaScript" size="md" />
                </li>
                <li>
                    <CLabel type="pink" text="Vue" size="md" />
                </li>
                <li>
                    <CLabel type="pink-light" text="Nuxt" size="md" />
                </li>
                <li>
                    <CLabel type="yellow" text="Typescript" size="md" />
                </li>
                <li>
                    <CLabel type="blue" text="Github" size="md" />
                </li>
                <li>
                    <CLabel type="blue-light" text="Tailwind" size="md" />
                </li>
                <li>
                    <CLabel type="blue-dark" text="bootstrap" size="md" />
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
definePageMeta({
    layout: 'main',
});
</script>

<style lang="scss" scoped>
.layout-main {
    .page-container {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        column-gap: 4rem;
        section {
            width: 100%;
            text-align: center;
            > h2 {
                font-size: 20rem;
                line-height: 24rem;
                @include tablet {
                    font-size: 12rem;
                    line-height: 16rem;
                }
                @include mobile {
                    font-size: 6rem;
                    line-height: 8rem;
                }
            }
            > ul {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                margin-top: 4rem;
                gap: 1.2rem;
                @include tablet {
                    margin-top: 2.8rem;
                }
                @include mobile {
                    margin-top: 1.2rem;
                }
            }
        }
    }
}
</style>
