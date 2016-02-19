<template>
    <div>
        <alert>点击帖子前的楼层，将转至贴吧相关页面。</alert>
        <alert>点击昵称，将列出该昵称的所有帖子。</alert>
        <loading v-show="loading"></loading>
        <div class="container">
            <topic :post="post" v-for="post in posts"></topic>
        </div>
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
        },
        notify () {
            let html = document.documentElement;
            let body = document.body;
            let func = (event) => {
                if (html.scrollTop + body.scrollTop + html.clientHeight + 10 > html.scrollHeight ) {
                    setTimeout( () => {
                        window.addEventListener('scroll', func);
                    }, 1000);
                    this.page++;
                    window.removeEventListener('scroll', func);
                }
            };
            window.addEventListener('scroll', func);
        }
    },

    ready () {
        this.load(this.page, (data) => {
            this.$set('posts', data);
            this.loading = false;
        });
        this.notify();
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
@import '../asserts/style/style.scss'

</style>
