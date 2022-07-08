<template>
  <div class="container">
    <div class="calendar">
      <div class="month">
        <i class="fas fa-angle-left prev"></i>
        <div class="date">
            <h1>{{todayMonth}}</h1>
            <p>{{todayDay}}</p>
        </div>
        <i class="fas fa-angle-right next" @click="goNext()"></i>
      </div>
      <Dates 
      :days="lastDay"
      />
    </div>
  </div>
</template>

<script>
import Dates from "@/components/Dates.vue";

export default {
  name: 'Calendar',
  components: {
    Dates,
  },
  data() {
      return {
        date: new Date(),
        date2: new Date().setDate(1),
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
      goNext() {
        this.date.setMonth(this.date.getMonth() + 1);
        console.log("next",this.date)
        this.todayMonth = this.date
      }
    },
  computed: {
    todayMonth: function () {
      return this.months[this.date.getMonth()];
    },
    todayDay: function () {
      return new Date().toDateString();
    },
    lastDay: function () {
      return new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();
    }
  },
  mounted() {
    console.log(this.lastDay)
  }
}
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
</style>
