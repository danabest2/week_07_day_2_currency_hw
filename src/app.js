import Vue from 'vue';

document.addEventListener("DOMContentLoaded",
() => {
  new Vue({
    el: "#app",
    data: {
      currencies: [],
      input: 0,
      selectedCountry: null,
      inputEur: 0
    },
  mounted(){
    this.fetchRates()
  },
  computed: {
    converted: function(){
      return this.input * this.selectedCountry
    },
    convertedEur: function(){
      return this.inputEur / this.selectedCountry
    }
  },
  methods: {
    fetchRates: function(){
      const request = fetch("https://api.exchangeratesapi.io/latest")
      .then(response => response.json())
      .then(data => this.currencies = data)
    }
  },
})
})
