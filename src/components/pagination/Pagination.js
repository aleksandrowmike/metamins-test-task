import "./Pagination.scss";
function Pagination() {
    return (
        <div className="d-flex align-items-center pagination justify-content-center">
            <div className="arrow-left"><i className="icon-left"></i></div>
                <div className="numberPage">
                    <input className="input" type="text"/>
                </div>
                <div className="devider">of</div>
                <div className="numberPage"><input className="input" type="text"/></div>
            <div className="arrow-right">
               <i className="icon-right"></i>
           </div>
        </div>
    );
}

export default Pagination;