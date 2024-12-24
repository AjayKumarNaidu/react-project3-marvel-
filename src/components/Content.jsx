import bgImg from '/og-1.jpeg'

export default function Content(props){

  const styles = {
    display: 'inline-block',
    padding: '0px',
    fontSize: '15rem',
    backgroundImage: `url(${bgImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    fontFamily: 'sans-serif',
    fontWeight: '800',
  };
  

  return (
    <div className="content" onClick={()=>{ props.intoPhase(props.index) }}>
      <p style={styles}>{props.title}</p>
    </div>
  );
}