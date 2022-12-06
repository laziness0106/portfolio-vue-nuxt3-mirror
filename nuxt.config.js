import eslintPlugin from 'vite-plugin-eslint';

export default defineNuxtConfig({
    target: 'static',
    router: {
        base: '/portfolio-vue-nuxt3/',
    },
    css: ['~/assets/css/base.scss'],
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
    },
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
            {
                src: '@/plugins/aos',
                ssr: false,
                mode: 'client',
            },
            eslintPlugin({
                failOnError: false,
                cache: false,
            }),
        ],
    },
});
