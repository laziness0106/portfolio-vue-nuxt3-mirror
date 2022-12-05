<template>
    <div class="page-container">
        <article>
            <div class="work-contents">
                <h2>Design System</h2>
                <p>
                    스마일게이트 스토브의 디자인시스템 구축을 담당했다. UI
                    컴포넌트의 개발보다는 디자인시스템의 목표와 일원화, 사용성
                    등을 위한 고민이 제일 어려웠다. 그동안의 경험과 지식을 모두
                    동원해야 했던만큼 완성된 디자인시스템이 사내에 자리잡는
                    모습은 굉장히 뿌듯하고 기억에 남는다. 서비스 별로 판이한
                    부분은 건드릴 수 없었기에 만들지 못한 컴포넌트들이 많이
                    있다는게 아쉬움으로 남는다.
                </p>
            </div>
            <div class="work-contents">
                <h3>USED</h3>
                <ul>
                    <li><CIcon type="ic-lang-html5" /></li>
                    <li><CIcon type="ic-lang-css3" /></li>
                    <li><CIcon type="ic-lang-vue" /></li>
                    <li><CIcon type="ic-lang-tailwind" /></li>
                    <li><CIcon type="ic-lang-typescript" /></li>
                    <li><CIcon type="ic-lang-storybook" /></li>
                </ul>
            </div>
            <div class="work-contents">
                <h3>PLATFORM</h3>
                <ul>
                    <li>Web</li>
                    <li>Mobile</li>
                    <li>Client</li>
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
        background: var(--secondary-color);
        background-image: url('@/assets/images/work-item01.png');
        background-repeat: no-repeat;
        background-size: 80%;
        background-position: 0% 40%;
    }
}
</style>
