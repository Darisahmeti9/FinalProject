import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, info: null };
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true, error, info });
        console.error('ErrorBoundary caught:', error, info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <ScrollView contentContainerStyle={styles.container}>
                    <View style={styles.card}>
                        <Text style={styles.title}>Something went wrong</Text>
                        <Text style={styles.message}>{String(this.state.error)}</Text>
                        <Text style={styles.stack}>{this.state.info?.componentStack}</Text>
                    </View>
                </ScrollView>
            );
        }
        return this.props.children;
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: '#fff' },
    card: { backgroundColor: '#fff', padding: 12, borderRadius: 8, borderColor: '#ddd', borderWidth: 1 },
    title: { fontWeight: '700', fontSize: 18, marginBottom: 8, color: '#111' },
    message: { color: '#b00020', marginBottom: 8 },
    stack: { color: '#333', fontSize: 12 }
});
