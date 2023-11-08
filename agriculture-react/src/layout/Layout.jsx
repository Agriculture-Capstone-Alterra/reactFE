

export default function Layout({children , pagetitle}){
    return (

        <>
        {/* di TopBar seharusnya bakal ada props untuk masukin title */}
        <TopBar /> 
        <SideBar/>
        <div className="container-fluid">
            {children}
        </div>
        </>

    )
}