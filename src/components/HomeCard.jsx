import { useNavigate } from 'react-router-dom';
import 'bootstrap';
import play from '../images/playquiz.jpg';
import show from '../images/show_quiz.png';
import create from '../images/create.jpg';
import '../App.css';

function HomeCard() {
  const navigate = useNavigate();

  return (
 
      <div className='row d-flex justify-content-center align-items-center ' style={{marginTop:"100px"}}>    
         <div className='col-lg-4 col-md-4 col-sm-12 mb-4' onClick={GotoCreate}>
         <div className='card bg-dark zoom-effect'style={{cursor:"pointer"}}>
            <h5 className='card-title text-center text-danger'>Create Your Quiz</h5>
            <img className='card-img' src={create} alt='Create Quiz'></img>
          </div>
        </div>

        <div className='col-lg-4 col-md-4 col-sm-12 mb-4' onClick={GotoQuiz}>
        <div className='card bg-dark zoom-effect'style={{cursor:"pointer"}}>
            <h5 className='card-title text-center text-warning'>Show Quiz</h5>
            <img className='card-img' src={show} alt='Show Quiz'></img>
          </div>
        </div>

        <div className='col-lg-4 col-md-4 col-sm-12 mb-4' onClick={GotoPlay}>
        <div className='card bg-dark zoom-effect'style={{cursor:"pointer"}}>
            <h5 className='card-title text-center text-success'>Play Quiz</h5>
            <img className='card-img' src={play} alt='Play Quiz'></img>
          </div>
        </div>
      </div>
  
  );

  function GotoCreate() {
    navigate('/create');
  }

  function GotoQuiz() {
    navigate('/quiz');
  }

  function GotoPlay() {
    navigate('/play');
  }
}

export default HomeCard;








