<template>
    <div class="box mb-4">
        <h3 class="is-size-4 mb-6">Meus Produtos </h3>
        <!--seguir parecido com latestProducts-->
        <div>
            <button class="button is-dark">
                <router-link to="/add-products" class="button is-dark">Livar-se</router-link>
            </button>
        </div>
    </div>

</template>

<script>


export default {
    name: 'myProducts',  
    props: {
        myProducts: Object
    },
    
}
</script>
