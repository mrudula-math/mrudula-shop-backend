const sql = require("./dbconnection")

// constructor
const Product = function(Product) {
    this.description = product.ProductDescription;
    this.image = product.ImageUrl;
    this.price = product.Price;
    this.category = product.Category;
  };


Product.getAll = result => {
    sql.query("SELECT * FROM productsdata", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      //console.log("products: ", res);
      result(null, res);
    });
  };

//Product.getAll();


Product.findByCategory = (category, processResults) => {
    var query =`SELECT * FROM productsdata WHERE Category = '`+category+`'`
    //console.log(query)
    var processQueryResults = (err, res) => {
        if (err) {
          console.log("error: ", err);
          processResults(err, null);
          return;
        }
    
        if (res.length) {
          console.log("found products: ", res);
          processResults(null, res);
          return;
        }
    
        // not found Customer with the id
        processResults({ kind: "not_found" }, null);
      }
    sql.query(query, processQueryResults);
  };

  Product.productSearch = (searchText, processResults) => {
    var query =`SELECT * FROM productsdata WHERE ProductDescription LIKE '%`+searchText+`%'`
    //console.log(query)
    var processQueryResults = (err, res) => {
        if (err) {
          console.log("error: ", err);
          processResults(err, null);
          return;
        }
    
        if (res.length) {
          console.log("found products: ", res);
          processResults(null, res);
          return;
        }
    
        // not found Customer with the id
        processResults({ kind: "not_found" }, null);
      }
    sql.query(query, processQueryResults);
  };


module.exports = Product;
