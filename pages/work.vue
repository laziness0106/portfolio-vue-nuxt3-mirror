<template>
    <div class="page-container">
        <section>
            <h2>WORK</h2>
            <ul class="work-list-container">
                <li class="work-item">
                    <NuxtLink to="/design-system">Design System</NuxtLink>
                </li>
                <li class="work-item">
                    <NuxtLink to="/jestina">J.ESTINA</NuxtLink>
                </li>
                <li class="work-item">
                    <a href="#" class="comming">준비중입니다.</a>
                </li>
                <li class="work-item">
                    <a href="#" class="comming">준비중입니다.</a>
                </li>
                <li class="work-item">
                    <a href="#" class="comming">준비중입니다.</a>
                </li>
                <li class="work-item">
                    <NuxtLink to="/domino">Domino's Pizza</NuxtLink>
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
        section {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            row-gap: 4rem;
            .work-list-container {
                width: 100%;
                display: grid;
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
                    a {
                        position: relative;
                        opacity: 0;
                        width: 100%;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        transition: 0.4s;
                        font-size: 6.8rem;
                        color: var(--text-color);
                        &:hover {
                            opacity: 1;
                            background: rgba(255, 255, 255, 0.6);
                        }
                        &.comming {
                            font-size: 4rem;
                            cursor: default;
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
                }
                .work-item:nth-child(4) {
                    background: var(--tertiary-color);
                }
                .work-item:nth-child(5) {
                    background: var(--primary-color);
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
