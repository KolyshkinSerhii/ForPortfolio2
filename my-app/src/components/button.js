import "./button.css"

const Button = ({onClick}) => {
    return (
        <button className="button" onClick={onClick}>Add</button>
    )
}
export default Button