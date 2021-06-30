import { useState } from 'react';
import './StatusToggleBtns.css'; 

const Btn = ({selectedBtn, btnText, setSelectedBtn}) => {
    const btnClassName = selectedBtn === btnText ? 'selectedBtn' : 'unselectedBtn';
    const handleClick = () => {
        setSelectedBtn(btnText)
    };
    return (<button onClick={handleClick} className={btnClassName}>{btnText}</button>);
    
};

const StatusToggleBtns = () => {
    const [selectedBtn, setSelectedBtn] = useState('All');
    const btnTextArray = ['All','Active','Unfinished']; 
    return (
    <div className="toggleBtns">    
        {btnTextArray.map((btnText, index) => (
            <Btn key={index} btnText={btnText}  selectedBtn={selectedBtn} setSelectedBtn={setSelectedBtn}/>
        ))}
    </div>
    )
  };
  
  export default StatusToggleBtns;