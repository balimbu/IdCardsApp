const Idcard = (props) => {
    return ( 
        <div>
            <div className="card w-25 bg-info float-start mx-5 my-4" style={ {color: "blue", padding:"10px"}}>
                <div className="card-header bg-light"> <h2> Name: {props.name} </h2></div>
                <div className="card-body bg-warning">
                    <h4 className="card-title"> State: {props.state} </h4>
                    <p> ID: {props.id}</p>
                    <p className="card-text"> Age : {props.age} </p>
                </div>
                <div className="card-footer bg-muted">
                   <button className="btn btn-success"> Read More.... </button>
                </div>
            </div>
        </div>
     );
    }
 
export default Idcard;