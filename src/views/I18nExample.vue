<template>
    <div class="i18n-example">

        <!-- basic syntax: $t(file-name.key) -->
        <div>basic use: {{ $t('example.basic') }}</div>

        <!-- param syntax: $t(file-name.key, Object: object-param) -->
        <div>params use: {{ $t('example.param12', {param1: 'abc', param2: 'xyz'}) }}</div>

        <!-- link basic syntax: $t(file-name.key) -->
        <div>link use: {{ $t('example.link-basic') }}</div>

        <!-- link params syntax: $t(file-name.key, Object: object-param) -->
        <div>link-params use: {{ $t('example.link-params', {param1: 'abc', param2: 'xyz'}) }}</div>

        <!-- link multi params syntax: $t(file-name.key, Object: object-param) -->
        <div>link-multi-params use: {{ $t('example.link-multi-params', {param1: 'abc', param2: 'xyz', param3: 123, param4: 456}) }}</div>

    </div>
</template>

<script>
    export default {
        name: "Example"
    }
</script>

<style scoped>

</style>