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
            <CButton text="Contact me" type="primary" size="md" />
        </section>
        <section class="bg-section"></section>
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
        display: flex;
        column-gap: 4rem;
        section {
            width: 180%;
            height: 80%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            row-gap: 2.4rem;
            margin: 4rem 0;
            p {
                + button {
                    margin-top: 4.4rem;
                }
            }
            button {
                width: fit-content;
            }
        }
        .bg-section {
            border-radius: 0.8rem;
            background-image: url('@/assets/images/background/bg-me.jpg');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }
    }
}
</style>
