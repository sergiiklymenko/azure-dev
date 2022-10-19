import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private getStorage(): Storage {
    return localStorage;
  }

  getData(key: string): any | false {
    const data = this.getStorage().getItem(key);
    return data != null ? JSON.parse(data) : false;
  }

  setData(key: string, value: any) {
    return this.getStorage().setItem(
      key,
      JSON.stringify(value)
    )
  }

}
