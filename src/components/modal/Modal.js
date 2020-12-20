function Modal( { isOpen, children} ) {
    const showModal = isOpen ? 'fade show d-block' : 'visually-hidden';
    return (
        <>
        <div className={`modal ${showModal}`} tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    { children }
                </div>
            </div>
        </div>
        <div className={`modal-backdrop ${showModal}`}></div>
        </>
    );
}

export default Modal;