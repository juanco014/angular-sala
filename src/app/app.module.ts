import {RouterModule, Routes} from "@angular/router";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {ListarSalasComponent} from "./salas/listar-salas/listar-salas.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";


const rutas:
  Routes =[
  {path: '/header', component: HeaderComponent},
  {path: '/footer', component: FooterComponent},
  {path: 'listar-salas', component:ListarSalasComponent},
]

@NgModule({
  declarations: [

  ],
  imports: [
    //SweetAlert2Module.forRoot(),
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(rutas),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
