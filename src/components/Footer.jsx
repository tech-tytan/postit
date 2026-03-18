const Footer=(props) => {

    return (
        <div className="row">
            <div className="col-md-12">
                <h1>Footer</h1>
                <h2>Your wallet balance is {props.wb}</h2>
            </div>
        </div>
    )
}

export default Footer;