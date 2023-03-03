import { SumaryCard, SumaryContainer } from './styles'
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'

export function Sumary() {
  return (
    <SumaryContainer>
      <SumaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00B37E" />
        </header>
        <strong>R$ 17.400,00</strong>
      </SumaryCard>
      <SumaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#F75A68" />
        </header>
        <strong>R$ 12.259,00</strong>
      </SumaryCard>
      <SumaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#FFFFFF" />
        </header>
        <strong>R$ 17.400,00</strong>
      </SumaryCard>
    </SumaryContainer>
  )
}
