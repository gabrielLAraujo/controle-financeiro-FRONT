import { QueryClient, QueryClientProvider } from 'react-query';
import { RegisterAccount } from './components/RegisterAccount';
import {ThemeProvider} from '@mui/material';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom';
import { LoginOrRegister } from './components/loginOrRegister/loginOrRegister';
import Navbar from './components/Navbar';

const router = createBrowserRouter(
  [
  {
    path:'/',
    element:<LoginOrRegister></LoginOrRegister>
  },
  {
    path:'/account',
    element:<RegisterAccount/>
  } 
]);

function App() {
  const queryClient = new QueryClient();

  return (
    <div>
      <Navbar/>
      <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
      </QueryClientProvider>
      </div>
  );
}

export default App;
