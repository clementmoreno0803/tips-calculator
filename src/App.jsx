import { useState } from 'react'
import './App.css'
import Calcul from './components/Calculs'

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
  numberOfPeople: 0
})

const handleChange = (event) => {
  const {name, value} = event.target
  setBillData(prevBillData => {
    return {
      ...prevBillData,
      [name] : value
    }
  })
}

function handleSubmit(event){
  event.preventDefault()
  console.log(getbillData)
  setBillData(getbillData)
}

  return (
    <>
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="billAmount">Bill</label>
        <input type="number" placeholder="0" onChange={handleChange}  name="billAmount" value={getbillData.billAmount} />
        <label htmlFor="tipAmount">Select Tip</label>
        <input type="button" placeholder="5%" onClick={handleChange}  name="tipAmount" value="5" />
        <input type="button" placeholder="10%" onClick={handleChange}  name="tipAmount" value="10" />
        <input type="button" placeholder="15%" onClick={handleChange}  name="tipAmount" value="15" />
        <input type="button" placeholder="25%" onClick={handleChange}  name="tipAmount" value="25" />
        <input type="button" placeholder="50%" onClick={handleChange}  name="tipAmount" value="50" />
      <input type="number" placeholder="Custom" onChange={handleChange}  name="tipAmount" value={getbillData.tipAmount} />
        <label htmlFor="numberOfPeople">Number Of People</label>
        <input type="number" placeholder="0" onChange={handleChange}  name="numberOfPeople" value={getbillData.numberOfPeople} />
      </form>
      <Calcul getbillData={getbillData}></Calcul>
    </div>
    </>
  )
}

export default App
