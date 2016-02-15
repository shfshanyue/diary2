<template>
    <div class="alert" v-if="show">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        replace: true,
        props: ['show']
    }
</script>

<style>
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
    }
</style>