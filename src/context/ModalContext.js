import { createContext } from "react";

import UseModal from '../hooks/useModal'

const ModalContext = createContext();

const ModalProvider = ({children}) => {

    const {stateModal, openModal, closeModal } = UseModal();

    return (
        <ModalContext.Provider value={{stateModal, openModal, closeModal}}>
            { children }
        </ModalContext.Provider>
    );
}

export { ModalProvider }
export default ModalContext;