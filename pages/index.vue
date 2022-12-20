<template>
    <div class="page-container">
        <nav>
            <ul class="gnb">
                <li data-menuanchor="section01"><a href="#section01">section01</a></li>
                <li data-menuanchor="section02"><a href="#section02">section02</a></li>
                <li data-menuanchor="section03"><a href="#section03">section03</a></li>
            </ul>
        </nav>
        <full-page :options="options">
            <section class="section main-section">
                <figure class="logo-main">
                    <img src="@/assets/images/logo-main.png" alt="hong soon hyun" />
                    <figcaption>2019-2022 홍순현</figcaption>
                </figure>
            </section>
            <section class="section">
                section02
            </section>
            <section class="section">
                section03
            </section>
        </full-page>
    </div>
</template>

<script>
definePageMeta({
    layout: 'main',
});
export default {
    data() {
        return {
            options: {
                licenseKey: 'YOUR_KEY_HERE',
                scrollBar: false,
                menu: '.gnb',
                navigation: true,
                anchors: [
                    'section01',
                    'section02',
                    'section03',
                ],
            },
        }
    }
}
</script>

<style lang="scss">
.layout-main {
    nav {
        position: absolute;
        z-index: 10;
        top: 0;
    }
    .fullpage-wrapper {
        > section {
            width: 100%;
            height: 100vh;
            .fp-overflow {
                width: 100%;
                height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 25px;
            }
            &.main-section {
                background-color: var(--on-background-color-3);
                display: flex;
                align-items: center;
                .logo-main {
                    width: 34%;
                    position: relative;
                    img {
                        width: 100%;
                    }
                    figcaption {
                        position: absolute;
                        right: 0;
                        bottom: 27%;
                        font-size: 1vw;
                        font-weight: 100;
                        color: #ffffff;
                    }
                }
            }
            .fp-watermark {
                display: none;
            }
        }
    }
}
</style>
