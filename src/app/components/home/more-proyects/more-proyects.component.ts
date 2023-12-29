import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-more-proyects',
  templateUrl: './more-proyects.component.html',
  styleUrls: ['./more-proyects.component.scss']
})
export class MoreProyectsComponent implements OnInit {
  Projects = [
    
    {
      Title:'Ecommerce Application',
      Description:'is a dynamic e-commerce solution built on the robust Spring framework. Our platform provides a secure and seamless online shopping experience for both buyers and sellers. Built on the robust and reliable Spring framework',
      Technologies:['Java','Spring Boot','Spring Security' , 'Microservices Architecture'],
      ghLink:'https://github.com/lghazi-laila/user_costumer_microservice',
      demoLink:'https://github.com/lghazi-laila/user_costumer_microservice'
    },
    
    {
      Title:'Appointement Application',
      Description:'This is a Spring Boot Web Application to manage and schedule appointments between providers and customers. It has many features such as automatic invoicing, email notifications, appointments cancelation, providers individual working plans with brakes etc',
      Technologies:['Java','Spring Boot', 'MySQL',],
      ghLink:'https://github.com/inamedam/appointement_back',
      demoLink:'https://github.com/inamedam/appointement_back'
    },

    {
     
      Title:'Chat Application',
      Description:'simple chat application built using Spring Boot. It allows users to create chats, send messages, and manage user information.',
      Technologies:['Java','Spring Boot','MongoDB'],
      ghLink:'https://github.com/inamedam/chat/tree/master',
      demoLink:'https://github.com/inamedam/chat/tree/master#readme'
    },

    {
     
      Title:'Trading Strategies',
      Description:'basic algorithmic trading strategy using the Binance API in Python, these Python scripts involves trading strategies using technical indicators such as Exponential Moving Averages (EMA), Stochastic RSI, and Average True Range (ATR) on financial market data from Binance',
      Technologies:['Python','Binance','Pandas' , 'Numpy', 'CCTX'],
      ghLink:'https://github.com/inamedam/trading/tree/master',
      demoLink:'https://github.com/inamedam/trading/tree/master#readme'
    },

    {
      Title:'Spring Microservices',
      Description:'',
      Technologies:['Spring','Microservices Architecture', 'Spring Cloud','Eureka' , 'Openfeign'],
      ghLink:'https://github.com/inamedam/spring_cloud',
      demoLink:'https://github.com/inamedam/spring_cloud'
    },
  
  ]
  constructor(
    private router: Router,
    public analyticsService: AnalyticsService
    ) { }

    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
    }
    redirect(route: string, event) {
      const id = event.target.id;
      if(id=='demoLink' || id=='ghLink'){
        return
      }
      window.open(route, '_blank');
    }

}
