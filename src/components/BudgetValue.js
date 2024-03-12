import React, { useContext, useState } from 'react'
import { AppContext, initialState } from '../context/AppContext'

const BudgetValue = () => {
  const { expenses, Currency, dispatch } = useContext(AppContext)
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.budget)
  }, 0)

  const [budget, setBudget] = useState(initialState.Budget)
  const handleBudget = (event) => {
    setBudget(parseInt(event.target.value))
    if (event.target.value < totalExpenses) {
      return alert('You cann not reduce the budget value than the spending')
    }
    dispatch({
      type: 'ADD_TOTAL_BUDGET',
      payload: parseInt(event.target.value),
    })
  }
  return (
    <div className='row justify-content-between'>
      <div className='col'>
        <div className='alert alert-success'>
          <div className='input-group'>
            <label htmlFor='Budget'>Budget: {Currency}</label>
            <input
              style={{
                cursor: 'pointer',
                background: 'white',
                margin: '0 10px',
                padding: '0 10px',
                border: 'none',
              }}
              className='form-control'
              id='Budget'
              type='number'
              value={budget}
              onChange={handleBudget}
              min={0}
              max={20000}
              step={10}
            />
          </div>
        </div>
      </div>
      <div className='col'>
        <div className='alert alert-info'>
          <span>
            Remaining: {Currency}
            {budget - totalExpenses}
          </span>
        </div>
      </div>
      <div className='col'>
        <div className='alert alert-danger'>
          <span>
            Spent so far: {Currency}
            {totalExpenses}
          </span>
        </div>
      </div>
    </div>
  )
}

export default BudgetValue
