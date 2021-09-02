
function Separador({color = "#aaa", margenY = "8px" }){
    return(
        <div style={{"borderTop": `1px solid ${color}`, "margin": `${margenY} 0`} }></div>
    )
}

export default Separador;