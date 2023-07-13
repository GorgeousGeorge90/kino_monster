import styles from './Modal.module.scss';


const Modal = ({children, open, onClose}) => {

    if (!open) {
        return null
    }

    return (<div className={styles.modal_overlay}>
        <dialog className={styles.modal_base}
                onClick={onClose}>
            {children}
        </dialog>
    </div>)
}



export default Modal