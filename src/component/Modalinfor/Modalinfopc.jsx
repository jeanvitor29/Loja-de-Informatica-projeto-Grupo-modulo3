import React, { useState } from 'react';
import Modal from 'react-modal';
import Minfo from './informacao';
import '../css/ModalButton.css'

function Modalin() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="mod">
      <button onClick={() => setModalIsOpen(true)} className="btto">Caracteristicas</button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <p>
          <Minfo />
        </p>
        <button onClick={() => setModalIsOpen(false)}>Fechar</button>
      </Modal>
    </div>
  );
}

export default Modalin;
