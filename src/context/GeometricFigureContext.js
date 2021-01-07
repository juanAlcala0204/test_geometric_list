import { createContext } from 'react'

import initialGeometricFigures from '../const/initialGeometricFigures'
import useGeometricFigures from '../hooks/useGeometricFigures';

const GeometricFigureContext = createContext();

const GeometricFigureProvider = ({children}) => {

    const { geometricFigures, addGeometricFigure, updateGeometricFigure, geometricFigureSelected, selectGeometricFigure, deleteGeometricFigure } = useGeometricFigures(initialGeometricFigures);
    
    return (
        <GeometricFigureContext.Provider value={{geometricFigures, addGeometricFigure, updateGeometricFigure, geometricFigureSelected, selectGeometricFigure, deleteGeometricFigure}}>
            { children }
        </GeometricFigureContext.Provider>
    ) 
}

export { GeometricFigureProvider }
export default GeometricFigureContext;