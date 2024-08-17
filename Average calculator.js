import React, { useState } from 'react';
     import axios from 'axios';

     const AverageCalculator = () => {
       const [numberType, setNumberType] = useState('e');
       const [data, setData] = useState(null);
       const [error, setError] = useState(null);

       const fetchData = async () => {
         try {
           const response = await axios.get(http://localhost:9876/numbers/${numberType});
           setData(response.data);
           setError(null);
         } catch (err) {
           setError('Error fetching data');
           setData(null);
         }
       };

       return (
         <div>
           <h1>Average Calculator</h1>
           <div>
             <label>Select Number Type:</label>
             <select value={numberType} onChange={(e) => setNumberType(e.target.value)}>
               <option value="p">Prime</option>
               <option value="t">Fibonacci</option>
               <option value="e">Even</option>
               <option value="r">Random</option>
             </select>
             <button onClick={fetchData}>Fetch Data</button>
           </div>
           {error && <p style={{ color: 'red' }}>{error}</p>}
           {data && (
             <div>
               <h2>Numbers: {data.numbers.join(', ')}</h2>
               <p>Previous Window State: {data.windowPrevState.join(', ')}</p>
               <p>Current Window State: {data.windowCurrState.join(', ')}</p>
               <p>Average: {data.avg}</p>
             </div>
           )}
         </div>
       );
     };

     export default AverageCalculator;
