export interface IList {
    utilisateur : string,
    password : string,
    todoListes : Array<{
        name : string,
        elements : Array<string>;
    }>;
}