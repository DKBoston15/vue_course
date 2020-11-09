const app = Vue.createApp({
  data() {
    return {
      name: "Dakota",
      age: 23,
      image:
        "https://images.unsplash.com/photo-1601758003839-512c0f4159e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
    };
  },
  methods: {
    randomNumber() {
      return Math.random();
    }
  }
});

app.mount("#assignment");
