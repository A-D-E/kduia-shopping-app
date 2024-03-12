import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { initialState } from '../context/AppContext'
const ItemSelected = (props) => {
  const { dispatch, Currency } = useContext(AppContext)

  const [name, setName] = useState('')
  const [budget, setQuantity] = useState('')
  const [action, setAction] = useState('')

  const submitEvent = () => {
    const item = {
      name: name,
      budget: parseInt(budget),
    }

    if (action === 'Reduce') {
      dispatch({
        type: 'REDUCE_BUDGET',
        payload: item,
      })
    } else {
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
          {/* <option
              value='Shirt'
              name='Shirt'
            >
              {' '}
              Shirt
            </option>
            <option
              value='Dress'
              name='Dress'
            >
              Dress
            </option>
            <option
              value='Jeans'
              name='Jeans'
            >
              Jeans
            </option>
            <option
              value='Dinner set'
              name='Dinner set'
            >
              Dinner set
            </option>
            <option
              value='Bags'
              name='Bags'
            >
              Bags
            </option> */}
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
          value={budget}
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
        >
          Save
        </button>
      </div>
    </div>
  )
}

export default ItemSelected
