const Product = require('../dbconfig/productmodel');

exports.findAll = (req, res) => {
    var processResults = (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving Product"
            });
          }
        } else {
            //res.send(data);
            var dataResponse = []
            for(i = 0; i < data.length; i++){
                var d = data[i]
                console.log(d)
                var dResponse = {}
                dResponse.productId=d.ProductID;
                dResponse.productDescription = d.ProductDescription;
                dResponse.imageURL = d.ImageUrl;
                dResponse.Category = d.Category;
                dResponse.price = d.Price;
                dataResponse.push(dResponse)
            }
            res.send(dataResponse)
        }
      }
    if(req.query.category){  
        Product.findByCategory(req.query.category, processResults);
    }else{
        Product.getAll(processResults);
    }
  };

exports.searchProducts = (req, res) => {
    var processResults = (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving Product"
            });
          }
        } else {
           // res.send(data);
           var dataResponse = []
            for(i = 0; i < data.length; i++){
                var d = data[i]
                console.log(d)
                var dResponse = {}
                dResponse.productId=d.ProductID;
                dResponse.productDescription = d.ProductDescription;
                dResponse.imageURL = d.ImageUrl;
                dResponse.Category = d.Category;
                dResponse.price = d.Price;
                dataResponse.push(dResponse)
            }
            res.send(dataResponse)
        }
      }
   Product.productSearch(req.query.searchText, processResults);
};