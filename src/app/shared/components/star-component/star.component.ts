import { Component, Input, OnChanges } from "@angular/core";

@Component({
    selector: "pm-star",
    templateUrl: "./star.component.html",
    styleUrls:["./star.component.css"]
})
export class StarComponent implements OnChanges{
    readonly starsWidth: number = 80;
    cropWidth: number = 70;
    @Input() rating: number = 4;

    ngOnChanges(): void{
        this.cropWidth = this.rating * 80/5
    }
}