
describe('Objeto - Testes', function() {
    var _wender = testes.hello();

    it('Atributo - Nome', function() {
        expect(_wender).toContain("Wender");
    });

});