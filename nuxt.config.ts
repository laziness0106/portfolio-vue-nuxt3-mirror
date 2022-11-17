import eslintPlugin from 'vite-plugin-eslint';

export default defineNuxtConfig({
    vite: {
        plugins: [
            eslintPlugin({
                failOnError: false,
                cache: false,
            }),
        ],
    },
});
