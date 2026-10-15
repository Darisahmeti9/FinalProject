// Export sample datasets for regions (Kosovo and Balkans)
const datasets = {
    kosovo: {
        location: { name: 'Pristina', country: 'Kosovo', timezone: 'Europe/Pristina' },
        current: { last_updated: '2026-10-15 15:00', temp_c: 14.0, condition: { text: 'Overcast' }, wind_kph: 13, humidity: 72, uv_index: 2.0, precip_mm: 0, pressure_mb: 1023 },
        forecast: [
            { date: '2026-10-15', day: { maxtemp_c: 14, mintemp_c: 7, maxwind_kph: 13, total_precipitation_mm: 0, daily_chance_of_rain: 20, condition: { text: 'Overcast' } } },
            { date: '2026-10-16', day: { maxtemp_c: 14, mintemp_c: 7, maxwind_kph: 10, total_precipitation_mm: 0, daily_chance_of_rain: 10, condition: { text: 'Sunny' } } },
            { date: '2026-10-17', day: { maxtemp_c: 11, mintemp_c: 5, maxwind_kph: 8, total_precipitation_mm: 0, daily_chance_of_rain: 5, condition: { text: 'Partly Cloudy' } } },
            { date: '2026-10-18', day: { maxtemp_c: 9, mintemp_c: 3, maxwind_kph: 9, total_precipitation_mm: 0, daily_chance_of_rain: 5, condition: { text: 'Partly Cloudy' } } },
            { date: '2026-10-19', day: { maxtemp_c: 8, mintemp_c: 2, maxwind_kph: 11, total_precipitation_mm: 0, daily_chance_of_rain: 10, condition: { text: 'Cloudy' } } }
        ]
    },
    balkans: {
        cities: [
            { name: 'Montegro, RS', current: { temp_c: 15, condition: 'Partly Cloudy' }, today: { max: 17, min: 9, rainChance: 30 } },
            { name: 'Sarajevo, BA', current: { temp_c: 12, condition: 'Light Rain' }, today: { max: 14, min: 6, rainChance: 70 } },
            { name: 'Skopje, MK', current: { temp_c: 16, condition: 'Sunny' }, today: { max: 19, min: 10, rainChance: 5 } },
            { name: 'Tirana, AL', current: { temp_c: 18, condition: 'Sunny' }, today: { max: 21, min: 12, rainChance: 5 } }
        ]
    },
    world: {
        cities: [
            { name: 'New York, US', current: { temp_c: 18, condition: 'Partly Cloudy' }, today: { max: 20, min: 13, rainChance: 20 } },
            { name: 'London, UK', current: { temp_c: 12, condition: 'Light Rain' }, today: { max: 14, min: 8, rainChance: 60 } },
            { name: 'Tokyo, JP', current: { temp_c: 21, condition: 'Sunny' }, today: { max: 24, min: 16, rainChance: 5 } },
            { name: 'Sydney, AU', current: { temp_c: 19, condition: 'Sunny' }, today: { max: 22, min: 15, rainChance: 5 } },
            { name: 'Nairobi, KE', current: { temp_c: 23, condition: 'Partly Cloudy' }, today: { max: 25, min: 16, rainChance: 10 } },
            { name: 'Rio de Janeiro, BR', current: { temp_c: 26, condition: 'Sunny' }, today: { max: 29, min: 22, rainChance: 15 } }
        ]
    }
};

export default datasets;
