const req = require("express/lib/request");

let profilKader=[{nik:'11201001', nama:'Shintia', jabatan:'ketua IPPNU', create:new Date()},
                {nik:'11201002', nama:'Ghofar', jabatan:'ketua IPNU', create:new Date()},
                {nik:'11201003', nama:'Anisa', jabatan:'sekretaris IPPNU', create:new Date()},

                ]
                
                module.exports={
                    getprofilKader: profilKader,

                    insert :(req)=>{
                        const newItem={
                            nik:req.body.nik,
                            nama:req.body.nama,
                            telepon:req.body.telepon
                        }
                        profilKader.push(newItem)
                        return newItem
                    }
                }

