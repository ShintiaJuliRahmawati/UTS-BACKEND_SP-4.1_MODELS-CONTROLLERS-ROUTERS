const modelprofilKader=require('../models/profilKader')

const cari=(arrData,nik)=>{
    ketemu =-1
    indeks =0
    while (ketemu== -1 && indeks < arrData.length) {
        if(arrData[indeks].nik == nik){
            ketemu=indeks
            return indeks
        }
        indeks++
    }
    return -1
}

module.exports={
    getprofilKader:(req,res)=>{
        profilKader=modelprofilKader.getprofilKader
        res.json(profilKader)
    },
    insert : (req,res)=>{
        newItem=modelprofilKader.insert(req)
        res.status(201).json(newItem)
    },
    getprofilKaderByNik: (req,res)=>{
        profilKader=modelprofilKader.getprofilKader;
        nik= req.params.nik;
        indeks=cari(profilKader,nik);
        if(indeks!= -1){
            const dataKader={nik:profilKader[indeks].nik,
                            nama:profilKader[indeks].nama,
                            jabatan:profilKader[indeks].jabatan
            
        }
        res.json(dataKader)
    }
    else{
        res.send('dosen dengan nik: '+nik+ 'tidak ditemukan')
    }

    res.send('dosen dengan nik:' +req.params.nik)
},

update:(req,res)=>{
    //update
    profilKader=modelprofilKader.getprofilKader;
    nik=req.params.nik
    indeks=cari(profilKader,nik)
    if(indeks!= -1){
        profilKader[indeks].nik=nik
        profilKader[indeks].nama=req.body.nama
        profilKader[indeks].jabatan=req.body.jabatan

        res.json(profilKader[indeks])
    }
    else{
        res.send('data kader dengan nik '+req.params.nik + 'tidak ditemukan')
    }
},
delete : (req,res)=>{
    nik=req.params.nik
    profilKader=modelprofilKader.getprofilKader;
    indeks=cari(profilKader,nik);

    if (indeks !=-1){
        profilKader.splice(indeks,2)

        res.send('kader dengan nik '+nik+ 'telah dihapus')
    }
    else{
        res.send('kader dengan nik '+req.params.nik+ 'tidak ditemukan')
    }
}
}