const app = new Vue(
    {
        el: "#root",
        data: {
            dischi: [],
        },
        methods: {
            fetchData() {
                axios.get('../milestone2/server.php')
                .then( res => {
                    const results = res.data;
                    console.log(res);
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