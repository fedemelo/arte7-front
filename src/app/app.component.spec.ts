import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ActorListComponent } from './actor/actor-list/actor-list.component';
import { DirectorListComponent } from './director/director-list/director-list.component';
import { VistaPrincipalComponent } from './pelicula/vista-principal/vista-principal.component';
import { DirectorDetailComponent } from './director/director-detail/director-detail.component';
import { ActorDetailComponent } from './actor/actor-detail/actor-detail.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [
        AppComponent,
        ActorListComponent,
        DirectorListComponent,
        VistaPrincipalComponent,
        DirectorDetailComponent,
        ActorDetailComponent
        ],
    }).compileComponents();
  });

  /**
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'arte-7'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Arte 7');
  });
  **/

});
