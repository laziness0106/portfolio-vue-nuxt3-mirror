import eslintPlugin from 'vite-plugin-eslint';

export default defineNuxtConfig({
    css: ['~/assets/css/base.scss'],
    styleResources: {
        scss: '~/assets/css/*.scss',
    },
    buildModules: ['nuxt-vite', '@nuxtjs/style-resources'],
    vite: {
        plugins: [
            eslintPlugin({
                failOnError: false,
                cache: false,
            }),
        ],
    },
});
