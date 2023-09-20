import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Modal, ModalBody } from 'react-bootstrap';
import userContext from '../useContext/useContextCreate';
import { useContext } from 'react';
function TableQuiz()
{
  const [data] = useState ( () => {
    const savedItem = localStorage.getItem("questions");
   const parsedItem = JSON.parse(savedItem);
   return parsedItem || "";
   });
   const[compdata,setcompdata]=useState(data);
  // const data=useContext(userContext)
  // console.log(data);
  
   
   const[Active,setActive]=useState("DeActivate")
   const[confirm, set_confirm]=useState(false);
   const[confirmed, set_confirmed]=useState(false);
   const [show, setShow] = useState(true);
   const[DeactivatedList,setDeactivatedList]=useState([{title:"",createdOn:""}]);

   console.log(data);
   console.log("hello");
   const x=data.length;

    return(
      <div>
        <Table striped>
      <thead>
        <tr>
          <th>Quiz No.</th>
          <th>Title</th>
          <th>Status</th>
          <th>Created On</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
      {data.length!=0?
        
        compdata.map((item)=>(
        
       
        <tr>
          <td>{data.indexOf(item)+1}</td>
          <td>{item[0]}</td>
          <td>
            <button type="radio" className={Active==="Activate"?"green":"red"} onClick={Activate}>{Active}</button>
          </td>
          <td>{item[1]}</td>
          <td>
            <button className={confirmed===true?"red":"green"} onClick={()=>removeAll(item[0],item[1])}>Delete</button>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <button>Edit</button>
          </td>
        </tr>
        
   



        ))
        :
        <div className='d-flex justify-content-center'>
          <h2>NO DATA TILL NOW</h2>

        </div>
        

      }
         </tbody>
      
    </Table>
    
    {/* To Confirm the deletion from user */}
    {/* {confirm &&
            <Modal show={show} onHide={go_close} style={
              {
                  height: "200px",
                  display: "inline",
                  width: "400px",
                  border: "2px solid grey",
                  margin: "15% 30%",
              }

          }>
              <Modal.Header closeButton>
                <Modal.Title>CONFIRM</Modal.Title>
              </Modal.Header>
              <ModalBody>
                IF YOU DELETE A SUBJECT , ALL THE ITEMS ON TABLE HAVING SAME 
                SUBJECT AND DATE WILL BE DELETED.CLICK YES TO DELETE AND NO TO
                AVOID.
                <br>
                </br>
                <button onClick={go_confirm}>YES</button>
                <button onClick={go_close}>NO</button>
              </ModalBody>
              

            </Modal>}
             */}
    </div>
    )
    function Activate()
    {
     if(Active==="Activate")
     {
      setActive("Deactivate")
     }
     else
     {
      setActive("Activate")
     }
    }

    //10   index-5(delete)........array(update)!=5
    // function deleteData(subject,date)
    // {
    //   console.log(subject);
    //   //console.log(date);
    //   //delete the array having that particular data
    //   //if data at any index have same subject and date

    //   data.filter(removeAll);
    //   console.log(data)
    // }
    function removeAll(subject,date)
    {
      console.log("reached remove all")
      // if(confirmed===false)
      // { set_confirm(true)
      //   console.log("confirm set to true")
      // }
     
      // if(confirmed===true)
      // {
        const x=data.length;
        console.log(x);
        let newdata=[];
        for(var i=0;i<=x-1;i++)
        {
    
             if(data[i][0]!==subject)//date ke jagah time use karna hoga!!
             {
              newdata.push(data[i])
              console.log(subject)
             }
            //console.log(data[i][0]!==subject)
            //console.log(data[i][1]!==date)
            //console.log(data[i])
         }
      
        localStorage.setItem('questions', JSON.stringify(newdata));
        setcompdata(newdata);
      
      // }

     
    }

    // function go_close()
    // {
    //   set_confirm(false);
    //   console.log("reached go_close");
    // }
    // function go_confirm()
    // {
    //   set_confirmed(true);
    //   set_confirm(false);

      
    //   console.log("reached go_confrrm");
    // }
}
export default TableQuiz;