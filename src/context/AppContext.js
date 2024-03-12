import React, { createContext, useReducer } from 'react'

// 5. The reducer - this is used to update the state, based on the action
export const AppReducer = (state, action) => {
  let new_expenses

  switch (action.type) {
    case 'ADD_TOTAL_BUDGET':
      return {
        ...state,
        Budget: +action.payload,
      }
    case 'ADD_BUDGET':
      new_expenses = state.expenses.map((expense) =>
        expense.name === action.payload.name
          ? { ...expense, budget: expense.budget + action.payload.budget }
          : expense
      )
      return {
        ...state,
        expenses: new_expenses,
      }

    case 'REDUCE_BUDGET':
      new_expenses = state.expenses.map((expense) => {
        if (expense.name === action.payload.name) {
          return {
            ...expense,
            budget: Math.max(0, expense.budget - action.payload.budget),
          }
        }
        return expense
      })
      return {
        ...state,
        expenses: new_expenses,
      }

    case 'INCREASE_ITEM':
      new_expenses = state.expenses.map((expense) =>
        expense.name === action.payload.name
          ? { ...expense, budget: expense.budget + 10 }
          : expense
      )
      return {
        ...state,
        expenses: new_expenses,
      }

    case 'DECREASE_ITEM':
      new_expenses = state.expenses.map((expense) =>
        expense.name === action.payload.name
          ? { ...expense, budget: Math.max(0, expense.budget - 10) }
          : expense
      )
      return {
        ...state,
        expenses: new_expenses,
      }

    case 'DELETE_ITEM':
      new_expenses = state.expenses.map((expense) =>
        expense.name === action.payload.name
          ? { ...expense, budget: 0 }
          : expense
      )
      return {
        ...state,
        expenses: new_expenses,
      }

    case 'CHG_LOCATION':
      return {
        ...state,
        Currency: action.payload,
      }

    default:
      return state
  }
}

// 1. Sets the initial state when the app loads
export const initialState = {
  expenses: [
    { id: 'Marketing', name: 'Marketing', budget: 50 },
    { id: 'Finance', name: 'Finance', budget: 300 },
    { id: 'Sales', name: 'Sales', budget: 70 },
    { id: 'IT', name: 'IT', budget: 500 },
    {
      id: 'Human Resource',
      name: 'Human Resource',
      budget: 40,
    },
  ],
  Currency: '€',
  Budget: 2000,
  TotalExpense: 0,
}

// 2. Creates the context this is the thing our components import and use to get the state
export const AppContext = createContext()

// 3. Provider component - wraps the components we want to give access to the state
// Accepts the children, which are the nested(wrapped) components
export const AppProvider = (props) => {
  // 4. Sets up the app state. takes a reducer, and an initial state
  const [state, dispatch] = useReducer(AppReducer, initialState)

  const totalExpenses = state.expenses.reduce((total, item) => {
    return (total = total + item.budget)
  }, 0)
  state.TotalExpense = totalExpenses
  return (
    <AppContext.Provider
      value={{
        expenses: state.expenses,
        totalExpenses,
        totalRemaining: state.Budget - totalExpenses,
        budget: state.Budget,
        dispatch,
        Currency: state.Currency,
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}
