import "./input.css"

const Input = ({onChange, value}) => {
    return (
        <input className="input" placeholder="Text" value={value} onChange={onChange}></input>
    )
}
export default Input