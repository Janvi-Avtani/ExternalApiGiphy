import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  constructor(private http:HttpClient) { }

  getTrendingGif(){
    return this.http.get('https://api.giphy.com/v1/gifs/trending?api_key=oC25nl8FJBkRKoKeJggNAvx7QXTQUibc&limit=10&rating=g');
  }

  searchGif(searchKey:String){
    return this.http.get('https://api.giphy.com/v1/gifs/search?api_key=oC25nl8FJBkRKoKeJggNAvx7QXTQUibc&q='+searchKey+'&limit=25&offset=0&rating=g&lang=en');

  }
}
