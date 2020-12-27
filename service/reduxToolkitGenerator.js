import fs from 'fs'
import { execSync } from 'child_process'

export default function reduxToolkitGenerator(jsonFile, output = "./redux-toolkit-result", opt = "cruda") {
  // read input data
  const result = fs.readFileSync(jsonFile)
  const jsonData = JSON.parse(result)
  const options = getOptionArr(opt)
  // read base folder
  const basepath = "./core/redux-toolkit"
  execSync(`mkdir ${output}`)
  jsonData.forEach(({ url, actionName }) => {
    console.log({ url })
    const capitalName = upperFirstLetter(actionName)
    const name = lowerFirstLetter(actionName)

    const writepath = `${output}/${name}`
    execSync(`cp -R ${basepath} ${writepath}`)
    const actionFile = writepath + "/baseAction.js"
    const apiFile = writepath + "/baseAPI.js"
    const sliceFile = writepath + "/baseSlice.js"
    // write action 
    execSync(`sed -i '' -e "s/base/${name}/g" ${actionFile}`)
    execSync(`sed -i '' -e "s/Base/${capitalName}/g" ${actionFile}`)
    execSync(`sed -i '' -e "s/baseURL/${url}/g" ${actionFile}`)
    // write api
    execSync(`sed -i '' -e "s/base/${name}/g" ${apiFile}`)
    execSync(`sed -i '' -e "s/Base/${capitalName}/g" ${apiFile}`)
    execSync(`sed -i '' -e "s/baseURL/${url}/g" ${apiFile}`)
    // write slice
    execSync(`sed -i '' -e "s/base/${name}/g" ${sliceFile}`)
    execSync(`sed -i '' -e "s/Base/${capitalName}/g" ${sliceFile}`)
    execSync(`sed -i '' -e "s/baseURL/${url}/g" ${sliceFile}`)
  })
}

const getOptionArr = (commandStr) => {
  const str = commandStr.toLowerCase().match(/[c|r|a|u|d]/g)
  const arr = [...str].map((c) => {
    switch (c) {
      case 'c': return "create"
      case 'r': return "fetchById"
      case 'a': return "fetchAll"
      case 'u': return "update"
      case 'd': return "delete"
      default: // do nothing
    }
  })

  return [...new Set(arr)]
}

function lowerFirstLetter(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

function upperFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
