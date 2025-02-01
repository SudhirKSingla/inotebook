const Alert = (props) => {
    return (
        <div>
            <div className="alert alert-primary alert-dismissible" role="alert">
                {props.message}
                <button type="button" className="btn-close mx-3" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>
    )
}

export default Alert