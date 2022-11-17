import eslintPlugin from 'vite-plugin-eslint';

export default defineNuxtConfig({
    css: ['~/assets/css/base.scss'],
    vite: {
        plugins: [
            eslintPlugin({
                failOnError: false,
                cache: false,
            }),
        ],
    },
});
