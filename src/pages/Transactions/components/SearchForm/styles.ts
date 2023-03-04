import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    padding: 1rem;
    background: ${(props) => props.theme['gray-900']};
    border: 0;
    border-radius: 6px;

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    background: transparent;
    color: ${(props) => props.theme['green-300']};
    font-weight: bold;
    height: 54px;
    padding: 0 2rem;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['green-300']};

    &:hover {
      background: ${(props) => props.theme['gray-500']};
      border: 1px solid ${(props) => props.theme['green-300']};
      color: ${(props) => props.theme.white};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }
  }
`
