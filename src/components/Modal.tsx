import React from 'react';
import './modal.css';

interface ModalProps {
  /**
   * Si es primario
   */
   primary?: boolean;
  /**
   * Header del modal
   */
  header: string;
  /**
   * Contenido del modal
   */
   content: string;
  /**
   * Optional click handler
   */
  handleOK: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Modal = ({
  primary = true,
  header = 'Header del modal',
  content = 'Content del modal',
  handleOK = () => {},
  ...props
}: ModalProps) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const modeModal = primary ? 'modal-primary' : 'modal-secundary';
  const modeBoton = primary ? 'boton-primary' : 'boton-secundary';
  return (
    <>
      <button onClick={handleOpen}>ABRIR MODAL</button>
      <div className="overlay" style={{ display: open ? 'block' : 'none' }}>
        <div className={['modal', modeModal].join(' ')}>
          <div className="button-x" onClick={handleClose}>
            <span>X</span>
          </div>
        <div className="modal-header">{header}</div>
        <div className="modal-content">
         <p>{content}</p>
        </div>
         <div className="modal-botones">
            <button className={['boton', modeBoton].join(' ')}  onClick={handleClose}>CANCELAR</button>
            <button className={['boton', modeBoton].join(' ')}  onClick={handleOK}>GUARDAR</button>
         </div>
        </div>
      </div>   
    </>
  );
};
