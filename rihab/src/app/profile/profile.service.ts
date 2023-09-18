import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

 
  private readonly newProperty = `Frontend Developer`;

  about2 = this.newProperty

  about = "Lover of innovation and everything related to generate new knowledge.Face problems with a smile and solve them as soon as possible. Very calculated about the time I spend and work I do."
  resumeurl = "https://docs.google.com/document/d/1ihgd7sPUlZwAOF622BdcQMc03fuHyAR5/edit?usp=sharing&ouid=101136149206366671561&rtpof=true&sd=true"
  

  skillsData: any = [
    {
      'id': '1',
      'skill': 'HTML',
      'progress': '85%'
    },
    {
      'id': '2',
      'skill': 'NODE JS',
      'progress': '50%'
    },
    {
      'id': '3',
      'skill': 'JAVASCRIPT',
      'progress': '60%'
    },
    {
      'id': '4',
      'skill': 'SQL , MYSQL',
      'progress': '50%'
    },
    {
      'id': '5',
      'skill': 'CSS,SCSS',
      'progress': '75%'
    },
    {
      'id': '6',
      'skill': 'angular',
      'progress': '50%'
    }
  ];


 
  

  extraCircularInfo: any = [
    {
      id:1,
      title: 'Linked-in',
      description: '',
      img: 'assets/images/linkedin_rihab.PNG',
      url: ''
    },

    {
      id:1, 
      title: 'Github',
      description: '',
      img: 'assets/images/github rihab.PNG',
      url: 'https://github.com/rihabgamoudi/'
    },
    {
      id:1,
      title: 'Facebook',
      description: '',
      img: 'assets/images/facebook_rihab.PNG',
      url: 'https://www.facebook.com/bochra.gam.10'
    },
    
  ]
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

   
  
  // exprience(): Observable<any> {
  //   // return this.http.get(this.baseUrl + 'exprience');
  //   return this.exprienceData;
  // }

  extraCircular(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.extraCircularInfo;
  }
}
