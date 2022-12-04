<template>
    <div class="page-container">
        <article>
            <div class="work-contents">
                <h2>Domino's Pizza</h2>
                <p>J.ESTINA의 사내 프로젝트용 디자인시스템</p>
                <p>
                    디자인시스템을 만들었고 힘들었고 좋았고 경험이었고 어쩄든
                    그랬고 저랬고 저쨋고 디자인시스템을 만들었고 힘들었고 좋았고
                    경험이었고 어쩄든 그랬고 저랬고 저쨋고 디자인시스템을
                    만들었고 힘들었고 좋았고 경험이었고 어쩄든 그랬고 저랬고
                    저쨋고
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
        background: var(--blue-color);
        background-image: url('@/assets/images/work-item03.png');
        background-repeat: no-repeat;
        background-size: 80%;
        background-position: 0% 40%;
    }
}
</style>
