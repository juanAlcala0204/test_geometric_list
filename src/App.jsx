
import Home from './components/Home/Home.jsx'

import { GeometricFigureProvider } from './context/GeometricFigureContext'
import { ModalProvider } from './context/ModalContext'

function App() {
  return (
    <div>
      <GeometricFigureProvider>
        <ModalProvider>
          <Home />
        </ModalProvider>
      </GeometricFigureProvider>
    </div>
  );
}

export default App;
