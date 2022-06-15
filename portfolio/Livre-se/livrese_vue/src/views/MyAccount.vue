<template>
    <div class="page-my-account">
        <div class="columns is-multiline">
            <div class="column is-12">
                <h1 class="title">Minha Conta</h1>
            </div>          

            <hr>

            <div class="column is-12">
                <h2 class="subtitle">Meus Pedidos</h2>

                <OrderSummary
                    v-for="order in orders"
                    v-bind:key="order.id"
                    v-bind:order="order" />
                
            </div>

            <hr>



            <myProducts />

            <hr>
            
            <div class="column is-12">
                <button @click="logout()" class="button is-danger">Sair</button>
            </div>

        </div>
    </div>
</template>

<script>
import axios from 'axios'

import OrderSummary from '@/components/OrderSummary.vue'
import myProducts from  '@/components/myProducts.vue'

export default {
    name: 'MyAccount',
    components: {
        OrderSummary,
        myProducts
    },
    data() {
        return {
            orders: [],
            myProduct: []
        }
    },
    mounted() {
        document.title = 'Minha Conta | Livre-se'

        this.getMyOrders()
    },
    methods: {
        logout() {
            axios.defaults.headers.common["Authorization"] = ""

            localStorage.removeItem("token")
            localStorage.removeItem("username")
            localStorage.removeItem("userid")

            this.$store.commit('removeToken')

            this.$router.push('/')
        },
        async getMyOrders() {
            this.$store.commit('setIsLoading', true)

            await axios
                .get('/api/v1/orders/')
                .then(response => {
                    this.orders = response.data
                })
                .catch(error => {
                    console.log(error)
                })

            this.$store.commit('setIsLoading', false)
        }
        
    }
}
</script>