
import { useContext } from 'react';
import GeometricFigureContext from '../../context/GeometricFigureContext';
import GeometricFigure from './GeometricFigure'
import ModalEditFigure from './ModalEditFigure'

export default function ListGeometricFigures() {

    const { geometricFigures } = useContext(GeometricFigureContext);

    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        {geometricFigures.map(item => (
                            <div className="col-md-4" key={item.id}>
                                <GeometricFigure geometricFigure={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <ModalEditFigure />
        </div>
    );
}