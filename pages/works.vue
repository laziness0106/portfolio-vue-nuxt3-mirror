<template>
    <div class="page-container">
        <section>
            <h2 class="ally-hidden">WORKS</h2>
            <ul class="work-list-container">
                <li class="work-item">
                    <NuxtLink to="/design-system">design system</NuxtLink>
                </li>
                <li class="work-item">work-item</li>
                <li class="work-item">work-item</li>
                <li class="work-item">work-item</li>
                <li class="work-item">work-item</li>
                <li class="work-item">work-item</li>
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
        section {
            width: 100%;
            height: 80%;
            margin: 4rem 0;
            .work-list-container {
                display: grid;
                // grid-template-columns: 1fr repeat(auto-fit, minmax(40rem, 1fr));
                grid-template-columns: 50% 1fr 1fr;
                gap: 0.4rem;
                grid-auto-flow: dense;
                align-items: stretch;
                .work-item {
                    background: #888888;
                    text-align: center;
                    border-radius: 0.8rem;
                    height: 100%;
                    min-height: 16rem;
                    display: flex;
                }
                .work-item:nth-child(1) {
                    grid-column: 1 / span 1;
                    grid-row: 1 / span 2;
                }
                .work-item:nth-child(2) {
                    grid-column: 2 / span 2;
                }
                .work-item:nth-child(6) {
                    grid-column: 2 / span 2;
                }
            }
        }
    }
}
</style>
