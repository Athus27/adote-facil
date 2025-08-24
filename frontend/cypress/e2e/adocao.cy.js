// cypress/e2e/adocao.cy.js

// Ignora o erro interno do React
Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

describe('Fluxo Completo de Adoção de um Pet', () => {
  it('deve cadastrar um novo pet e em seguida confirmar sua adoção', () => {
    cy.viewport(1280, 720);

    // --- 1. ETAPA DE LOGIN ---
    cy.visit('http://localhost:3000/login');
    cy.get('input[name="email"]').type('athusp7@gmail.com');
    cy.get('input[name="password"]').type('12345678');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/area_logada/animais_disponiveis');

    // --- 2. ETAPA DE CADASTRO DO ANIMAL ---
    cy.visit('http://localhost:3000/area_logada/disponibilizar_animal');
    cy.intercept('POST', '**/animals').as('createAnimalRequest');
    const petName = `PetParaAdotar-${Date.now()}`;

    cy.get('input[name="name"]').type(petName);
    cy.get('input[name="race"]').type('Caramelo Adotável');
    cy.get('textarea[name="description"]').type('Pet de teste para ser adotado.');

    // CORREÇÃO: Usando a forma de clicar no botão que funciona para ESTE formulário
    cy.contains('button', 'Selecione um tipo').click();
    cy.wait(500);
    cy.get('[role="option"]').contains('Cachorro').click();

    cy.contains('button', 'Selecione um gênero').click();
    cy.wait(500);
    cy.get('[role="option"]').contains('Macho').click();

    cy.get('input[type="file"]').selectFile('cypress/fixtures/pet.webp', { force: true });
    cy.get('button[type="submit"]').click({ force: true });
    cy.wait('@createAnimalRequest').its('response.statusCode').should('eq', 201);
    cy.url().should('include', '/area_logada/meus_animais');

    // Verifica se o pet recém-criado está na lista de "Meus Pets"
    cy.contains(petName).should('be.visible');

    // --- 3. ETAPA DE CONFIRMAÇÃO DA ADOÇÃO ---
    cy.intercept('PATCH', '**/animals/**').as('updateAnimalRequest');

    // Encontra o card do pet que acabamos de criar e clica em "Confirmar adoção"
    cy.contains('div', petName).parent().parent().within(() => {
      cy.contains('button', 'Confirmar adoção').click();
    });

    // Espera a API de atualização responder com sucesso
    cy.wait('@updateAnimalRequest').its('response.statusCode').should('eq', 200);

    // --- 4. VERIFICAÇÃO FINAL ---
    // Após a adoção, o pet não deve mais existir na lista
    cy.contains(petName).should('not.exist');
  });
});