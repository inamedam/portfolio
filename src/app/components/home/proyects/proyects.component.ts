import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss']
})
export class ProyectsComponent implements OnInit {
  Projects = [
    {
      imgs:[
        '../../../../../docs/assets/images/medmatch/bloc4.png',
        '../../../../../docs/assets/images/medmatch/bloc5.png',
        '../../../../../docs/assets/images/medmatch/bloc6.png',
        '../../../../../docs/assets/images/medmatch/bloc10.png'],
      Title:'Ark-x Challenges',
      Description:'The purpose of this project is to enhance the safety of prescribing drugs and to address the challenges related to prescribing errors which can have significant damage the patient’s health, the project ultimate goal is to contribute to the overall improvement of medication safety in the healthcare department.',
      Technologies:['HTML','CSS'],
      ghLink:'https://github.com/inamedam',
      demoLink:'https://github.com/inamedam'
    },

    {
      imgs:[
        
        '../../../../assets/images/todo-app/2.png',
        '../../../../assets/images/todo-app/3.png',
        '../../../../assets/images/todo-app/4.png',
        '../../../../assets/images/todo-app/5.png',
        '../../../../assets/images/todo-app/6.png',
        '../../../../assets/images/todo-app/1.png'
      ],
      Title:'Portfolio Challenge',
      Description:'Users can add, edit, delete, and prioritize tasks. Each task typically contains a title, description, due date, and status. The app allows users to reorder tasks by dragging and dropping them into different categories or positions, making it easy to organize and prioritize tasks.',
      Technologies:['Angular','Boostrap'],
      ghLink:'https://github.com/inamedam/old_portfolio',
      demoLink:'https://github.com/inamedam/old_portfolio'
    },
    
    {
      imgs:[
        '../../../../assets/images/recipe-book/4.png',
        '../../../../assets/images/recipe-book/5.png',
        '../../../../assets/images/recipe-book/6.png',
        '../../../../assets/images/recipe-book/7.png',
        '../../../../assets/images/recipe-book/1.png',
        '../../../../assets/images/recipe-book/2.png',
        '../../../../assets/images/recipe-book/3.png'
      ],
        
      Title:'Ecommerce Dashboard',
      Description:'Users can add new recipes to their collection and categorize them based on different types of cuisines or meal types. Each recipe includes a comprehensive list of ingredients required for the dish, making it convenient for users to shop for the necessary items.',
      Technologies:['Angular','Angular-Material', 'Boostrap', 'Ng-zorro','Rxjs'],
      ghLink:'https://github.com/inamedam/customer',
      demoLink:'https://github.com/inamedam/customer'
    },
    
    {
      imgs:[
        '../../../../assets/images/design-show/1.png',
        '../../../../assets/images/design-show/2.png',
        '../../../../assets/images/design-show/3.PNG',
      ],
      Title:'chat Application',
      Description:'Design Show provides a user-friendly interface that enables artists and designers to upload high-quality images and multimedia content, along with detailed project descriptions. This allows viewers to explore the creative process and context behind each artwork.',
      Technologies:['Angular','Angular-Material', 'Boostrap'],
      ghLink:'https://github.com/inamedam',
      demoLink:'https://github.com/inamedam'
    },

  
    {
      imgs:[
        '../../../../assets/images/appointement/1.png',
        '../../../../assets/images/appointement/2.png',
        '../../../../assets/images/appointement/3.png',
        '../../../../assets/images/appointement/4.png',
        '../../../../assets/images/appointement/5.png',
      ],
      Title:'Appointments App',
      Description:` The application measures the number of words or characters typed per minute (words per minute - WPM or characters per minute - CPM) to determine the user's typing speed. In addition to speed, the test evaluates typing accuracy by calculating the number of errors made during the typing exercise.`,
      Technologies:['Angular','Angular-Material', 'Boostrap'],
      ghLink:'https://github.com/inamedam/appointement_back/tree/master/AppointmentScheduler-develop',
      demoLink:'https://github.com/inamedam/appointement_back/tree/master/AppointmentScheduler-develop'
    },

    


  ]
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    navSpeed: 900,
    items: 1,
    autoplay: true,
    autoplayTimeout:3000
  }

  @ViewChild('imgContainer') imgContainer: ElementRef;


  constructor(
    public analyticsService: AnalyticsService
  ) { }

  ngOnInit(): void {



  }

debug(){

  this.imgContainer.nativeElement.scroll({
    top: this.imgContainer.nativeElement.scrollHeight,
    left: 0,
    behavior: 'smooth',    
  });
}

}
