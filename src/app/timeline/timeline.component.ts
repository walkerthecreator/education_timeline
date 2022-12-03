import { Component } from '@angular/core';
import timelineData from '../Education.json'
import { faAdd } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

interface Education{
    School:String;
    startDate:String;
    endDate:String;
    location:String;
    title:String;
    timeSpent:String;
    img:String;
}

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent {
schools:Education[] = timelineData
faLocationDot=  faLocationDot
faPenToSquare = faPenToSquare
faAdd = faAdd
}
