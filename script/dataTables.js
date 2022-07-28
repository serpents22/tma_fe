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
    })

    $('#scoreTable tbody').on('click', 'button', function () {
      var data = table.row($(this).parents('tr')).data();
      alert(data[0] + "'s salary is: " + data[5]);
  });

  })
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




