<template>
    <div class="post">
        <div class="head">
            <a class="no" v-text="post.post_no" href="{{post.post_id | href}}" target="_blank"></a>
            <span class="user" v-text="post.user_name" v-link="{path: post.user_id}"></span>
            <span class="date" v-text="post.date.iso | localTime"></span>
        </div>
        <div class="detile" v-html="post.content | trimBr">
        </div>
    </div>
</template>

<script>
    export default {
        replace: true,
        props: ['post']
    }
</script>

<style lang="sass">
    .post {
        padding: 20px 0;
        border-bottom: 1px solid #eee;
    }

    .head {
        font-size: 16px;
        line-height: 2;
        background-color: #f2fbf2;
        border-radius: 3px;

        .no {
            padding-left: 8px;
            text-decoration: none;
            display: inline-block;
            width: 50px;
            color: #555;
        }

        .user {
            display: inline-block;
            min-width: 120px;
            color: #3C763D;
            text-align: left;
            cursor: pointer;
        }

        .date {
            display: inline-block;
            color: #888;
        }
    }

    .detile {
        font-size: 1em;
        padding: 10px;
        line-height: 1.5em;
    }
</style>