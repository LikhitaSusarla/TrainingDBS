import { Injectable } from '@angular/core';
import{InstagramService} from './instagram.service';
import {MessengerService} from './messenger.service';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class IntegratedService {

  constructor(public InstaSvc:InstagramService,public MailSvc:MessengerService)
  {

  }
  public getInsta()
    {
    return this.InstaSvc;
    }
  
    public getMessenger()
    {
    return this.MailSvc;
    }
  }

