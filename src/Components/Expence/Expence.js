// import ExpenceItem from './ExpenceItem';
import ExpenceList from './ExpenceList';
import './Expence.css'
import Card from '../UI/Card'
import ExpenceFilter from './ExpenceFilter';
import { useState } from 'react';
import ExpenceChart from './ExpencesChart';


const Expence=(props)=>{
const[filteredYear, setFilteredYear] = useState('2022 ');

  const filterChangeHandler =(selectedYear)=>
  {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter((expense)=>{
    return expense.date.getFullYear().toString()===filteredYear; 
  });

  
    return(
    <div>
    <Card className='expence'>
      <ExpenceFilter 
        selected={filteredYear} 
        onChange={filterChangeHandler} >
      </ExpenceFilter>
      <ExpenceChart expenses={filteredExpenses} ></ExpenceChart>
       <ExpenceList items={filteredExpenses} ></ExpenceList> 

       
     

    </Card>
    </div>
    
    )
}
export default Expence;