<template>
  <div class="container">
    <div class="calendar">
      <div class="month">
        <i
          class="fas fa-angle-left prev"
          @click="
            goPrev();
            newLastDayMethod();
          "
        ></i>
        <div class="date">
          <h1>{{ newMonth }}, {{ newYear }}</h1>
          <p>{{ todayDay }}</p>
        </div>
        <i
          class="fas fa-angle-right next"
          @click="
            goNext();
            newLastDayMethod();
          "
        ></i>
      </div>
      <div class="weekdays">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tues</div>
        <div>Wens</div>
        <div>Thurs</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>
      <div class="days">
        <div class="daydiv" v-for="(day, index) in lastDay" :key="day">
          <div
            @click="
              alert(index);
              filtered();
            "
          >
            {{ day }}
          </div>
          <span v-if="$store.state.savedEvents.index === activeItem">
            <li
              v-for="event in $store.state.savedEvents"
              :key="event"
              class="eventinfo"
            >
              {{ event.event }}
            </li>
          </span>
        </div>
      </div>
    </div>
    <Event v-if="$store.state.daySelected" :index="activeItem" />
  </div>
</template>

<script>
import Event from "./Event.vue";

export default {
  name: "Calendar",
  components: {
    Event,
  },
  data() {
    return {
      filteredEvents: [],
      //filter through all saved events in store and only show events in upcoming events that match the active item index
      clicked: false,
      activeItem: "",
      newMonth: "",
      firstDay: "",
      newYear: "",
      lastDay: "",
      prevLastDay: "",
      firstDayIndex: "",
      newLastDay: "1",
      date: new Date(),
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      day: [],
    };
  },
  methods: {
    alert(idx) {
      alert("Day Selected");
      this.clicked = !this.clicked;
      this.activeItem = idx;
      this.$store.state.daySelected = !this.$store.state.daySelected;
      this.$store.state.dateSelected = this.index;
    },
    goNext() {
      this.newMonth = this.date.setMonth(this.date.getMonth() + 1);
      this.newYear = this.date.getFullYear();
      console.log("next", this.date);
      this.newMonth = this.months[this.date.getMonth()];
      console.log(`new month: ${this.newMonth}`);
    },
    goPrev() {
      this.newMonth = this.date.setMonth(this.date.getMonth() - 1);
      console.log("prev,", this.date);
      this.newMonth = this.months[this.date.getMonth()];
    },
    monthMethod() {
      this.newMonth = this.months[this.date.getMonth()];
    },
    yearMethod() {
      this.newYear = this.date.getFullYear();
    },
    lastDayMethod() {
      this.lastDay = new Date(
        this.date.getFullYear(),
        this.date.getMonth() + 1,
        0
      ).getDate();
    },
    newLastDayMethod() {
      this.newLastDay = new Date(
        this.date.getFullYear(),
        this.date.getMonth() + 1,
        0
      ).getDate();
      console.log(`new day: ${this.newLastDay}`);
      this.lastDay = this.newLastDay;
    },
    prevLastDayMethod() {
      this.prevLastDay = new Date(
        this.date.getFullYear(),
        this.date.getMonth(),
        0
      ).getDate();
    },
    firstDayIndexMethod() {
      this.firstDayIndex = this.date.getDay();
    },
    addEvent() {
      this.events.push(this.enteredValue);
      this.enteredValue = "";
      alert("Event Added");
    },
    filtered() {
      const newFilter = this.$store.state.savedEvents.filter(
        (event) => event.event === "test"
      );
      this.filteredEvents = newFilter;
      console.log(this.filteredEvents);
    },
  },
  computed: {
    // todayMonth: function () {
    //   return this.months[this.date.getMonth()];
    // },
    todayDay: function () {
      return new Date().toDateString();
    },
    firstDay1: function () {
      return new Date(this.year, this.month).getDay();
    },
    // lastDay: function () {
    //   return new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();
    // }
  },
  mounted() {
    console.log(this.lastDay);
    this.yearMethod();
    this.monthMethod();
    this.lastDayMethod();
    this.prevLastDayMethod();
    this.firstDayIndexMethod();
    this.firstDay1;
    console.log(`this day ${this.firstDay1}`);
  },
};
</script>

<style>
.container {
  width: 100%;
  height: 100vh;
  background-color: #12121f;
  color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}

.calendar {
  width: 45rem;
  height: 52rem;
  background-color: #222227;
  box-shadow: 0 0.5rem 3rem rgba(0, 0, 0, 0.4);
}

.month {
  width: 100%;
  height: 12rem;
  background-color: #162e7e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  text-align: center;
  text-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.5);
}
.month i {
  font-size: 2.5rem;
  cursor: pointer;
}

.month h1 {
  font-size: 3rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  margin-bottom: 1rem;
}

.month p {
  font-size: 1.6rem;
}
.weekdays {
  width: 100%;
  height: 5rem;
  padding: 0 0.4rem;
  display: flex;
  align-items: center;
}

.weekdays div {
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 0.1rem;
  width: calc(44.2rem / 7);
  display: flex;
  justify-content: center;
  align-items: center;
  text-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.5);
}
.days {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 0.2rem;
}

.daydiv div {
  font-size: 1.4rem;
  margin: 0.3rem;
  width: calc(40.2rem / 7);
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.5);
  transition: background-color 0.2s;
}

.daydiv div:hover:not(.today) {
  background-color: #262626;
  border: 0.2rem solid #777;
  cursor: pointer;
}
.today {
  background-color: #167e56;
}
.eventinfo {
  list-style: none;
  padding: 0;
}
</style>
