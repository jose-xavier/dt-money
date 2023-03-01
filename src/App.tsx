import { ThemeProvider } from 'styled-components'
import { Transaction } from './pages/Transactions'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Transaction />
      <GlobalStyles />
    </ThemeProvider>
  )
}
