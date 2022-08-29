import './NewExpence.css'
import ExpenceForm from './ExpenceForm'
import {useState} from 'react'


const NewExpence= (props)=>{
    const [isEditing , setisEditing]= useState(false);
    const SaveExpenseDataHandler =  (EnteredExpenseData) =>{
        const ExpenseData ={
            ...EnteredExpenseData,
            id:Math.random().toString()
        }
        props.onAddExpense(ExpenseData)
        setisEditing(false);
    }

    const startEditingHandler = () =>
    {
        setisEditing(true);
    }
    const stopEditingHandler = () =>
    {
        setisEditing(false);
    }
    return(
        <div className='new-expense'>
    { !isEditing &&  <button onClick={startEditingHandler}>Add New Expence</button>}
    { isEditing &&   <ExpenceForm onSaveExpenseData={SaveExpenseDataHandler} onCancel={stopEditingHandler} ></ExpenceForm>}
        </div>
    )

}
export default NewExpence ;