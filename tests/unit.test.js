const assert = require('assert');
const sortText = require('../sortText').sortText;

describe('Checking sort function', () => {
    it('should return sorted english text', function() {
        let expected = 'elmno aegnor aaabnn aelpp';
        let result = sortText('lemon orange banana apple');
         
        assert.equal(result, expected)
    });
    it('should return sorted russian text', function() {
        let expected = 'илмно аеилнпсь аабнн бклооя';
        let result = sortText('лимон апельсин банан яблоко');

        assert.equal(result, expected);
    });
    it('should return sorted numbers', function() {
        let expected = '1234';
        let result = sortText('4321');

        assert.equal(result, expected);
    });
    it('should return sorted combined text', function() {
        let expected = '13GVАБ';
        let result = sortText('3VG1БА');

        assert.equal(result, expected);        
    });
});