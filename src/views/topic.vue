<template>
    <alert :show="$route.name !== 'user'">
        {{'posts[0].user_name'}} 总共发帖 {{ 'posts.length' }} 篇
    </alert>
    <loading show="true"></loading>
    <!-- <div class="container">
        <div class="post"  v-for="post in posts">
            <div class="head">
                <a class="no" v-text="post.post_no" href="{{post.post_id | href}}" target="_blank"></a>
                <span class="user" v-text="post.user_name" v-link="{path: post.user_id}"></span>
                <span class="date" v-text="post.date.iso | localTime"></span>
            </div>
            <div class="detile" v-html="post.content | trimBr">
            </div>
        </div>
    </div> -->
</template>

<script>
import Alert from '../components/alert.vue';
import Loading from '../components/loading.vue';

export default {
    data () {
        return {
            a: 3
        }
    },
    components: {
        'alert': Alert,
        'loading': Loading
    }
}
</script>

<style>

</style>
