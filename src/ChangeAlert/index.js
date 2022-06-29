import React from 'react';
import { withStorageListener } from './withStorageListener';
import { Modal } from '../Modal';

import './ChangeAlert.css';

function ChangeAlert({ show, toggleShow}) {
  
  if(show){
    return (

      <Modal>
        <div className='container-load'>
          <p>
            Se han detectado cambios en los todos en otra pestaña de tu navegador.
            Es necesario actualizar para ver los cambios en la pestaña actual.
          </p>
          <button
            onClick={()=> {
              toggleShow(false)
            }}
          >
            Aceptar
          </button>
        </div>
      </Modal>
    )
  }
  else return <></>
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);


export { ChangeAlertWithStorageListener };