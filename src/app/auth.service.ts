import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  login(email: string, password: string){
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  signup(email: string, password: string, 
    first_name: string, last_name: string){
      return new Promise((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(email, password).then(
        (Response) => {
          let randomNumber = Math.floor(Math.random()*1000)

          Response.user.updateProfile({
            displayName: first_name + " " + last_name,
            photoURL: "https://api.adorable.io/avatars/" + randomNumber
          }).then(() => {
            resolve(Response.user);
          }).catch((error) => {
            reject();
          })
        }).catch((error)=>{
          reject(error);
        })
      })
    }
}
