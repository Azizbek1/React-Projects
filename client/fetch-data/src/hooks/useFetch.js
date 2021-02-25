// https://github.com/ilyalesik/react-fetch-hook
import { useState, useEffect, useRef } from 'react'

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

export const useFetch = (url, options) => {
  const [isLoading, setIsLoading] = useState(true)
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  const cache = useRef({})

  useEffect(() => {
    if (!url) return

    async function fetchData() {
      await sleep(2000)

      if (cache.current[url]) {
        const data = cache.current[url]
        setResponse(data)
      } else {
        try {
          const response = await fetch(url, options)
          const json = await response.json()
          cache.current[url] = json
          setResponse(json)
        } catch (error) {
          setError(error)
        }
      }

      setIsLoading(false)
    }

    fetchData()
  }, [url, options])

  return { isLoading, response, error }
}
