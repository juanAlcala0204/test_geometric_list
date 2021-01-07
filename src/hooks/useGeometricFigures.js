
/** Import General Dependencies */
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

/**
 * Build the Custom Hook that have the Logic of the Geometric Figures and Principal States
 * @param {array} initialGeometricFigures Argument that have the base of the geometric figures list
 */
export default function useGeometricFigures (initialGeometricFigures) {
    const [geometricFigures, setGeometricFigures] = useState(initialGeometricFigures);

    const [geometricFigureSelected, setGeometricFigureSelected] = useState({
        title: '',
        imageUrl: '',
        description: '',
        tags: ''
    });

    /**
     * Function with the action of the add new Geometric Figure to the list.
     * @param {object} geometricFigureInfo Argument that give the object that the user will insert
     */
    const addGeometricFigure = (geometricFigureInfo) => {
        geometricFigureInfo.id = uuidv4();
        setGeometricFigures([
            ...geometricFigures,
            geometricFigureInfo
        ])
    }

    /**
     * Function with the action of the declare the state of the figure that was selected
     * @param {object} newGeometricFigureInfo Argument that give the info of the figure that was selected
     */
    const selectGeometricFigure = (newGeometricFigureInfo) => {
        const newData = {
            id: newGeometricFigureInfo.id,
            title: newGeometricFigureInfo.title,
            description: newGeometricFigureInfo.description,
            imageUrl: newGeometricFigureInfo.imageUrl,
            tags: newGeometricFigureInfo.tags
        }

        setGeometricFigureSelected({
            ...newData
        })
    }

    /**
     * Function with the action of the Delete some figure that the user was indicated
     * @param {object} figureSelected Argument that give the info of the figure that will be delete
     */
    const deleteGeometricFigure = (figureSelected) => {
        const geometricFigureFiltred = geometricFigures.filter(figure => figure.id !== figureSelected.id);
        setGeometricFigures(geometricFigureFiltred);
    }

    /**
     * Function with the action of the Update the info of the Figure
     * @param {number} id Argument that give the id of the figure that will be update
     * @param {object} updateFigure Argument that five the new info of the figure that will be update
     */
    const updateGeometricFigure = (id, updateFigure) => {
        const newDataFigures = geometricFigures.map(figure => ((figure.id === id) ? updateFigure : figure));
        setGeometricFigures(newDataFigures);
    }

    return {
        geometricFigures,
        addGeometricFigure,
        selectGeometricFigure,
        updateGeometricFigure,
        geometricFigureSelected,
        deleteGeometricFigure
    }

}
