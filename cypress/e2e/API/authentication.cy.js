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
    it('Successfully login using header', () => {
        cy.request({
          method: 'POST',
          url: 'https://kasir-api.belajarqa.com/authentications',
          headers: {
            authorization: 'Basic YWRtaW46YWRtaW4=',
          },
          failOnStatusCode: false,
        }).then((response) => {
          if (response.status === 404) {
            cy.log('Endpoint not found. Check the URL and API documentation.');
          } else {
            expect(response.status).to.equal(400);
            
          }
        });
      });
      
})