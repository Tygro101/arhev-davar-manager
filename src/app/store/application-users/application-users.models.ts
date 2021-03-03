
export class ApplicationUser{
    id: string;
    userId: string;
    remainNumberOfTest: number;
    usedNumberOfTest: number;
    public constructor(obj?: Partial<ApplicationUser>) {
        Object.assign(this, obj);
    }
}