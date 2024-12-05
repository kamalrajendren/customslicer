import { Visual } from "../../src/visual";
import powerbiVisualsApi from "powerbi-visuals-api";
import IVisualPlugin = powerbiVisualsApi.visuals.plugins.IVisualPlugin;
import VisualConstructorOptions = powerbiVisualsApi.extensibility.visual.VisualConstructorOptions;
import DialogConstructorOptions = powerbiVisualsApi.extensibility.visual.DialogConstructorOptions;
var powerbiKey: any = "powerbi";
var powerbi: any = window[powerbiKey];
var customslicer74C5D9B5F9C04B42B5C37E3EE1A4B471_DEBUG: IVisualPlugin = {
    name: 'customslicer74C5D9B5F9C04B42B5C37E3EE1A4B471_DEBUG',
    displayName: 'customslicer',
    class: 'Visual',
    apiVersion: '5.6.0',
    create: (options?: VisualConstructorOptions) => {
        if (Visual) {
            return new Visual(options);
        }
        throw 'Visual instance not found';
    },
    createModalDialog: (dialogId: string, options: DialogConstructorOptions, initialState: object) => {
        const dialogRegistry = (<any>globalThis).dialogRegistry;
        if (dialogId in dialogRegistry) {
            new dialogRegistry[dialogId](options, initialState);
        }
    },
    custom: true
};
if (typeof powerbi !== "undefined") {
    powerbi.visuals = powerbi.visuals || {};
    powerbi.visuals.plugins = powerbi.visuals.plugins || {};
    powerbi.visuals.plugins["customslicer74C5D9B5F9C04B42B5C37E3EE1A4B471_DEBUG"] = customslicer74C5D9B5F9C04B42B5C37E3EE1A4B471_DEBUG;
}
export default customslicer74C5D9B5F9C04B42B5C37E3EE1A4B471_DEBUG;