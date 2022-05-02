const app = Vue.createApp({
    data() {
        return {
            token:'35c75f4492ee951e300351e8983e07343fab2da7',
            urlDisplay:"",
            urlInput:"",
            isCopy:false,
        }
    },
    methods: {
        async getURL() {
            const res = await fetch('https://api-ssl.bitly.com/v4/shorten', {
                method:"POST",
                headers:{
                        Authorization :`Bearer ${this.token}`,
                        'Content-Type' : 'application/json',
                },
                body: JSON.stringify({
                        long_url: this.urlInput,
                        domain: "bit.ly",
                        group_guid: "Bm4ohS3X1z6"
                })
            })
            const data = await  res.json()
            console.log(data);
            this.isCopy = true
            if (this.urlInput == "") {
                alert("invalid URL search")
                this.isCopy = false
            }
            this.urlDisplay = data.link
        },
        copyURL() {
            var Url = this.$refs.urlDisplay;
            this.urlDisplay.select();
            document.execCommand(Url);
        }
    },
})
app.mount("#app")