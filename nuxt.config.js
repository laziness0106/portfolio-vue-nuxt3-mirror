import eslintPlugin from 'vite-plugin-eslint';

export default defineNuxtConfig({
    css: ['~/assets/css/base.scss'],
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
