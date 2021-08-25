import { useParams } from "react-router-dom";
import GridProductos from "../components/GridProductos";

function CategoriasProductos(){
    const {id} = useParams();
    return (
        <>
            <div> esta es la categoria de productos</div>
            <GridProductos idCategoria={id}/>
        </>
    )
}

export default CategoriasProductos;