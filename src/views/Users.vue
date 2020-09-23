<template>
    <div>
        <h1 class="mb-4">Users</h1>
        <div v-if="loading" class="text-center">
            <LoadingBtn />
        </div>
        <div v-else-if="fetchErr" style="width: 420px;" class="bg-red-500 border-red-600 border rounded-md text-white p-4 text-center shadow-sm font-thin mx-auto">
            There was an Error fetching the users
        </div>
        <div v-else class="flex flex-wrap justify-center">
            <!-- User component -->
            <div v-for="user in users"
                v-bind:key="user.id"
                class="flex-grow w-64 bg-gray-100 border-gray-200 m-2 border rounded-md shadow-sm text-center"
            >
                <div class="p-4 border-b border-gray-200">
                    <h5 class="font-semibold text-gray-700">{{ user.name }}</h5>
                </div>
                <div class="p-4 border-b border-gray-200">
                    <p class="font-thin text-sm">{{ user.email }}</p>
                    <p class="mb-0 font-thin text-sm">{{ user.phone }}</p>
                </div>
                <div class="p-4">
                    <button class="bg-indigo-600 rounded px-4 py-2 border border-transparent rounded-md text-white hover:bg-indigo-500">
                        View Profile
                        
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LoadingBtn from '../components/Loadingbtn'

export default {
    name: 'Users',
    data: function() {
        return {
            fetchErr: false,
            loading: false,
            users: []
        }
    },
    components: {
        LoadingBtn
    },
    created: function() {
        this.loading = true

        // Fetch users list when we hit the users route
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => {return res.json()})
            .then(data => {
                this.users = data
                this.loading = false
                console.log(data)
            })
            .catch(err => {
                this.fetchErr = true
                this.loading = false
                console.log(err)
            })
    }
}
</script>

<style>

</style>