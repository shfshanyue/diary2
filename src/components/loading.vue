<template>
    <div class="loading">
    </div>
</template>

<script>
    export default {
        replace: true,
    }
</script>

<style lang="sass">
    .loading {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto auto;
        width: 45px;
        height: 45px;
        border-radius: 50%;
        border: 1px solid transprant;
        border-top: 1px solid #aaa;
        border-left: 1px solid #aaa;
        animation: rotate-circle 2s linear infinite;
    }

    @keyframes rotate-circle {
        0% {
            transform: rotate(0deg);
        }

        50% {
            transform: rotate(180deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
</style>