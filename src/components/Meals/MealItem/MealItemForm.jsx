import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'
const MealItemForm = props=>{
    return(
        <form className={classes.form}>
            <Input label="Amount" input={{id:"amount", type:"number", min:"1", max:"5000", step:"1", defaultValue:"0"}}/>
            <button>+ Adicionar</button>
        </form>
    )
}

export default MealItemForm