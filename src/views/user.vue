<template>
    <div>
        <alert v-if="!$loadingRouteData">{{ posts[0].user_name }} 总共写日记 {{ posts.length }} 篇</alert>
        <loading v-show="$loadingRouteData"></loading>
        <div class="container">
            <topic :post="post" v-for="post in posts" :user-href="false"></topic>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            posts: [],
        }
    },

    components: {
        'alert': require('../components/alert.vue'),
        'loading': require('../components/loading.vue'),
        'topic': require('../components/topic.vue')
    },

    route: {
        data (transition) {
            this.posts = [];
            this.loading = true;
            this.load(transition.to.params.user, (data) => {
                transition.next({
                    posts: data,
                });
            });
        }
    },
    methods: {
        load (user_id, cb) {
            this.$http.get('http://tiankui.avosapps.com/tian/api', {
                user_id: user_id
            }).then((res) => {
                cb(res.data.results);
            }).catch(() => {
                cb(null);
            });
        }
    }
}
</script>

<style>

</style>
