import React , {useState , useRef} from 'react' ;
import './BmrCalculator.css'

function BmrCalculator() {
    const [heightValue, setHeightValue] = useState(null) ;
    const [weightValue, setWeightValue] = useState(null) ;
    const [ageValue, setAgeValue] = useState(null) ; 
    const [gender, setGender] = useState("") ;
    const [result, setResult] = useState("") ;

    const inputRef = useRef() ; 

    function heightCalculator(event){
        setHeightValue(event.target.value) ; 
    }

    function weightCalculator(e){
        setWeightValue(e.target.value) ; 
    }
    function ageCalculator(e){
        setAgeValue(e.target.value) ; 
    }

    function clickHandler(){
       if(gender === 'male'){
            let calories = 88.362 + (13.397 * weightValue ) + (4.799 * heightValue ) - (5.677 * ageValue ) ; 
            setResult(Math.floor(calories)) ;
       }
       else{
           let calories = 447.593 + (9.247 * weightValue ) + (3.098 * heightValue ) - (4.330  * ageValue ) ;
           setResult(Math.floor(calories)) ;
       }
    }
    function genderValue(e){
        setGender(e.target.value) ;
    }
    return (
        <div className="bmr-container">
            <h1 className="heading">BMR Calculator</h1>
            <label className="gender">Sex</label> 
            <input type="radio" name="gender" value="male" onChange={genderValue}/>
            <label>Male</label>
            <input type="radio" name="gender" value="female" onChange={genderValue} />
            <label >Female</label>
           
            <br/><br/>

            <label>Age</label> <br/>
            <input type="number" onChange={ ageCalculator }  /> years <br/><br/>

            <label>Height</label> <br/>
            <input type="number" onChange={ heightCalculator } /> Cm <br/><br/>

            <label>Weight</label> <br/>
            <input type="number" onChange={ weightCalculator } /> Kg <br/><br/>

            <button  onClick={ clickHandler }>Calculate</button>

            <div className="result-msg">
                <h3>Daily calories intake {result} cal </h3>
            </div>
            
        </div>
    )
}

export default BmrCalculator ; 
