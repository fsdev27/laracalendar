import startOfMonth from 'date-fns/startOfMonth'
import lastDayOfMonth from 'date-fns/lastDayOfMonth'
import eachDayOfInterval from 'date-fns/eachDayOfInterval'
import format from 'date-fns/format'

// list all day of month
export const listOfDaysOfMonth = (payload) => {
  return eachDayOfInterval({
    start: startOfMonth(payload ? new Date(payload.startDate) : new Date()),
    end: lastDayOfMonth(payload ? new Date(payload.endDate) : new Date())
  }).map((item) => {
    return {
      dayOfMonth: format(item, 'dd'), // 01 - 31
      isoDayOfWeek: new Date(item).getUTCDay(), // 0 - 6
      localDayOfWeek: format(item, 'iii'), // Mon, Tue, Wed, ..., Su
      date: format(item, 'yyyy-MM-dd'), // 2019-12-11
      value: null
    }
  })
}

// get filter date by selected iso
export const getFilterIsoDateList = (start, end, selectedDays) => {
  const startDate = transformToNumber(start) // 1-31
  const endDate = transformToNumber(end) // 1-31
  return listOfDaysOfMonth({
    startDate: start,
    endDate: end
  }).filter((item) => {
    const itemDayOfMonth = Number(item.dayOfMonth)
    const isExist = itemDayOfMonth >= startDate
    && itemDayOfMonth <= endDate
    && selectedDays.includes(item.isoDayOfWeek)
    if (isExist) {
      return item
    }
  }).map((item) => {
    return {
      date: item.date
    }
  })
}

// update list all day of month
export const updateListOfDaysOfMonth = (payload) => {
  return listOfDaysOfMonth().map((item) => {
    payload.find((data) => {
      if (item.date === data.date) {
        item.value = data.value
      }
    })
    return item
  })
}

// format date
const transformToNumber = (value) => {
  return Number(format(new Date(value), 'dd')) // 1-31
}
