import React from 'react';
import { withStorageListener } from './withStorageListener';

function ChangeAlert({ show, toggleShow}) {
  
  if(show){
    return <div>ChangeAlert</div>
  }
  else return <></>
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);


export { ChangeAlertWithStorageListener };