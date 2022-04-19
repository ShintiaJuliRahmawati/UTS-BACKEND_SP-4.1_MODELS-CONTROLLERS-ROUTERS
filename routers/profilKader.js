const express=require("express");
const routerprofilKader=express.Router()
const controllerprofilKader=(require('.../controllers/profilKader'))


routerprofilKader.route('/dosen')
    .get(controllerprofilKader.getKader)

    .post(controllerprofilKader.insert)

routerprofilKader.route('/kader')
    .get((req,res)=>{
        res.send(kader)
    })

    .post((req,res)=>{
        res.send('data kader sukses tersimpan')
    })

routerprofilKader.route('/kader/:nik')
    .put(controllerprofilKader.update)

    .delete(controllerprofilKader.delete)
    .get(controllerprofilKader.getKaderByNik)

    routerprofilKader.get('kader/:nama/:jabatan',(req,res)=>{
        const nama=req.params.nama
        const jabatan=req.params.jabatan
        res.send('kader dengan nama:' + nama+ 'jabatan' +jabatan)
    })

module.exports=routerprofilKader 