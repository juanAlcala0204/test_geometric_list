
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function useGeometricFigures (initialGeometricFigures) {
    const [geometricFigures, setGeometricFigures] = useState(initialGeometricFigures);

    const [geometricFigureSelected, setGeometricFigureSelected] = useState({
        title: '',
        imageUrl: '',
        description: '',
        tags: ''
    });

    const addGeometricFigure = (geometricFigureInfo) => {
        geometricFigureInfo.id = uuidv4();
        setGeometricFigures([
            ...geometricFigures,
            geometricFigureInfo
        ])
    }

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

    const deleteGeometricFigure = (figureSelected) => {
        const geometricFigureFiltred = geometricFigures.filter(figure => figure.id !== figureSelected.id);
        setGeometricFigures(geometricFigureFiltred);
    }

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
