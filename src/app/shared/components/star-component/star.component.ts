import { Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";

@Component({
    selector: "pm-star",
    templateUrl: "./star.component.html",
    styleUrls:["./star.component.css"]
})
export class StarComponent implements OnChanges{
    readonly starsWidth: number = 75;
    cropWidth: number = 75;
    @Input() rating: number = 4;
    @Output() ratingClick: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void{
        this.cropWidth = (this.rating * this.starsWidth)/ 5;
    }

    onClick(): void{
        console.log(`star rating: ${this.rating}`)
        this.ratingClick.emit(`star with rating: ${this.rating} cliked`)
    }
}