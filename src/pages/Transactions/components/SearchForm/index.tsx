import { MagnifyingGlass } from 'phosphor-react'
import { SearchFormContainer } from './styles'

export function SearchForm() {
  return (
    <SearchFormContainer action="submit">
      <input type="text" placeholder="Busque por transações" />
      <button>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}
