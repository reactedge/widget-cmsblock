import { WIDGET_ID } from "./config/Config.ts";
import type { ReactEdgeRuntimeConfig } from "./config/Config.ts";
import type { CmsBlockBootstrap } from "../services/cmsblock/CmsBlockApi.ts";
import { WidgetView } from "./view/WidgetView.tsx";

interface WidgetRootProps {
    contract: unknown;
    runtime: ReactEdgeRuntimeConfig;
    bootstrap: CmsBlockBootstrap;
}

export function WidgetComponent({ contract, runtime, bootstrap }: WidgetRootProps) {
    return (
        <div className={`reactedge-${WIDGET_ID}`}>
            <WidgetView contract={contract} runtime={runtime} bootstrapData={bootstrap} />
        </div>
    );
}
