describe('PokeAPI Unicred', () => {
  it('Visits the app', () => {
    cy.visit('/');
  });
  it('Get page title', () => {
    cy.title().should('include', 'PokeAPI Unicred');
  });
});

describe('Request to PokeAPI', () => {
  it('Displays first 20 pokemons', () => {
    cy.request('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20')
      .should((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.results).to.have.length(20)
        expect(response).to.have.property('headers')
        expect(response).to.have.property('duration')
      });
  });
});

describe('Get next page of Pokemons list', () => {
  it('Previous button should not exist in the first page', () => {
    cy.get('#previous').should('not.exist');
  });
  it('Click next button', () => {
    cy.get('#next').click();
  });
  it('Now previous button should be available', () => {
    cy.get('#previous').should('exist');
  });
  it('Click previous button', () => {
    cy.get('#previous').click();
  });
  it('Previous button should not exist again because we are back in the first page', () => {
    cy.get('#previous').should('not.exist');
  });
});

describe('Click card and change route', () => {
  it('Card should contain the Pokemon Bulbasaur', () => {
    cy.get('#0').children('section').children('header').children('.pokemonName').contains('bulbasaur');
  });
  it('Click card and change route', () => {
    cy.get('#0').click();
    cy.url().should('eq', 'http://localhost:3001/pokedex/bulbasaur');
  });
  it('Pokemon page has same name as the clicked card (Bulbasaur)', () => {
    cy.get('section').children('header').children('#pokemon-page-title').contains('bulbasaur');
  });
  it('Pokemon page has same name as the clicked card (Bulbasaur)', () => {
    cy.get('#back').click();
  });
});

describe('Hover cards', () => {
  it('Pokemon name should exist in PokemonCard', () => {
    const pokemonName = cy.get('#0').children('section').children('header').children('.pokemonName');
    pokemonName.should('exist');
  });
  it('Hover Pokemon card', () => {
    cy.get('#0').trigger('mouseover')
  });
  it('Pokemon name should not exist anymore', () => {
    const pokemonName = cy.get('#0').children('section').children('header').children('.pokemonName');
    pokemonName.should('not.exist');
  });
  it('Pokemon illustration should take names place', () => {
    const pokemonName = cy.get('#0').children('section').children('header').children('.pokemonIllustration');
    pokemonName.should('exist');
  });
});