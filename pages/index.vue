<template>
    <section>
        <h1>Hello, I'm an UI/UX Engineer</h1>
        <p>
            bra bra bra bra bra bra bra bra bra bra bra bra bra bra bra bra bra
            bra
            <br />
            bra bra bra bra bra bra bra bra bra bra bra bra bra bra bra bra bra
            bra
            <br />
            적을 내용이 많았으면 좋겠다. 적을 내용이 많았으면 좋겠다. 적을
            내용이 많았으면 좋겠다. <br />
            적을 내용이 많았으면 좋겠다. 적을 내용이 많았으면 좋겠다. 적을
            내용이 많았으면 좋겠다. <br />
        </p>
        <button>Contact me</button>
    </section>
</template>

<script>
definePageMeta({
    layout: 'main',
});
</script>

<style lang="scss">
.layout-main {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    row-gap: 2.8rem;
    h1 {
        + p {
            margin-top: 2rem;
        }
    }
    button {
        width: 10rem;
    }
}
</style>
