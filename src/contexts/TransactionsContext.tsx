import { createContext, ReactNode, useEffect, useState } from 'react'

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

interface TransactionContextType {
  transactions: Transaction[]
}

interface TransactionContextProviderProps {
  children: ReactNode
}

export const TransactionContext = createContext({} as TransactionContextType)

export function TransactionsProvider({
  children,
}: TransactionContextProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function loadTransaction() {
    const response = await fetch('http://localhost:3000/transactions')

    const data = await response.json()

    setTransactions(data)
  }

  useEffect(() => {
    loadTransaction()
  }, [])

  return (
    <TransactionContext.Provider value={{ transactions: [] }}>
      {children}
    </TransactionContext.Provider>
  )
}
