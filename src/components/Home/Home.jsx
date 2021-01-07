
import { useContext, useState } from 'react'
import ModalContext from '../../context/ModalContext';
import ListGeometricFigures from '../GeometricFigures/ListGeometricFigures'
import ModalRegisterFigure from '../GeometricFigures/ModalRegisterFigure';
import Navbar from '../Navbar/Navbar'
import '../../assets/css/Home.css'
import GeometricFigureContext from '../../context/GeometricFigureContext';

export default function Home() {

    const { openModal } = useContext(ModalContext);
    const [searchFigure, setSearchFigure] = useState("");
    const { geometricFigures } = useContext(GeometricFigureContext);

    const handleChange = event => {
        setSearchFigure(event.target.value);
    }

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