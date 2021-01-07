/** Import General Dependecies */
import { createContext } from 'react'

/** Import Base of the Geometric Figures List */
import initialGeometricFigures from '../const/initialGeometricFigures'

/** Import Custom Hook */
import useGeometricFigures from '../hooks/useGeometricFigures';

const GeometricFigureContext = createContext();

/**
 * Build Provider of the Modal Context
 * @param {*} children Argument that have the components into of the this context
 */
const GeometricFigureProvider = ({children}) => {

    const { geometricFigures, addGeometricFigure, updateGeometricFigure, geometricFigureSelected, selectGeometricFigure, deleteGeometricFigure } = useGeometricFigures(initialGeometricFigures);
    
    return (
        <GeometricFigureContext.Provider value={{geometricFigures, addGeometricFigure, updateGeometricFigure, geometricFigureSelected, selectGeometricFigure, deleteGeometricFigure}}>
            { children }
        </GeometricFigureContext.Provider>
    ) 
}

/** Exports */
export { GeometricFigureProvider }
export default GeometricFigureContext;