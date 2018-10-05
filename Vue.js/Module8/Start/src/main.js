import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    serverSelected(server) {
      this.$emit('serverClicked', server);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
