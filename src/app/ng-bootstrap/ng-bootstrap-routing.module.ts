import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { PercentageComponent } from './boostrap-widget-percentage/boostrap-widget-percentage.component';
import { RatingComponent } from './boostrap-widget-rating/boostrap-widget-rating.component';
import { TimepickerComponent } from './boostrap-widget-timepicker/boostrap-widget-timepicker.component';

const routes: Routes = [
    { path: 'component1', component: PercentageComponent },
    { path: 'component2', component: RatingComponent },
    { path: 'component3', component: TimepickerComponent },
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
    
})
export class NgBootstrapRoutingModule {}