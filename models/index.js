// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  // Third table to store the foreign keys
      through: {
          model: // what is the model
          unique: false
      },
  });

// Categories have many Products
Category.hasMany(Product, {

//foriegn key?

});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(tags, {
through: 'ProductTag',

});
// Tags belongToMany Products (through ProductTag)
tags.belongsToMany(Product{
through: 'ProductTag',

});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
