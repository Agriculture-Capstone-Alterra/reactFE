import "./Table.css"



export default function Table({headers, children}){

    

    return(
        <>
            <table className="table-container">
                <thead className="table-head">
                    <tr className="table-row">
                        <th className="table-th">No.</th>
                        <th className="table-th">Name</th>
                        <th className="table-th">Number</th>
                    </tr>
                </thead>
                <tbody className="table-body">
                    <tr>
                        <td>1</td>
                        <td>Nama orang disini</td>
                        <td>Nomornya euy</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Nama orang disini</td>
                        <td>Nomornya euy</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Nama orang disini</td>
                        <td>Nomornya euy</td>
                    </tr>
                
                </tbody>
            
            </table>
        </>
    )
}