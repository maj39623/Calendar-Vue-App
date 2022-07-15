<template>
  <div class="app">
    <div>
      <label for="event">Enter Your Event</label>
      <input type="text" id="event" v-model="enteredValue" />
      <button @click="addEvent">Add Event</button>
      <button @click="clearEvents">Clear Events</button>
      <button @click="saveEvents">Save Events</button>
    </div>
    <ul>
      <li v-for="event in $store.state.storedEvents" :key="event">
        {{ event.event }}
      </li>
    </ul>
    <!-- <div>{{ this.$store.state.storedEvents }}</div> -->
  </div>

  <section id="log" class="container">
    <h2>Upcoming Events:</h2>
    <h3>
      <ul v-for="event in $store.state.savedEvents" :key="event">
        <li>{{ event.event }}</li>
      </ul>
    </h3>
  </section>
</template>

<script>
export default {
  name: "Event",
  props: ["index"],
  data() {
    return {
      enteredValue: "",
      events: [],
      dayEvents: [],
      filteredEvents: [],
    };
  },
  methods: {
    addEvent() {
      this.$store.state.storedEvents.push({
        index: this.index,
        event: this.enteredValue,
      });
      // this.$store.state.storedEvents.index.push(this.index);
      this.enteredValue = "";
      alert("Event Added");
    },
    clearEvents() {
      this.$store.state.storedEvents = [];
    },
    saveEvents() {
      this.$store.state.savedEvents = this.$store.state.storedEvents;
      console.log(this.$store.state.savedEvents);
    },
  },
};
</script>

<style>
.app {
  margin: 3rem auto;
  max-width: 40rem;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
label,
input {
  margin-bottom: 0.5rem;
  display: block;
  width: 100%;
}

label {
  font-weight: bold;
}
ul {
  list-style: none;
  margin: 1rem 0;
  padding: 0;
}
li {
  margin: 1rem 0;
  padding: 1rem;
  /* border: 1px solid #ccc; */
}
.container {
  text-align: center;
  padding: 0.5rem;
  margin: 1rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
}
section {
  width: 90%;
  max-width: 40rem;
  margin: auto;
}
</style>
