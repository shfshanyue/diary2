<template>
    <div class="alert" v-if="show" transition="fade">
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

<style lang="sass" scoped>
    .alert {
        position: fixed;
        height: 50px;
        width: 100%;
        border-top: 1px #555 solid;
        background-color: #000;
        line-height: 50px;
        text-align: center;
        opacity: .3;
        color: #fff;

        @for $i from 1 through 12 {
            &:nth-child(#{$i}) {
                top: ($i - 1)*50px;
            }
        }

        span {
            position: absolute;
            right: 30px;
            font-size: 1.3em;
            cursor: pointer
        }
    }

    .fade-transition {
        transition: all ease .8s;
    }

    .fade-enter,
    .fade-leave {
        opacity: 0;
        height: 0;
    }
</style>