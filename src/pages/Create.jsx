import Navbar from "../components/Navbar";
import { Card } from "react-bootstrap"
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { HomeCard } from '../components/HomeCard';
import { useNavigate } from 'react-router-dom';
import '../Styling/Create.css'
import '../CSS/create.css';


function Create() {



    const [show, setShow] = useState(true);
    const [show1, setShow1] = useState(true);
    const navigate = useNavigate();

    const handleClose = () => setShow(false);
    const handleClose3 = () => setMissing(false);
    const handleClose1 = () => { setShow1(false); setcountOne(1); }
    const [q1, setq1] = useState(false);
    const [q2, setq2] = useState(false);
    const [q3, setq3] = useState(false);
    const [q4, setq4] = useState(false);
    const [save, setSave] = useState(false);
    let OptionList = [];
    const [countOne, setcountOne] = useState(1);
    const [finalSubmit, setfinalSubmit] = useState(false);
    const [optionOne, setoptionOne] = useState("");
    const [optionTwo, setoptionTwo] = useState("");
    const [optionThree, setoptionThree] = useState("");
    const [correct, setcorrect] = useState(0);
    const [chk_op1, set_ck_op1] = useState("");
    const [chk_op2, set_ck_op2] = useState("");
    const [chk_op3, set_ck_op3] = useState("");
    const [ShowOptions, setShowOptions] = useState(false);
    const [Question, setQuestion] = useState("");
    const [Subject, setSubject] = useState("");
    const [Date, setDate] = useState("");
    const [missing, setMissing] = useState(false);
    const [isCheckedThree, setIsCheckedThree] = useState(false);
    const [isCheckedTwo, setIsCheckedTwo] = useState(false);
    const [isCheckedOne, setIsCheckedOne] = useState(false);
    const[activate,setactivate]=useState("deactivate");

    function SubmitOption() {

        //if user miss out anything , then this condition will execute
        if (Subject.length === 0 || Date.length === 0 || Question.length === 0 || optionOne.length === 0 || optionTwo.length === 0 || optionThree.length === 0 || correct.length === 0) {
            setMissing(true);

        }
        //if user miss out subject name or date after entering 1st question
        else if (countOne > 1 && (Subject === "" || Date === "")) {
            setMissing(true);
        }



        //if above 2 condition is false , then everything goes normal and it will 
        //increase the counter
        else {
            var new_detail = [Subject, Date, Question, optionOne, optionTwo, optionThree, correct,activate];

            if (localStorage.getItem('questions') == null) {
                localStorage.setItem('questions', '[]');
            }

            var old_question = JSON.parse(localStorage.getItem('questions'));
            old_question.push(new_detail);
            localStorage.setItem('questions', JSON.stringify(old_question));
            
            setQuestion("");
            setoptionOne("");
            setoptionTwo("");
            setoptionThree("");
            setcountOne(countOne + 1);
            setcorrect(0);
            set_ck_op1("");
            set_ck_op2("");
            set_ck_op3("");
            setIsCheckedOne(false)
            setIsCheckedTwo(false)
            setIsCheckedThree(false)
            console.log(countOne)
        }

    }
    function SaveDetails() {

        if (countOne <= 1 && Subject.length === 0 && Date.length === 0) {
            setMissing(true);
        }

        else {
            setSave(true);
            setDate("");
            setSubject("");


        }

    }
    useEffect(() => { }, [])
    useEffect(() => { }, [isCheckedOne])



    return (

        <div>

            <Navbar />
            <div className="row-gap-3">
            <div class="p-2 g-col-6"></div>
            <div class="p-2 g-col-6"></div>
            <div class="p-2 g-col-6"></div>
            </div>
            {!q1 &&
           <div class=" container  ">
           
               <Modal className='d-flex justify-content-center' show={show} onHide={handleClose}>
                   <Modal.Header closeButton>
                       <Modal.Title>Select Question type</Modal.Title>
                   </Modal.Header>
                   <Modal.Body>
                       <div class="d-flex flex-column mb-3 grid gap-3 ">
                           <Button onClick={b1}>MCQ-one option correct</Button>
                           <Button onClick={b2}>Description</Button>
                           <Button onClick={b3}>MCQ-two option correct</Button>
                           <Button onClick={b4}>Short Answer</Button>
                           <div className="text-danger fw-bolder fs-6">Only 1st option is available</div>
                       </div>
                   </Modal.Body>
               </Modal>
           
            </div>
               
            }
            {save && <div className="position-relative">
                <div className="position-absolute top-50 start-50 translate-middle">
                <Modal show={show1} onHide={handleClose1} className="position-absolute top-50 start-50 translate-middle"  style={
                {
                    height: "200px",
                    display: "inline",
                    width: "400px",
                    border: "2px solid grey",
                }
            }>

                <Modal.Header closeButton>
                    <Modal.Title style={{
                        fontWeight: "bold",
                        fontSize: "20px",
                        left: "px",
                        position: "relative"
                    }}>NOTICE</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <b>You have successfully Added {countOne - 1 + " "} Questions</b>
                </Modal.Body>
            </Modal>
                    
                    </div>

            
            <Modal show={show1} onHide={handleClose1} className="position-absolute top-50 start-50 translate-middle"  style={
                {
                    height: "200px",
                    display: "inline",
                    width: "400px",
                    border: "2px solid grey",
                }
            }>

                <Modal.Header closeButton>
                    <Modal.Title style={{
                        fontWeight: "bold",
                        fontSize: "20px",
                        left: "px",
                        position: "relative"
                    }}>NOTICE</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <b>You have successfully Added {countOne - 1 + " "} Questions</b>
                </Modal.Body>
            </Modal>
                

             </div>
            }
            
            

            {/* 
                    //On entering save ,add Question if anything is missing, we will get error */}
            <Modal show={missing} onHide={handleClose3} style={
                {
                    height: "200px",
                    display: "inline",
                    width: "400px",
                    border: "2px solid grey",
                    margin: "25% 50%"
                }
            }>

                <Modal.Header closeButton>
                    <Modal.Title>NOTE</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <b> Something is missing</b>
                </Modal.Body>



            </Modal>











            {q1 && <h2 style={{ fontWeight: "bolder", marginTop: "20px", marginLeft: "140px" }}>Create New Quiz</h2>}
            {q1 &&
                <Card style={{
                    height: "900px", width: "1200px", margin: "auto", border: "5px solid blue", display: "flex",
                    flexWrap: "wrap"
                }}>

                    {/* Input command for DATE */}
                    <input placeholder="  Enter Date" style={{
                        marginTop: "40px",
                        width: "10%",
                        justifyContent: "center",
                        alignContent: "center",
                        position: "absolute",
                        marginLeft: "1000px",
                        marginTop: "50px",
                        border: "3px solid green",
                        display: "flex",



                    }} onChange={DateOfQuiz}
                        value={Date}                         >


                    </input>




                    <Card style={{
                        height: "300px",
                        width: "70%",
                        justifyContent: "center",
                        alignContent: "center",
                        position: "absolute",
                        marginLeft: "100px",
                        marginTop: "50px",
                        border: "3px solid lightgrey",
                        display: "flex"

                    }}>
                        <div className="row-mb-3">
                            <div className="col-sm-10">
                                <input placeholder="Subject name" style={{
                                    height: "50px",
                                    width: "50%",
                                    position: "relative",
                                    marginLeft: "50px",
                                    marginTop: "25px",
                                    border: "3px solid blue",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    fontFamily: "cursive",
                                    fontWeight: "bolder",
                                    fontSize: "20px",



                                }}
                                    value={Subject}
                                    onChange={AddTitle}>

                                </input>

                            </div>
                        </div>



                        <div className="col-sm-10">
                            <textarea placeholder="Add Description" style={{
                                height: "150px",
                                width: "70%",
                                position: "relative",
                                marginLeft: "50px",
                                marginTop: "40px",
                                border: "3px solid blue",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                fontFamily: "cursive",
                                fontWeight: "bolder",
                                fontSize: "20px",


                            }}>

                            </textarea>

                        </div>
                    </Card>
                    <input placeholder="Write Question here" style={{
                        height: "50px",
                        width: "60%",
                        marginTop: "400px",
                        marginLeft: "90px",
                        position: "absolute",
                        border: "3px solid red",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontFamily: "cursive",
                        fontWeight: "bolder",
                        fontSize: "20px",

                    }}
                        onChange={AddQuestion}
                        value={Question}>


                    </input>



                    <div style={{
                        marginTop: "400px",
                        marginLeft: "1000px",
                        height: "50px",
                        width: "10%",
                        display: "flex",
                        justifyContent: "center",
                        border: "5px solid brown",
                        position: "absolute",

                        fontWeight: "bolder",
                        fontSize: "20px",


                    }}>Question{" " + countOne}
                    </div>



                    <Card style={{
                        height: "99px",
                        width: "296px",
                        marginLeft: "100px",
                        marginTop: "500px",
                        border: "2px solid grey",



                    }}>
                        <input placeholder="Option" style={{
                            height: "45px",
                            width: "290px",
                            border: "2px solid grey",
                            margin: "auto",
                            fontFamily: "cursive",
                            fontWeight: "bolder",
                            fontSize: "20px",
                        }}
                            onChange={AddOptionOne}
                            value={optionOne}>

                        </input>
                        <div className={isCheckedOne ? "option3backgroundgreen" : "option3backgroundgrey"}><span style={{ top: "-10px", left: "20px", position: "relative" }}>CORRECT</span>
                            <input placeholder="Correct" type="checkbox" style={{
                                height: "40px",
                                left: "240px",
                                position: "relative"

                            }} checked={isCheckedOne} onChange={checkOption1}>
                            </input>


                        </div>

                    </Card>

                    <Card style={{
                        height: "99px",
                        width: "296px",
                        marginLeft: "50px",
                        marginTop: "500px",
                        border: "2px solid grey",

                    }}>
                        <input placeholder="Option" style={{
                            height: "45px",
                            width: "290px",
                            border: "2px solid lightblue",
                            margin: "auto",
                            fontFamily: "cursive",
                            fontWeight: "bolder",
                            fontSize: "20px",


                        }}
                            onChange={AddOptionTwo}
                            value={optionTwo}>
                        </input>
                        <div className={isCheckedTwo === true ? "option3backgroundgreen" : "option3backgroundgrey"}><span style={{ top: "-10px", left: "20px", position: "relative" }}>CORRECT</span>
                            <input placeholder="Correct" type="checkbox" style={{
                                height: "40px",
                                left: "240px",
                                position: "relative"

                            }} checked={isCheckedTwo === true} onChange={checkOption2}>
                            </input>


                        </div>


                    </Card>
                    <Card style={{
                        height: "99px",
                        width: "296px",
                        marginLeft: "-650px",
                        marginTop: "650px",
                        border: "2px solid grey",

                    }}>
                        <input placeholder="Option" style={{
                            height: "45px",
                            width: "290px",
                            border: "2px solid grey",
                            margin: "auto",
                            fontFamily: "cursive",
                            fontWeight: "bolder",
                            fontSize: "20px",

                        }}
                            onChange={AddOptionThree}
                            value={optionThree}>
                        </input>
                        <div className={isCheckedThree === true ? "option3backgroundgreen" : "option3backgroundgrey"}><span style={{ top: "-10px", left: "20px", position: "relative" }}>CORRECT</span>
                            <input placeholder="Correct" type="checkbox" style={{
                                height: "40px",
                                left: "240px",
                                position: "relative"

                            }} checked={isCheckedThree === true} onChange={checkOption3}>
                            </input>


                        </div>


                    </Card>
                    <br>
                    </br>
                    <button style={{
                        height: "40px",
                        width: "20%",
                        marginTop: "68%",
                        marginLeft: "40%",
                        position: "absolute",
                        display: "flex",
                        flexWrap: "wrap",
                        color: "#0096FF",
                        backgroundColor: "white",
                        border: "3px solid #0096FF ",
                        fontWeight: "bolder",
                        cursor: "pointer"

                    }} type="submit" onClick={SubmitOption}>[+] Add Questions</button>
                    <button style={{
                        height: "40px",
                        width: "100px",
                        marginTop: "850px",
                        marginLeft: "250px",
                        color: "white",
                        backgroundColor: "blue",
                        border: "3px solid  ",
                        fontWeight: "bolder",
                        cursor: "pointer"

                    }} type="submit"
                        onClick={SaveDetails}
                    >Save</button>
                    <button style={{
                        height: "40px",
                        width: "100px",
                        marginTop: "850px",
                        marginLeft: "-1000px",
                        color: "white",
                        backgroundColor: "blue",
                        border: "3px solid  ",
                        fontWeight: "bolder",
                        cursor: "pointer"

                    }} type="submit" onClick={Goback}>Back</button>




                </Card>
            }




            {q2 && <h2 style={{ marginTop: "20px", marginLeft: "140px" }}>Create New Quiz For Description Type</h2>}


            {q3 && <h2 style={{ marginTop: "20px", marginLeft: "140px" }}>Create New Quiz</h2>}







            {q4 && <h2 style={{ marginTop: "20px", marginLeft: "140px" }}>Create New Quiz For Short Answer Type</h2>}



            {ShowOptions && <h6 style={{
                marginTop: "10px",
                marginLeft: "10px",
                position: "absolute",
                color: "black"

            }}>{optionOne} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {optionTwo}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {optionThree}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h6>}




        </div>
    )
    function b1() {
        setq1(true)
        setShow(false)
    }
    function b2() {
        setq2(true)
        setShow(false)
    }
    function b3() {
        setq3(true)
        setShow(false)
    }
    function b4() {
        setq4(true)
        setShow(false)
    }
    function Goback() {
        setq1(false);
        setq2(false);
        setq3(false);
        setq4(false);
        setShow(true);
        setShowOptions(false);
        setoptionOne("");
        setoptionTwo("");
        setoptionThree("");
        // localStorage.setItem('questions', '[]');

    }


    // function SubmitOption()
    // {

    //      OptionList=[optionOne,optionTwo,optionThree];
    //      setShowOptions(true)
    // }




    function AddOptionOne(event) {

        console.log("success")
        setoptionOne(event.target.value)
        console.log(optionOne)

    }

    function AddOptionTwo(event) {
        setoptionTwo(event.target.value)
        console.log(optionTwo)
    }

    function AddOptionThree(event) {
        setoptionThree(event.target.value)
        console.log(optionThree);
    }
    function AddQuestion(event) {
        setQuestion(event.target.value);
        console.log(Question);
    }

    function AddTitle(event) {
        setSubject(event.target.value);
    }
    function DateOfQuiz(event) {
        setDate(event.target.value);
    }
    function checkOption1() {
        //   setIsCheckedOne(isCheckedOne===false?true:false);
        // setcorrect(isCheckedOne===true?3:0);
        // console.log(correct);
        setIsCheckedOne(true);
        setcorrect(3);
    }
    function checkOption2() {
        setIsCheckedTwo(true);
        setcorrect(4);

    }
    function checkOption3() {

        setIsCheckedThree(true);
        setcorrect(5);

    }
}











export default Create;