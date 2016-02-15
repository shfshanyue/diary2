<template>
    <div>
        <alert show="true">sdf</alert>
        <div>
            hello, {{ a | inc}}
            hello, {{ a | dev}}
        </div>
    </div>
</template>

<script>
import Alert from '../components/alert.vue';

export default {
    data () {
        return {
            a: 3
        }
    },
    components: {
        'alert': Alert
    }
}
</script>

<style>

</style>
