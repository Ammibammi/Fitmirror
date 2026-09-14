import { Pressable, Text } from 'react-native';
import { GlobalStyle } from '../styles/GlobalStyle';

export default function ButtonComponent({ title, onPress }) {
    return (
        <Pressable
            onPress={onPress}
            style={GlobalStyle.primaryBtn}
        >
            <Text style={GlobalStyle.primaryBtnText}>
                {title}
            </Text>
        </Pressable>
    );
}