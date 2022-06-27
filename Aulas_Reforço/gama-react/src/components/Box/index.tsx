import "./styles.css";

interface BoxProps{
    background: string;
    children: JSX.Element;
}
function Box(props: BoxProps){
    return<section className={`box ${props.background}`}>
        {props.children}
    </section>;
}

export default Box;