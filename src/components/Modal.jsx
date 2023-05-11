import "./Modal.css"

const Modal = ({children, onClose}) => {
    return (
      <>
        <div
          className="backdrop"
                onClick={onClose}
                data-cy="backdrop"
            ></div>
            
            <dialog className="modal" open data-cy="modal">
             {children}
            </dialog>
      </>
    );
}

export default Modal
