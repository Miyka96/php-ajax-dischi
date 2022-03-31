const app = new Vue(
    {
        el: "#root",
        data: {
            dischi: [],
        },
        methods: {
            fetchData() {
                axios.get('http://localhost:8888/php-ajax-dischi/milestone2/server.php')
                .then( res => {
                    const results = res.data;
                    this.dischi=results;
                    console.log(this.dischi);
                })
                .catch(err => {
                    console.warn(err.response);
                });
            },
        },
        created() {
            this.fetchData();
        },
    }
)