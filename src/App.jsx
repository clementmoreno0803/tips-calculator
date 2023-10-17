import { useState } from 'react'
import './App.css'
import Calcul from './components/Calculs'
import logo from './assets/logo.svg'
import dollar from './assets/icon-dollar.svg'
import person from './assets/icon-person.svg'

function App() {

  // 1 - Créer un formulaire 
  // 1.1 - Créer un input pour le bill avec un type Number
  // 1.2 - Créer une liste de bouton avec chacun une valeur (input type button ? / juste boutton ?)
  // 1.3 - Créer un input type Number pour créer un champ custom 
  // 1.4 - Créer un input pour le nombre de personne avec un type Number 
  // 2 - Récupérer la data et la stocker dans un objet 
  // 2.1 - Utiliser un UseState
  // 3 - Créer le composant "Calcul"
  // 4 - Passer l'objet via des props au composant enfant 'Calcul'

  const [getbillData, setBillData] = useState({
    billAmount: 0,
    tipAmount: '',
    numberOfPeople: 0,
  })

  // Remet les data à zéro au click du bouton (Calculs.jsx)
  const resetData = () => {
    setBillData(() => {
      return {
        billAmount: 0,
        tipAmount: '',
        numberOfPeople: 0,
      }
    })
  }

  // Permet de mettre à jour les valeurs de l'objet
  const handleChange = (event) => {
    const { name, value } = event.target
    setBillData(prevBillData => {
      return {
        ...prevBillData,
        [name]: value
      }
    })
  }


  function handleSubmit(event) {
    event.preventDefault()
    setBillData(getbillData)

  }

  return (
    <>
      <div>
        <img className="logo" src={logo} alt="" />
        <div className="tip-calculator">
          <form onSubmit={handleSubmit}>
            <div className="inputNumber">
              <label htmlFor="billAmount">Bill</label>
              <div className="inputNumber-icon">
                <img src={dollar} alt="" />
                <input type="number" placeholder="0" onChange={handleChange} name="billAmount" value={getbillData.billAmount} />
              </div>
            </div>
            <div className="inputNumber">
              <label htmlFor="tipAmount">Select Tip</label>
              <div className="tipsButton">
                <input type="button" onClick={handleChange} name="tipAmount" value="5"  />
                <input type="button" onClick={handleChange} name="tipAmount" value="10"  />
                <input type="button" onClick={handleChange} name="tipAmount" value="15"  />
                <input type="button" onClick={handleChange} name="tipAmount" value="25"  />
                <input type="button" onClick={handleChange} name="tipAmount" value="50"  />
                <input type="number" placeholder="Custom" onChange={handleChange} name="tipAmount" value={getbillData.tipAmount} />
              </div>
            </div>
            <div className="inputNumber">
              <label htmlFor="numberOfPeople">Number Of People</label>
              <div className="inputNumber-icon">
                <img src={person} alt="" />
                <input type="number" placeholder="0" onChange={handleChange} name="numberOfPeople" value={getbillData.numberOfPeople} />
              </div>
            </div>
          </form>
          <Calcul getbillData={getbillData} reset={resetData}></Calcul>
        </div>
      </div>
    </>
  )
}

export default App
