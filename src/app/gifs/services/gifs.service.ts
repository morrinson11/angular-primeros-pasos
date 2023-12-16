import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({providedIn: 'root'})
export class GifsService {

  constructor(private http:HttpClient){}

  public gifsList:Array<Gif> = [];

  private _tagsHistory:Array<string> = [];
  private _apikey:string = 'i6Xt1amudSid5OiTt4DTfP5cyJwmf9Ea';
  private _serviceUrl:string = 'https://api.giphy.com/v1/gifs';

  get tagsHistory(){
    return [...this._tagsHistory];
  }

  private organizeHistory(tag:string){
    tag = tag.toLowerCase();

    if(this._tagsHistory.includes(tag)){
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0,10);
  }

  searchTag(tag:string):void{
    if(tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
        .set('api_key', this._apikey)
        .set('limit', '10')
        .set('q', tag)
    this.http.get<SearchResponse>(`${this._serviceUrl}/search`, {params})
          .subscribe(resp => {

            this.gifsList = resp.data;
            console.log({gifs: this.gifsList});
          })
  }
}
