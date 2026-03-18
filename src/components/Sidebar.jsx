const Sidebar=(props) => {
    console.log(props.students);

    return (
        <div className="col-md-4">
            <h3>Sidebar Section</h3>
            <ul>
                {props.students.map((std,index) => <li key={index}>{std}</li>)}
            </ul>
        </div>
    );
}

export default Sidebar;