
const Button = function(props){
    return (
        <button onClick={props.clicked} className={`font-bold text-3xl text-blue-500 ${props.classes}`}>{props.text}</button>
    )
}

export default Button;