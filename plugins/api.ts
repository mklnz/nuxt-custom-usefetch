export default defineNuxtPlugin((nuxtApp) => {
  const api = $fetch.create({
    baseURL: 'http://localhost:3001/site',
  })

  return {
    provide: { api }
  }
})
