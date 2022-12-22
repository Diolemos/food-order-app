import classes from './MealItem.module.css'
const price = `$${props.price.toFixed(2)}`

const MealItem = props=>{
    return(<li className={classes.meal}>
        <div>
                <h3>{props.name}</h3>
            <div className={props.description}>{props.description}</div>
            <div className={props.price}>{price}</div>
            
        </div>
        
        <div>

        </div>
    </li>)
}

export default MealItem