import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  Experiences: any[] = [
    {
      Tab: 'Ark’x Talent Factory',
      Title: 'Full-Stack développeur',
      Date: 'Juillet 2023 – present',
      Description: [
        'Concevoir et développer un site web e-commerce',
        'Mettre en place une architecture microservices',
        'Concevoir et mettre en œuvre des applications web en utilisant Spring',
        'Créer des interfaces utilisateur dynamiques et réactives en utilisant Angular'
        
      ]
    },
    {
      Tab: 'Binance',
      Title: 'Trader indépendant',
      Date: 'Juillet 2022 - juillet 2023',
      Description: [
        'Analyser les tendances du marché',
        'Développer des bots de trading en utilisant Python'        
      ]
    },
    {
      Tab: 'Freelancer',
      Title: 'Software Engineer',
      Date: '2019 — 2023',
      Description: [
        `Crowdsourcing (Toloka, Appen) :\n    Réaliser diverses tâches d'annotation de données et d'analyse de données`,
        `Chargé communication numérique :\n   Gérer de campagnes de marketing par courrier électronique`,
        `Responsable du site web (e-commerce) :\nSuperviser des fiches produites, des demandes de renseignements des clients et de l'exécution des commandes`
      ]
    },
    
    {
      Tab: 'Unicaf Université',
      Title: 'Coordinateur des services étudiants',
      Date: 'Mai 2019 - mars 2020',
      Description: [
        'Suivre et analyser les dossiers des candidats sur Unicaf plateforme en ligne'      
      ]
    },
    {
      Tab: 'OCP Groupe',
      Title: "Charge d’amélioration continue d'une chaine de production -Projet de fin d'étude",
      Date: '2017 (5 mois)',
      Description: [
        'Utiliser la méthode MRP pour l’amélioration des performances'      
      ]
    },
    {
      Tab: 'SCBG | NABC',
      Title: 'Chargé d’amélioration des processus',
      Date: '2016 (2 mois)',
      Description: [
        "Utiliser la méthode DMAIC pour l'amélioration de la performance"      
      ]
    },
    {
      Tab: 'LABELMA | LYDEC',
      Title: 'Chargé de gestion de la qualité',
      Date: '2015 (2 mois) ',
      Description: [
        'Évaluer la qualité physico-chimique et bactériologique des eaux usées'      
      ]
    }

  ];
  active = 0
  
  constructor(
    public analyticsService: AnalyticsService
  ) { }

  ngOnInit(): void {
  }

}
