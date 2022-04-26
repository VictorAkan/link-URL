const app = Vue.createApp({
    data() {
        return {}
    },
    methods: {
        async getURL() {
            const res = await fetch('https://api-ssl.bitly.com/v4/shorten')
            const data = await  res.json()
            console.log(data);
        }
    },
    mounted() {
        this.getURL();
    }
})
app.mount("#app")