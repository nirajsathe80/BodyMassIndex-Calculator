import React , {useState} from 'react' ;
import { Button } from "react-bootstrap" ;
import './BmiCalculator.css'

const BmiCalculator = ()  => {
    const [height, setHeight] = useState(null) ;
    const [weight, setWeight] = useState(null) ; 
    const [result, setResult] = useState(null) ;
    const [msg, setMsg] = useState("") ;

    const heightChange = (event) => {
        setHeight(event.target.value)
    }

    const weightChange = (event) => {
        setWeight(event.target.value)
    }

    const clickHandler = (event) => {
        let bmi = Math.pow(height / 100 , 2) ; 
        let res = (weight / bmi).toFixed(3) ; 
        setResult(res) ; 
        if(res < 15.5){
            setMsg(" you are very thin") ; 
        }
        else if(res > 15.5 && res < 18.5){
            setMsg(" you are Moderate Thinness") ; 
        }
        else if(res > 18.5 && res < 25){
            setMsg(" you are normal") ; 
        }
        else if( res > 25){
            setMsg(" you are overweight") ; 
        }
    }


    return (
        <div className="bmi-container">
        {
            console.log(msg) 
        }
           <div className="heading">
                <h1>BMI Calculator</h1>
           </div>
            <label>Height</label> <br/>
            <input type="number" value={height} onChange={heightChange} /> Cm <br/><br/>

            <label>Weight</label> <br/>
            <input type="number" value={weight} onChange={weightChange} /> Kg <br/><br/>

            <Button variant="Dark" onClick={clickHandler}>Calculate</Button>

            <div>
                <h3>your BMI  {result}</h3>
                <h3> { msg }</h3>
            </div>
            
        </div>
    )
}

export default BmiCalculator ; 
