import { HttpClient } from '@angular/common/http';
import { createInjectableType } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
export interface Client {
  _id:string;
  name:string;
}

const initClient: Client = {
  _id: '',
  name:'',
};

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  private client$ = new BehaviorSubject<Client>(initClient);
  private readonly API = environment.api;
  
  constructor(private readonly http: HttpClient) { }
  get selectedClient$(): Observable<Client> {
    return this.client$.asObservable();
  }

  setClient(client: Client): void {
    this.client$.next(client);
  }
  addNewClient(client: string):Observable<Client>{
    const body = {name: client}
    return this.http.post<Client>(this.API, body);
  }
  getClients():Observable<Client[]>{
    return this.http.get<Client[]>(this.API);
  }

  updateClient(client: Client):Observable<void>{
    const body = {name: client.name};
    return this.http.put<void>(`${this.API}/${client._id}`,body);
  }
  deleteClient(id: string):Observable<void>{
    return this.http.delete<void>(`${this.API}/${id}`);

  }
}
