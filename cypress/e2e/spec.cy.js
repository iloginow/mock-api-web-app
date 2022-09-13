describe('Post List App', () => {
  it('displays all posts when the content is loaded', () => {
    cy.request('GET', 'https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.visit('/').wait(1000);
        cy.get('.post-list-item').then((postListElements) => {
          expect(response.body.length).to.equal(postListElements.length);
        });
      });
  });

  it('sorts the list by title in ascending order', () => {
    cy.request('GET', 'https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.visit('/').wait(1000);
        cy.get('.post-list .post-list-item-content-title').then((postListTitles) => {
          const pageTitles = Cypress.$.makeArray(postListTitles).map((el) => el.innerText);
          const titles = response.body.map((item) => item.title);
          expect(pageTitles).to.deep.equal(titles.sort());
        });
      });
  });

  it('displays a max of 120 chars for post title and appends "..." if the count exceeds the threshold', () => {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.visit('/').wait(1000);
    cy.get('.post-list .post-list-item-content-title').each((postListTitle) => {
      if (postListTitle.text().length <= 120) {
        expect(true);
      } else {
        expect(postListTitle.text().endsWith('...'));
      }
    });
  });

  it('displays a max of 120 chars for post body and appends "..." if the count exceeds the threshold', () => {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.visit('/').wait(1000);
    cy.get('.post-list .post-list-item-content-body').each((postListTitle) => {
      if (postListTitle.text().length <= 120) {
        expect(true);
      } else {
        expect(postListTitle.text().endsWith('...'));
      }
    });
  });

  it('can select posts by clicking on the checkbox HTML element', () => {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.visit('/').wait(1000);
    cy.get('.post-list-item-header-controls').first().find('[type="checkbox"]').check();
    cy.get('.post-list-item-header-checkbox-label-selected').should('have.length', 1);
  });

  it('saves selected posts in local storage', () => {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.visit('/').wait(1000);
    cy.get('.post-list-item-header-controls').first().find('[type="checkbox"]').check();
    cy.reload();
    cy.get('.post-list-item-header-controls').first().find('[type="checkbox"]').should('be.checked');
  });

  it('displays selected date and time', () => {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.visit('/').wait(1000);
    cy.clock().then((clock) => {
      const date = new Date('2022-08-19T22:00:00.000+03:00');
      clock.setSystemTime(date);
      cy.get('.post-list-item-header-controls').first().find('[type="checkbox"]').check();
      cy.get('.post-list-item').first().find('.post-list-item-header-selected-at')
        .should('have.text', 'Selected at: 19.08.2022 22:00 EEST');
    });
  });

  it('displays "No posts selected" when no posts are selected', () => {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.visit('/').wait(1000);
    cy.get('.app-header').find('.header-selected-status').should('have.text', 'No posts selected');
  });

  it('displays selected and total posts count', () => {
    cy.request('GET', 'https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.visit('/').wait(1000);
        cy.get('.post-list-item-header-controls').eq(1).find('[type="checkbox"]').check();
        cy.get('.post-list-item-header-controls').eq(3).find('[type="checkbox"]').check();
        cy.get('.app-header').find('.header-selected-status').then((selectedStatus) => {
          expect(selectedStatus.text()).to.equal(`Selected 2 posts out of ${response.body.length}`);
        });
      });
  });

  it('displays "All posts selected" when all posts are selected', () => {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.visit('/').wait(1000);

    cy.get('input[type="checkbox"]').as('checkboxes').check();
    cy.get('.app-header').find('.header-selected-status').should('have.text', 'All posts selected');
  });
});
