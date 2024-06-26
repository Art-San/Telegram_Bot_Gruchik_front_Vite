import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'sonner'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { UserProvider } from './context/UserContext.tsx'

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <BrowserRouter>
          <App />
          <ReactQueryDevtools initialIsOpen={false} />
          <Toaster theme="dark" position="bottom-right" duration={1500} />
        </BrowserRouter>
      </UserProvider>
    </QueryClientProvider>
  </React.StrictMode>
)

// инструменты для диагностики React, такие как React Developer Tools
