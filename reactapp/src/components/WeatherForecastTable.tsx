import React, { useEffect, useState } from 'react'

export interface Forecast {
    date: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}


export default function WeatherForecastTable() {

    const [forecasts, setForecasts] = useState<Forecast[]>();
    useEffect(() =>{
        const populateWeatherData = async () => {
            try{

                const response = await fetch('api/weatherforecast')
                const data = await response.json();
                setForecasts(data);

            } catch(error){
                console.log("Error fetching weather data: ", error);
            }
        }

        populateWeatherData();
    },[])
  
    return (
        <div className = "m-10 font-medium flex flex-col gap-y-3">
            <h1 className = " text-3xl font-semibold">Weather Forecast</h1>
            <p>This component demonstrates fetching data from the server</p>

            <table className="table table-zebra shadow-2xl mt-10">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Temp. (C)</th>
                        <th>Temp. (F)</th>
                        <th>Summary</th>
                    </tr>
                </thead>
                <tbody>
                    {forecasts?.map(forecast =>
                        <tr key={forecast.date}>
                            <td>{forecast.date}</td>
                            <td>{forecast.temperatureC}</td>
                            <td>{forecast.temperatureF}</td>
                            <td>{forecast.summary}</td>
                        </tr>)}
                </tbody>
            </table>
        </div>
    )
}
