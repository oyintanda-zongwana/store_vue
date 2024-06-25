<template>
    <div>
        <div>
            Projects
            <div v-for="project in projectData()" :key="project.name">
                <h1>{{ project.name }}</h1>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        projectData() {
            return this.$store.state.projects
        }
    },
    computed: {
        // a computed getter
        getData(){
           return this.$store.dispatch('getData')
        }
    },
    mounted(){
        this.getData
    }
}
</script>
<style lang="">
    
</style>