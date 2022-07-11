<template>
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
    <div class="daydiv" v-for="day in days" :key="day">
      <div @click="alert">{{ day }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dates",
  props: ["days"],
  data() {
    return {
      clicked: false,
    };
  },
  methods: {
    alert() {
      alert("Day Selected");
      this.clicked = !this.clicked;
      console.log(this.clicked);
    },
  },
  computed: {},
  mounted() {
    console.log(this.days, this.days);
  },
};
</script>

<style>
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
</style>
