import { useState, useEffect } from 'react'

let toastCount = 0
const toasts = new Map()

const listeners = new Set()

function subscribe(listener) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

function getToasts() {
  return Array.from(toasts.values())
}

function notify() {
  listeners.forEach(listener => listener())
}

export function toast({ title, description, variant = 'default', className }) {
  const id = ++toastCount
  const newToast = { id, title, description, variant, className }
  toasts.set(id, newToast)
  notify()
  
  setTimeout(() => {
    toasts.delete(id)
    notify()
  }, 5000)
  
  return id
}

export function useToast() {
  const [toastList, setToastList] = useState(getToasts)
  
  useEffect(() => {
    const unsubscribe = subscribe(() => {
      setToastList([...getToasts()])
    })
    return unsubscribe
  }, [])
  
  return {
    toast,
    toasts: toastList,
  }
}
