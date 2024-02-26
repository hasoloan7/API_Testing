describe('crate new account ', () => {
    it("succesfully crate new account", () => {
        var user = {
            "name": "pareana",
            "email": "pareana123@mail.com",
            "password": "pareana123@"
        }
        cy.request('POST', 'https://kasir-api.belajarqa.com/registration', user).then((response) => {
            expect(response.status).equal(201);
            expect(response.body.message).to.equal("Toko berhasil didaftarkan")
            expect(response.body.data.name).to.equal(user.name);
            expect(response.body.data.email).to.equal(user.email);
        })
    });
    it('Succesfully login useing header', () => {
        cy.visit('https://kasir-api.belajarqa.com/registration', {
            headers: {
                authorization: 'Basic YWRtaW46YWRtaW4='
            },
            failOnStatusCode: false
        })
        
    });
})