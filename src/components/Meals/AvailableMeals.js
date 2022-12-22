import classes from './AvailableMeals.module.css'
import Card from '../UI/Card';
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Bolo no Pote sensação',
      description: 'Chocolate Cicao, morangos frescos',
      price: 18,
    },
    {
      id: 'm2',
      name: 'Brigadeiro de Queijo',
      description: 'Leite ninho, queijo parmesão',
      price: 2.50,
    },
    {
      id: 'm3',
      name: 'Brigadeiro de Nutela',
      description: 'Chocolate Cicao, Nutela',
      price: 2.50,
    },
    {
      id: 'm4',
      name: 'Brigadeiro Romeo e Julieta',
      description: 'Chocolate branco, queijo e goiabada',
      price: 2.50,
    },
    {
        id: 'm5',
        name: 'Bolo temático pasta americana',
        description: 'Deliciosos bolos temáticos, feito sob medida para seu evento especial',
        price: 500,

    }
  ];

const AvailableMeals = ()=>{
   const mealsList = DUMMY_MEALS.map(meal=><li>{meal.name}</li>)
   
    return(
        <section className={classes.meals}>
            <Card> <ul>
                {
                    mealsList
                }
            </ul>
            </Card>
           
        </section>
    )


};

export default AvailableMeals