
/** Import Global Dependencies */
import { useContext } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import { useForm } from 'react-hook-form'

/** Import Global Context */
import ModalContext from '../../context/ModalContext';
import GeometricFigureContext from '../../context/GeometricFigureContext';

/**
 * Build Component Modal Register Geometric Figure
 */
export default function ModalRegisterFigure() {
    const { stateModal, closeModal } = useContext(ModalContext);
    const { addGeometricFigure } = useContext(GeometricFigureContext);
    const { register, handleSubmit, errors } = useForm();

    /**
     * Function that have the action of the register Figure
     * @param {object} data Argument that give the info of the new Figure 
     */
    const onSubmit = data => {
        addGeometricFigure(data)
        closeModal();
    }

    return (
        <Modal isOpen={stateModal.typeModal === 'register' ? stateModal.open : false} size="lg">
            <ModalHeader>
                Registrar Figura.
            </ModalHeader>
            <ModalBody >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <label htmlFor="title">Título Figura</label>
                                    <input type="text" className="form-control" placeholder="Escriba el nombre de la figura." name="title" ref={register({required: true})} />
                                    {errors.title && "El título es requerido"}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="imageUrl">Imagen URL Figura ( Indicar una dirección de internet que contenga la imagen ):</label>
                                    <input type="text" className="form-control" placeholder="Ejemplo: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWjozVuMjRYHKIcDTcz3xHRu8Q5j6HvphsWQ&usqp=CAU" name="imageUrl" ref={register({required: true})} />
                                    {errors.title && "La URL es requerida"}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description">Descripción</label>
                                    <input type="text" className="form-control" placeholder="Escriba una breve descripción de la figura." name="description" ref={register({required: true})} />
                                    {errors.title && "La Descripción es requerida"}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="tags">Tags Figura</label>
                                    <input type="text" className="form-control" placeholder="Escriba los tags de la figura." name="tags" ref={register} />
                                </div>
                                <hr />
                                <button type="submit" className="btn btn-success">Guardar Figura</button>
                            </form>
                        </div>
                    </div>
                </div>
            </ModalBody>
        </Modal>
    );
}