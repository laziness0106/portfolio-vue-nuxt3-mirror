<template>
    <header>
        <NuxtLink to="/">
            <CLogo />
        </NuxtLink>
        <Gnb v-show="isActive" @click-gnb="updateStatus" />
        <button
            class="btn-close"
            :class="{ active: isActive, inActive: !isActive }"
            @click="isActive = !isActive"
        >
            <span></span>
            <span></span>
            <span></span>
        </button>
    </header>
</template>

<script>
export default {
    data: function () {
        return {
            isActive: false,
        };
    },
    methods: {
        updateStatus(data) {
            console.log(data);
            this.isActive = data;
        },
    },
};
</script>

<style lang="scss">
header {
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 2rem 4rem;
    background: rgba(255, 255, 255, 0.4);
    @include tablet {
        padding: 2rem;
    }
    @include mobile {
        padding: 1.2rem;
    }

    .btn-close {
        width: 4.4rem;
        height: 4.4rem;
        cursor: pointer;
        z-index: 1020;
        span {
            display: block;
            width: 100%;
            height: 0.4rem;
            border-radius: 0.4rem;
            background: var(--text-color);
            transition: all 0.3s;
            position: relative;
            + span {
                margin-top: 1.2rem;
            }
        }
        &.active {
            span {
                + span {
                    margin-top: 1.8rem;
                }
                &:nth-child(1) {
                    animation: ease 0.7s top forwards;
                }
                &:nth-child(2) {
                    animation: ease 0.7s scaled forwards;
                }
                &:nth-child(3) {
                    animation: ease 0.7s bottom forwards;
                }
            }
        }
        &.inActive {
            span {
                + span {
                    margin-top: 1.2rem;
                }
                &:nth-child(1) {
                    animation: ease 0.7s top-2 forwards;
                }
                &:nth-child(2) {
                    animation: ease 0.7s scaled-2 forwards;
                }
                &:nth-child(3) {
                    animation: ease 0.7s bottom-2 forwards;
                }
            }
        }
    }
}
@keyframes top {
    0% {
        top: 0;
        transform: rotate(0);
    }
    50% {
        top: 22px;
        transform: rotate(0);
    }
    100% {
        top: 22px;
        transform: rotate(45deg);
    }
}

@keyframes top-2 {
    0% {
        top: 22px;
        transform: rotate(45deg);
    }
    50% {
        top: 22px;
        transform: rotate(0deg);
    }
    100% {
        top: 0;
        transform: rotate(0deg);
    }
}

@keyframes bottom {
    0% {
        bottom: 0;
        transform: rotate(0);
    }
    50% {
        bottom: 22px;
        transform: rotate(0);
    }
    100% {
        bottom: 22px;
        transform: rotate(135deg);
    }
}

@keyframes bottom-2 {
    0% {
        bottom: 22px;
        transform: rotate(135deg);
    }
    50% {
        bottom: 22px;
        transform: rotate(0);
    }
    100% {
        bottom: 0;
        transform: rotate(0);
    }
}

@keyframes scaled {
    50% {
        transform: scale(0);
    }
    100% {
        transform: scale(0);
    }
}

@keyframes scaled-2 {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
}
</style>
