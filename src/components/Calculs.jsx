import PropTypes from 'prop-types';

export default function Calcul(props) {
    const bill = parseInt(props.getbillData.billAmount)
    const tips = parseInt(props.getbillData.billAmount * (props.getbillData.tipAmount / 100))
    const people = parseInt(props.getbillData.numberOfPeople)

    // Calcule les tips par personne 
    const tipAmountPerPerson = () => {
        if (bill && tips && people) {
            return (tips / people).toFixed(1)
        }
        else {
            return '0,00'
        }
    }

    // Calcule le total par personne incluant les tips
    const totalPerPerson = () => {
        if (bill && tips && people) {
            return ((bill + tips) / people).toFixed(1)
        }
        else {
            return '0,00'
        }
    }
    
    return (
        <>
            <div className="totalCount">
                <div className="totalCount-title">
                    <h3>Tip Amount <br /><span>
                        / person :</span></h3>
                    <h4>{tipAmountPerPerson()} $</h4>
                </div>
                <div className="totalCount-title">
                    <h3>Total  <br /><span>/ person :</span></h3>
                    <h4>{totalPerPerson()} $</h4>
                </div>
            {/* Emet un custom event pour remettre la data du composant parent à 0 */}
            <button onClick={props.reset}> RESET </button>
            </div>
        </>
    )
}

Calcul.propTypes = {
    getbillData: PropTypes.object,
    billAmount: PropTypes.number,
    tipAmount: PropTypes.number,
    numberOfPeople: PropTypes.number,
    reset: PropTypes.any

}