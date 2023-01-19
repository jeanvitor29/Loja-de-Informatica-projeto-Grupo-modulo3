import React, { useState } from 'react';
import Modal from 'react-modal';
import "./css/ModalButton.css"

function ModalBto() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className='mod'>
      <button onClick={() => setModalIsOpen(true)} className='botto'>Comprar</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        
      >
        <p>Adicionado ao carrinho com sucesso</p>
        <button onClick={() => setModalIsOpen(false)}>Fechar</button>
      </Modal>
    </div>
  );
}

export default ModalBto;
