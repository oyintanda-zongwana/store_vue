import { createStore } from 'vuex'

export default createStore({
  // variables
  state: {
    // data is the property name and null is the value of the property
    // data: null
    education: null,
    aboutMe: null,
    workExp: null,
    projects: null,
    testimonials: null,
    skills: null
  },
  getters: {
    // they are use to get things 
  },
  mutations: {  
    
    // use to change/update the state
    // committing a mutation
    setEducation(state, payload) {
      state.education = payload
      },
    setAboutMe(state, payload) {
      state.aboutMe = payload
      },
    setWorkExp(state, payload) {
      state.workExp = payload
      },
    setProjects(state, payload) {
      state.projects = payload
      },
    setTestimonials(state, payload) {
      state.testimonials = payload
      },
    setSkills(state, payload) {
      state.skills = payload
      }
  },
  actions: {
    // run all async code 
    // dispatching
    async getData({commit}){
      let fetchedInfo = await fetch('https://oyintanda-zongwana.github.io/first_api/data/')
      let data = await fetchedInfo.json()
      let {aboutMe,projects,education,skills,workExp,testimonials} = data
      commit('setAboutMe', aboutMe),
      commit('setProjects', projects),
      commit('setEducation', education),
      commit('setSkills', skills),
      commit('setWorkExp', workExp),
      commit('setTestimonials', testimonials)
    },
  },
  modules: {
    // used if you want to separate your code to make it more readable 
  }
})
