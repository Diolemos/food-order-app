import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'
const MealItemForm = props=>{
    const submitHandler = event =>{
        event.preventDefault();
    }
    return(
        <form className={classes.form} onSubmit={submitHandler}>
        <Input label="unidades" input={{id:"amount" + props.id, type:"number", min:"0", max:"5000", step:"1", defaultValue:"0"}}/>
            <button>+ Adicionar</button>
        </form>
    )
}

export default MealItemForm