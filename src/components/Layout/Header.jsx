import chocolateImage from '../../assets/chocolate.jpg'
import classes from './Header.module.css'

const Header = props =>{
    return (<>
        <header className={classes.header}> 
            <h1>
                Gostosuras
            </h1>
            <button>Carrinho</button>
        </header>
        <div className={classes['main-image']}>
            <img src={chocolateImage} alt="Deliciosos Brigadeiros Gourmet!"/>
        </div>
    </>)
}

export default Header