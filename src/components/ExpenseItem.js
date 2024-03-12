import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { FaTimesCircle, FaPlusCircle, FaMinusCircle } from 'react-icons/fa'

const ExpenseItem = (props) => {
  const { dispatch, Currency } = useContext(AppContext)

  const handleDeleteItem = () => {
    const item = {
      name: props.name,
    }

    dispatch({
      type: 'DELETE_ITEM',
      payload: item,
    })
  }

  const handleIncraseItem = () => {
    const item = {
      name: props.name,
    }

    dispatch({
      type: 'INCREASE_ITEM',
      payload: item,
    })
  }
  const handleDecreaseItem = () => {
    const item = {
      name: props.name,
    }

    dispatch({
      type: 'DECREASE_ITEM',
      payload: item,
    })
  }

  return (
    <tr>
      <td>{props.name}</td>
      <td>
        {Currency} {props.budget}
      </td>
      <td>
        <button
          className='btn'
          onClick={handleIncraseItem}
          title={`Increase ${props.name} by 10`}
          style={{ border: 'none' }}
        >
          <FaPlusCircle
            size='1.5rem'
            color='green'
          ></FaPlusCircle>
        </button>
      </td>
      <td>
        <button
          className='btn'
          onClick={handleDecreaseItem}
          title={`Decrease ${props.name} by 10`}
          disabled={props.budget === 0}
          style={{
            border: 'none',
            cursor: props.budget === 0 ? 'not-allowed' : 'pointer',
          }}
        >
          <FaMinusCircle
            size='1.5rem'
            color='red'
          ></FaMinusCircle>
        </button>
      </td>
      <td>
        <button
          className='btn'
          onClick={handleDeleteItem}
          title={`Delete budget for ${props.name}`}
          disabled={props.budget === 0}
          style={{
            border: 'none',
            cursor: props.budget === 0 ? 'not-allowed' : 'pointer',
          }}
        >
          <FaTimesCircle
            size='1.5rem'
            color='orange'
          ></FaTimesCircle>
        </button>
      </td>
    </tr>
  )
}

export default ExpenseItem
