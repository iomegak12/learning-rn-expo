import { ScrollView, StyleSheet } from 'react-native';
import { Card, DefaultTheme } from 'react-native-paper';

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: DefaultTheme.colors.background,
        paddingTop: 10
    },
    card: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto'
    }
});

const BookScreen = () => {
    return (
        <ScrollView style={styles.scrollView}>
            <Card style={styles.card}>
                <Card.Title title="Book Screen"></Card.Title>
            </Card>
        </ScrollView>
    )
};

export {
    BookScreen
};