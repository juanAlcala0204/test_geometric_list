
import { useContext } from 'react'
import ModalContext from '../../context/ModalContext';
import ListGeometricFigures from '../GeometricFigures/ListGeometricFigures'
import ModalRegisterFigure from '../GeometricFigures/ModalRegisterFigure';
import Navbar from '../Navbar/Navbar'
import '../../assets/css/Home.css'

export default function Home() {

    const { openModal } = useContext(ModalContext);


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
                                            <div className="col-md-5"></div>
                                            <div className="col-md-3">
                                                <button className="btn btn-lg btn-success" onClick={() => openModal('register')}>Agregar Figura  <i className="fas fa-plus-circle"></i></button>
                                            </div>
                                            <div className="col-md-3"></div>
                                        </div>
                                        <div className="row" style={{ marginTop: '50px', marginBottom: '30px' }}>
                                            <div className="col-md-1"></div>
                                            <div className="col-md-10" >
                                                <ListGeometricFigures />
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