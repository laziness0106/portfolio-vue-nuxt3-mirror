<template>
    <div class="page-container">
        <h2 data-aos="fade-up" data-aos-delay="300">ABOUT ME</h2>
        <section>
            <h3 data-aos="fade-up" data-aos-delay="300">
                안녕하세요!<br />
                저는 Semantic한 마크업과<br />
                풍부한 Interaction을 추구하는<br />
                마크업 개발자입니다.
            </h3>
            <p data-aos="fade-up" data-aos-delay="400">
                견고하고 논리적인 구조의 페이지가<br />
                깔끔하게 정리된 CSS를 통해 그려지고<br />
                서비스에 맞춰 정형화된 UI 컴포넌트들이<br />
                유저친화적인 동작들로 사용감을 높여주는<br />
                그런 기억에 남는 사이트를 만드는게 저의 일입니다.
            </p>
            <p data-aos="fade-up" data-aos-delay="500">
                성능과 유지보수의 최적화를 위해 고민하고<br />
                사용자 입장에서 놀랄만한 감각적인 동작들을 구현하는걸
                좋아합니다.<br />
            </p>
            <p data-aos="fade-up" data-aos-delay="600">
                그러다보면 어느새 마크업이라는 영역을 벗어나<br />
                프론트엔드 개발이나 웹 기획 등 다른 분야까지<br />
                성큼성큼 발을 딛고 있는 제 자신을 발견할 수 있습니다.
            </p>
            <p data-aos="fade-up" data-aos-delay="700">
                좋아하는 일을 더 잘하는 것<br />
                그게 바로 제가 꿈꾸는 저의 '목표'입니다.
            </p>
        </section>
        <section>
            <h3 data-aos="fade-up" data-aos-delay="300">
                제가 좋아하는<br />
                저의 직무들을 소개합니다.
            </h3>
            <ul>
                <li data-aos="fade-up" data-aos-delay="400">
                    <strong>Markup</strong>
                    프로토타이핑
                </li>
                <li data-aos="fade-up" data-aos-delay="500">
                    <strong>UI/UX Development</strong>
                </li>
                <li data-aos="fade-up" data-aos-delay="600">
                    <strong>Front-end Engineer</strong>
                </li>
                <li data-aos="fade-up" data-aos-delay="700">
                    <strong>웹 기획</strong>
                    웹 분석 도구
                </li>
            </ul>
        </section>
        <section>
            <h3 data-aos="fade-up" data-aos-delay="300">
                이럴 때 제가 필요할거에요
            </h3>
            <ul>
                <li data-aos="fade-up" data-aos-delay="400">
                    역량과 다양한 경험을 갖춘 마크업개발자가 필요할 때
                </li>
                <li data-aos="fade-up" data-aos-delay="500">
                    자기 일에 책임감 있어 항시 의지가 되는 든든한 팀원이 필요할
                    때
                </li>
                <li data-aos="fade-up" data-aos-delay="600">
                    타 파트에 대한 업무 롤과 특징을 알고 잘 이끌어줄 리더가
                    필요할 때
                </li>
                <li data-aos="fade-up" data-aos-delay="700">
                    동료 간의 커뮤니케이션을 부드럽게 해줄 사람이 필요할 때
                </li>
            </ul>
        </section>
        <section>
            <h3 data-aos="fade-up" data-aos-delay="300">연락주세요</h3>
            <p>
                <strong data-aos="fade-up" data-aos-delay="400">
                    <a
                        href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=valentine15year@gmail.com"
                        target="_blank"
                        >valentine15year@gmail.com</a
                    >
                </strong>
                <span>비밀이지만 메일을 자주 확인하진 않아요.</span>
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
.page-container {
    padding: 0;
    section {
        background: var(--on-background-color);
        &:nth-child(2n-1) {
            background: var(--on-background-color-2);
        }
    }
}
</style>
