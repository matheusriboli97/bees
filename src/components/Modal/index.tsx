import './style.css'

interface ModalProps {
  onSaveClose: () => void,
  onCancelClose: () => void,
}

export const Modal = (props: ModalProps): JSX.Element => {
  const {onCancelClose, onSaveClose} = props;
  return (
    <div className="modalContainer">
      <header className="modalHeader">
        <p className="modalTitle">Delete Item</p>
      </header>
      <section className="modalBody">
        <p>Are you sure you want to delete this item?</p>
      </section>
      <footer className="modalFooter">
        <button onClick={onSaveClose}>Yes</button>
        <button onClick={onCancelClose}>No</button>
      </footer>
    </div>
  );
}
