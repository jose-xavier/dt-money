import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['gray-900']};
  padding-top: 2.5rem;
  padding-bottom: 7.5rem;
`

export const HeaderContent = styled.header`
  max-width: 1120px;
  padding: 0 1.5rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NewTransitionButton = styled.button`
  height: 50px;
  padding: 0 1.25rem;
  border: 0;
  border-radius: 6px;
  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme['gray-100']};
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['green-700']};
    transition: background-color 0.2s;
  }
`
