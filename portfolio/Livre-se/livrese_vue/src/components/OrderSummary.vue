<template>
    <div class="box mb-4">
        <h3 class="is-size-4 mb-6">Pedidos #{{ order.id }}</h3>

        <h4 class="is-size-5">Produtos</h4>

        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>Produto</th>
                    <th>Preço</th>
                    <th>Quantidade</th>
                    <th>Total</th>
                </tr>
            </thead>

            <tbody>
                <tr
                    v-for="item in order.items"
                    v-bind:key="item.product.id"
                >
                    <td>{{ item.product.name }}</td>
                    <td>R${{ item.product.price }}</td>
                    <td>{{ item.quantity }}</td>
                    <td>R${{ getItemTotal(item).toFixed(2) }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'OrderSummary',
    props: {
        order: Object
    },
    methods: {
        getItemTotal(item) {
            return item.quantity * item.product.price
        },
        orderTotalLength(order) {
            return order.items.reduce((acumulador, valorAtual) => {
                return acumulador += valorAtual.quantity
            }, 0)
        },
    }
}
</script>