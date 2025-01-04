import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  language:any
  showFiller = false;
  newMode:boolean=false;
  isSidenavOpen = true;
  constructor(private translate:TranslateService,
              private router:Router,
              private spinner:NgxSpinnerService,) {
                this.language = localStorage.getItem("language");
                if("language" in localStorage){
                  translate.use(this.language);
                }
              }

  ngOnInit(): void {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode) {
      this.newMode = JSON.parse(savedDarkMode);
    }
  }
  toggleDarkMode() {
    this.newMode = !this.newMode;
    localStorage.setItem('darkMode', JSON.stringify(this.newMode));
    console.log(this.newMode);
}
  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }
  toggleSideNavOff(){
    this.isSidenavOpen =false;
  }
  changeLang(){
    if(this.language == "en"){
      window.location.reload();
      this.language = "ar";
    }else{
      window.location.reload();
      this.language = "en";
    }
    localStorage.setItem("language",this.language);
  }
  logOut(){
    localStorage.removeItem("token");
    this.router.navigate(["auth/login"]);
  }
}
