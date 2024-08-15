import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increament, decreamet } from './Counterslice'

export default function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={() => dispatch(increament())}>Increament</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decreamet())}>decreament</button>
    </div>
  )
}
