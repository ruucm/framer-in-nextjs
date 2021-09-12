import * as React from "react";
export function useForceUpdate() {
    const [_, setForcedRenderCount] = React.useState(0);
    return React.useCallback(()=>setForcedRenderCount((v)=>v + 1
        )
    , []);
}

export const __FramerMetadata__ = {"exports":{"useForceUpdate":{"type":"function","annotations":{"framerContractVersion":"1"}}}}
//# sourceMappingURL=./useForceUpdate.map