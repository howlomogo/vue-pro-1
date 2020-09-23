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
            <UserTile
                v-for="user in users"
                v-bind:key="user.id"
                v-bind:user="user"
                class="flex-grow w-64 bg-gray-100 border-gray-200 m-2 border rounded-md shadow-sm text-center"
            />
        </div>
    </div>
</template>

<script>
import LoadingBtn from '../components/Loadingbtn'
import UserTile from '../components/UserTile'

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
        LoadingBtn,
        UserTile
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