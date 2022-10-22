import React,{useState} from "react";
import Button from "../Button/Button";

const Card = function (props) {

    const [card, setcard] = useState(0);

    const Next = () =>{

        if(card<props.items.length-1){
            setcard((prevstate) =>{
                return prevstate+1;
            })
        }
    }

    const Prev = () =>{

        if(card >0){
            setcard((prevstate) =>{
                return prevstate-1;
            })
        }
    }



  return (
    <div className="flex justify-center items-center px-4">
      <div className="bg-white p-5 max-w-lg rounded-xl">
        <img src={props.items[card].profile} className="h-44 w-44 rounded-full mx-auto" />
        <h1 className="text-center mt-2 font-bold text-2xl">{props.items[card].name}</h1>
        <h3 className="text-center mb-2 text-lg text-blue-500 font-mono">{props.items[card].title}</h3>
        <p className="text-center text-sm text-gray-400">{props.items[card].comment}</p>
        <div className="text-center mt-5 flex items-center justify-center space-x-8">
          <Button text="<" clicked={Prev}/>
          <Button text=">" clicked={Next}/>
        </div>
      </div>
    </div>
  );
};

export default Card;
