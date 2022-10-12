import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Observable, of } from "rxjs";

const departaments = ['Marketing','Sales', 'Others', "RH"]

@Injectable({ providedIn:'root'})
export class DataResolverService implements Resolve<any>{
  resolve():Observable<any>{

    //TODO: CALL SERVICE

    return of(departaments);
  }

}
