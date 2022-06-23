export class Utils {
    static verifyIfNotEmpty(val: any): void {
        if (val === undefined || val === null || val.length <= 0) {
            throw new Error('This varable should not be empty!')
        }
    }
}