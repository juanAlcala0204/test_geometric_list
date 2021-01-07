import { useState } from "react";

export default function UseModal () {
    
    const [stateModal, setStateModal] = useState({open: false, typeModal: false});

    const openModal = (typeModal) => {
        setStateModal({open: true, typeModal:typeModal})
    }

    const closeModal = () => {
        setStateModal({open: false, typeModal:false})
    }

    return {
        stateModal,
        openModal,
        closeModal
    }
}