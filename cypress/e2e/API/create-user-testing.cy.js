describe('Crate new account', () => {
    it('Succesfully crate new account', () => {
        var user = {
            "name": "pareana",
            "job": "QA"
        }
    
        cy.request('POST', 'https://reqres.in/api/users', user).then((response) => {
            expect(response.status).equal(201);
            expect(response.body.name).to.equal(user.name);
            expect(response.body.job).to.equal(user.job);
        })
    });
   
})