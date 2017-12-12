var expect = require('chai').expect;
var countArticles = require('../src/shop-tools').countArticles;
describe('Given fruits !', function() {
    const products = [ 'tomato', 'cucumber', 'tomato', 'salad', 'potato', 'cucumber', 'potato', 'potato', 'tomato', 'potato' ];
    it('obj in obj', function() {
        expect(countArticles(products)).to.eql([ 'tomato', 'cucumber', 'tomato', 'salad', 'potato', 'cucumber', 'potato', 'potato', 'tomato', 'potato' ]);
    })
});
