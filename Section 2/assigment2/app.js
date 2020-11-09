const app = Vue.createApp({
  data() {
    return {
      output: "",
      confirmedInput: ""
    };
  },
  methods: {
    showAlert() {
      alert("Alert button pressed!");
    },
    setOutput(event) {
      this.output = event.target.value;
    },
    setConfirmedOutput(event) {
      this.confirmedInput = event.target.value;
    }
  }
});

app.mount("#assignment");
