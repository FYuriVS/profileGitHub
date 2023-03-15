import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositorysComponent } from './repositorys.component';

describe('RepositorysComponent', () => {
  let component: RepositorysComponent;
  let fixture: ComponentFixture<RepositorysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepositorysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepositorysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
