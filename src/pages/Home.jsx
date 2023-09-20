import HomeCard from '../components/HomeCard';
import Navbar from '../components/Navbar';
import '../Styling/Home.css';
function Home()
{
    return(
        <div className='container'>
            {/* This is the navbar component having 2 button to visit my quiz and home */}
           <Navbar/>
           
           
           
        

         {/* It is a component in home page having 3 cards create-----myQuiz and play quiz */}
         <HomeCard/> 
         
          
          

        </div>
           
        
          
        

    )
}
export default Home;