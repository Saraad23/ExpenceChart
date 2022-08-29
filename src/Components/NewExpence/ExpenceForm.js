import './ExpenceForm.css'
import React ,{useState} from 'react';

const ExpenceForm=(props)=>
{
    const [EnteredTitle , setEnteredTitle] = useState("");
    const [EnteredAmount , setEnteredAmount] = useState("");
    const [EnteredDate , setEnteredDate] = useState("");

    // const [UserInput , setUserInput] =useState({
    //     EnteredTitle:"",
    //     EnteredAmount:"",
    //     EnteredDate:""
    // });


    // const ObjChangeHandler=()=>
    // {
    //     setUserInput({
    //         ...UserInput,
    //         EnteredTitle : event.target.value
    //     })
    // }

    const titleChangeHandler=(event)=>{
       setEnteredTitle(event.target.value);
    }
    // setUserInput({
    //     ...UserInput,
    //     EnteredTitle : event.target.value
    // })

    //other method
    // setUserInput((prevState)=>{
    //     return{...prevState, EnteredTitle:event.target.value}
    // }

   
 
    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value);
    }
        // setUserInput({
        //     ...UserInput,
        //     EnteredAmount : event.target.value
        //  })
     

     const dateChangeHandler=(event)=>{
        setEnteredDate (event.target.value);
     }
        // setUserInput({
        //     ...UserInput,
        //     EnteredDate : event.target.value
        //  })
     
    const submitHandler =(event)=>
    {
        event.preventDefault();
        const expenceData={
            title : EnteredTitle,
            amount : EnteredAmount,
            date : new Date(EnteredDate)
        };
        //console.log(expenceData);

        props.onSaveExpenseData(expenceData );
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate('');
    } 

   return (
    <form  onSubmit={submitHandler} >
        <div className='new-expense__controls' >
            <div className='new-expense__control' >
                <label>Title</label>
                <input type='text' value={EnteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className='new-expense__control' >
                <label>Amount</label>
                <input value={EnteredAmount} onChange={amountChangeHandler} />
            </div>
            <div className='new-expense__control' >
                <label>Date</label>
                <input type='date' value={EnteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
            </div>
        </div>
         <div className='new-expense__actions'>
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button type="Submit" >Add Expense</button>
         </div>
    </form>
   )

   }
export default ExpenceForm;