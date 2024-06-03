import { Link } from "react-router-dom";

const MainHeader = () => {

    return (
        <header>
            <nav>
                <ul>    
                    <li><Link to ={'/'}>Home</Link> </li>
                    <li><Link to ={'/produtos'}>Produtos</Link> </li>
                </ul>
            </nav>
        </header>
    )


}
export default MainHeader;