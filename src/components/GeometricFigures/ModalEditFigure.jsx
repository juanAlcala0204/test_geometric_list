
import { useContext, useEffect } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import ModalContext from '../../context/ModalContext';
import { useForm } from 'react-hook-form'
import GeometricFigureContext from '../../context/GeometricFigureContext';

export default function ModalRegisterFigure() {
    const { stateModal, closeModal } = useContext(ModalContext);
    const { updateGeometricFigure, geometricFigureSelected } = useContext(GeometricFigureContext);
    const { register, handleSubmit, setValue, reset } = useForm({
        defaultValues: geometricFigureSelected
    });

    setValue('title', geometricFigureSelected.title);
    setValue('imageUrl', geometricFigureSelected.imageUrl);
    setValue('description', geometricFigureSelected.description);
    setValue('tags', geometricFigureSelected.tags);

    useEffect(() => {
        reset(geometricFigureSelected);
    }, [geometricFigureSelected, reset]);

    const onSubmit = data => {
        data.id = geometricFigureSelected.id;
        console.log(geometricFigureSelected);
        updateGeometricFigure(data.id, data)
        closeModal();
    }

    return (
        <Modal isOpen={stateModal.typeModal === 'edit' ? stateModal.open : false} size="lg">
            <ModalHeader>
                Editar Figura.
            </ModalHeader>
            <ModalBody >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <label htmlFor="title">Título Figura</label>
                                    <input type="text" className="form-control" placeholder="Escriba el nombre de la figura." name="title" ref={register} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="imageUrl">Imagen URL Figura:</label>
                                    <input type="text" className="form-control" placeholder="Escriba el url de la imagen de la figura." name="imageUrl" ref={register} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description">Descripción</label>
                                    <input type="text" className="form-control" placeholder="Escriba una breve descripción de la figura." name="description" ref={register} />
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