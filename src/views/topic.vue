<template>
    <loading v-show="loading"></loading>
    <div class="container">
        <topic :post="post" v-for="post in posts"></topic>
    </div>
</template>

<script>
export default {
    data () {
        return {
            posts: [],
            page: 1,
            scrollTop: 0,
            loading: true,
        }
    },
    methods: {
        load (page, cb) {
            this.$http.get('http://tiankui.avosapps.com/tian/api', 
                {id: page}
            ).then( (res) => {
                if (res.data.results.length === 0) {
                    window.removeEventListener('scroll', func);
                } else {
                    cb(res.data.results);
                }
            }).catch(() => {
                cb(null);
            });
        }
    },

    ready () {
        this.load(this.page, (data) => {
            this.$set('posts', data);
            this.loading = false;
        });
        var html = document.getElementsByTagName('html')[0];
        var ch = html.clientHeight;
        var func = (event) => {
            var sh = html.scrollHeight;
            if (html.scrollTop + ch + 100 > sh ) {
                setTimeout( () => {
                    window.addEventListener('scroll', func);
                }, 1000);
                this.page++;
                window.removeEventListener('scroll', func);
            }
        };
        window.addEventListener('scroll', func);
    },

    components: {
        'alert': require('../components/alert.vue'),
        'loading': require('../components/loading.vue'),
        'topic': require('../components/topic.vue')
    },

    watch: {
        page (val) {
            console.log(val);
            this.load(val, (data) => {
                this.posts = this.posts.concat(data);
            });
        }
    }
}
</script>

<style>

</style>
