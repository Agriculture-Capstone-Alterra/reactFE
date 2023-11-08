import Filter from "../../components/Filter";
import Table from "../../components/Table/Table";

export default function TestPage() {
  return (
    <>
      <div style={{ padding: "30px", backgroundColor: "" }}>
        <div className="row">
          <div className="col-md-9">
            <Table></Table>
          </div>
          <div className="col-md-3">
            <Filter />
          </div>
        </div>
      </div>
      <div style={{ padding: "30px" }}></div>
    </>
  );
}
