import classes from './AvailableMeals.module.css'
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Brigadeiro Tradicional',
      description: 'Delicioso brigadeiro feito com chocolate nobre, coberto com saborosos confeitos de chocolate ao leite, 20g',
      price: 3,
    },
    {
      id: 'm2',
      name: 'Brigadeiro de Ninho com Nutella',
      description: 'O inconfundível sabor do leite Ninho com todo o sabor da Nutella, juntos em um brigadeiro, 20g',
      price:3,
    },
    {
      id: 'm3',
      name: 'Brigadeiro de Churros',
      description: 'Feitos com doce de leite cremoso e enrolado no açucar e canela, 20g',
      price: 3,
    },
    {
      id: 'm4',
      name: 'Casadinho ',
      description: 'Metade brigadeiro branco, metade brigadeiro tradicional 20g',
      price: 3,
    },
    {
        id: 'm5',
        name: 'Brigadeiro Bicho de Pé',
        description: 'Gracioso brigadeiro com todo o sabor do nesquik, 20g',
        price: 3,

         },
         {
          id:'md6',
          name: 'Brigadeiro Napolitano',
          description:'É o brigadeiro tradicional, o brigadeiro branco e o brigadeiro bicho de pé, 20g',
          price: 3,
         },
         {
          id:'md7',
          name: 'Brigadeiro Romeu e Julieta',
          description:'É a junção mais saborosa que existe! É o brigadeiro de queijo com goiabada, 20g ',
          price: 3,
         },
         {
          id:'md8',
          name: 'Brigadeiro de Paçoca',
          description:'Brigadeiro feito com paçoquita, 20g',
          price: 3,
         },
         {
          id:'md9',
          name: 'Brigadeiro de M&Ms',
          description:'Brigadeiro confeitado com M&Ms, 20g',
          price: 3,
         },
         {
          id:'md10',
          name: 'Brigadeiro Oreo',
          description:'Brigadeiro feiro com biscoito Oreo, 20g',
          price: 3,
         }
         
  ];

const AvailableMeals = ()=>{
   const mealsList = DUMMY_MEALS.map(meal=> <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price}/> )
   
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