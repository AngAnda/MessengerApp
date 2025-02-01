import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userKey = 'user';

  private conversationId = '';

  constructor(private apiService: ApiService) { }

  login(username: string, password: string): Observable<boolean> {
    return this.apiService.get<any[]>('users').pipe(
      map(users => {
        console.log(users);
        const user = users.find(
          u=> u.username === username && u.password === password
        );

        if(user){
          sessionStorage.setItem('user', JSON.stringify(user));
          console.log(`Login succeeded: ${user.username}`);
          return true;
        }

        console.log('Login failed');
        return false;
      }),
      catchError(() => of(false))
    )
  }

  setConversationId(id:string) : void {
    this.conversationId = id;
  }

  getConversationId(): string {
    return this.conversationId;
  }

  getUser(): { id: number; username: string } | null {
    const user = sessionStorage.getItem(this.userKey);
    return user ? JSON.parse(user) : null;
  }

  getUserId(): number {
    const user = this.getUser();
    return user?.id ?? 0;
  }

  getUsername(): string{
    const user = this.getUser()
    return user?.username ?? '';
  }

  clearUser(): void {
    sessionStorage.removeItem('user');
  }
}
