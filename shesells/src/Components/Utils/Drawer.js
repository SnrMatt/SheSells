export default function Drawer(props){ 
    return(
        <div style = {{backgroundColor:`rgb(0,0,0,0.5)`, height: 'calc(100vh - 10rem)'}}   className = 'transition-all duration-300'>
        <div className="h-80">
        <div className = {`${props.effect + " relative bg-white ease-out transition-all duration-300"} `} >
              
        </div>
        </div>
        </div>
    );
}