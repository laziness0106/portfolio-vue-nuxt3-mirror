import eslintPlugin from 'vite-plugin-eslint';

export default defineNuxtConfig({
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
            eslintPlugin({
                failOnError: false,
                cache: false,
            }),
        ],
    },
});
