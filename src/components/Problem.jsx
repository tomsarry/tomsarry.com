const Problem = (props) => {
  const getDiff = () => {
    if (props.Difficulty <= 2) {
      return "easy";
    } else if (props.Difficulty <= 4) {
      return "medium";
    }
    return "hard";
  }
  return ( 
    <div className="problem">
      <span className="title">{props.Name}</span>
      <div className="right">
        <span className={getDiff()+" difficulty"}>{props.Difficulty}</span>
        <span className="link-span">
          <a href={props.Link} className="link" rel="noreferrer" target="_blank">link</a>
        </span>
      </div>
    </div>
   );
}
 
export default Problem;