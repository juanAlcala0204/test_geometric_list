/**Import General Dependencies */
import { createContext } from "react";

/** Import of the Custom Hook */
import UseModal from '../hooks/useModal'

// Create Context Modal
const ModalContext = createContext();

/**
 * Build Provider of the Modal Context
 * @param {*} children Argument that have the components into of the this context 
 */
const ModalProvider = ({children}) => {

    const {stateModal, openModal, closeModal } = UseModal();

    return (
        <ModalContext.Provider value={{stateModal, openModal, closeModal}}>
            { children }
        </ModalContext.Provider>
    );
}

/** Exports */
export { ModalProvider }
export default ModalContext;