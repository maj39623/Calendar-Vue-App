import { createStore } from "vuex";

const store = createStore({
  state: {
    storedEvents: [],
    daySelected: false,
    dateSelected: [],
  },
});

export default store;
