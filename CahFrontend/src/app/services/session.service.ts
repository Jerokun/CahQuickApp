import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Lobby {
  id: string;
  players: Player[];
}

export interface Player {
  id: string;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  
  private _userName : string;
  public get userName() : string {
    return this._userName;
  }
  public set userName(v : string) {
    this._userName = v;
  }
  
  constructor(private http: HttpClient) {}

  controllerUrl = 'api/SessionController';

  getNewSession(priv: boolean, name: string): Observable<any> {
    const params = new HttpParams()
      .set('userName', name)
      .set('isPrivate', priv.toString());

    return this.http.get<any>(this.controllerUrl + '/getNewSession', { params });
  }

  getJoinSession(name: string, roomCode: string): Observable<any> {
    const params = new HttpParams()
      .set('userName', name)
      .set('roomCode', roomCode);

    return this.http.get<any>(this.controllerUrl + '/getNewSession', { params });
  }
}
