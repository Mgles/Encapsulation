class Car {
    public name: string = 'BMW'
    public model: string = 'e90'
    private _driver: string = 'Mixail'
    protected injener: string = 'Anton'
    public age: number
    public surname: string

    constructor(surname: string, age: number) {
        this.surname = surname
        this.age = age
    }

    set driver(driver: string) {
        if (!driver) {
            return
        }
        this._driver = driver
    }

    get driver() {
        return this._driver
    }

    public setDriver(driver: string) {
        this._driver = driver
    }

    public getDriver(driver: string): string {
        return this._driver
    }
}

const car = new Car("soryan", 34)

console.log(car)
console.log(car.driver)
car.driver = 'Shimaxer'

console.log(car.driver)
