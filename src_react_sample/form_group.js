

export default function Selectform(){
    const handlePaymentMethod=()=>{

        alert("you selected ths item")
    }
    
    return(
<form className="Checkout_form">

    
        {/* <span>Payment Method</span> */}
        <select onChange={handlePaymentMethod} value="Payment methods">
            <optgroup label="Cookies">
                <option value="choco cookies">Cookies</option>
                <option value=" cookies1">Chickens</option>
                <option value="cookies2">Blueberries</option>
            </optgroup>
            <optgroup label="Payment methods2">
                <option value="cookies">Cookies2</option>
                <option value="chickens">Chickens2</option>
                <option value="blueberries">Blueberries2</option>
            </optgroup>
        </select>
    

</form>
)}