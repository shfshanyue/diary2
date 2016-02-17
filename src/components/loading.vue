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
        @for $i from 0 through 10 {
            #{percentage($i/10)} {
                transform: rotate(360deg * $i / 10)
            }
        }
    }
</style>