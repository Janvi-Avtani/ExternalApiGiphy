import { Component } from '@angular/core';
import { GiphyService } from '../giphy.service';

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent {

  urls:string[]=[];
  constructor(private gifService:GiphyService){

  }

  ngOnInit():void{
this.getTrendingGif();
  }

  getTrendingGif(){
    this.gifService.getTrendingGif().subscribe(
      (data:any)=>{
        console.log(data.data);
        for(let i=0;i<data.data.length;i++){
          this.urls[i]=data.data[i].images.downsized.url;
        }
        

      },error=>{
        console.log(error);
      }
    )
  }

}
