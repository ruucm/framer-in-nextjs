import * as React from "react";
/**
 * Returns combines React props from a hash map based on the active variants.
 *
 * @public
 */ export function useAddVariantProps(baseVariant, gestureVariant, variantProps) {
    return React.useCallback((id)=>{
        var ref;
        if (!variantProps) return {
        };
        if (!baseVariant) return {
        };
        // Create an object with all valid props for the target node. Values
        // in higher priority variants override same values in lower
        // priority variants.
        if (gestureVariant) {
            var ref1, ref2;
            return Object.assign({
            }, (ref1 = variantProps[baseVariant]) === null || ref1 === void 0 ? void 0 : ref1[id], (ref2 = variantProps[gestureVariant]) === null || ref2 === void 0 ? void 0 : ref2[id]);
        }
        return ((ref = variantProps[baseVariant]) === null || ref === void 0 ? void 0 : ref[id]) || {
        };
    }, [
        baseVariant,
        gestureVariant,
        variantProps
    ]);
}

export const __FramerMetadata__ = {"exports":{"useAddVariantProps":{"type":"function","annotations":{"framerContractVersion":"1"}},"VariantProps":{"type":"tsType","annotations":{"framerContractVersion":"1"}}}}
//# sourceMappingURL=./useAddVariantProps.map