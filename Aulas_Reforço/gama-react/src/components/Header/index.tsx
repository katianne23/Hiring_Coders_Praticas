import Link from "../Link";
import Logo from '../../assets/images/logo.png'
import "./styles.css"

function Header(){
    return(
        <header>
            <img src={Logo} alt="Logo do dindin" />
            <p>Din Din</p>
            <nav>
                <Link texto="Curso" redirect="/curso"/>
                <Link texto="Blog" redirect="/blog"/>
                <Link texto="Contato" redirect="/contato"/>
            </nav>
        </header>
    );
}

export default Header;