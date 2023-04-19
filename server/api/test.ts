export default defineEventHandler(async event => {
  return { alive: true, now: new Date() }
})
