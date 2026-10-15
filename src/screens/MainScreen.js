import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import datasets from '../api/forecastData';

function RegionSelector({ value, onChange }) {
    return (
        <View style={selStyles.row}>
            <TouchableOpacity style={[selStyles.btn, value === 'kosovo' && selStyles.active]} onPress={() => onChange('kosovo')}>
                <Text style={[selStyles.btnText, value === 'kosovo' && selStyles.activeText]}>Kosovo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[selStyles.btn, value === 'balkans' && selStyles.active]} onPress={() => onChange('balkans')}>
                <Text style={[selStyles.btnText, value === 'balkans' && selStyles.activeText]}>Balkans</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[selStyles.btn, value === 'world' && selStyles.active]} onPress={() => onChange('world')}>
                <Text style={[selStyles.btnText, value === 'world' && selStyles.activeText]}>World</Text>
            </TouchableOpacity>
        </View>
    );
}

function KosovoView({ data }) {
    return (
        <>
            <View style={styles.heroContainer}>
                <View style={styles.heroCard}>
                    <View style={styles.heroLeft}>
                        <Text style={styles.city}>{data.location.name}</Text>
                        <Text style={styles.country}>{data.location.country}</Text>
                        <Text style={styles.largeTemp}>{Math.round(data.current.temp_c)}°C</Text>
                        <Text style={styles.condLarge}>{data.current.condition.text}</Text>
                    </View>
                    <View style={styles.heroStats}>
                        <Text style={styles.stat}>Wind: {data.current.wind_kph} kmph</Text>
                        <Text style={styles.stat}>Precip: {data.current.precip_mm} mm</Text>
                        <Text style={styles.stat}>Pressure: {data.current.pressure_mb} mb</Text>
                    </View>
                </View>

                <View style={styles.fiveDayStrip}>
                    {data.forecast.map(d => (
                        <View key={d.date} style={styles.dayTile}>
                            <Text style={styles.dayLabel}>{(new Date(d.date)).toLocaleDateString(undefined, { weekday: 'short' }).toUpperCase()}</Text>
                            <Text style={styles.dayIcon}>{d.day.condition.text.includes('Rain') ? '🌧️' : d.day.condition.text.includes('Sunny') ? '☀️' : '⛅'}</Text>
                            <Text style={styles.dayTemp}>{d.day.maxtemp_c}°</Text>
                        </View>
                    ))}
                </View>
            </View>
        </>
    );
}

function BalkansView({ data }) {
    return (
        <View>
            {data.cities.map(c => (
                <View key={c.name} style={styles.card}>
                    <Text style={styles.citySmall}>{c.name}</Text>
                    <Text style={styles.cond}>{c.current.temp_c}° — {c.current.condition}</Text>
                    <Text style={styles.small}>Today: {c.today.max}° / {c.today.min}° • Rain {c.today.rainChance}%</Text>
                </View>
            ))}
        </View>
    );
}

function WorldView({ data }) {
    return (
        <View>
            {data.cities.map(c => (
                <View key={c.name} style={styles.card}>
                    <Text style={styles.citySmall}>{c.name}</Text>
                    <Text style={styles.cond}>{c.current.temp_c}° — {c.current.condition}</Text>
                    <Text style={styles.small}>Today: {c.today.max}° / {c.today.min}° • Rain {c.today.rainChance}%</Text>
                </View>
            ))}
        </View>
    );
}

export default function MainScreen() {
    const [region, setRegion] = useState('kosovo');

    useEffect(() => {
        console.log('MainScreen mounted, region=', region);
    }, [region]);
    // Basic guard: if datasets failed to import, show an error message instead of blank screen
    if (!datasets) {
        console.error('datasets module not available');
        return (
            <SafeAreaView style={[styles.container, styles.center]}>
                <Text style={{ color: '#111' }}>No forecast data available.</Text>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.header}>Regional Weather</Text>
                <RegionSelector value={region} onChange={setRegion} />

                {region === 'kosovo' ? <KosovoView data={datasets.kosovo} /> : region === 'balkans' ? <BalkansView data={datasets.balkans} /> : <WorldView data={datasets.world} />}

                <View style={styles.card}>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const selStyles = StyleSheet.create({
    row: { flexDirection: 'row', justifyContent: 'center', marginBottom: 12 },
    btn: { paddingVertical: 8, paddingHorizontal: 16, backgroundColor: '#fff', borderRadius: 20, marginHorizontal: 6 },
    active: { backgroundColor: '#2b6cb0' },
    btnText: { color: '#333', fontWeight: '700' },
    activeText: { color: '#fff' }
});

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#0D47A1' },
    content: { padding: 16 },
    header: { fontSize: 18, fontWeight: '800', textAlign: 'center', marginBottom: 8, color: '#ABD2FA' },
    hero: { backgroundColor: '#1e90ff', padding: 16, borderRadius: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
    heroContainer: { marginBottom: 12 },
    heroCard: { backgroundColor: '#091540', borderRadius: 12, padding: 16, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    heroLeft: { flex: 1 },
    heroStats: { width: 120, alignItems: 'flex-end' },
    city: { color: '#ABD2FA', fontSize: 20, fontWeight: '700' },
    country: { color: 'rgba(173,210,250,0.9)', marginTop: 4 },
    largeTemp: { color: '#7692FF', fontSize: 48, fontWeight: '800', marginTop: 8 },
    condLarge: { color: '#ABD2FA', marginTop: 6 },
    stat: { color: '#ABD2FA', fontSize: 13, marginBottom: 6 },
    row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
    cardSmall: { flex: 1, backgroundColor: '#0c94b6', marginRight: 8, padding: 10, borderRadius: 10, elevation: 2 },
    cardDate: { fontWeight: '700', marginBottom: 6, color: '#111' },
    cardCond: { fontSize: 14, marginBottom: 6, color: '#111' },
    cardTemp: { fontWeight: '600', marginBottom: 4, color: '#111' },
    cardMeta: { color: '#444', fontSize: 12 },
    card: { backgroundColor: '#C5C1C1', padding: 12, borderRadius: 10, marginBottom: 12 },
    citySmall: { fontWeight: '700', marginBottom: 6, color: '#111' },
    small: { color: '#111', fontSize: 13 },
    subhead: { fontSize: 16, fontWeight: '700', marginBottom: 8, color: '#111' },
    bullet: { fontSize: 14, color: '#111' }
    ,
    fiveDayStrip: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 },
    dayTile: { alignItems: 'center', flex: 1 },
    dayLabel: { fontSize: 12, color: '#ABD2FA', marginBottom: 6 },
    dayIcon: { fontSize: 20, marginBottom: 6 },
    dayTemp: { color: '#7692FF', fontWeight: '700' }
});
