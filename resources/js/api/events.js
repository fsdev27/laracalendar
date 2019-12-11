import axios from '@/utilities/axios'

// post to domain.com/api/event
export const postEvent = async (payload) => {
  const response = await axios.post('event', payload)
  if (response.status === 201) {
    return response.data.data
  }
}
