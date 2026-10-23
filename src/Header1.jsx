function Header1(props) {
    return (
        <>
            <h1>This Is the Header1 Contant</h1>
            <p>This is the Header1 Paragraph.</p>

            <h2>{props.country}</h2>
        </>
    );
}
export default Header1;
