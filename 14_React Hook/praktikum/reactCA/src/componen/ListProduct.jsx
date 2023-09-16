function ListProduct() {
  return (
    <>
      <hr />
      <div className="col-7 row mt-2">
        {" "}
        <h4> List Account </h4>
      </div>
      <table className="table table-striped col-8">
        {/* <th scope="col">No</th> */}
        <tbody>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name </th>
            <th scope="col">Username </th>
            <th scope="col">Email </th>
            <th scope="col">Gender</th>
            <th scope="col">Address</th>
            <th scope="col">Address 2</th>
            <th scope="col">Nationally</th>
            <th scope="col">Language</th>
          </tr>
        </tbody>
      </table>
    </>
  )
}
export default ListProduct 