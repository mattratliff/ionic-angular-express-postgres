export interface IUser {
    name: string
}

export class UserModel implements IUser {
    public name: string;

    constructor() {
    }

    deserialize(input: any): this {
      Object.assign(this, input)
        return this
    }

    ngOnInit() {
      
    }
}