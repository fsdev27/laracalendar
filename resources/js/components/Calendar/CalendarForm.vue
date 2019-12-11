<template>
  <form
    ref="form"
    @submit.prevent="onFormSubmit"
  >
    <div class="field">
      <label for="name">Event name</label>
      <input
        v-model="name"
        id="name"
        type="text"
        placeholder="Enter event name"
        autocomplete="off"
        required
      >
    </div>
    <!-- end event name -->
    <div class="fields">
      <div class="field">
        <label for="from">From</label>
        <input
          ref="from"
          v-model="startDate"
          id="from"
          type="text"
          placeholder="Starting date"
          required
        >
      </div>
      <!-- end starting date -->
      <div class="field">
        <label for="to">To</label>
        <input
          ref="to"
          v-model="endDate"
          id="to"
          type="text"
          placeholder="Ending date"
          required
        >
      </div>
      <!-- end ending date -->
    </div>
    <!-- end date picking -->
    <div class="fields-checkbox">
      <span
        v-for="(item, index) in availableDays"
        :key="index"
        class="checkbox"
      >
        <input
          @click="onSelectDay(index)"
          type="checkbox"
        >
        {{ item }}
      </span>
    </div>
    <!-- end available date -->
    <div class="field">
      <button
        :disabled="!isValid"
      >
        Save
      </button>
    </div>
  </form>
</template>

<script>
import flatpickr from 'flatpickr'
import lastDayOfMonth from 'date-fns/lastDayOfMonth'
import { getFilterIsoDateList } from '@/utilities/my-dates'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'CalendarForm',
  data: () => ({
    name: '',
    startDate: '',
    endDate: '',
    selectedDays: [],
    availableDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    endDateDisabled: []
  }),
  computed: {
    ...mapGetters({
      isSaved: 'calendar/isSaved'
    }),
    isValid () {
      return this.name !== ''
      && this.startDate !== ''
      && this.endDate !== ''
      && this.selectedDays.length > 0
    },
    schedules () {
      return this.isValid ? getFilterIsoDateList(this.startDate, this.endDate, this.selectedDays) : []
    }
  },
  watch: {
    startDate: function (value) {
      this.endDate = ''
      if (value === '') {
        flatpickr(this.$refs.from, {})
        flatpickr(this.$refs.to, {})
      } else {
        flatpickr(this.$refs.to, {
          enable: [{
            from: value,
            to: lastDayOfMonth(new Date(value))
          }]
        })
      }
    },
    name: function (value) {
      if (value.length > 0 && this.isSaved === true) {
        this.onUpdateSaved()
      }
    }
  },
  mounted () {
    flatpickr(this.$refs.from, {})
    flatpickr(this.$refs.to, {})
  },
  methods: {
    ...mapActions({
      onCreateEvent: 'calendar/onCreateEvent',
      onUpdateSaved: 'calendar/onUpdateSaved'
    }),
    onSelectDay (value) {
      const getSelectedDayIndex = this.selectedDays.findIndex(index => index === value)
      if (getSelectedDayIndex === -1) {
        this.selectedDays.push(value)
      } else {
        this.selectedDays.splice(getSelectedDayIndex, 1)
      }
    },
    onFormSubmit () {
      if (!this.isValid) {
        return
      }
      this.onCreateEvent({
        name: this.name,
        startDate: this.startDate,
        endDate: this.endDate,
        selectedDays: this.selectedDays,
        schedules: this.schedules
      })
        .then(() => {
          this.onUpdateSaved()
          this.name = ''
          this.startDate = ''
          this.endDate = ''
          this.selectedDays = []
          this.$refs.form.reset()
        })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/variables.scss";

form {
  max-width: 340px;
  display: grid;
  grid-gap: 1rem 0;
  label {
    font-size: 0.750rem;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
    cursor: pointer;
  }
  .field {
    display: block;
    label {
      display: block;
    }
  }
  .fields {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    .field {
      label {
        display: block;
      }
    }
  }
  input[type="text"] {
    width: 100%;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    border: 1px solid $color-primary;
    outline: none;
  }
  .fields-checkbox {
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto;
    .checkbox {
      display: grid;
      grid-template-columns: auto auto;
      align-items: center;
      font-size: 0.750rem;
    }
  }
  button {
    padding: 0.25rem 1.5rem;
    border-radius: 4px;
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    color: white;
    background-color: $color-primary;
    border: 1px solid $color-primary;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    &:hover {
      background-color: $color-primary-dark;
    }
    &:disabled {
      background-color: lightgray;
      color: white;
      border: 1px solid lightgray;
      cursor: not-allowed;
    }
  }
}
</style>
