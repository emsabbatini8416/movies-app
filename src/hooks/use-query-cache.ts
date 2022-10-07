import { QueryKey, useQueryClient } from 'react-query'

const useQueryCache = <T = unknown>(queryKey: QueryKey) => {
  const queryClient = useQueryClient()

  const queryCache = queryClient.getQueryCache()

  const queryCacheValue = queryCache.find<T>(queryKey, { exact: true })

  return queryCacheValue
}

export default useQueryCache
