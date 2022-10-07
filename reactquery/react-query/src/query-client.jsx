import {
    QueryClient
  } from '@tanstack/react-query'
  
  export const client = new QueryClient({
    defaultOptions:{
      queries:{
        staleTime:2000,
        refetchInterval:2000
      }
    }
  })