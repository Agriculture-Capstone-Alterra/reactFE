const Invalid = ({errormsg}) => {
    return (
        <>
            <div className="invalid-feedback">
                {errormsg}
            </div>
        </>
    )
}

export default Invalid