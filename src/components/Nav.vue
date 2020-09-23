<template>
    <div id="nav" class="py-6 border-gray-900 border-b-4 border-dashed mb-8">
        <router-link class="px-6" to="/">Home</router-link> |
        <router-link class="px-6" to="/about">About</router-link> | 
        <router-link class="px-6" to="/users">Users</router-link>
    </div>
</template>

<script>
export default {
    name: 'Nav'
}
</script>

<style>
</style>