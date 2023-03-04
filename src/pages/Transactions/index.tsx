import { Header } from '../../components/Header'
import { Sumary } from '../../components/Sumary'
import { SearchForm } from './components/SearchForm'

import { Highlight, TransactionsTable, TransactionsContainer } from './styles'

export function Transaction() {
  return (
    <div>
      <Header />
      <Sumary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <Highlight variant="income">R$ 12.200,00</Highlight>
              <td>Venda</td>
            </tr>
            <tr>
              <td width="50%">Aluguel do apartamento</td>
              <Highlight variant="expense">-R$ 1200,00</Highlight>
              <td>casa</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
