import classes from './MealItem.module.css'


const MealItem = props=>{
    const price = `$${props.price.toFixed(2)}`
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