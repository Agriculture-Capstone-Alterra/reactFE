const Breadcrumb = ({children}) => {
    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    {children}
                </ol>
            </nav>
        </>
    )
}

export default Breadcrumb