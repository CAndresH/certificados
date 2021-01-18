import React, { useState } from "react";
import { useMultiSigWalletContext } from "../contexts/MultiSigWallet";
import { Button } from "semantic-ui-react";
import DepositForm from "./DepositForm";
import CreateTxModal from "./CreateTxModal";
import TransactionList from "./TransactionList";
import Contrato from './Contrato'

function MultiSigWallet() {
  
  const { state } = useMultiSigWalletContext();
  console.log("estado 1", state)
  const [open, openModal] = useState(false);

  console.log("El estado-->", state);

  return (
    <div>
      <div>Direccion del Contrato: {state.address}</div>

      <Contrato/>

  

      {/* <h3>Balance: {state.balance} wei</h3>
      <DepositForm /> */}
      <h3>Involucrados</h3>
      <ul>
        {state.owners.map((owner, i) => (
          <li key={i}>{owner}</li>
        ))}
      </ul>
      <div>Confirmacion Requerida: {state.numConfirmationsRequired}</div>
      <h3>Firmar Documento:, Transaccion ({state.transactionCount})</h3>
      <Button color="green" onClick={() => openModal(true)}>
        Firmar Documento....
      </Button>
      {open && <CreateTxModal open={open} onClose={() => openModal(false)} />}
      <TransactionList
        numConfirmationsRequired={state.numConfirmationsRequired}
        data={state.transactions}
        count={state.transactionCount}
      />
    </div>
  );
}

export default MultiSigWallet;
