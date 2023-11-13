import Sidebar from "../components/Sidebar/Sidebar";
import Topbar from "../components/Topbar/Topbar";
import "./Layout.css"


export default function Layout({children , pagetitle, breadcrumbs}){
    return (

        <>
        
        <div className="d-flex">
            <Sidebar/>
            <div className="d-flex flex-column layout-rightpart">
                <Topbar pagetitle={pagetitle} />
                <div className="layout-breadcrumbsdiv">
                    <p className="fonts12 text-removemargin">
                        <span className="fontw600">{breadcrumbs}</span>
                        <span className="fontw600 text-secondary">{breadcrumbs}</span>
                    </p>
                </div>
                <div className="layout-maincontent">
                    {children}
                </div>
            
            </div>
        </div>
        </>

    )
}