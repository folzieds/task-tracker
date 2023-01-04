import PropTypes from "prop-types";
import Button from "./Button";
const Header = ({ title }) => {
    const onClick = () => {
        console.log('Clicked');
    }
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button onClick={onClick} color = 'black' text= 'Add'/>
        </header>
    )
}

Header.defaultProps = {
    title: "Task Tracker",
}

Header.protoTypes = {
    title: PropTypes.string.isRequired,
}
export default Header;