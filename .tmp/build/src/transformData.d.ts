import powerbi from "powerbi-visuals-api";
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
export interface ISlicerData {
    values: string[];
    table: string;
    column: string;
}
export declare const transformRawData: (options: VisualUpdateOptions) => ISlicerData;
