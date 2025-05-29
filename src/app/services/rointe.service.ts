import { Injectable } from '@angular/core';
import { FirebaseApp } from '@firebase/app';
import { Auth, User } from '@firebase/auth';
import { Database } from '@firebase/database';
import { init, login, getInstallations, InstallationsType, getDevice, DeviceType, setDevicePower, updateDeviceTemperature } from "equation-connect";


@Injectable({
  providedIn: 'root'
})
export class RointeService {

  app: {app: FirebaseApp, auth: any, database: Database}
  user: User | undefined
  installations: InstallationsType | undefined

  constructor() {
    this.app = init(1)
    console.log('app', this.app)
    // this.getDbData()
   }

  // signIn = async (email: string, password: string) => {
  //   return login(email, password)
  // }
  async initialise(userName: string, password: string): Promise<InstallationsType>{
    // const app = init(1)
    return this.loginAndFetchInstallations(userName, password)
  }

  loginAndFetchInstallations = async (email: string, password: string): Promise<InstallationsType> => {
    this.user = await login(email, password);
    this.installations = await getInstallations(this.user.uid);
    return this.installations
  };

  getDbData(){
    console.log('DB NAME', this.app.database.app.name)
    console.log('DATABASE OPTIONS', this.app.database.app.options)
  }

  getDeviceData = async (id: string): Promise<DeviceType> => {
    console.log('GET DEVICE', id)
    return getDevice(id)
  }

  toggleDevice = async (id: string, state: boolean): Promise<DeviceType> => {
    setDevicePower(id, state)
    return getDevice(id)
  }

  updateDeviceTemperature = async (id: string, temp: number): Promise<DeviceType> => {
    updateDeviceTemperature(id, temp)
    return getDevice(id)

  }



}
