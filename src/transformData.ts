"use strict";

import powerbi from "powerbi-visuals-api";
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;


export interface ISlicerData {
  values : string[],
  table: string,
  column:string
} 

export const transformRawData = (options:VisualUpdateOptions):ISlicerData => {
    let transformedData = {}    
    try { 
        const values = options.dataViews[0].categorical?.categories[0].values
        const tableNameDetails = options.dataViews[0].categorical?.categories[0].source.queryName.split('.')
        transformedData = {
            values,
            table: tableNameDetails[0],
            column:tableNameDetails[1]
        }
    } catch (error) {
        transformedData =  {
            values:[],
            table:'',
            column:'',

        }
    }
    return transformedData as ISlicerData
}