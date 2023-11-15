import "./Table.css"



export default function Table({headers, children}){
    // passing props headers adalah array yang isinya string. bentuknya seprti berikut vv: 
    // headers = ["No.", "Nama pengguna", "Nama yang lainya", "dll"]
    
    // props children itu adalah apapun yang ada di antara tag Table pembuka dan penutup
    // contoh penggunaan vv : 
    // <Table headers={headers}>
    //     <tr>
    //             <td>1</td>
    //             <td>Nama orang disini</td>
    //             <td>Nomornya euy</td>
    //             <td>1</td>
    //             <td>Nama orang disini</td>
    //             <td>Nomornya euy</td>
    //         </tr>
    //         <tr>
    //             <td>1</td>
    //             <td>Nama orang disini</td>
    //             <td>Nomornya euy</td>
    //         </tr>
    //         <tr>
    //             <td>1</td>
    //             <td>Nama orang disini</td>
    //             <td>Nomornya euy</td>
    //         </tr>
    // </Table>
    return(
        <>
            <table className="table-container">
                <thead className="table-head ">
                    <tr className="table-row ">
                        {
                            headers ?
                            headers.map((items)=>{
                                return(
                                    <th className="table-th fontw600">{items}</th>
                                )
                            })
                            :
                            <th className="table-th fontw600">No Headers Found</th>
                        }
                    </tr>
                </thead>
                <tbody className="table-body">
                    <tr className="table-head-bodygap">
                    </tr>
                    {children}
                </tbody>
            
            </table>
        </>
    )
}