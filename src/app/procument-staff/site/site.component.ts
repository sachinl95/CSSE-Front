import { Component, OnInit } from "@angular/core";
import { Site } from "../../model/site";
import { NgForm } from "@angular/forms";
import { SiteService } from "./site.service";

@Component({
  selector: "app-site",
  templateUrl: "./site.component.html",
  styleUrls: ["./site.component.scss"]
})
export class SiteComponent implements OnInit {
  private site: Site;
  constructor(private siteService:SiteService) {}

  ngOnInit() {
    this.site = new Site();
  }

  onSubmit(form:NgForm){
    if(form.valid){
      this.siteService.postSite(this.site)
      .subscribe(
        (data:any)=>{
          console.log(data);
          alert("Site Registerd Successfully");
        }
      )
    }
  }
}
