

export default function Layout({children , pagetitle}){
    return (

        <>
        {/* di TopBar seharusnya bakal ada props untuk masukin title */}
        
        <div className="d-flex">
            <div style={{height: "100vh", width: "300px"}} className="bg-info">SIDEBAR</div>
            <div style={{width: "100%"}} className="d-flex flex-column">
                <div style={{height: "100px", width: "100%"}} className="bg-primary">
                    <p>TOP BAR</p>
                </div>
                <div style={{height: "1000px", width: "100%"}} className="bg-success">
                    MAIN CONTENT
                
                </div>
            
            </div>
        </div>
        </>

    )
}