import Table from "../../components/Table/Table";
import Layout from "../../layout/Layout";

export default function TestPage(){

    const headers= ["Ngetest ioni satu", "kedua", "Ketiga", "keempat"]
    return(
        <>
        {/* <div style={ {padding:"30px", backgroundColor: "grey"}}>
            <Table headers={headers}>
                <tr>
                        <td>1</td>
                        <td>Nama orang disini</td>
                        <td>Nomornya euy</td>
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
            </Table>
        </div> */}
        <Layout/>
        
        </>
    )
}