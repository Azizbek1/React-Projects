export default {
  get: (key: string) => {
    const value: any = window.localStorage.getItem(key)
    return JSON.parse(value) || null
  },
  set: (key: string, value: string) => {
    window.localStorage.setItem(key, JSON.stringify(value))
  },
  remove: (key: string) => {
    window.localStorage.removeItem(key)
  }
}
