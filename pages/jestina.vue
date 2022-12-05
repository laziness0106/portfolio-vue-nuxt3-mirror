<template>
    <div class="page-container">
        <article>
            <div class="work-contents">
                <h2>J.ESTINA</h2>
                <p>
                    제이에스티나 웹사이트의 리뉴얼 및 신규 서비스 런칭, 프로모션
                    이벤트페이지 등을 담당했다. PL로 참여해 프로젝트의 처음부터
                    끝까지 도맡아 작업한 메인페이지 리뉴얼은 내 경력 중 가장
                    재밌고 보람있는 경험이 되었다. 프로모션 이벤트페이지가
                    네이버 실시간 검색어에 등재되었던 일 또한 기억에 남는다. 그
                    외 핸드백DIY나 O2O 등의 신규 서비스에 기획 및 마크업으로
                    참여했다
                </p>
            </div>
            <div class="work-contents">
                <h3>USED</h3>
                <ul>
                    <li><CIcon type="ic-lang-html5" /></li>
                    <li><CIcon type="ic-lang-css3" /></li>
                    <li><CIcon type="ic-lang-jsp" /></li>
                    <li><CIcon type="ic-lang-jquery" /></li>
                    <li><CIcon type="ic-lang-javascript" /></li>
                    <li><CIcon type="ic-lang-bootstrap" /></li>
                </ul>
            </div>
            <div class="work-contents">
                <h3>PLATFORM</h3>
                <ul>
                    <li>Web</li>
                    <li>Mobile</li>
                    <li>Android</li>
                    <li>IOS</li>
                </ul>
            </div>
        </article>
    </div>
</template>

<script>
definePageMeta({
    layout: 'work',
    layoutTransition: { name: 'layout', mode: 'out-in' },
});
</script>

<style lang="scss" scoped>
.layout-works {
    .page-container {
        background: var(--pink-light-color);
        background-image: url('@/assets/images/work-item02.png');
        background-repeat: no-repeat;
        background-size: 80%;
        background-position: 0% 40%;
    }
}
</style>
