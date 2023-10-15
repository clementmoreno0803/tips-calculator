import PropTypes from 'prop-types';

export default function Calcul(props) {
    const bill = parseInt(props.getbillData.billAmount)
    const tips =  parseInt(props.getbillData.billAmount * (props.getbillData.tipAmount/100))
    const people = parseInt(props.getbillData.numberOfPeople)

    const tipAmountPerPerson = () => {
        return tips / people
    }

    const totalPerPerson = () => {
        return (bill + tips) / people
    }
    return (
        <>
            <h3>Tip Amount / person :</h3>
            <h4>{!isNaN(tipAmountPerPerson()) && tipAmountPerPerson()}</h4>

            <h3>Total / person :</h3>
            <h4>{!isNaN(tipAmountPerPerson()) &&  totalPerPerson()}</h4>
        </>
    )
}

Calcul.propTypes = {
    getbillData: PropTypes.object,
    billAmount: PropTypes.number, 
    tipAmount: PropTypes.number,
    numberOfPeople: PropTypes.number,

}