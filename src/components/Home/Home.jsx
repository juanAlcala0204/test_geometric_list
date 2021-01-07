
/** Import Global Dependencies */
import { useContext, useState } from 'react'

/** Import Components */
import ListGeometricFigures from '../GeometricFigures/ListGeometricFigures'
import ModalRegisterFigure from '../GeometricFigures/ModalRegisterFigure';
import Navbar from '../Navbar/Navbar'

/** Import Css of this component */
import '../../assets/css/Home.css'

/** Import Global Context */
import GeometricFigureContext from '../../context/GeometricFigureContext';
import ModalContext from '../../context/ModalContext';

/**
 * Build Component Home
 */
export default function Home() {

    const { openModal } = useContext(ModalContext);
    const [searchFigure, setSearchFigure] = useState("");
    const { geometricFigures } = useContext(GeometricFigureContext);

    /**
     * Function that have the action of set the name that the user will search in the list
     * @param {*} event Argument that have the event of the input 
     */
    const handleChange = event => {
        setSearchFigure(event.target.value);
    }

    // Make List Geometric Figures
    const results = !searchFigure
        ? geometricFigures
        : geometricFigures.filter(item => (
            item.title.toLowerCase().includes(searchFigure.toLowerCase())
        )
        );


    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card" style={{ marginTop: '50px' }}>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="row">
                                            <div className="col-md-3"></div>
                                            <div className="col-md-7">
                                                <h1 className="title-custom">Geometric Figures List</h1>

                                            </div>
                                            <div className="col-md-2"></div>
                                        </div>
                                        <div className="row" style={{ marginTop: '30px', marginBottom: '30px' }}>
                                            <div className="col-md-3"></div>
                                            <div className="col-md-3">
                                                <button className="btn btn-lg btn-success" onClick={() => openModal('register')}>Agregar Figura  <i className="fas fa-plus-circle"></i></button>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="input-group input-group-lg">
                                                    <div className="input-group-prepend">
                                                    <span className="input-group-text" id="inputGroup-sizing-lg"><i className="fas fa-search"></i></span>
                                                    </div>
                                                    <input
                                                    className="form-control"
                                                    type="text"
                                                    placeholder="Search"
                                                    aria-label="Large"
                                                     aria-describedby="inputGroup-sizing-sm"
                                                    defaultValue={searchFigure}
                                                    onChange={(event) => { handleChange(event) }}
                                                />
                                                </div>

                                                
                                            </div>
                                            <div className="col-md-3"></div>
                                        </div>
                                        <div className="row" style={{ marginTop: '50px', marginBottom: '30px' }}>
                                            <div className="col-md-1"></div>
                                            <div className="col-md-10" >
                                                <ListGeometricFigures results={results} />
                                            </div>
                                            <div className="col-md-1"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ModalRegisterFigure />
        </div>
    )
}