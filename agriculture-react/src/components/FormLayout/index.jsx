const FormLayout = ({children, onSubmit}) => {
    return (
        <>
            <div className="col-md-12">
                <form className="form needs-validation" onSubmit={onSubmit}>
                    {children}
                </form>
            </div>
        </>
    )
}

export default FormLayout