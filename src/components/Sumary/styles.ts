import styled, { css } from 'styled-components'

export const SumaryContainer = styled.section`
  max-width: 1120px;
  margin: -4rem auto 0;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 2rem;
`
interface SumaryCardProps {
  variant?: 'green'
}

export const SumaryCard = styled.div<SumaryCardProps>`
  padding: 2rem;
  background: ${(props) => props.theme['gray-600']};
  border-radius: 6px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme['gray-300']};
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

  ${(props) =>
    props.variant === 'green' &&
    css`
      background: ${(props) => props.theme['green-700']};
    `}
`
