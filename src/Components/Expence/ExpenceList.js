import './ExpenceList.css'
import ExpenceItem from "./ExpenceItem";

const ExpenceList = (props )=>
{

    if(props.items.length ===0)
    {
      return <h2 className='expenses-list__fallback'>Found No Expences </h2>
    }

    //  Another method of showing content according to the year by using Tertinary Operator 

    //   {filteredExpenses.length===0 ? (<p id="wh">No Expenses Found</p>) :(filteredExpenses.map(Expence=>
    //     <ExpenceItem 
    //     key ={Expence.id}
    //     title={Expence.title} 
    //     amount={Expence.amount} 
    //     date={Expence.date} /> ) )} 

        return (
            <ul className='expenses-list'>
                {props.items.map(Expence=>
                   <ExpenceItem 
                    key ={Expence.id}
                    title={Expence.title} 
                    amount={Expence.amount} 
                    date={Expence.date} /> )}
            </ul>
        )


}
export default ExpenceList;