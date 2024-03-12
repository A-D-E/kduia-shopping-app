import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const cur = [
  {
    name: '€ Euro',
    value: '€',
  },
  {
    name: '$ Dollar',
    value: '$',
  },
  {
    name: '£ Pound',
    value: '£',
  },
  {
    name: '₹ Ruppee',
    value: '₹',
  },
]

const Currency = () => {
  const { dispatch } = useContext(AppContext)

  const changeCurrency = (val) => {
    dispatch({
      type: 'CHG_LOCATION',
      payload: val,
    })
  }

  return (
    <div className='input-group mb-3 alert alert-primary'>
      <button
        className='btn btn-outline-secondary dropdown-toggle'
        type='button'
        data-bs-toggle='dropdown'
        aria-expanded='false'
        style={{
          cursor: 'pointer',
          background: 'transparent',
          margin: 0,
          padding: '0 10px',
          border: 'none',
        }}
      >
        Currency
      </button>
      <ul className='dropdown-menu dropdown-menu-end'>
        {cur.map((item, index) => (
          <li key={index}>
            <button
              className='dropdown-item'
              onClick={() => changeCurrency(item.value)}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
      {/* <label
        className='input-group-text'
        htmlFor='Currency'
        style={{
          cursor: 'pointer',
          background: 'transparent',
          margin: 0,
          padding: 0,
          border: 'none',
        }}
      >
        Currency
      </label>
      <select
        className='form-control primary'
        name='Currency'
        id='Currency'
        onChange={(event) => changeCurrency(event.target.value)}
        style={{
          cursor: 'pointer',
          background: 'transparent',
          margin: 0,
          padding: '0 10px',
          border: 'none',
        }}
      >
        <option value='€'>€ Euro</option>
        <option value='£'>£ Pound</option>
        <option value='₹'>₹ Ruppee</option>
        <option value='$'>$ Dollar</option>
      </select> */}
    </div>
  )
}

export default Currency
