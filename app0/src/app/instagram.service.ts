import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InstagramService {

  public pics:string[]=['../../assets/a.jpg','../../assets/b.jpg'];
  public AddPic(pPic:string)
  {
this.pics.push(pPic)
  }
  constructor() { }
}
