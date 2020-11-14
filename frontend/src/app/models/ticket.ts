export class Ticket{
    constructor(
        public url:string,
        public id: number,
        public external_id: number,   
        public created_at: string,
        public updated_at:string,
        public type:string,
        public subject:string,
        public status:string
    ){}
}

