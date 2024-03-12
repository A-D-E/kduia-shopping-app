import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

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
      <label
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
      </select>
    </div>
  )
}

export default Currency
