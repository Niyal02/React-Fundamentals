import { useNavigate } from 'react-router-dom';
import classes from './home.module.css';

const Home = () => {
    const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>Welcome to NepCart 🚀</h1>
      <button onClick={()=>navigate('/display-products')} style={{cursor: 'pointer', color:'white'}} >View Products</button>
    </div>
  )
}

export default Home;