import React, { useContext } from 'react'
import ExpenseItem from './ExpenseItem'
import { AppContext } from '../context/AppContext'

const ExpenseList = () => {
  const { expenses } = useContext(AppContext)

  return (
    <table className='table'>
      <thead className='thead-light'>
        <tr>
          <th scope='col'>Department</th>
          <th scope='col'>Allocated budget</th>
          <th scope='col'>Incrase by 10</th>
          <th scope='col'>Decrease by 10</th>
          <th scope='col'>Remove</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <ExpenseItem
            id={expense.id}
            key={expense.id}
            name={expense.name}
            budget={expense.budget}
          />
        ))}
      </tbody>
    </table>
  )
}

export default ExpenseList
