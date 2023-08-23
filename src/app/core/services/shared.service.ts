import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private generic:GenericService) { }

  // Global Functions Call Api
}
