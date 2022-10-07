import { QueryClient, QueryClientProvider } from 'react-query'

import { Layout } from './layouts'
import { Wrapper } from './components'
import { Movies } from './pages'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 2,
      onError: error => {
        const message = ''
        return message
      },
    },
  },
})

const AppRoute = () => Movies as JSX.Element

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Layout>
      <Wrapper>
        <AppRoute />
      </Wrapper>
    </Layout>
  </QueryClientProvider>
)

export default App
