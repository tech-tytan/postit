import cb from "../images/contact-bg.jpg"

const Main=(props) => {
    let sn=1;

    return (
        <div className="col-md-8">
            <h3>Main Section</h3>
            <img src={cb} alt="background image" className="img-fluid" />
            <table className="table">
                <thead>
                <tr>
                    <th>S/N</th>
                    <th>Product Name</th>
                    <th>Product Price</th>
                </tr>
                </thead>
                <tbody>
                    {props.products.map((pro,index) => {
                        return <tr key={pro.id}>
                            <td>{sn++}</td>
                    <td>{pro.name}</td>
                    <td>{pro.price}</td>
                </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Main;