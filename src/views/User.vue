<template>
    <!-- User Page -->
    <div>
        <h1 class="mb-4">User</h1>
        <div v-if="loading" class="text-center">
            <LoadingBtn />
        </div>
        <div v-else-if="fetchErr" style="width: 420px;" class="bg-red-500 border-red-600 border rounded-md text-white p-4 text-center shadow-sm font-thin mx-auto">
            {{ fetchErr }}
        </div>

        <div v-else class="mb-8 bg-gray-100 border-gray-200 m-2 border rounded-md shadow-sm text-center">

            <div class="p-4 border-b border-gray-200">
                <h3 class="font-semibold text-gray-800">{{ user.name }}</h3>
            </div>
            
            <!-- Basic -->
            <div class="p-4 border-b border-gray-200">
                <h5>Basic Info:</h5>
                <p class="font-thin mb-1">
                    <strong>Email:</strong> {{ user.email }}
                </p>
                <p class="font-thin mb-1">
                    <strong>Phone:</strong> {{ user.phone }}
                </p>
                <p class="font-thin mb-1">
                    <strong>Username:</strong> {{ user.username }}
                </p>
            </div>
            
            <!-- Address -->
            <div class="p-4 border-b border-gray-200">
                <h5>Address:</h5>
                <p class="mb-0 font-thin">{{ user.address.street }}</p>
                <p class="mb-0 font-thin">{{ user.address.suite }}</p>
                <p class="mb-0 font-thin">{{ user.address.city }}</p>
                <p class="mb-0 font-thin">{{ user.address.zipcode }}</p>

                <p class="mb-0 font-thin">{{ user.address.geo }}</p>
            </div>

            <div class="p-4 border-b border-gray-200">
                <h5>Company:</h5>
                <p class="mb-0 font-thin">{{ user.company.name }}</p>
                <p class="mb-0 font-thin">{{ user.company.catchPhrase }}</p>
                <p class="mb-0 font-thin">{{ user.company.bs }}</p>

            </div>
        </div>

        <div class="flex">
            <router-link
                :to="'/user/' + gotoPreviousUser"
                class="bg-indigo-600 rounded px-4 py-2 border border-transparent rounded-md text-white hover:bg-indigo-500">
                Goto Previous User
            </router-link>

            <div class="flex-grow" />

            <router-link
                :to="'/user/' + gotoNextUser"
                class="bg-indigo-600 rounded px-4 py-2 border border-transparent rounded-md text-white hover:bg-indigo-500">
                Goto Next User
            </router-link>
        </div>
    </div>
</template>

<script>
import LoadingBtn from '../components/Loadingbtn'
export default {
    data: function() {
        return {
            fetchErr: '',
            loading: false,
            user: {}
        }
    },
    components: {
        LoadingBtn
    },
    computed: {
        gotoNextUser: function() {
            return Number(this.$route.params.id) + 1
        },
        gotoPreviousUser: function() {
            return Number(this.$route.params.id) - 1
        }
    },
    created () {
        this.fetchUser()
    },
    methods: {
        fetchUser: function() {
            this.loading = true
            // Get user data from https://jsonplaceholder.typicode.com/users?id=1 (This will allow us to hit this url directly)
            fetch('https://jsonplaceholder.typicode.com/users?id=' + this.$route.params.id)
                .then(res => { return res.json()})
                .then(data => {
                    console.log(data)
                    this.loading = false
                    if (data.length === 0) {
                        return this.fetchErr = "This user doesn't exist"
                    }
                    this.fetchErr = ''
                    this.user = data[0]
                })
                .catch(() => {
                    console.log('CHEESE')
                    this.loading = false
                    this.fetchErr = "There was an error fetching the data"
                })
        }
    },
    watch: {
        // If we change the url directly in the address from say user/4 -> user/5, this makes no difference as the component is reloaded.
        // HOWEVER if say we have a link in the page going from say user/4 -> user/5 it will not run the created() function as we are already in this component. We can watch the route as this WILL update
        '$route': 'fetchUser'
    }
}
</script>

<style>

</style>