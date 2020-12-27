import reduxToolkitGenerator from './service/reduxToolkitGenerator'

const main = () => {
  const kind = process.argv[2]
  const jsonFile = process.argv[3]
  const output = process.argv[4]
  const options = process.argv[5]
  switch (kind) {
    case "redux-toolkit":
      reduxToolkitGenerator(jsonFile, output, options)
    default:
      console.log(`doesn't have ${kind}`)
  }
}

main()