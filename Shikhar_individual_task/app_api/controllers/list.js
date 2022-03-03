const mongoose=require('mongoose');
const list=mongoose.model(`Mobile`);

const getlist=function(req,res){
    list
        .find()
        .exec(function(err,mobiledb){
            if(err){
                res
                    .status(404)
                    .json(err);
                return;
            }
            res
                .status(200)
                .json(mobiledb);
        });
};
const createlist=function(req,res){
    list
        .create({
            Name:req.body.Name,
            Image:req.body.Image,
            Feature:[{
                    Storage:req.body.Storage1,
                    Color:req.body.Color1,
                    Price:req.body.Price1
                },
                {
                    Storage:req.body.Storage2,
                    Color:req.body.Color2,
                    Price:req.body.Price2
                },
                {
                    Storage:req.body.Storage3,
                    Color:req.body.Color3,
                    Price:req.body.Price3
                }

            ],            
        },(err,mobiledb)=>{
            if(err){
                res
                    .status(400)
                    .json(err);
            }else{
                res
                    .status(201)
                    .json(mobiledb)
            }
        });
 };
const getSingle=function(req,res){
    list
        .findById(req.params.listid)
        .exec((err,mobiledb)=>{
            if(!mobiledb){
                return res
                        .status(404)
                        .json({
                            'message':'Message not found'
                        });
            }
            else if(err){
                return res
                        .status(404)
                        .json(err);
            }
            res
                .status(200)
                .json(mobiledb);
        });        
};
const updateSingle=function(req,res){
    if(!req.params.listid){
        res
            .status(404)
            .json({
                'message':'Not found,item id is not found'
            });
            return;
    }
    list.findById(req.params.listid)
        .exec((err,mobiledb)=>{
            if(!mobiledb){
                res
                    .status(404)
                    .json({
                        "message":"listid is not found"
                    });
                return;
            }else if(err){
                res
                    .status(400)
                    .json(err);
                    return;
            }
            mobiledb.Name=req.body.Name;
            mobiledb.Image=req.body.Image;
            mobiledb.Feature=[{
                    Storage:req.body.Storage1,
                    Color:req.body.Color1,
                    Price:req.body.Price1
                },
                {
                    Storage:req.body.Storage2,
                    Color:req.body.Color2,
                    Price:req.body.Price2
                },
                {
                    Storage:req.body.Storage3,
                    Color:req.body.Color3,
                    Price:req.body.Price3
                }
            ];
            mobiledb.save((err,mobiledb)=>{
                if(err){
                    res
                        .status(404)
                        .json({
                            "message":"listid is not found"
                        });
                    return;
                }else{
                    res
                        .status(400)
                        .json(mobiledb);
                        
                }
            });
        });  
    };
const deleteSingle=function(req,res){
    const listid=req.params.listid;
    if(listid){
        list
            .findByIdAndRemove(listid)
            .exec((err,mobiledb)=>{
                if(err){
                    res
                        .status(404)
                        .json(err);
                    return;
                }
                res
                    .status(204)
                    .json(mobiledb);
            });
        }
        else{
            res
                .status(404)
                .json({'message':'No listid'});
        }
};

module.exports={
   getlist,
   createlist,
   getSingle,
   updateSingle,
   deleteSingle
};