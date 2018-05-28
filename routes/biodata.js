const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  req.con.query('select * from biodata', function (err, rows) {
    res.send(rows)
  })
})

router.post('/', function (req, res) {
  const biodata = req.body;
  req.con.query(`insert into biodata set nama = '${biodata.nama}', alamat = '${biodata.alamat}'`, function (err) {
    res.send({success:true})
  })
})

router.get('/:id', function (req, res) {
  req.con.query(`select * from biodata where id_biodata = ${req.params.id}`, function (err, rows) {
    res.send(rows[0])
  })
})

router.put('/:id', function (req, res) {
  const biodata = req.body;
  req.con.query(`update biodata set nama = '${biodata.nama}', alamat = '${biodata.alamat}' WHERE id_biodata = ${req.params.id}`, function (err) {
    res.send({success:true})
  })
})

router.delete('/:id', function (req, res) {
  req.con.query(`delete from biodata WHERE id_biodata = ${req.params.id}`, function (err) {
    res.send({success:true})
  })
})

module.exports=router


