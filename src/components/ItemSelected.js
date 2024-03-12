import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { initialState } from '../context/AppContext'
const ItemSelected = (props) => {
  const { dispatch, Currency, totalRemaining, budget, totalExpenses } =
    useContext(AppContext)
  const [name, setName] = useState('')
  const [itemBudget, setQuantity] = useState('')
  const [action, setAction] = useState('')

  const submitEvent = () => {
    const item = {
      name: name,
      budget: parseInt(itemBudget),
    }

    if (action === 'Reduce') {
      dispatch({
        type: 'REDUCE_BUDGET',
        payload: item,
      })
    } else {
      if (budget !== 20000) {
        if (totalRemaining < parseInt(itemBudget)) {
          alert(
            `Budget Exceeded. You still have ${totalRemaining} ${Currency} available.`
          )
          setQuantity(totalRemaining)
          return
        }
      } else if (budget === 20000 && budget < totalRemaining + itemBudget) {
        alert(
          `Budget Exceeded. ${
            parseInt(budget) - totalExpenses
          } ${Currency} remain.`
        )
        setQuantity(totalRemaining)
        return
      }

      dispatch({
        type: 'ADD_BUDGET',
        payload: item,
      })
    }
    setQuantity('')
  }

  return (
    <div className='row'>
      <div className='input-group mb-3 col'>
        <label
          className='input-group-text'
          htmlFor='inputGroupSelect01'
        >
          Departments
        </label>

        <select
          className='form-select'
          id='inputGroupSelect01'
          onChange={(event) => setName(event.target.value)}
        >
          <option defaultValue>Choose...</option>
          {initialState.expenses.map((item, i) => (
            <option
              key={i}
              value={item.name}
              name={item.name}
            >
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div
        className='input-group mb-3 col'
        style={{ marginLeft: '2rem' }}
      >
        <label
          className='input-group-text'
          htmlFor='inputGroupSelect02'
        >
          Allocation
        </label>
        <select
          className='form-select'
          id='inputGroupSelect02'
          onChange={(event) => setAction(event.target.value)}
        >
          <option
            defaultValue
            value='Add'
            name='Add'
          >
            Add
          </option>
          <option
            value='Reduce'
            name='Reduce'
          >
            Reduce
          </option>
        </select>
        <span
          className='eco'
          style={{ marginLeft: '2rem', marginRight: '8px' }}
        ></span>
      </div>
      <div className='input-group mb-3 col'>
        <span
          className='input-group-text'
          id='cost'
        >
          {Currency}
        </span>
        <input
          className='form-control'
          required='required'
          type='number'
          id='cost'
          value={itemBudget}
          style={{ size: 10 }}
          aria-label='cost'
          onChange={(event) => setQuantity(event.target.value)}
          step={10}
          min={0}
        ></input>
      </div>

      <div className='col'>
        <button
          className='btn btn-primary'
          onClick={submitEvent}
          style={{ marginLeft: '2rem' }}
          disabled={totalRemaining === 0 || name === '' || budget === 0}
        >
          Save
        </button>
      </div>
    </div>
  )
}

export default ItemSelected
