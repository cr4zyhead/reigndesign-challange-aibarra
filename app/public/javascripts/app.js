async function deletedata (event, row) {
  try {
    const id = row.getAttribute('name') || null
    const response = await fetch('/api/feeds/' + id, {method: 'delete'})
    const res = await response
    console.log(res)
    if (res.status === 200)
      this.deleterow(row)
  }
  catch (err) {
    console.log(err)
  }
}

function deleterow (r) {
  var row = r.parentNode.parentNode
  var idx = row.rowIndex
  var table = row.parentNode
  table.deleteRow(idx)
}
