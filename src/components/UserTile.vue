<template>
    <div>
        <div class="p-4 border-b border-gray-200">
            <h5 class="font-semibold text-gray-700">{{ user.name }}</h5>
        </div>
        <div class="p-4 border-b border-gray-200">
            <p class="font-thin text-sm">{{ user.email }}</p>
            <p class="mb-0 font-thin text-sm">{{ user.phone }}</p>
        </div>
        <div class="p-4">
            <router-link
                v-bind:to="'/user/' + user.id"
                class="bg-indigo-600 rounded px-4 py-2 border border-transparent rounded-md text-white hover:bg-indigo-500">
                View Profile
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UserTile',
    props: {
        user: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>

</style>