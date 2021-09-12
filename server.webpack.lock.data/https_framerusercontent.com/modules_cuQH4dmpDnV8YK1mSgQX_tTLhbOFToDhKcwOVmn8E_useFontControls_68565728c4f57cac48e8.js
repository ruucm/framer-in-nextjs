// @ts-ignore
import { fontStore } from "framer";
import { useEffect } from "react";
// @ts-ignore
import { fontStack } from "https://framerusercontent.com/modules/VTUDdizacRHpwbkOamr7/AykinQJbgwl92LvMGZwu/constants.js";
const fontWeights = {
    100: "Thin",
    200: "Extra-light",
    300: "Light",
    400: "Regular",
    500: "Medium",
    600: "Semi-bold",
    700: "Bold",
    800: "Extra-bold",
    900: "Black"
};
export function useFontControls(props) {
    const { fontFamily , fontSize , fontWeight , font  } = props;
    const fontWeightName = fontWeights[fontWeight];
    const customFontStack = `"${fontFamily} ${fontWeightName}", "${fontFamily}", ${fontStack}`;
    const fontFamilyStyle = fontFamily ? {
        fontSize,
        fontWeight,
        fontFamily: customFontStack
    } : {
        fontSize,
        fontWeight
    };
    const fetchCustomFonts = async ()=>{
        await fontStore.loadWebFontsFromSelectors([
            `CUSTOM;${fontFamily}`,
            `CUSTOM;${fontFamily} ${fontWeightName}`,
            `GF;${fontFamily}-${fontWeightName.toLowerCase()}`, 
        ]).catch((e)=>console.error(e)
        );
    };
    useEffect(()=>{
        if (font) fetchCustomFonts();
    }, [
        font,
        fontFamily,
        fontWeight
    ]);
    return fontFamilyStyle;
}

export const __FramerMetadata__ = {"exports":{"useFontControls":{"type":"function","annotations":{"framerContractVersion":"1"}}}}
//# sourceMappingURL=./useFontControls.map