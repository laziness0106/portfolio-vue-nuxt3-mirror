<template>
    <div class="page-container">
        <section>
            <h2>design system</h2>
            <p>blah blah blah blah blah blah blah blah blah blah blah</p>
        </section>
    </div>
</template>

<script>
definePageMeta({
    layout: 'works',
    layoutTransition: { name: 'layout', mode: 'out-in' },
});
</script>

<style lang="scss" scoped>
.layout-works {
    .page-container {
        width: 100%;
        height: 100%;
        background-image: url('@/assets/images/background/bg-me.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        section {
            width: 35%;
            height: 100%;
            display: flex;
            flex-direction: column;
            padding: 4rem;
            margin-left: auto;
            overflow-y: auto;
            background: white;
            box-shadow: -0.1rem 0 2rem rgba(0, 0, 0, 0.1);
            text-align: center;
        }
    }
}
</style>
