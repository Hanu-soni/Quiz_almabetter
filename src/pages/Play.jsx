import { useState } from 'react';
import '../Styling/Play.css';
import userContext from '../useContext/useContextCreate';
import { useContext } from 'react';
import { display } from '@mui/system';
function Play() {
    const [name, setName] = useState("");//to store name of user
    const [sub, setSub] = useState("");//user will enter that subject in which he want to play the quiz.
    const [visible, setVisible] = useState(true);//Once user enter details, it will setvisible false and quiz window will appear.
    const [question, setquestion] = useState("");//will keep on changing question by fetching it from array.
    const [optionOne, setoption1] = useState("");//same
    const [optionTwo, setoption2] = useState("");//same
    const [optionThree, setoption3] = useState("");//same
    const [Result, setResult] = useState(0);//increase marks by 1 and store in Result
    const [ShowRes, setShowRes] = useState(false);//As we reach last question and user press next after this, ShowRes is set true
    const [showfinal, setshowfinal] = useState(false);//will show the result, once SHOW RESULT BUTTON IS clicked
    const [visibleTwo, setVisible2] = useState(false);//The playing screen of the quiz appears..

    const [optionColorTwo, set_option_color_two] = useState("lightpink")
    const [optionColorOne, set_option_color_one] = useState("lightpink")
    const [optionColorThree, set_option_color_three] = useState("lightpink")
    const [nosubject, setNoSubject] = useState(false);
    const[goback2,setGoback2]=useState(false);
    
    let finddata = [];
    const [count, setcount] = useState(0);
    function SubmitDetails() {

        //setVisible(false);
        //setVisible2(true);
        //return array whose subject is matched 
        // finddata = data.filter((item) => (
        //     item[0] === sub
        // ));
        // console.log(finddata)

        console.log(data);
        finddata=data.filter((item)=>{
            if(item[0]===sub)
            {
                return item;
            }
        })
        console.log(finddata);


        if(sub.length===0 || name.length===0)
        {
            setVisible(true);//Show a message that subject is not found.
        }
         if (finddata.length === 0) {
            setVisible(false);
            setVisible2(true);
            setNoSubject(true);
            console.log("No Questions found of this Subject")
            setName("");
            setSub("");
        }
        else {
            setVisible(false);
            setVisible2(true);

        }

    }
    function ChangeQuestion()//action of next button
    {
        finddata = data.filter((item) => (
            item[0] === sub

        ));
        const x = finddata[count]

        if (count < finddata.length) {
            setquestion(x[2]);//In data array, value at position 2 is question. Similarly , values are their for others....
            setoption1(x[3]);
            setoption2(x[4]);
            setoption3(x[5]);
            setcount(count + 1);
            set_option_color_one("");
            set_option_color_two("");
            set_option_color_three("");

        }
        else {
            setquestion("NO MORE QUESTION")
            setoption1("");
            setoption1("");
            setoption1("");
            setShowRes(true);
            setVisible2(false);

        }
        console.log(question)
        console.log(finddata)
        console.log(count);

    }

    // const data=useContext(userContext);
    // console.log(data);
    const [data] = useState(() => {
        const savedItem = localStorage.getItem("questions");
        const parsedItem = JSON.parse(savedItem);
        return parsedItem || "";
    });



    return (
        <div className="container-fluid">
        <div className={visible ? "background" : "background2"}>
            
            {visible &&
                <center><h1 className="h1 position-absolute top-0 start-50 translate-middle-x">Enter the info to play quiz</h1></center>}

                {visible &&
                     <center>
                     <input  className="position-absolute top-50 start-50 translate-middle-x mt-1 " placeholder="Enter Subject"  value={sub} onChange= {(event)=>setSub(event.target.value)}></input>
                       
                   <br></br>
                   <br></br>
                   <br></br>
                
                 
                   <input  className="position-absolute top-50 start-50 translate-middle-x mt-4 " placeholder="Enter Your Name"  value={name} onChange= {(event)=>setName(event.target.value)}></input>
                   </center>
        
               
                }


           
           
           
           
           
            {visible && <button placeholder="Submit" className='submit_initial'
                onClick={SubmitDetails}>Submit</button>}

            {!visible &&
                <h1 className="heading_sub">{sub}</h1>
            }

            {/* This is quiz page(visibleTwo keeping in mind that the submit details page is not their) */}
            {visibleTwo && !visible && 

                <div className='question'>{nosubject===true ? "No Questions found of this Subject" : question} 
                </div>
            }
           
           
           {/* if the subjet is not found or no question is present for that subject, then execute this so as to go back and 
           enter details again */}


            {nosubject &&
            <div> <button className={visible===false?"truevisible":"falseVisibility"} onClick={()=>{setVisible(true);}}>Go Back</button></div>
           
            }

            {/* {if it is not the case of no subject i.e subject is present as well as question  is also their, then execute this} */}
           
            {visibleTwo && !nosubject &&
                <div className='options_div'>
                    <div className={optionColorOne==="green"?'green':"options"}
                        onClick={chk_correct_1}
                    >{optionOne}

                    </div>
                    <div placeholder="Option"  className={optionColorTwo==="green"?'green':"options"}
                        onClick={chk_correct_2}
                    >{optionTwo}

                    </div>
                    <div placeholder="Option" className={optionColorThree==="green"?"green":'options'}
                        onClick={chk_correct_3}

                    >{optionThree}   

                    </div>

                </div>
                
            }
             {visibleTwo &&!nosubject&&
                <button className='button_submit' onClick={ChangeQuestion}>{count===0?"Start":"Next"}
                </button>
            }

            {/* TO SEE THE RESULT OF QUIZ AFTER THE QUIZ ENDS */}
            {
                ShowRes &&
               
                <div style={{
                    height: "10%",
                    width: "15%",
                    marginTop: "200px",
                    position:"absolute",
                    marginLeft: "150px",
                    display:"flex"}}>
                <button 
                    className='btn btn-danger'
                    onClick={Showscore}>SHOW RESULT
                </button>
                </div>
            }
             {ShowRes &&
                    <div className='question'>
                        No More Questions . Click on Show Result button to know the result 
                    </div>
             }
            {
                showfinal &&
                <center>
                    <div style={{
                    height: "30%",
                    width: "30%",

                    top:"400px",
                    left:"40%",
                    display:"flex",
                    justifyContent:"center",
                    justifyItems:"center",

                    position:"absolute",
                    fontSize: "50px",
                    fontWeight: "bolder",
                    backgroundColor:"greenyellow",
                    border:"red 2px solid"

                }}>Your Score is {Result}/{count}
                </div>

                </center>
                
            }
            {goback2 &&
            <button className='position-absolute bottom-0 start-50 translate-middle-y btn btn-primary btn-lg' onClick={gobacktoBG1}>GO BACK</button>
            }

        </div>
        </div>
    )
    function chk_correct_1() {
        //checks if already chosen anything or not.
        if (optionColorTwo === "green" || optionColorThree === "green") {
            console.log("it will not work")
        }
        else 
        {
            set_option_color_one("green")

        }
        //onClicking next button exceute this 
        finddata = data.filter((item) => (
            item[0] === sub

        ));
        const x = finddata[count - 1]
        if (x[6] === 3) {
            console.log("correct")
            setResult(Result + 1);

        }
        else {
            console.log("InCorrect")
        }
    }
    function chk_correct_2() {
        if (optionColorOne === "green" || optionColorThree === "green") {
            console.log("it will not work")
        }
        else 
        {
            set_option_color_two("green")

        }
        finddata = data.filter((item) => (
            item[0] === sub

        ));
        const x = finddata[count - 1]
        if (x[6] === 4) {
            console.log("correct")
            setResult(Result + 1);
        }
        else {
            console.log("InCorrect")
        }
    }
    function chk_correct_3() {
        if (optionColorOne === "green" || optionColorTwo === "green") {
            console.log("it will not work")
        }
        else 
        {
            set_option_color_three("green")

        }
        set_option_color_three("green")
        finddata = data.filter((item) => (
            item[0] === sub

        ));
        const x = finddata[count - 1]
        if (x[6] === 5) {
            console.log("correct")
            setResult(Result + 1);
        }
        else {
            console.log("InCorrect")
        }
    }
    function Showscore() {
        setshowfinal(true);
        setVisible2(false);
        setGoback2(true);
    }
    function gobacktoBG1()
    {
        setVisible2(false);
        setVisible(true);
        setshowfinal(false);
        setShowRes(false);
        setGoback2(false);
        setcount(0);

    }


}
export default Play;
//Timer is pending and thats it ....
//alright , I will add that now