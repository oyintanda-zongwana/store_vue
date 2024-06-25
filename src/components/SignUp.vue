<template>
    <div>
        <form @submit.prevent="formSubmit">
            <h1>Sign up form hehe</h1>
            <!-- using v-model to save data in properties -->
             <label>Email: </label>
             <input type="email" v-model="email" required>
             <label>Password: </label>
             <input type="password" v-model="password" required>

            <label>Role: </label>
            <select v-model="role">
                <option value="developer">Web Developer</option>
                <option value="designer">UI Designer</option>
                <option value="">select a role:</option>
            </select>
            <label>languages: </label>
            <input type="text" v-model="currentLanguage" @keydown="keyfinder" @keyup.enter.alt="addLanguage">
            <button type="submit">submit</button>
            <div v-for="lang,index in languages" :key="index+1">
                <p id="para" @click="deleteLang(lang)">
                    {{lang}}:{{ lang }}
                </p>
            </div>
            <div class="terms">
                <input type="checkbox" v-model="terms" required>
                <label>Accept Terms and Conditions</label> 
            </div>
            <h4>People wanted in your team:</h4>
            <div>
                <input type="checkbox" value="Mario" v-model="names">
                <label>Mario</label>
            </div>
            <div>
                <input type="checkbox" value="Maximus" v-model="names">
                <label>Maximus</label>
            </div>
            <div>
                <input type="checkbox" value="Marcus" v-model="names">
                <label>Marcus</label>
            </div>
        </form>
    </div>
    <!-- showing info -->
     <div v-if="showInfo">
        <h2>Info</h2>
        <p>Email: {{email}}</p>
        <p>Role: {{role}}</p>
        <p>Languages: {{ languages }}</p>
    </div>
</template>
<script>
export default {
    data(){
        return{
        email:'',
        password:'',
        role:'',
        // if you want default value to be checked then change Boolean to true
        terms:false,
        names:[],
        currentLanguage:'',
        languages:['something', 'nothing']
        }
    },
    methods: {
        formsubmit(){
            console.log('The page has refreshed');
            this.email;
            this.password;
            this.role;
            this.languages;
            this.terms
        },
        keyfinder(event){
            console.log(event);
        },
        deleteLang(lang){
            this.languages = this.languages.filter(l => l !== lang)
        }
    },
    
}
</script>
<style scoped>
    #parent{
        display: flex;
    }
    form{
        width: 20cap;
        padding: 5cap;
        text-align: center;
        margin-left: 25%;
        background-color: #092C4E;
        margin-left: auto;
        margin-right: auto;
    }
    input, select{
        background-color: #0B4580;
        border: 1px whitesmoke solid;
        border-radius: 5px;
        width: 250px;
        padding-bottom: 5px;
    }
    label{
       padding-top:5px ;
        width: 250px;
        text-align: left;
        font-size: small;
    }
    .terms{
       display: flex;
       width: 400px;
    }
    input[type='checkbox']{
        height: 16px;
        width: 16px;
        position: relative;
        top: 2px;
    }
    #para{
        width: 200px;
        height: 10px;
        box-sizing: content-box;
        border: white dashed 5px;
        margin: 0px;
        padding: 10px 10px 15px 5px;
        cursor: pointer;
    }
    #para:hover{
        background-color: aliceblue;
    }
</style>