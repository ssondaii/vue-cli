<template>
    <div class="staff">
        <div>Staff Component.</div>
    </div>
</template>

<script>
    export default {
        name: "Staff",
        computed: {
            test: function () {
                let a = 'son';
                return this.$_.isNull(a);
            }
        },
        methods: {
            testLodash: function(){
                let a = 'son';
                return this.$_.isNull(a);
            }
        }
    }
</script>

<style scoped>

</style>