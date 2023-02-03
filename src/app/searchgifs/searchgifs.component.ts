import { Component } from '@angular/core';
import { GiphyService } from '../giphy.service';

@Component({
  selector: 'app-searchgifs',
  templateUrl: './searchgifs.component.html',
  styleUrls: ['./searchgifs.component.css']
})
export class SearchgifsComponent {
  key:String='';
  urls:string[]=[];
  constructor(private giphyService:GiphyService){

  }
  searchGif(){
    this.giphyService.searchGif(this.key).subscribe(
      (data:any)=>{
        console.log(data.data);
        for(let i=0;i<data.data.length;i++){
          this.urls[i]=data.data[i].images.downsized.url;
        }

      },
      error=>{
        console.log(error);
      }
    )
  }

}
