import { Component , Input, Output, EventEmitter} from '@angular/core';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {
  title = '';
  show:any = Array;
  @Input() idmove: number = 0;
  @Output() tba: EventEmitter<string> = new EventEmitter<string>();
  

  constructor(private service :MovieService){
    
  }
  onClick(){
    this.service.getmovie(this.idmove).subscribe(res=>{
      this.show = res;
      this.tba.emit(this.show);

    })
  }
  

}
