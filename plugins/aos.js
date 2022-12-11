import AOS from 'aos';

export default defineNuxtPlugin((nuxtApp) => {
    if (typeof window !== 'undefined') {
        nuxtApp.AOS = AOS.init({
            disable: 'phone',
            // offset: 200,
            duration: 600,
            easing: 'ease-in-out-cubic',
            once: true,
        });
    }
});
