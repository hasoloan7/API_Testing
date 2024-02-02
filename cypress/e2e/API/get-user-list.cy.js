describe('Get User List', () => {
    // Open Cypress | Set * only*
    it('Verify the list of users will be displayed', () => {
      cy.request({
        method: 'GET',
        url: 'https://reqres.in/api/users'
      }).as('users');
  
      cy.get('@users').its('status').should('equal', 200);
    });
  });
  