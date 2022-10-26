const { createApp } = Vue;

createApp({
    data() {
        return {
            message: "hello.",
            img: "./assets/img/mac.webp",
            h1Classes: "pt-3"
        }
    }
}).mount('#app');