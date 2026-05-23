// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import { QueryClientProvider } from '@tanstack/react-query'
// import './index.css'
// import App from './App.jsx'
// import { queryClient } from './lib/queryClient'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <QueryClientProvider client={queryClient}>
//       <App />
//     </QueryClientProvider>
//   </StrictMode>,
// )




import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClientProvider } from '@tanstack/react-query'
import './index.css'
import App from './App.jsx'
import { queryClient } from './lib/queryClient'
import smoothscroll from 'smoothscroll-polyfill'; // 👈 এই লাইন add করুন

// 👈 এই লাইন add করুন (polyfill initialize)
smoothscroll.polyfill();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
)