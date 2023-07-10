import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
    sidebarContainer: {
        backgroundColor: COLORS.black,
        width: 100,
    },
    sidebarText: {
        color: COLORS.white,
        padding: SIZES.medium,
    }
})

export default styles;