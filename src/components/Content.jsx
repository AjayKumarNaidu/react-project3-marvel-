export default function Content(props){
  return (
    <div className="content" onClick={()=>{ props.intoPhase(props.index) }}>
      <p>{props.title}</p>
    </div>
  );
}