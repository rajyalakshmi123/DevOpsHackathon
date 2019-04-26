import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private httpClient: HttpClient) { }

  public location: string ='Hyderabad';
  public edited: boolean = false;
  public weatherData: WeatherRootObject;

  public GetWeatherData() {
    var httpClient: HttpClient;
    console.log(this.location);
    this.httpClient.get<WeatherRootObject>('https://api.openweathermap.org/data/2.5/weather?q=' + this.location +'&units=metric&appid=97953ed6b0ae0111af672fccfe97aa11').subscribe((res) => {
      this.edited = true;
      this.weatherData = res;
      console.log(res);
    });

    console.log("buton clicked" + location);
  }


}



export interface Coord {
  lon: number;
  lat: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Main {
  temp: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
}

export interface Wind {
  speed: number;
  deg: number;
}

export interface Clouds {
  all: number;
}

export interface Sys {
  type: number;
  id: number;
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface WeatherRootObject {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  id: number;
  name: string;
  cod: number;
}




