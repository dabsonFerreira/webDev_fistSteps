<template>
    <div class="add-products">
        <div class="columns is-multiline">
            <div class="column is-12">
                <h1 class="title">Adicionar um Produto</h1>
            </div>


            <div class="column is-12 box">
            

                <p class="has-text-grey mb-4">* Campo Obrigatório</p>

                <div class="columns is-multiline">
                    <div class="column is-6">
                        <div class="field">
                            <label>Categoria do Livro<!--precisa buscar as possibilidades no db-->*</label>
                            <select class="control">                                    
                                <option v-for= "categoria in category" 
                                    :key="categoria.id"
                                    value="categoria.name">
                                        {{categoria.name}}
                                </option>
                            </select>
                        </div>

                        <div class="field">
                            <label>Nome do Livro:*</label>
                            <div class="control">
                                <input type="text" class="input" v-model="name">
                            </div>
                        </div>

                        <div class="field">
                            <label>Nome com '-' sem espaço*</label>
                            <div class="control">
                                <input type="email" class="input" v-model="slug">
                            </div>
                        </div>

                        <div class="field">
                            <label>Dê a sua visão do livro e faça quererem desfrutar da mesma experiência*</label>
                            <div class="control">
                                <textarea class="column is-12" v-model="message" placeholder="Escreva bastante"></textarea>
                            </div>
                        </div>
                    </div>

                    <div class="column is-6 box">

                        <div class="field">
                            <label>Quanto vale dessa experiência?*</label>
                            <div class="control">
                                <input type="number"  v-model="price">
                            </div>
                        </div>

                        <div class="field">
                            <label>Carregue imagens que pintem o quadro de suas palavras:*</label>
                            <div class="control">
                                <input type="file" v-on="image"><!--como buscar imagem?-->
                            </div>
                        </div>

                        <div class="field">
                            <label>Carregue uma imagem que será um pequeno retrato do livro na estante da Livre-se*</label>
                            <div class="control">
                                <input type="file" v-on="thumbnail"><!--@change="onFileSelected" não sei se é pra usar isso-->       
                                <!-- <input type="text" class="input" v-model="thumbnail"> -->
                            </div>
                        </div>

                        <div class="field">
                            <label>Quantos exemplares dessa raridade você planeja disponibilizar?*</label>
                            <div class="control">
                                <input type="number"  v-model="quantity">
                            </div>
                        </div>
                    </div>
                    
                </div>

                <button class="button is-success" @click="addProduct">Adicionar livramento</button>
            
                
            </div>



        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'AddProducts',
        data(){
            return {
                category: [],
                //bdCategory: null,   
                name:null,       
                slug:null,       
                description:null,
                price:null,      
                image:null,      
                thumbnail:null,  
                date_added:null, 
                quantity: null
            }
        },

        methods:{
            async getCategory() {//tentativa de ler bd de produtos para pegar categoria
                this.$store.commit('setIsLoading', true)

                await axios
                    .get('/api/v1/categories/')
                    .then(response => {
                        this.category = response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })

                this.$store.commit('setIsLoading', false)
            },

            async addProduct(event){

                this.image = event.target.files[0]
                //n sei se deve ser feito aki o proximo passo
                const fd = new FormData()
                fd.append('image', this.image, this.image.name)//não sei se da pra fazer append aki!
                this.thumbnail = event.target.files[0]
                //n sei se deve ser feito aki o proximo passo
                const fd2 = new FormData()
                fd2.append('thumbnail', this.thumbnail, this.thumbnail.name)//não sei se da pra fazer append aki!

                event.preventDefault()
                // console.log('product iserted')
                const data = {
                    category:    this.category,   
                    name:        this.name,       
                    slug:        this.slug,       
                    description: this.description,
                    price:       this.price,      
                    //image:       this.image,      
                    image:       this.fd,      
                    //thumbnail:   this.thumbnail,  
                    thumbnail:   this.fd2,  
                    date_added:  this.date_added, 
                    quantity:    this.quantity,
                    status: "solicitado"
                }

                //console.log(data)
                const dataJson = JSON.stringify(data)//para fazer a comun. com o BE precisa de JSON
                
                await axios
                .post('/api/v1/addProductFE/', data)//tem que criar no rout
                /* .then(response => {
                    this.$store.commit('clearCart')
                    this.$router.push('/cart/success')
                }) */
                .catch(error => {
                    this.errors.push('Algo deu errado. Por favor tente novamente!')

                    console.log(error)
                })

                this.$store.commit('setIsLoading', false)
            }
        },
        mounted(){
            this.getCategory()
            
        },
        
    }
</script>