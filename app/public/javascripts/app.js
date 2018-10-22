function deleteData (event, row) {
  //var token = document.querySelector('meta[name="csrf-token"]').getAttribute('content')

  try {
    const idb = row.parentElement.getAttribute('id') || null
    const id = idb.substring(0, idb.length - 1)

    fetch('/api/feeds/' + id, {
      method: 'delete',
      credentials: 'same-origin'
    })
      .then((res => {
        if (res.status === 200)
          this.deleteRow(row)
      }))
  }
  catch (err) {
    console.log(err)
  }
}

function deleteRow (r) {
  var row = r.parentNode.parentNode
  var idx = row.rowIndex
  var table = row.parentNode
  table.deleteRow(idx)
}

function showButton (row) {
  try {
    const id = row.getAttribute('name') || null
    const b = document.getElementById(id + 'b').childNodes[0]
    b.style.visibility = 'visible'
  }
  catch (e) {

  }

}

function hideButton (row) {
  try {
    const id = row.getAttribute('name') || null
    const b = document.getElementById(id + 'b').childNodes[0]
    b.style.visibility = 'hidden'
  }
  catch (e) {

  }
}
