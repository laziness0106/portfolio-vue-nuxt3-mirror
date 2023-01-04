import eslintPlugin from 'vite-plugin-eslint';

export default defineNuxtConfig({
    target: 'server',
    ssr: true,
    router: {
        base: '/portfolio-vue-nuxt3/',
    },
    css: ['~/assets/css/base.scss'],
    app: {
        head: {
            htmlAttrs: {
                lang: 'ko',
            },
            title: 'portfolio-vue-nuxt3',
            meta: [
                { charset: 'utf-8' },
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1',
                },
                {
                    name: 'description',
                    content: 'shhong portfolio',
                },
                {
                    hid: 'description',
                    name: 'og:description',
                    content: 'shhong portfolio',
                },
                {
                    name: 'og:title',
                    content: 'portfolio-vue-nuxt3',
                },
                {
                    name: 'og:keywords',
                    content: 'portfolio, vue, nuxt',
                },
                {
                    name: 'og:image',
                    content: '@/assets/images/thumbnail.png',
                },
                {
                    name: 'og:author',
                    content: 'shhong',
                },
            ],
            link: [
                {
                    rel: 'icon',
                    type: 'image/png',
                    href: '@/assets/images/favicon.png',
                },
            ],
        },
        pageTransition: { name: 'page', mode: 'out-in' },
    },
    modules: [
        '@fullpage/nuxt-fullpage'
    ],
    buildModules: ['nuxt-vite', '@nuxtjs/style-resources'],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    sourceMap: true,
                    additionalData: `
                        @import "@/assets/css/common/variables.scss";
                        @import "@/assets/css/common/mixins.scss"; 
                    `,
                },
            },
        },
        plugins: [
            eslintPlugin({
                failOnError: false,
                cache: false,
            }),
        ],
    },
});
