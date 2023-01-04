<template>
    <div class="page-container">
        <!-- <nav>
            <ul class="gnb">
                <li data-menuanchor="pr"><a href="#pr">PROFILE</a></li>
                <li data-menuanchor="work-list"><a href="#work-list">WORK</a></li>
            </ul>
        </nav> -->
        <full-page :options="options">
            <section class="section main-section">
                <h1 class="ally-hidden">홍순현 포트폴리오</h1>
                <figure class="logo-main">
                    <img src="@/assets/images/logo-main.png" alt="Portfolio" />
                    <figcaption>2019-2022 홍순현</figcaption>
                </figure>
                <CIcon type="ic-scroll-btn" />
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
                <img class="img-char-me" src="@/assets/images/img-char-me.png" alt="hong soon hyun" />
            </section>
            <section class="section work-list-section">
                <h2 class="ally-hidden">WORK</h2>
                <ul class="work-list">
                    <li data-menuanchor="smilegate" class="smilegate">
                        <a href="#smilegate">
                            <h3>SMILEGATE</h3>
                            <ul class="project-list">
                                <li>디자인시스템</li>
                                <li>에픽세븐 인게임 웹뷰</li>
                            </ul>
                        </a>
                    </li>
                    <li data-menuanchor="dominos" class="dominos">
                        <a href="#dominos">
                            <h3>Domino's Pizza</h3>
                            <ul class="project-list">
                                <li>간편결제 퀵오더</li>
                                <li>도미노SPOT 드론배달</li>
                            </ul>
                        </a>
                    </li>
                    <li data-menuanchor="jestina" class="jestina">
                        <a href="#jestina">
                            <h3>J.ESTINA</h3>
                            <ul class="project-list">
                                <li>메인페이지 개편</li>
                                <li>시계·핸드백 DIY</li>
                            </ul>
                        </a>
                    </li>
                </ul>
            </section>
            <section class="section work-section smilegate">
                <div class="content-wrap">
                    <h3>Smilegate STOVE</h3>
                    <p>
                        <h4>OVERVIEW</h4>
                        <span>대표작으로 로스트아크, 크로스파이어, 에픽세븐 등을 서비스 중인 게임 업체입니다. 그 중 웹 사이트와 클라이언트 등을 서비스하는 STOVE에서 프론트개발과 마크업 파트를 담당했습니다.</span>
                    </p>
                    <p>
                        <h4>PROJECT</h4>
                        <ul>
                            <li>디자인시스템</li>
                            <li>에픽세븐 인게임 웹뷰</li>
                        </ul>
                    </p>
                </div>
                <div class="content-wrap">
                    <img src="@/assets/images/img-work-stove.png" alt="Stove Mockup">
                </div>
            </section>
            <section class="section work-section dominos">
                <div class="content-wrap">
                    <h3>Domino's Pizza</h3>
                    <p>
                        <h4>OVERVIEW</h4>
                        <span>전 세계 70개국, 1만 개 이상의 점포를 두고 있는 피자 전문 배달 브랜드입니다. 온라인 주문배달을 위한 웹 및 앱 환경의 UI개발과 마크업을 담당했습니다.</span>
                    </p>
                    <p>
                        <h4>PROJECT</h4>
                        <ul>
                            <li>간편결제 퀵오더</li>
                            <li>도미노SPOT 드론배달</li>
                        </ul>
                    </p>
                </div>
                <div class="content-wrap">
                    <img src="@/assets/images/img-work-dominos.png" alt="Domino's Pizza Mockup">
                </div>
            </section>
            <section class="section work-section jestina">
                <div class="content-wrap">
                    <h3>J.ESTINA</h3>
                    <p>
                        <h4>OVERVIEW</h4>
                        <span>김연아, 아이유 등을 모델로 내세운 국내 최상위 주얼리 브랜드입니다. 온라인 플랫폼 확장을 위한 플랫폼운영 부서에서 기획과 마크업을 담당했습니다.</span>
                    </p>
                    <p>
                        <h4>PROJECT</h4>
                        <ul>
                            <li>메인페이지 개편</li>
                            <li>시계·핸드백 DIY</li>
                        </ul>
                    </p>
                </div>
                <div class="content-wrap">
                    <img src="@/assets/images/img-work-jestina.png" alt="Stove Mockup">
                </div>
            </section>
            <section class="section end-section">
                <h2 class="ally-hidden">감사합니다.</h2>
                <figure class="logo-end">
                    <img src="@/assets/images/logo-end.png" alt="Thank you" />
                    <figcaption>끝까지 봐주셔서 감사합니다</figcaption>
                </figure>
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
                menu: [
                    '.work',
                ],
                navigation: true,
                anchors: [
                    'main',
                    'pr',
                    'work',
                    'smilegate',
                    'dominos',
                    'jestina',
                    'end',
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
            align-items: center;
            .fp-overflow {
                width: 102.4rem;
                height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
                @include tablet {
                    width: 100%;
                }
            
                @include mobile {
                    width: 100%;
                }
            }
            &.main-section {
                background-color: var(--primary-color);
                display: flex;
                align-items: center;
                .logo-main {
                    width: 50%;
                    position: relative;
                    img {
                        width: 100%;
                    }
                    figcaption {
                        position: absolute;
                        right: 0;
                        bottom: 29%;
                        font-size: 1vw;
                        font-weight: 100;
                        color: #ffffff;
                    }
                }
                .ic-scroll-btn {
                    position: absolute;
                    bottom: 5%;
                    left: 0;
                    right: 0;
                    margin: 0 auto;
                    display: block;
                    text-align: center;
                    color: white;
                }
            }
            &.pr-section {
                .fp-overflow {
                    column-gap: 8%;
                }
                .content-wrap {
                    width: 45%;
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
            &.work-list-section {
                .work-list {
                    display: flex;
                    flex-direction: row;
                    column-gap: 1.2rem;
                    width: 94%;
                    height: 68%;
                    li {
                        flex: 1;
                        text-align: center;
                        border-radius: 0.2rem;
                        color: white;
                        transition: all .3s ease-in-out;
                        &:hover {
                            background-color: transparent;
                            transform: scale(1.07);
                            transition: all .3s ease-in-out;
                            z-index: 10;
                            &.smilegate {
                                a {
                                    transition: all .3s ease-in-out;
                                    background-color: var(--smilegate-bg-color);
                                    outline: 0.6rem inset var(--smilegate-bg-color);
                                    border: 0.6rem solid #ffffff;
                                }
                            }
                        
                            &.dominos {
                                a {
                                    transition: all .3s ease-in-out;
                                    background-color: var(--dominos-bg-color);
                                    outline: 0.6rem inset var(--dominos-bg-color);
                                    border: 0.6rem solid #ffffff;
                                }
                            }
                        
                            &.jestina {
                                a {
                                    transition: all .3s ease-in-out;
                                    background-color: var(--jestina-bg-color);
                                    outline: 0.6rem inset var(--jestina-bg-color);
                                    border: 0.6rem solid #ffffff;
                                }
                            }
                        }
                        a {
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            gap: 40% 0;
                            height: 100%;
                            h3 {
                                font-size: 2.8rem;
                                line-height: 3.2rem;
                                font-weight: 400;
                            }
                            .project-list {
                                li {
                                    @include font-content();
                                }
                            }
                        }
                        &.smilegate {
                            background: url(@/assets/images/bg-lostark.jpg) no-repeat;
                            background-position: 48% 68%;
                        }
        
                        &.dominos {
                            background: url(@/assets/images/bg-dominos.jpg) no-repeat;
                            background-position: 0% 84%;
                        }
        
                        &.jestina {
                            background: url(@/assets/images/bg-jestina.jpg) no-repeat;
                            background-position: 30% 46%;
                        }
                    }
                }
            }
            &.work-section {
                &:before {
                    content: '';
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    background: inherit;
                    -webkit-filter: blur(0.28rem);
                    -moz-filter: blur(0.28rem);
                    -o-filter: blur(0.28rem);
                    -ms-filter: blur(0.28rem);
                    filter: blur(0.28rem);
                }
                .fp-overflow {
                    background: rgba(0, 0, 0, 0.4);
                    color: #ffffff;
                    column-gap: 4%;
                }
                .content-wrap {
                    width: 55%;
                    display: flex;
                    flex-direction: column;
                    gap: 3.6rem;
                    position: relative;

                    &:last-child {
                        width: 40%;
                    }
                    h3,
                    h4 {
                        font-weight: bold;
                        word-break: keep-all;
                    }
                    h3 {
                        @include font-title();
                        margin-bottom: 8rem;
                    }
                    h4 {
                        @include font-subtitle();
                        margin-bottom: 0.8rem;
                    }
                }
                &.smilegate {
                    background: var(--smilegate-bg-color);
                    background: url(@/assets/images/bg-lostark.jpg);
                    background-position: 46% 66%;
                    background-repeat: no-repeat;
                    .content-wrap {
                        h3, h4 {
                            color: var(--smilegate-color);
                        }
                    }
                }
                &.dominos {
                    background: var(--dominos-bg-color);
                    background: url(@/assets/images/bg-dominos02.jpg);
                    background-size: cover;
                    background-repeat: no-repeat;
                    .content-wrap {
                        h3,
                        h4 {
                            color: var(--dominos-color);
                        }
                    }
                }
                &.jestina {
                    background: var(--jestina-bg-color);
                    background: url(@/assets/images/bg-jestina02.jpg);
                    background-size: cover;
                    background-repeat: no-repeat;
                    .content-wrap {
                        h3,
                        h4 {
                            color: var(--jestina-color);
                        }
                    }
                }
            }
            &.end-section {
                background-color: var(--primary-color);
                display: flex;
                align-items: center;

                .logo-end {
                    width: 50%;
                    position: relative;

                    img {
                        width: 100%;
                    }

                    figcaption {
                        position: absolute;
                        right: 39.2%;
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
