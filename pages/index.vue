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
                <h1 class="ally-hidden">홍순현 포트폴리오</h1>
                <figure class="logo-main">
                    <img src="@/assets/images/logo-main.png" alt="hong soon hyun" />
                    <figcaption>2019-2022 홍순현</figcaption>
                </figure>
            </section>
            <section class="section pr-section">
                <div class="content-wrap">
                    <img class="img-do-ones-own" src="@/assets/images/img-do-own.png" alt="Do one's own thing!" />
                    <hr />
                    <h2>좋아하는 일을 하고있는 <strong>홍순현</strong>입니다.</h2>
                    <p>
                        견고하고 논리적인 구조의 페이지가 깔끔하게 정리된 CSS를 통해 그려지고 서비스에 맞춰 정형화된 UI 컴포넌트들이 유저친화적인 동작들로 사용감을 높여주는 그런 착실한 사이트를 만드는게 저의 일입니다.
                    </p>
                    <p>
                        성능과 유지보수의 최적화를 위해 고민하고 사용자 입장에서 생각하는걸 좋아합니다.
                        그러다보면 어느새 마크업이라는 영역을 벗어나 프론트엔드 개발, 웹 기획 등 다른 분야까지 성큼성큼 발을 딛고 있는 제 자신을 발견할 수 있습니다.
                    </p>
                    <p>
                        <strong class="subject">좋아하는 일을 더 잘하는 것</strong><br />
                    </p>
                    <p>그게 바로 제가 꿈꾸는 저의 <strong>목표</strong>입니다.</p>
                </div>
                <div class="content-wrap">
                    <ul class="profile-list">
                        <li class="profile-item">
                            <h3>Profile</h3>
                            <ul>
                                <li>홍순현</li>
                                <li>Hong Soon Hyun</li>
                                <li>1989.01.06</li>
                            </ul>
                        </li>
                        <li class="profile-item">
                            <h3>Skills</h3>
                            <ul>
                                <li>Html, CSS, SASS</li>
                                <li>Vue, Nuxt, Javascript</li>
                                <li>Tailwind, Bootstrap</li>
                                <li>Git, Zeplin, Adobe, Office</li>
                            </ul>
                        </li>
                        <li class="profile-item">
                            <h3>Contact</h3>
                            <ul>
                                <li><a href="tel:01063935118">010 6393 5118</a></li>
                                <li><a href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=valentine15year@gmail.com"
                                    target="_blank">valentine15year@gmail.com</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <img class="img-char-me" src="@/assets/images/img-char-me.png" />
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
};
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
                background-color: var(--primary-color);
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
            &.pr-section {
                .fp-overflow {
                    column-gap: 8%;
                }
                .content-wrap {
                    width: 32%;
                    display: flex;
                    flex-direction: column;
                    gap: 1.4rem;
                    position: relative;
                    .img-do-ones-own {
                        width: 91.8%;
                        &:before {
                            content: '';
                            background-color: var(--secondary-color);
                            width: 100%;
                            height: 100%;
                        }
                    }
                    hr {
                        position: absolute;
                        top: 10.8%;
                        left: 0;
                        background: var(--secondary-color);
                        width: 91.8%;
                        height: 3.2rem;
                        z-index: -1;
                        border: none;
                        border-radius: 3.2rem;
                    }
                    h2 {
                        margin-bottom: 3.6rem;
                    }
                    .subject {
                        position: relative;
                        &:before {
                            content: '';
                            position: absolute;
                            top: 40%;
                            left: -5%;
                            right: 0;
                            margin: 0 auto;
                            background: var(--secondary-color);
                            width: 110%;
                            height: 2rem;
                            z-index: -1;
                            border-radius: 2.2rem;
                        }
                    }
                    &:nth-child(2) {
                        .profile-list {
                            row-gap: 4rem;
                            display: flex;
                            flex-direction: column;
                        }
                        h3 {
                            width: 16%;
                            color: var(--primary-color);
                            white-space: nowrap;
                        }
                        .profile-item {
                            display: flex;
                            flex-direction: row;
                            column-gap: 2rem;
                            ul {
                                li {
                                    @include font-content();
                                }
                            }
                        }
                    }
                }
                .img-char-me {
                    position: absolute;
                    right: 5%;
                    bottom: 5%;
                    width: 20%;
                }
            }
            .fp-watermark {
                display: none;
            }
        }
    }
}
</style>
