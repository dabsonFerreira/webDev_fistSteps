<template>
  <div class="home">
    <!--<section class="hero is-medium is-dark mb-6">
      <div class="hero is-large has-bg-img">
        <p class="title mb-6">
          Bem-vindo à Livre-se
        </p>
        <p class="subtitle">
          Sempre há mais uma história a ser contada
        </p>
      </div>
    </section>-->


    <section class="hero is-medium is-dark has-bg-img">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">Bem-vindo à Livre-se</h1>
          <h2 class="subtitle">Sempre há mais uma história a ser contada</h2>
        </div>
      </div>
    </section>



    <div class="columns is-multiline">
      <div class="column is-12">
        <h2 class="is-size-2 has-text-centered">Últimos Produtos</h2>
      </div>

      <ProductBox
          v-for="product in latestProducts"
          v-bind:key="product.id"
          v-bind:product="product"/>
    </div>

  </div>
</template>

<script>
import axios from 'axios'

import ProductBox from '@/components/ProductBox'//@ é para a raiz do projeto vue

export default {
  name: 'Home',
  data(){
    return{
      latestProducts: []
    }
  },
  components: {
    ProductBox
  },
  mounted(){
    this.getLatestProducts()

    document.title = 'Home | Livre-se'
  },
  methods: {
    async getLatestProducts(){
        this.$store.commit('setIsLoading', true)
        await axios
        .get('/api/v1/latest-products/')
        .then(response =>{
            this.latestProducts = response.data
        })
        .catch(error => {
          console.log(error)
        })    
        
        this.$store.commit('setIsLoading', false)

    }
  }
}
</script>


<style>
  .has-bg-img { 
    background: url('logo_sombra.png') center center;
    background-color:antiquewhite;
    background-size: 700px;
    background-position:30pt;
    max-width: 100%;
    height: 10%;
}

.title{
  color: black;
}

.subtitle{
  color: black;
}

</style>