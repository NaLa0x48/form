import uniqid from 'uniqid'
import { useState } from 'react';

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
    <div className='container'> 
        <form onSubmit={handleSubmit}> 
            <div className='nameField'>
                <label>Name </label><br></br>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required/><br></br>
            </div>
            <div className='nrcField'>
            <label>NRC :</label><br></br>
            <input type="text" name="nrc" value={formData.nrc} onChange={handleChange} placeholder="your NRC number" required/><br></br>
            </div>
            <label>Gender</label>
            <br></br>
            <input type="radio" name="gender" value ="male" checked ={formData.gender ==="male"} onChange={handleChange}/>Male<br/>
            <input type="radio" name="gender" value="female" onChange={handleChange}/>Female<br/>

            <label>Address</label>
            <br></br>
            <textarea name="address" value={formData.address} onChange={handleChange} required>

            </textarea>
            <br></br>
            <label>Major</label><br></br>
            <input type = "radio" id = "ICT" name ="major" value="ICT" checked ={formData.major ==="ICT"} onChange={handleChange}/>
            <label>ICT</label><br/>
            <input type = "radio" id = "IST" name ="major" value="IST" onChange={handleChange}/>
            <label>IST</label><br/>
            <input type = "radio" id = "CE" name ="major" value="CE" onChange={handleChange}/>
            <label>CE</label><br/>
            <input type = "radio" id = "AME" name ="major" value="AME" onChange={handleChange}/>
            <label>AME</label><br/>
            <input type = "radio" id = "ECE" name ="major" value="ECE" onChange={handleChange}/>
            <label>ECE</label><br/>
            <input type = "radio" id = "PrE" name ="major" value="PrE" onChange={handleChange}/>
            <label>PrE</label><br/>
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
     </div>
     );
}
 
export default Form;