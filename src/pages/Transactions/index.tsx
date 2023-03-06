import { useContext } from 'react'
import { Header } from '../../components/Header'
import { Sumary } from '../../components/Sumary'
import { SearchForm } from './components/SearchForm'

import { Highlight, TransactionsTable, TransactionsContainer } from './styles'
import { TransactionContext } from '../../contexts/TransactionsContext'

export function Transaction() {
  const { transactions } = useContext(TransactionContext)

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
