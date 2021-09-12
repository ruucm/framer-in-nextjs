import { useMemo } from "react";
import { RenderTarget } from "framer";
export function useRenderTarget() {
    const currentRenderTarget = useMemo(()=>RenderTarget.current()
    , []);
    return currentRenderTarget;
}
export function useIsInPreview() {
    const inPreview = useMemo(()=>RenderTarget.current() === RenderTarget.preview
    , []);
    return inPreview;
}

export const __FramerMetadata__ = {"exports":{"useIsInPreview":{"type":"function","annotations":{"framerContractVersion":"1"}},"useRenderTarget":{"type":"function","annotations":{"framerContractVersion":"1"}}}}
//# sourceMappingURL=./useRenderTarget.map