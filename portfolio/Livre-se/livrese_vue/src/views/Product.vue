<template>
    <div class = "page-product">
        <div class="columns is-multiline">
            <div class="column is-9">
                <figure class="image mb-6">
                    <img v-bind:src="product.get_image">
                </figure>

                <h1 class="title">{{  product.name  }}</h1>

                <p>{{  product.description  }}</p>
                <!-- <p>{{  product.likes  }}</p> -->
            </div>

            <div class="column is-3">
                <h2 class="subtitle"><strong>Informação</strong></h2>

                <p><strong>Preço: R${{  product.price }}</strong></p><!--o controle n funciona aki why??-->
                <span>Quantidade: </span>
                <span>{{product.quantity}}</span>


                <div class="navbar-item">
                    <div class="buttons">
                    <template v-if="$store.state.isAuthenticated">
                        <div class="field has-addons mt-6">
                            <div class="control">
                                <input type="number" class="input" min="1" v-model="quantidade">
                            </div>
                            
                            <div class="control">
                                <a class="button is-success" v-on:click="controle++" @click="addToCart(quantidade, product.quantity,controle)" >Adicionar ao carrinho </a>
                            </div>
                        </div>
                    </template>

                    <template v-else>
                        <div class="field has-addons mt-6">
                            <router-link to="/log-in" class="button is-dark">Entre para comprar</router-link>
                        </div>
                    </template>

                    <!-- <router-link to="/cart" class="button is-success">
                        <span class="icon"><i class="fas fa-shopping-cart"></i></span>
                        <span>Carrinho ({{ cartTotalLength }})</span>
                    </router-link> -->
                    </div>
                </div>




                
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import {toast} from 'bulma-toast'

export default{
    name: 'Product',
    data(){
        return{
            product: {},
            quantity: 1,
            quantidade: 1,
            controle: 0
        }
    },
    mounted(){
        this.getProduct()
    },
    computed: {
        
    },  
    methods: {
        async getProduct(){
            this.$store.commit('setIsLoading', true)
            const category_slug = this.$route.params.category_slug
            const product_slug = this.$route.params.product_slug

            await axios.get(`api/v1/products/${category_slug}/${product_slug}`).then(response=>{
                this.product = response.data
                document.title = this.product.name + ' | Livre-se'
            })
            .catch(error=>{
                console.log(error)
            })

            this.$store.commit('setIsLoading', false)
        },

        addToCart(quantidade, quantidadeBD, controle){
            if(controle<=quantidadeBD && quantidade <= quantidadeBD){
                /* console.log("quantidade")
                console.log(quantidade)//tenho que enviar esse valor para o backend e reduzir a quantidade do produto
                
                console.log("quantidadebd")
                console.log(quantidadeBD)  */
                // if(isNaN(this.quantity)||this.quantity<1){
                //    this.quantity = 1
                //}
                if(this.quantidade<1|| isNaN(this.quantidade)){
                    this.quantidade=1
                }
                
               console.log('this.product')
                console.log(this.product) 
                if(quantidade<=quantidadeBD){
                    const item = {
                        product: this.product,//era product
                        quantity: this.quantidade //era this.quantity
                    } 
                    console.log("item")
                    console.log(item)
                
                    /* const item = {
                        produtoCliente: this.product,
                        quantidadeCliente: quantidadeCliente
                    }*/

                    this.$store.commit('addToCart', item) 

                    toast({
                        message: 'O produto foi adicionado ao carrinho',
                        type: 'is-success',
                        dismissible: true,
                        pauseOnHover: true,
                        duration: 2000,
                        position: 'bottom-right',
                    })
                }
                else{
                    toast({
                        message: 'O tamanho do seu sonho é maior que nosso estoque. Compraria uma quantidade menor?',
                        type: 'is-danger',
                        dismissible: true,
                        pauseOnHover: true,
                        duration: 2000,
                        position: 'top-center',
                    })
                }
            }
            else{
                toast({
                        message: 'O tamanho do seu sonho é maior que nosso estoque. Compraria uma quantidade menor?',
                        type: 'is-danger',
                        dismissible: true,
                        pauseOnHover: true,
                        duration: 2000,
                        position: 'top-center',
                    })
            }
        }

        

    }
}
</script>