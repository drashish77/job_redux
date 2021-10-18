import { useEffect } from 'react'
import { useState, useRef } from 'react'

export let useClickOutside = (toggleHandler) => {
  const menuRef = useRef()
  useEffect(() => {
    let buttonHandler = (event) => {
      !menuRef.current.contains(event.target) && toggleHandler()
    }
    document.addEventListener('mousedown', buttonHandler)
    return () => {
      document.removeEventListener('mousedown', buttonHandler)
    }
  }, [toggleHandler])
  return menuRef
}

const useJobs = () => {
  const [jobs, setJobs] = useState([])
  const url = 'https://jobs-api.squareboat.info/api/v1/'
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url)
      if (!response) {
        const message = 'unable to fetch data ...'
        throw new Error(message)
      }
      const data = await response.json()
      setJobs(data)
    }
    fetchData()
  }, [])
  return jobs
}

export default useJobs
