<template>
    <div class="page-cart">
        <div class="column is-multiline">
            <div class="column is-12">
                <h1 class="title">Carrinho</h1>
            </div>

            <div class="column is-12 box">

                <table class="table is-fullwidth" v-if="cartTotalLength">
                    <thead>
                        <tr>
                            <th>Produto</th>
                            <th>Preço</th>
                            <th>Quantidade</th>
                            <th>Total</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        <CartItem
                            v-for="item in cart.items"
                            v-bind:key="item.product.id"
                            v-bind:initialItem="item"
                            v-on:removeFromCart="removeFromCart" />
                    </tbody>
                </table>
                <p v-else>Carrinho vazio...</p>

                <div class="column is-12 box">
                    <h2 class="subtitle">Sumário</h2>
                    <strong>R${{cartTotalPrice.toFixed(2)}}</strong>, {{cartTotalLength}} itens
                    <hr>
                    <router-link to="/cart/checkout" class="button is-dark">Finalizar Compra</router-link>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import CartItem from '@/components/CartItem.vue'
export default {
    name: 'Cart',
    components: {
        CartItem
    },
    data(){
        return{
            cart: {
                items: []
            }
        }
    },
    mounted(){
        this.cart = this.$store.state.cart
    },
    methods:{
        removeFromCart(item){
            this.cart.items = this.cart.items.filter(i => i.product.id !== item.product.id)
        }
    },
    computed: {
        cartTotalLength(){
            return this.cart.items.reduce((acumulador, valorAtual) => {
                return acumulador += valorAtual.quantity
            }, 0) //o zero eh um default value
        },
        cartTotalPrice(){
            return this.cart.items.reduce((acumulador, valorAtual)=>{
                return acumulador += valorAtual.product.price*valorAtual.quantity
            }, 0)
        },

    }
}

</script>
