import { Component, OnInit, Input } from '@angular/core';
import { DashboardService } from "../../services/dashboard.service";
import { ICarouselItem } from '../carousel/Icarousel-item.metadata';
import { CAROUSEL_DATA_ITEMS } from "../../data/constants/carousel.const";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public carouselData: ICarouselItem[] = CAROUSEL_DATA_ITEMS;

  //tasks: any[] = [];
  constructor(/*private dashboardService: DashboardService*/) {
  }

  ngOnInit() {
    /*this.dashboardService.getTasks()
    .subscribe(
      res => {
        console.log(res)
        this.tasks = res;
      },
      err => console.log(err)
    )*/
  }

}
