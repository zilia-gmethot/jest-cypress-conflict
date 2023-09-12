import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import '@badeball/cypress-cucumber-preprocessor';

describe(AppComponent.name, () => {

  beforeEach(() => {
    TestBed.overrideComponent(AppComponent, {
      add: { 
        imports: [],
        providers: []
      }
    }) 
  })

  it('renders', () => {
     cy.mount(AppComponent,);
  })

})
