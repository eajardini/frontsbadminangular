import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface Country {
	name: string;
	flag: string;
	area: number;
	population: number;
}
const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754,
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199,
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463,
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397,
  },
]; 
  

@Component({
  selector: 'sb-manutencao',
  templateUrl: './manutencao.component.html',
  styleUrls: ['./manutencao.component.scss']
})
  

export class ManutencaoComponent implements OnInit {
 
  

  constructor(private httpClient: HttpClient) {}

countries = COUNTRIES;
 pessoas: string[] = [];

  


  ngOnInit(): void {
    //const req = httpClient.get<any>('/api/heroes');
    let baseUrl = "localhost:8080";
    this.httpClient.get(baseUrl+'/getpessoa').subscribe((res : any) =>{
      console.log(res);
      this.pessoas = res;
      });
  }

}



