import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-menu-filtros',
  templateUrl: './menu-filtros.component.html',
  styleUrls: ['./menu-filtros.component.css']
})
export class MenuFiltrosComponent implements OnInit {

  constructor(private router: Router) { }

  redirectTo(uri: string[]){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate(uri));
  }

  ngOnInit() {
  }

}



