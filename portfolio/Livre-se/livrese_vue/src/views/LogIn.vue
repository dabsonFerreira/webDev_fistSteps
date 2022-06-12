<template>
    <div class="page-log-in">
        <div class="column is-4 is-offset-4">
            <h1 class="title">Login</h1>

            <form @submit.prevent="submitForm"><!--submitForm é uma função-->
                <div class="field">
                    <label>Nome de Usuário</label>
                    <div class="control">
                        <input type="text" class="input" v-model="username"><!--conectado ao return!!!-->
                    </div>
                </div>

                <div class="field">
                    <label>Senha</label>
                    <div class="control">
                        <input type="password" class="input" v-model="password">
                    </div>
                </div>


                <div class="notification is-danger" v-if="errors.length">
                    <p v-for="error in errors" v-bind:key="error">{{error}}</p>
                </div>

                <div class="field">
                    <div class="control">
                        <button class="button is-dark">Entrar</button>
                    </div>
                </div>

                <hr>

                Não é cadastrado?<router-link to="/sign-up">clique aqui!</router-link>

            </form> 

        </div>
    </div>
</template>


<script>
import axios from 'axios'

export default{
    name: 'LogIn',
    data(){
        return{
            username: '',
            password: '',
            errors: []
        }
    },
    mounted(){
        document.title = 'Log In | Livre-se'
    },
    methods: {
        async submitForm(){
            axios.defaults.headers.common["Authorization"] = ""

            localStorage.removeItem("token")

            const formData = {
                username: this.username,
                password: this.password
            }

            await axios
            .post("/api/v1/token/login/", formData)
            .then(response => {
                const token = response.data.auth_token

                this.$store.commit('setToken', token)
                
                axios.defaults.headers.common["Authorization"] = "Token " + token

                localStorage.setItem("token", token)

                const toPath = this.$route.query.to || '/cart'

                this.$router.push(toPath)
            })
            .catch(error => {
                if (error.response) {
                    for (const property in error.response.data) {
                        this.errors.push(`${property}: ${error.response.data[property]}`)
                    }
                } else {
                    this.errors.push('Algo deu errado. Por favor tente novamente')
                    
                    console.log(JSON.stringify(error))
                }
            })
        }         
    }
    
}

</script>