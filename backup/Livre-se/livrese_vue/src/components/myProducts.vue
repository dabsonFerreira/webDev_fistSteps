<template>
    <div class="box mb-4">
        <h3 class="is-size-4 mb-6">Meus Produtos </h3>
        <!--seguir parecido com latestProducts-->

        <ProductBox
          v-for="product in myProducts"
          v-bind:key="product.id"
          v-bind:product="product"/><!--myProducts = latestproducts? algo para retornar produtos do usuario-->
        <!--os produtos terão botão detalhe para poder editar ou remover!!!!!-->
        <div>
            <button class="button is-dark">
                <router-link to="/add-products" class="button is-dark">Livar-se</router-link>
            </button>
        </div>
    </div>

</template>

<script>
import ProductBox from '@/components/ProductBox'

export default {
    name: 'myProducts',  
    props: {
        myProducts: Object
    },
    components: {
    ProductBox
  },
    
}
</script>
