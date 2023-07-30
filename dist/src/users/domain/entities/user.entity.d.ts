export type UserProps = {
    name: string;
    email: string;
    password: string;
    createdAt?: Date;
};
export declare class UserEntity {
    readonly props: UserProps;
    constructor(props: UserProps);
}
