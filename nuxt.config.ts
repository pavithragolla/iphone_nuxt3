// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ["assets/css/tailwind.css"],
    meta:{
        title:"nuxt3 course"
    },
    build: {
        postcss: {
            postcssOptions: {

                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            }
        },
      }
})
