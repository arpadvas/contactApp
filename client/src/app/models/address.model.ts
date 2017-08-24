// define address model
export default class Address {
    public id?: number;

    public constructor(
        public street1: string,
        public street2: string,
        public town: string,
        public country: string,
        public contactId: number
    ) { }
}