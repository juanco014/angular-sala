import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";

/*const rutas: Routes =[
  //{path: '', redirectTo: 'listar-cursos', pathMatch: 'full'},
  {path: 'header', component: HeaderComponent},
  {path: 'footer', component: FooterComponent},
  {path: '', loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule)},
]
*/
 */


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    //RouterModule.forRoot(rutas),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
