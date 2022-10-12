import { Pipe, PipeTransform } from "@angular/core";
import { Client } from "../services/data.service";

@Pipe({
    name: 'filter',
})
export class FilterPipe implements PipeTransform {
    transform(values: Client[], arg: string): Client[] {
        if(!arg || arg.length < 3) return values;
        let result: Client[] = [];
        for(const value of values){
            if(value.name.toLocaleLowerCase().indexOf(arg.toLocaleLowerCase()) > -1){
                result = [...result, value];
            }
        }
        return result;
    }

}
