// const ListArray=[{
//     Image:"images/1.png",
//     Name:"Pheonix 13",
//     Price:"$899"
// },
// {
//     Image:"images/2.png",
//     Name:"Pheonix 13 Ultra",
//     Price:"$1199"
// },
// {
//     Image:"images/3.png",
//     Name:"Pheonix 13 mini",
//     Price:"$699"
// }];

// const list=function(req,res){
//     res.render('list-display',
//     {
//         MobileList:ListArray,
//         title:'List Page'
//     });
// };

const{response}=require('express');
const request=require('request');
const apiOptions={
    server:'http://localhost:3000'
};
const _renderCreatePage=function(req,res){
    res.render('create',{
        title:"Add new Product"
    });
};
const addNewProduct=function(req,res){
    _renderCreatePage(req,res);
};

const doAddNewProduct=function(req,res){
    const path='/api/list';
    const postdata={
            Name:req.body.Name,
            Image:"Images/"+req.body.Image,
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

            ]
        };
    const requestOptions={
        url:apiOptions.server+path,
        method:'POST',
        json:postdata
    };
    request(
        requestOptions,
        (err,response,body)=>{
            if(response.statusCode===201){
                res.redirect('/');
            }
        }
    );
};
const _renderHomepage=function(req,res,responsebody){
    res.render('list-display',{
        currentProduct:responsebody
    });
};

const list=function(req,res){
    const path='/api/list';
    const requestOptions={
        url:apiOptions.server + path,
        method:'GET',
        json:{}
    };
    request(
    requestOptions,
        (err,response,body)=>{
            _renderHomepage(req,res,body)
        }
    );
};
const _renderDetailPage=function(req,res,responsebody){
    res.render('details',{
        currentProduct:responsebody
    });
};
const productinfo=function(req,res){
    const path=`/api/list/${req.params.listid}`;
    const requestOptions={
        url:apiOptions.server+path,
        method:'GET',
        json:{}
    };
    request(
        requestOptions,
        (err,response,body)=>{
            _renderDetailPage(req,res,body);
        }
    );
}

module.exports={
    list,
    productinfo,
    addNewProduct,
    doAddNewProduct,
}