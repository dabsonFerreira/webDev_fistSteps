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
                            <select class="control" v-model="selected">                                    
                                <option v-for= "categoria in category"                                     
                                    :value="categoria.name">
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
                                <input type="text" class="input" v-model="slug">
                            </div>
                        </div>

                        <div class="field">
                            <label>Dê a sua visão do livro e faça quererem desfrutar da mesma experiência*</label>
                            <div class="control">
                                <textarea class="column is-12" v-model="description" placeholder="Escreva bastante"></textarea>
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
                                <input type="file" name="image" @change="img"><!--como buscar imagem?-->
                            </div>
                        </div>

                        <div class="field">
                            <label>Carregue uma imagem que será um pequeno retrato do livro na estante da Livre-se*</label>
                            <div class="control">
                                <input type="file" name="thumbnail" @change="thumb"><!--@change="onFileSelected" não sei se é pra usar isso-->       
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

                <button class="button is-success" @click="addProduct()">Adicionar livramento</button>
            
                
            </div>



        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import {csrftoken} from '../components/csrf/csrf_token'
    export default {
        name: 'userProduct',
        
        data(){
            return {
                category: [],
                selected: null,   
                name:null,       
                slug:null,       
                description:null,
                price:null,      
                image:null,      
                thumbnail:null,  
                date_added:null, 
                quantity: null,
                user: null,

            }
        },

        methods:{

            
            img(e){
                const fd = new FormData()
                fd.append('image', e.target.files[0])//não sei se da pra fazer append aki!
                this.image = fd
                //console.log(this.image)
                
            },
            
            thumb(e){
                const fd2 = new FormData()
                fd2.append('thumbnail', e.target.files[0])//não sei se da pra fazer append aki!
                this.thumbnail = fd2
                //console.log(this.thumbnail)
               
            },

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



            async addProduct(){
                //console.log(this.selected)
            //parece que tenho que adicionar token para n dar erro de autorizacao
                //console.log(this.image)

                var today = new Date();
                var dd = String(today.getDate()).padStart(2, '0');
                var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
                var yyyy = today.getFullYear();

                today = mm + '/' + dd + '/' + yyyy;
                this.date_added = today


                
                
                const dados_1 ={
                    "category":    this.selected,   
                    "name":        this.name,       
                    "slug":        this.slug,       
                    "description": this.description,
                    "price":       this.price,      
                    "image":       this.image,      
                    "thumbnail":   this.thumbnail,  
                    "date_added":  this.date_added, 
                    "quantity":    this.quantity,
                    "user":        this.user,
                    "likes":       0         
                }
                console.log(dados_1)
                
                await axios
                    .post('/api/v1/addProductFE/', dados_1)//tem que criar no rout
                    .then(response => {       
                        console.log(dados_1)                 
                        this.$router.push('/my-account')
                    }) 
                    .catch(error => {
                        console.log(error)
                    })

                this.$store.commit('setIsLoading', false) 
            }
        },
        mounted(){
            this.userProduct = this.$store.state.userProduct 
            this.user = localStorage.getItem('token')   

            document.title = 'Meus Produtos | Livre-se'
            this.getCategory()
            
            
        },
        
    }
</script>