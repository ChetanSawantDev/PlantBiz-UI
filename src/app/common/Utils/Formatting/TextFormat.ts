/**
 * File: CommonUtils.ts
 * Author: Chetan Sawant
 * Date: 2024-07-21
 * Description: This file contains the Common Methods formatting data.
 */

export class TextFormatUtils{

    /**
     * Converts a string to Lower case.
    */
    public static toLowerCase = (inputVal:string): string=>{
        return inputVal? inputVal.toLowerCase(): "";
    }

    /**
     * Converts a string to Upper case.
     * example Chetan Sawant will be convert to chetan sawant
    */
    public static toUpperCase = (inputVal:string): string=>{
        return inputVal? inputVal.toUpperCase(): "";
    }

    /**
     * Converts a string to Upper case.
     * example chetan sawant will be converted to CHETAN SAWANT
    */
    public static toCamelCase = (inputVal:string): string=>{
        if (!inputVal || inputVal.trim() === '') {
            return "";
        }

        let words: string[] = inputVal.trim().split(" ");
        
        let formattedString = words[0].toLowerCase() + 
            words.slice(1).map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join("");
        
        return formattedString;
    }

    /**
     * Converts a string to Kebab case.
     * example chetan sawant will be converted to chetan-sawant. 
    */
    public static toKebabCase = (inputVal:string): string=>{
        if (!inputVal || inputVal.trim() === '') {
            return "";
        }
        
        return  inputVal.trim().split(" ").reduce((val1, val2)=>{
            return val1 + "-" + val2;
        })
    }

    /**
     * Converts a string to Upper case.
     * example chetan sawant will be converted to chetan_sawant
    */
    public static toSnakeCase = (inputVal:string): string=>{
        if (!inputVal || inputVal.trim() === '') {
            return "";
        }
        
        return  inputVal.trim().split(" ").reduce((val1, val2)=>{
            return val1 + "_" + val2;
        })
    }
    /**
     * Converts a string to Upper case.
     * example chetan sawant will be converted to chetan_sawant
    */
    public static toPascalCase = (inputVal:string): string=>{
        if (!inputVal || inputVal.trim() === '') {
            return "";
        }
        return  inputVal.split(" ").reduce((val1, val2)=> {
            return val1.charAt(0).toUpperCase() + val1.slice(1, val1.length) + val2.charAt(0).toUpperCase() + val2.slice(1,val2.length);
        });
    }
}