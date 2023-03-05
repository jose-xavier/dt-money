import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { Sumary } from '../../components/Sumary'
import { SearchForm } from './components/SearchForm'

import { Highlight, TransactionsTable, TransactionsContainer } from './styles'

interface TransactionsProps {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

export function Transaction() {
  const [transactions, setTransactions] = useState<TransactionsProps[]>([])

  async function loadTransaction() {
    const response = await fetch('http://localhost:3000/transactions')

    const data = await response.json()

    setTransactions(data)
  }

  useEffect(() => {
    loadTransaction()
  }, [])

  return (
    <div>
      <Header />
      <Sumary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          {transactions.map((transaction) => (
            <tbody key={transaction.id}>
              <tr>
                <td width="50%">{transaction.description}</td>
                <Highlight variant={transaction.type}>
                  {transaction.price}
                </Highlight>
                <td>{transaction.category}</td>
              </tr>
            </tbody>
          ))}
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
