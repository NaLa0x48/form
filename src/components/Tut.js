import React, { useState } from 'react';
function Tut() {
   const [gender,setGender]=useState('');
   const handleChange=(e)=>{
       setGender( e.target.value);    }

    return (
      <div>
         <form>
             <input type="radio" value="male" id="male"
               onChange={handleChange} name="gender" />
             <label for="male">Male</label>

            <input type="radio" value="female" id="female"
              onChange={handleChange} name="gender"/>
            <label for="female">Female</label>
         </form>

         <p> {gender}</p>
      </div>
    );
}
export default Tut;