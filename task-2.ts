interface ICalc {
  price: number
  discount: number
  isInstallment: boolean
  months: number
}

type TypeCalc = (prop: ICalc) => number

const totalPrice: TypeCalc = ({price, discount, isInstallment, months}) => {
  return isInstallment
    ? (price - (price / 100 * discount)) / months
    : price - (price / 100 * discount)
}

console.log(totalPrice({price: 100000, discount: 25, isInstallment: true, months: 12})) // 6250