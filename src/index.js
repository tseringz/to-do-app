import './style/main.scss';
import addList from './addlist';


function Cart() {
    var items = [];

    this.addItem = function(item) {
        items.push(item);
        eventAggregator.publish("itemAdded", item);
    };
}

var cartView = (function() {
    eventAggregator.subscribe("itemAdded", function(eventArgs) {
        var newItem = $('<li></li>')
            .html(eventArgs.getDescription())
            .attr('id-cart', eventArgs.getId())
            .appendTo("#cart");
    });
})();

var cartController = (function(cart) {
    eventAggregator.subscribe("productSelected", function(eventArgs) {
        cart.addItem(eventArgs.product);
    });
})(new Cart());

function Product(id, description) {
    this.getId = function() {
        return id;
    };
    this.getDescription = function() {
        return description;
    };
}

var products = [
    new Product(1, "Star Wars Lego Ship"),
    new Product(2, "Barbie Doll"),
    new Product(3, "Remote Control Airplane")];

var productView = (function() {
    function onProductSelected() {
        var productId = $(this).attr('id');
        var product = $.grep(products, function(x) {
            return x.getId() == productId;
        })[0];
        eventAggregator.publish("productSelected", {
            product: product
        });
    }

    products.forEach(function(product) {
        var newItem = $('<li></li>')
            .html(product.getDescription())
            .attr('id', product.getId())
            .dblclick(onProductSelected)
            .appendTo("#products");
    });
})();

