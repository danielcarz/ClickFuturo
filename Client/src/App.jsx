import { BrowserRouter } from 'react-router-dom';

import './Sass/App.scss'

//routes handler
import { RoutesHandler} from './Routes/RoutesHandler';

function App() {
  

  return (
    <BrowserRouter>

      <RoutesHandler></RoutesHandler>
      
    </BrowserRouter>
    
  )
}

export default App
