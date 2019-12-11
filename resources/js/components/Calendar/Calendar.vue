<template>
  <div class="calendar">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="day"
      :class="{ 'is-added': item.value }"
    >
      <p
        class="date"
        v-text="`${item.dayOfMonth} ${item.localDayOfWeek}`"
      />
      <div
        v-if="item.value"
        class="event-value"
        v-text="item.value"
      />
      <div
        v-else
        class="event-value no"
      >
        Available
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Calendar',
  computed: {
    ...mapGetters({
      items: 'calendar/listOfAvailableDay'
    })
  }
}
</script>

<style lang="scss" scoped>
@import "~/variables.scss";

.calendar {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
  .day {
    display: flex;
    flex-direction: column;
    border: 1px solid hsla(0, 0%, 0%, 0.45);
    min-height: 4rem;
    padding: 1rem;
    text-align: center;
    transition: all 0.3s ease-in-out;
    opacity: 0.3;
    &.is-added {
      opacity: 1;
    }
    .date {
      margin-bottom: 0.750rem;
    }
    .event-value {
      background-color: hsl(141, 53%, 53%);
      padding: 0.5rem 1rem;
      border-radius: 4px;
      color: white;
      &.no {
        background-color: lightgrey;
        color: black;
      }
    }
  }
}
</style>
