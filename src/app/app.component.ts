import { Component } from '@angular/core';
import { faAdd } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    faLocationDot=  faLocationDot
    faPenToSquare = faPenToSquare
    faAdd = faAdd
  title = 'linkedin';
}
