<template>
    <div class="page-my-account">
        <div class="columns is-multiline">
            <div class="column is-12">
                <h1 class="title">Minha Conta</h1>
            </div>          

            <hr>

            <div class="column is-12">
                <h2 class="subtitle">Meus Pedidos</h2>

                <!-- <OrderSummary
                    v-for="order in orders"
                    v-bind:key="order.id"
                    v-bind:order="order" /> -->
                
            </div>

            <hr>

            
           
            <div class="column is-12">
                <h2 class="subtitle">Meus Produtos</h2>
                <ProductBox
                    v-for = "products in userProduct"
                    v-bind:key="products.id"
                    v-bind:products="products"
                /> 
                <div class="column is-12">
                    <router-link to="/add-products" class="button is-success">Compartilhar experiências</router-link>
                </div>

            </div>
            
            

            <hr>

            
            <span class="column is-12">                
                <button @click="logout()" class="button is-dark">Sair</button>
            </span>

        </div>
    </div>
</template>

<script>
import axios from 'axios'

import OrderSummary from '@/components/OrderSummary.vue'
 import ProductBox from  '@/components/ProductBox.vue' 

export default {
    name: 'MyAccount',
    components: {
        OrderSummary,
        ProductBox 
    },
    data() {
        return {
            orders: [],
            userProduct: [] 
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
                
            /* await axios
                .get('/api/v1/marketplace/')
                .then(response => {
                    this.userProduct = response.data
                })
                .catch(error => {
                    console.log(error)
                })   */          

            this.$store.commit('setIsLoading', false)
        }
        
    }
}
</script>