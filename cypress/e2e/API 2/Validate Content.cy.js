describe('Automation API with pokeapi', () => {
    it('Validate Content', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/venusaur/').as('venusaur')
        cy.get('@venusaur').its('body')
            .should('include', {name: 'venusaur'})
    })
    it('Validate name', () => {
        cy.request({
            // method: 'get',
            url: 'https://pokeapi.co/api/v2/ability/7/',
        }).then((response)=>{
            expect(response.body.name).to.equal('limber')
        })
    });
})