import uniqid from 'uniqid'
import { useState } from 'react';
const genderOption = ['male','female'];
const majorOption = ['ICT','EcE','AME',"PRE"];
const acadamicOption = ['firstYear','secondYear','thirdYear','fourthYear','fifthYear','finalYear'];
const Form = () => {
   
    const [formData,setFormData] = useState({name:'',nrc:'',gender:'male',address:'',major:'ICT',acadamicYear:'',attendanceYear:''});

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formData)
    }
    
    const handleChange = (e) =>{
        const {name,value} = e.target;
        setFormData({...formData,[name]:value});
        console.log(formData);
    }
    return ( 
        <form onSubmit={handleSubmit}> 
            <label>Name :</label><br></br>
            <input type="text" name="name" value={formData.name} onChange={handleChange}/><br></br>
            <label>NRC :</label><br></br>
            <input type="text" name="nrc" value={formData.nrc} onChange={handleChange}/><br></br>
            <label>Gender</label>
            <br></br>
            {genderOption.map((gender)=>(
            <li key={uniqid()}> 
            <input type="radio" name="gender" value={gender} onClick={handleChange}/><label>{gender}</label><br></br>
            </li>))}

            <label>Address</label>
            <br></br>
            <textarea name="address" value={formData.address} onChange={handleChange} >

            </textarea>
            <br></br>
            <label>Major</label><br></br>
            {majorOption.map((major)=>(
            <li key={uniqid()}>
            <input  type="radio"  name={major} value={major} id={uniqid()}onChange={handleChange}/><label>{major}</label><br></br>
            </li>))}
            <label>Academic Year</label>
            <select name="acadamicYear" onChange={handleChange} value={formData.acadamicYear}>
                {acadamicOption.map((acadamic)=>(
                    <option key={uniqid()}>{acadamic}</option>
                ))}
            </select>
            <br></br>
            <label>attendanceYear</label>
            <select name="attendanceYear" onChange={handleChange} value={formData.attendanceYear}>
                {acadamicOption.map((acadamic)=>(
                    <option key={uniqid()}>{acadamic}</option>
                 ))}
            </select>
            <br></br>
            <button type='submit'>submit</button>
        </form>
     );
}
 
export default Form;