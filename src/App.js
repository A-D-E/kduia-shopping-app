import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import { AppProvider } from './context/AppContext'
import BudgetValue from './components/BudgetValue'
import ExpenseList from './components/ExpenseList'
import ItemSelected from './components/ItemSelected'
import Currency from './components/Currency'

const App = () => {
  return (
    <AppProvider>
      <div className='container'>
        <h1 className='mt-3'>Company's Budget Allocation</h1>
        <div className='row mt-3'>
          <div className='col-10'>
            <BudgetValue />
          </div>
          <div className='col-auto'>
            <Currency />
          </div>
        </div>
        <h3 className='mt-3'>Allocation</h3>
        <div className='row '>
          <div className='col-sm'>
            <ExpenseList />
          </div>
        </div>
        <h3 className='mt-3'>Change allocation</h3>
        <div className='row mt-3'>
          <div className='col-sm'>
            <ItemSelected />
          </div>
        </div>
      </div>
    </AppProvider>
  )
}
export default App
