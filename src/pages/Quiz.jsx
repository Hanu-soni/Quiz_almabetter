import Navbar from "../components/Navbar";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import TableQuiz from "../components/TableQuiz";
import { useNavigate } from "react-router";
function Quiz()
{
    const navigate=useNavigate();
    return(

        <div className='container'>
        <Navbar/>
        <br></br>
           
           

              <div className="d-flex justify-content-end me-2">
              <button className="btn btn-primary" style={{marginTop:"40px"}} onClick={GotoCreate}>Create New Quiz</button>
            
            </div>  
         
           

          
            <div className="d-flex justify-content-center pt-5">
            <h1 className="text-primary fw-bolder">My Quiz</h1>
            </div>

            

        
          
            
            <TableQuiz/>
            
        </div>
    )
    function GotoCreate()
    {
        navigate('/create')
    }
}
export default Quiz;
















