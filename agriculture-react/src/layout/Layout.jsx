import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Topbar from "../components/Topbar/Topbar";
import "./Layout.css"


export default function Layout({children , pagetitle, breadcrumbs}){
    let crumbsize
    if(breadcrumbs){
        crumbsize = breadcrumbs.length
    }
    return (
        <>
        <div className="d-flex">
            <Sidebar/>
            <div className="d-flex flex-column layout-rightpart">
                <Topbar pagetitle={pagetitle} />
                <div className="layout-breadcrumbsdiv">
                    <p className="fonts12 text-removemargin">
                        {
                            breadcrumbs ?
                            
                            breadcrumbs.map((items, index)=>{
                                
                                if(index == crumbsize-1){
                                    return (
                                        <>
                                            <Link className="layout-crumblink fontw600 now" to={items.crumblink}>
                                                <span>  {items.crumbname}</span>
                                            </Link>
                                        </>
                                    )
                                }
                                return (
                                    <>
                                        <Link className="layout-crumblink fontw600 past" to={items.crumblink}>
                                            <span> {items.crumbname}</span>
                                        </Link><span className="fontw600 layout-crumblink-divider">/</span>
                                    </>
                                )
                            }):
                            <></>
                        }

                        
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