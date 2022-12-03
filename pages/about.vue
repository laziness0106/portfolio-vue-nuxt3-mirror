<template>
    <div class="page-container">
        <h2 data-aos="fade-up" data-aos-delay="300">ABOUT ME</h2>
        <section>
            <h3 data-aos="fade-up" data-aos-delay="400">
                안녕하세요!<br />
                저는 시멘틱한 구조와<br />
                사용감있는 UX를 추구하는<br />
                마크업 개발자입니다.
            </h3>
            <img
                src="@/assets/images/background/bg-me.jpg"
                alt="shhong"
                class="content-img-me"
                data-aos="fade-up"
                data-aos-delay="700"
            />
            <p data-aos="fade-up" data-aos-delay="500">
                견고하고 논리적인 구조의 페이지가<br />
                깔끔하게 정리된 CSS를 통해 그려지고<br />
                서비스에 맞춰 정형화된 UI 컴포넌트들이<br />
                유저친화적인 동작들로 사용감을 높여주는<br />
                그런 착실한 사이트를 만드는게 저의 일입니다.
            </p>
            <p data-aos="fade-up" data-aos-delay="500">
                성능과 유지보수의 최적화를 위해 고민하고<br />
                사용자 입장에서 놀랄만한 감각적인 동작들을 구현하는걸
                좋아합니다.<br />
                그러다보면 어느새 마크업이라는 영역을 벗어나<br />
                프론트엔드 개발이나 웹 기획 등 다른 분야까지<br />
                성큼성큼 발을 딛고 있는 제 자신을 발견할 수 있습니다.
            </p>
            <strong data-aos="fade-up" data-aos-delay="600">
                좋아하는 일을 더 잘하는 것<br />
                그게 바로 제가 꿈꾸는 저의 '목표'입니다.
            </strong>
        </section>
        <section class="list-section skill-section">
            <h3 data-aos="fade-up" data-aos-delay="600">
                제가 좋아하는<br />
                저의 직무들을 소개합니다.
            </h3>
            <ul data-aos="fade-up" data-aos-delay="700">
                <li data-aos="fade-up" data-aos-delay="700">
                    <CIcon type="ic-check" size="sm" />
                    <strong>Markup</strong>
                    <span class="font-cap">마크업을 할줄암</span>
                </li>
                <li data-aos="fade-up" data-aos-delay="800">
                    <CIcon type="ic-check" size="sm" />
                    <strong>UI/UX Development</strong>
                    <span class="font-cap">UI개발을 할줄암</span>
                </li>
                <li data-aos="fade-up" data-aos-delay="900">
                    <CIcon type="ic-check" size="sm" />
                    <strong>Front-end Engineer</strong>
                    <span class="font-cap">개발을 할줄암</span>
                </li>
                <li data-aos="fade-up" data-aos-delay="1000">
                    <CIcon type="ic-check" size="sm" />
                    <strong>웹 기획</strong>
                    <span class="font-cap">웹 분석 도구 쓸줄암</span>
                </li>
            </ul>
        </section>
        <section class="list-section pr-section">
            <h3 data-aos="fade-up" data-aos-delay="300">
                이럴 때 제가 필요할거에요
            </h3>
            <ul>
                <li data-aos="fade-up" data-aos-delay="400">
                    <CIcon type="ic-check" size="sm" />
                    역량과 다양한 경험을 갖춘 마크업개발자가 필요할 때
                </li>
                <li data-aos="fade-up" data-aos-delay="500">
                    <CIcon type="ic-check" size="sm" />
                    자기 일에 책임감 있고 항시 의지가 되는 든든한 팀원이 필요할
                    때
                </li>
                <li data-aos="fade-up" data-aos-delay="600">
                    <CIcon type="ic-check" size="sm" />
                    타 파트에 대한 업무 롤과 특징을 알고 잘 이끌어줄 리더가
                    필요할 때
                </li>
                <li data-aos="fade-up" data-aos-delay="700">
                    <CIcon type="ic-check" size="sm" />
                    동료 간의 커뮤니케이션을 부드럽게 해줄 사람이 필요할 때
                </li>
            </ul>
        </section>
        <section class="contact-section contact-section">
            <h3 data-aos="fade-up" data-aos-delay="300">연락주세요</h3>
            <p>
                <strong data-aos="fade-up" data-aos-delay="400">
                    <a
                        href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=valentine15year@gmail.com"
                        target="_blank"
                        >valentine15year@gmail.com</a
                    >
                </strong>
                <strong>
                    <a href="sms:010-6393-5118">010 - 6393 - 5118</a>
                </strong>
            </p>
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
        padding: 0;
        padding-top: 6rem;
        h2 {
            padding: 4rem;
            text-align: right;
        }
        section {
            padding: 12rem 4rem;
            position: relative;
            display: flex;
            flex-direction: column;
            gap: 12rem;
            background: var(--on-background-color);
            &:nth-child(2n-1) {
                background: var(--on-background-color-2);
            }
            > * {
                display: block;
                text-align: left;
            }
            > :nth-child(2n) {
                text-align: right;
            }
            .content-img-me {
                width: 38%;
                position: absolute;
                margin-top: 8%;
                right: 4rem;
            }
            > strong {
                @include font-content();
                text-align: center;
            }
            &.list-section {
                flex-direction: row;
                justify-content: space-between;
                gap: 0;
                > :first-child {
                    margin: auto 0;
                    text-align: right;
                    + ul {
                        position: relative;
                        display: flex;
                        flex-direction: column;
                        gap: 1.6rem;
                        &:before {
                            content: '';
                            width: 0.1rem;
                            height: 100%;
                            position: absolute;
                            left: -2%;
                            background: var(--text-color);
                            opacity: 0.3;
                        }
                    }
                }
                > :nth-child(n + 2) {
                    text-align: left;
                }
                > * {
                    width: 49%;
                    padding: 0 8rem;
                }
                ul {
                    li {
                        @include font-content();
                    }
                }
                &.skill-section {
                    ul {
                        li {
                            display: grid;
                            grid-template-columns: 2rem 1fr;
                            column-gap: 1.2rem;
                            align-items: baseline;
                            :nth-child(1) {
                                grid-column: 1 / 2;
                                grid-row: 1 / 3;
                            }
                        }
                    }
                }
                &.pr-section {
                    ul {
                        li {
                            display: flex;
                            align-items: baseline;
                            gap: 1.2rem;
                        }
                    }
                }
            }
            &.contact-section {
                gap: 0.8rem;
                > * {
                    text-align: center;
                }
                p {
                    display: flex;
                    flex-direction: column;
                    row-gap: 1.6rem;
                    margin-top: 4.4rem;
                    strong {
                        font-size: 4.8rem;
                        line-height: 6.4rem;
                    }
                }
            }
        }
    }
}
</style>
