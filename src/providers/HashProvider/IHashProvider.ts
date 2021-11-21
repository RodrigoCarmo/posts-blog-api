interface IHashProvider {
    generateHash(password: string): Promise<string>;

    compare(password: string, passwordHash: string): Promise<boolean>;
}

export { IHashProvider }
