import { Component ,} from '@angular/core';
import { MovieService } from './service/movie.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  shm:any = Array;
  idmove:number = 0 ;
  
  constructor(private service :MovieService){
    
  }
  onBackClicked(movie: string): void{
    this.shm = movie;
}
}