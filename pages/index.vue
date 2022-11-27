<template>
    <div class="page-container">
        <section>
            <h1>Hello, I'm an UI/UX Engineer</h1>
            <p>
                bra bra bra bra bra bra bra bra bra bra bra bra bra bra bra bra
                bra bra
                <br />
                bra bra bra bra bra bra bra bra bra bra bra bra bra bra bra bra
                bra bra
                <br />
                적을 내용이 많았으면 좋겠다. 적을 내용이 많았으면 좋겠다. 적을
                내용이 많았으면 좋겠다. <br />
                적을 내용이 많았으면 좋겠다. 적을 내용이 많았으면 좋겠다. 적을
                내용이 많았으면 좋겠다. <br />
            </p>
        </section>
        <CButton text="Contact me" type="primary" size="md" />
    </div>
</template>

<script>
definePageMeta({
    layout: 'main',
});
</script>

<style lang="scss">
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
            row-gap: 2.8rem;
            h1 {
                + p {
                    margin-top: 2rem;
                }
            }
        }
    }
}
</style>
