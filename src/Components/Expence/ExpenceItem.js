import React  from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenceItem.css' 
import Card from '../UI/Card';


const ExpenceItem = (props) =>{
    return (
        
        <Card className='expense-item'>
           <ExpenseDate date={props.date}></ExpenseDate>
            <div className='expense-item_description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            
        </Card>
        
    )
}
 
export default ExpenceItem;