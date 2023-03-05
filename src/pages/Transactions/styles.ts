import styled from 'styled-components'

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 7.5rem;
  padding: 0 1.5rem;
`

interface HighlightProps {
  variant: 'income' | 'outcome'
}

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  td {
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme['gray-700']};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`

export const Highlight = styled.td<HighlightProps>`
  color: ${(props) =>
    props.variant === 'outcome'
      ? props.theme['red-300']
      : props.theme['green-300']};
`
