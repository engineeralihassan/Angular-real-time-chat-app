import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactListSearchComponent } from './contact-list-search.component';

describe('ContactListSearchComponent', () => {
  let component: ContactListSearchComponent;
  let fixture: ComponentFixture<ContactListSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactListSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactListSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
