// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    ssr: true,
    modules: ['@nuxtjs/tailwindcss', 'nuxt-icon'],
    vite: {
        define: {
            'process.env': process.env
        },
        server: {
            proxy: {
                '/api': {
                    target: process.env.NODE_ENV === 'production' ? process.env.NUXT_API_BASE_URL : 'http://127.0.0.1:9001',
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, '/api')
                }
            }
        }
    }
});

