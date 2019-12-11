<template>
  <main>
    <title-with-breadcrumbs />
    <!-- end title with breadcrumbs -->
    <div class="section">
      <div class="card">
        <div class="card-header">
          <div
            class="card-title"
            v-text="title"
          />
          <div class="status">
            <span
              :class="{ 'is-saved': isSaved }"
              v-text="`${isSaved ? 'Event has been saved.' : 'No change has been made'}`"
            />
          </div>
        </div>
        <div class="card-body">
          <div class="grid">
            <div class="grid__item">
              <calendar-form />
            </div>
            <!-- end calendar-form -->
            <div class="grid__item">
              <calendar />
            </div>
            <!-- end calendar -->
          </div>
          <!-- end grid -->
        </div>
        <!-- end card-body -->
      </div>
      <!-- end card -->
    </div>
    <!-- end section -->
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import TitleWithBreadcrumbs from '@/components/Utilities/TitleWithBreadcrumbs'
import CalendarForm from '@/components/Calendar/CalendarForm'
import Calendar from '@/components/Calendar/Calendar'
import format from 'date-fns/format'
export default {
  name: 'MyCalendar',
  components: {
    TitleWithBreadcrumbs,
    CalendarForm,
    Calendar
  },
  computed: {
    ...mapGetters({
      isSaved: 'calendar/isSaved'
    }),
    title () {
      return format(new Date(), 'MMMM, yyyy')
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  .card-header {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    padding: 0.875rem 1.5rem;
    border-bottom: 1px solid #dbdbdb;
    .card-title {
      font-size: 1.25rem;
      font-weight: 500;
    }
    .status {
      text-align: right;
      span {
        width: auto;
        display: block;
        background-color: hsl(348, 86%, 61%);
        color: white;
        padding: 0.25rem 1rem;
        border-radius: 4px;
        transition: all 0.3s ease-in-out;
        &.is-saved {
          background-color: hsl(217, 71%, 53%);
        }
      }
    }
  }
  .card-body {
    .grid {
      display: grid;
      grid-template-columns: auto 1fr;
      grid-gap: 1.5rem;
    }
  }
}
</style>
