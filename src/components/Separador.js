
function Separador(props){
    let margenY = "8px",
        color = "#aaa";
    if(props.margenY){
        margenY = props.margenY;
    }
    if(props.color){
        color = props.color
    }
    return(
        <div style={{"borderTop": `1px solid ${color}`, "margin": `${margenY} 0`} }></div>
    )
}

export default Separador;