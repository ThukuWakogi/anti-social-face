import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class NeighborhoodService {
  constructor(private http: HttpClient) {}

  getNeighborhoods() {return this.http.get<any[]>(`${environment.apiUrl}/neighborhoods/`)}
}
