import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'


@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  constructor() { }
  createDb(){

   let  players =  [
    {id:1, name:'Messi', post:'RW ',N:'10',Age:'33',Description:'World Class'},
    {id:2, name:'CR7', post:'CF ',N:'7',Age:'36',Description:'World Class'},
    {id:3, name:'Mo Salah', post:'RW ',N:'10',Age:'28',Description:'World Class'}
   ];

   return {players};

  }
}
