import axios from 'axios'

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */
export default axios.create({
  baseURL: process.env.MIX_APP_URL ? `${process.env.MIX_APP_URL}/api/` : 'http://localhost/api',
  headers: {
    common: {
      'X-Requested-With': 'XMLHttpRequest'
    }
  }
})
