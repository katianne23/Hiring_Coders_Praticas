import './styles.css';
import { Link as LinkRoute } from "react-router-dom";

interface LinkProps{
    texto: string;
    redirect: string
}
function Link(props: LinkProps){
    return(
        <LinkRoute className='Links_menu' to={props.redirect}>
            {props.texto}
        </LinkRoute> 
    );
}

export default Link;