import { createStore } from "vuex";

const store = createStore({
  state: {
    storedEvents: [],
    daySelected: false,
    dateSelected: [],
    savedEvents: new Map(),
  },
});

export default store;
