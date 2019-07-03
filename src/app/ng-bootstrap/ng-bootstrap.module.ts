import { NgModule } from "@angular/core";
import { NgBootstrapRoutingModule } from "../ng-bootstrap/ng-bootstrap-routing.module";

import { PercentageComponent } from './boostrap-widget-percentage/boostrap-widget-percentage.component';
import { RatingComponent } from './boostrap-widget-rating/boostrap-widget-rating.component';
import { TimepickerComponent } from './boostrap-widget-timepicker/boostrap-widget-timepicker.component';

 
@NgModule({
    declarations:[PercentageComponent,RatingComponent,TimepickerComponent],
    imports:[NgBootstrapRoutingModule],
    providers: []
    
})
export class NgBootstrapModule{
 
}