import "../Style/Status.css";

function Status({text, value, list, state: {cur, action}}) {
  return (
    <div 
        style={{backgroundColor: cur === value && "rgb(179, 194, 208)"}}
        className="c-status-text"
        onClick={() => action(value)}
      >
        <p id="c-status-text">{text}</p>
        {
          (value === "pending" && list.length > 0) && (
            <div style={{backgroundColor: "red", width: "8px", height: "8px", borderRadius: "50px", marginLeft: "5px"}}/>
          )
        }
    </div>
  )
}

export default Status;