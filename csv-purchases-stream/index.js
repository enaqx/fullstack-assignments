const fs = require('fs')
const { commerce, company } = require('faker')

const generatePurchase = () => {
  const name = commerce.productName()
  const brand = Math.random() < 0.8 ? company.companyName() : '' // 20% blank brand
  const category = Math.random() < 0.7 ? commerce.department() : '' // 30% blank category
  const price = commerce.price()
  return `"${name}","${brand}","${category}","${price}"\n`
}

setInterval(
  () =>
    fs.appendFile('data.csv', generatePurchase(), err => {
      if (err) throw err
    }),
  1000,
)
