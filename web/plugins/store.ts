import store from '../store/index.js';
export default defineNuxtPlugin((nuxtApp) => {
    return {
        provide: {
            store: new store,
        },
    };
});