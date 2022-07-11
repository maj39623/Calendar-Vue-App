<template>
    <div class="app">
        <div>
            <label for="event">Enter Your Event</label>
            <input type="text" id="event" v-model="enteredValue">
            <button @click="addEvent">Add Event</button>
            <button @click="saveEvents">Save Events</button>
        </div>
        <ul>
            <li v-for="event in events" :key="event" >{{event}}</li>
        </ul>
    </div>
</template>

<script>

export default {
  name: 'Event',
  data() {
    return {
        enteredValue: '',
        events: [],
        dayEvents: []
    }
  },
  methods: {
    addEvent() {
        this.events.push(this.enteredValue);
        this.enteredValue = '';
        alert("Event Added")
    },
    saveEvents() {
        this.dayEvents.push(this.events)
        this.events = []
        console.log(this.dayEvents)
    }
  }
  

}
</script>


<style>
.app {
  margin: 3rem auto;
  max-width: 40rem;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
label, input {
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
  border: 1px solid #ccc;
}
</style>
