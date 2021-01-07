/** Import Components */
import Home from './components/Home/Home.jsx'

/** Import General Context */
import { GeometricFigureProvider } from './context/GeometricFigureContext'
import { ModalProvider } from './context/ModalContext'

/**
 * Build of the Principal Component in the APP
 */
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

/** Export of the Component App */
export default App;
