<template>
    <i class="logo">
        <span>HONG</span>
        <span>SOON</span>
        <span>HYUN</span>
    </i>
</template>

<script>
export default {
    name: 'CLogo',
};
</script>

<style lang="scss" scoped>
.logo {
    width: 4.4rem;
    height: 4.4rem;
    padding: 0.4rem;
    border: 1px solid var(--text-color);
    border-radius: 0.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
        width: 100%;
        height: 100%;
        font-size: 0.8rem;
        line-height: 1rem;
        font-weight: bold;
        text-align: center;
        white-space: nowrap;
        &:nth-child(1) {
            letter-spacing: 0.1rem;
        }
        &:nth-child(2) {
            letter-spacing: 0.14rem;
        }
        &:nth-child(3) {
            letter-spacing: 0.16rem;
        }
    }
}
</style>
