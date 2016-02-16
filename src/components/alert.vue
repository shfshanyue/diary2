<template>
    <div class="alert" v-show="show">
        <slot></slot>
        <span @click="show = false">&times;</span>
    </div>
</template>

<script>
    export default {
        replace: true,
        data () {
            return {
                show: true
            }
        }
    }
</script>

<style lang="sass">
    .alert {
        position: fixed;
        top: 0;
        height: 50px;
        width: 100%;
        background-color: #000;
        line-height: 50px;
        text-align: center;
        opacity: .3;
        color: #fff;

        span {
            position: absolute;
            right: 30px;
            font-size: 1.3em;
            cursor: pointer
        }
    }
</style>