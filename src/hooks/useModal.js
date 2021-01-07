/** Import General Dependencies */
import { useState } from "react";

/**
 * Build Custom Hoook UseModal -> this have principal state and functions of the modals.
 */
export default function UseModal () {
    
    const [stateModal, setStateModal] = useState({open: false, typeModal: false});

    /**
     * Function that have the action of Open Modals.
     * @param {string} typeModal argument that have the type of the Modal that will Open 
     */
    const openModal = (typeModal) => {
        setStateModal({open: true, typeModal:typeModal})
    }

    /**
     * Function that have the action of close Modals.
     */
    const closeModal = () => {
        setStateModal({open: false, typeModal:false})
    }

    return {
        stateModal,
        openModal,
        closeModal
    }
}