<template>
    <div class="page-success">
        <div class="columns is-multiline">
            <div class="column is-12">
                <h1 class="title">Obrigado!</h1>

                <p>Seu pedido será processado em 48h!</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Success',
    mounted() {
        document.title = 'Realizado! | Livre-se'
    },
}
</script>