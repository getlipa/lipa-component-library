import './App.css'
import {DangerButton, PrimaryButton, SecondaryButton, BasicModal} from "./components/index.js";
import {useState} from "react";

function App() {

  const [showBasicModal, setShowBasicModal] = useState<boolean>(false);

  return (
      <div className="grid grid-cols-3 grid-rows-3 gap-2">
        <PrimaryButton onClick={() => true}>PrimaryButton</PrimaryButton>
          <DangerButton onClick={() => true}>DangerButton</DangerButton>
          <SecondaryButton onClick={() => true}>SecondaryButton</SecondaryButton>
          <button onClick={() => setShowBasicModal(true)} className="bg-gray-500"> Open Modal </button>
          <BasicModal open={showBasicModal} onClose={() => setShowBasicModal(false)}> Modal content </BasicModal>
      </div>
  );
}

export default App
