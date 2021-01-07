
import { useContext } from 'react'
import GeometricFigureContext from '../../context/GeometricFigureContext';
import ModalContext from '../../context/ModalContext';

export default function GeometricFigure({ geometricFigure }) {

    const { openModal } = useContext(ModalContext);
    const { selectGeometricFigure, deleteGeometricFigure } = useContext(GeometricFigureContext);

    const imgStyles = {
        height: '200px',
        objectFit: 'cover'
    }

    const updateAction = (figureSelected) => {
        selectGeometricFigure(figureSelected);
        openModal('edit')
    }

    const deleteAction = (figure) => {
        console.log(figure);
        deleteGeometricFigure(figure);
    }

    return (
        <div>
            <div className="card" style={{ marginTop: '20px' }}>
                <div className="card-header bg-dark border-bottom-0">
                    <div className="row">
                        <div className="col-md-2">
                            <button className="btn btn-warning" onClick={()=> updateAction(geometricFigure)}>
                                <span aria-hidden="true"><i className="fas fa-edit"></i></span>
                            </button>
                        </div>
                        <div className="col-md-7"></div>
                        <div className="col-md-3">
                            <button className="btn btn-danger" onClick={() => deleteAction(geometricFigure)}>
                                <span aria-hidden="true"><i className="fas fa-trash-alt"></i></span>
                            </button>
                        </div>
                    </div>
                </div>
                <img
                    src={geometricFigure.imageUrl}
                    alt={geometricFigure.title}
                    className="card-img-top"
                    style={imgStyles}
                />
                <div className="card-body">
                    <h4>{geometricFigure.title}</h4>
                    <p>{geometricFigure.tags}</p>
                </div>
            </div>
        </div>
    )
}