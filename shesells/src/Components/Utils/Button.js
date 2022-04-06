export default function Button(props){
  
    return(
<button className="hover:underline" onClick={()=>{props.change()}}>
    <span>{props.children}</span>
</button>
    );
}