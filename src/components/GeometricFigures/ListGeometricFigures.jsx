
import GeometricFigure from './GeometricFigure'
import ModalEditFigure from './ModalEditFigure'

export default function ListGeometricFigures({results}) {
    console.log(results)
    const resultsFigures = results ? results : [];
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        {resultsFigures.map(item => (
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