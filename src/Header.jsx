function Header(props) {
    return (
        <hearder>
            <h1>Smart Task Manager</h1>
            <p>Originize your work, one task at a time.</p>
            <h3>{props.Name}</h3>
        </hearder>
    );
}

export default Header;