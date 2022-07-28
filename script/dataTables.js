let dataTable

function loadTable(data) {
  $(document).ready( function () {
    dataTable = $('#scoreTable').DataTable({
      "data" : data,
      columns : [
        { data : "nama_mahasiswa" },
        { data : "nama_matakuliah" },
        { data : "nilai" },
        { data : "ket_lulus" },
      ],
      "columnDefs": [{"render": createDeleteBtn, "data": null, "targets": [4]}],
    })
  })
}

function createDeleteBtn() {
  return '<button id="deleteBtn" type="button" onclick="myFunc()" class="btn btn-danger btn-xs">Delete</button>';
}

function myFunc() {
  console.log("Button was clicked!!!");
}


const getTableData = async () => {
  const tableData = await window.onload()
  console.log(tableData.data)
  loadTable(tableData.data)
  return tableData
} 

getTableData()

reloadBtn.click( async () => {
  const tableData = await window.onload()
  console.log(tableData.data)
  dataTable.clear()
  dataTable.rows.add(tableData.data).draw()
})




