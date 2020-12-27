import fs from 'fs'
import { execSync } from 'child_process'

const CREATE = "create"
const FETCH_BY_ID = "fetchById"
const FETCH_ALL = "fetchAll"
const UPDATE = "update"
const DELETE = "delete"

export default function reduxToolkitGenerator(jsonFile, output = "./redux-toolkit-result", opt = "cruda") {
  if (output === ".") {
    output = "./redux-toolkit-result"
  }
  // read input data
  const result = fs.readFileSync(jsonFile)
  const jsonData = JSON.parse(result)
  const options = getOptionArr(opt)
  const actionToRemove = [CREATE, FETCH_BY_ID, FETCH_ALL, UPDATE, DELETE].filter(a => !options.includes(a))
  // read base folder
  const basepath = "./core/redux-toolkit"

  execSync(`mkdir ${output}`)
  jsonData.forEach(({ url, actionName }) => {
    console.log({ actionName })
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
    // write api
    execSync(`sed -i '' -e "s/baseURL/\\${url}/g" ${apiFile}`)
    execSync(`sed -i '' -e "s/base/${name}/g" ${apiFile}`)
    execSync(`sed -i '' -e "s/Base/${capitalName}/g" ${apiFile}`)
    // write slice
    execSync(`sed -i '' -e "s/base/${name}/g" ${sliceFile}`)
    execSync(`sed -i '' -e "s/Base/${capitalName}/g" ${sliceFile}`)

    // clean up
    // remove from option
    actionToRemove.forEach(action => {
      execSync(`sed -i '' -e "/(<${action}>).+(<\/${action}>)/d" ${actionFile}`)
      execSync(`sed -i '' -e "/(<${action}>).+(<\/${action}>)/d" ${sliceFile}`)
    })
    // remove comment from option
    cleanUpComment([actionFile, sliceFile])

    // rename
    execSync(`mv ${actionFile} ${writepath}/${name}Action.js`)
    execSync(`mv ${apiFile} ${writepath}/${name}API.js`)
    execSync(`mv ${sliceFile} ${writepath}/${name}Slice.js`)
  })
}

const cleanUpComment = (arr = []) => {
  if (arr.length == 0) return
  arr.forEach(path => {
    execSync(`sed -i '' -e "/\/\/<${CREATE}>/d" ${path}`)
    execSync(`sed -i '' -e "/\/\/</${CREATE}>/d" ${path}`)
    execSync(`sed -i '' -e "/\/\/<${FETCH_BY_ID}>/d" ${path}`)
    execSync(`sed -i '' -e "/\/\/</${FETCH_BY_ID}>/d" ${path}`)
    execSync(`sed -i '' -e "/\/\/<${FETCH_ALL}>/d" ${path}`)
    execSync(`sed -i '' -e "/\/\/</${FETCH_ALL}>/d" ${path}`)
    execSync(`sed -i '' -e "/\/\/<${DELETE}>/d" ${path}`)
    execSync(`sed -i '' -e "/\/\/</${DELETE}>/d" ${path}`)
    execSync(`sed -i '' -e "/\/\/<${UPDATE}>/d" ${path}`)
    execSync(`sed -i '' -e "/\/\/</${UPDATE}>/d" ${path}`)
  })
}

const getOptionArr = (commandStr) => {
  const str = commandStr.toLowerCase().match(/[c|r|a|u|d]/g)
  const arr = [...str].map((c) => {
    switch (c) {
      case 'c': return CREATE
      case 'r': return FETCH_BY_ID
      case 'a': return FETCH_ALL
      case 'u': return UPDATE
      case 'd': return DELETE
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
