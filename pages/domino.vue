<template>
    <div class="page-container">
        <article>
            <div class="work-contents">
                <h2>Domino's Pizza</h2>
                <p>
                    도미노피자 웹사이트의 리뉴얼 및 신규 서비스 런칭, 프로모션
                    이벤트페이지 등을 담당했다. 터치 한번으로 주문이 완료되는
                    퀵오더의 UI 작업들은 터치와 동시에 결제가 이뤄지기 때문에
                    사용자 입장에서 꽤나 고민해야했고, 그 외에 드론배달이나
                    드라이브쓰루 등의 서비스 역시 사용자의 동선이 구매에
                    직간접적으로 영향을 주는 만큼 많은 시도를 해야했다. 이런
                    UI/UX에 대한 고민과 시도들은 회사뿐아니라 나 스스로에게
                    있어서도 기술면으로나 경험면으로나 정말 큰 도움이 되었다.
                </p>
            </div>
            <div class="work-contents">
                <h3>USED</h3>
                <ul>
                    <li><CIcon type="ic-lang-html5" /></li>
                    <li><CIcon type="ic-lang-css3" /></li>
                    <li><CIcon type="ic-lang-vue" /></li>
                    <li><CIcon type="ic-lang-jsp" /></li>
                    <li><CIcon type="ic-lang-javascript" /></li>
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
        background-color: var(--blue-color);
        background-image: url('@/assets/images/work-item03.png');
    }
}
</style>
