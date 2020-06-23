<template>
    <div class="staff">
        <div>Staff Component.</div>
        <b-button variant="info" @click="getBookingByMonth">get booking</b-button>
    </div>
</template>

<script>
    export default {
        name: "Staff",
        computed: {
            test: function () {
                return this.$moment().format("HH:mm");
            },
            testHelper: function(){
                return this.$helper.test();
            }
        },
        methods: {
            getBookingByMonth: function(){
                this.$api.getBookingByMonth('sontv');
            }
        }
    }
</script>

<style scoped>

</style>