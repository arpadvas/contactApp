// define contact model
export default class Contact {
    public id?: number;

    public constructor(
        public first_name: string,
        public last_name: string,
        public avatar: string
    ) { }
}