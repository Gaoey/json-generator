import fs from 'fs'
import { execSync } from 'child_process'

const CREATE = "create"
const FETCH_BY_ID = "fetchById"
const FETCH_ALL = "fetchAll"
const UPDATE = "update"
const DELETE = "delete"
const slash = "\\\/"

export default function reduxToolkitGenerator(jsonFile, output = "./redux-toolkit-result") {
  if (output === ".") {
    output = "./redux-toolkit-result"
  }
  // read input data
  const result = fs.readFileSync(jsonFile)
  const jsonData = JSON.parse(result)
  // read base folder
  const basepath = "./core/redux-toolkit"

  execSync(`mkdir ${output}`)
  jsonData.forEach(({ url, actionName, options = "*" }) => {
    console.log({ actionName })
    // init
    const capitalName = upperFirstLetter(actionName)
    const name = lowerFirstLetter(actionName)
    const writepath = `${output}/${name}`
    const actionFile = writepath + "/baseAction.js"
    const apiFile = writepath + "/baseAPI.js"
    const sliceFile = writepath + "/baseSlice.js"
    const indexFile = writepath + "/index.js"

    // process
    execSync(`cp -R ${basepath} ${writepath}`)
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
    // write index
    execSync(`sed -i '' -e "s/base/${name}/g" ${indexFile}`)
    execSync(`sed -i '' -e "s/Base/${capitalName}/g" ${indexFile}`)

    // clean up
    const optionsArr = getOptionArr(options)
    const actionsList = [CREATE, FETCH_BY_ID, FETCH_ALL, UPDATE, DELETE]
    const filesList = [actionFile, sliceFile, indexFile, apiFile]

    // remove action
    const actionsListToRemove = actionsList.filter(a => !optionsArr.includes(a))
    actionsListToRemove.forEach(action => removeCodeFromTag(action, filesList))

    // remove comment from option
    cleanUpComment(filesList)

    // rename
    execSync(`mv ${actionFile} ${writepath}/${name}Action.js`)
    execSync(`mv ${apiFile} ${writepath}/${name}API.js`)
    execSync(`mv ${sliceFile} ${writepath}/${name}Slice.js`)
  })
}

// remove code between tag for example <create>(.*)</create>
const removeCodeFromTag = (action, pathArr = []) => {
  if (pathArr.length == 0) return
  const regexp = `${slash}${slash}<${action}>/,/${slash}${slash}<${slash}${action}>`
  pathArr.forEach(path => {
    execSync(`sed -i '' -e "/${regexp}/d" ${path}`)
  })
}

const cleanUpComment = (pathArr = []) => {
  if (pathArr.length == 0) return
  pathArr.forEach(path => {
    execSync(`sed -i '' -e "/${slash}${slash}<${CREATE}>/d" ${path}`)
    execSync(`sed -i '' -e "/${slash}${slash}<${slash}${CREATE}>/d" ${path}`)
    execSync(`sed -i '' -e "/${slash}${slash}<${FETCH_BY_ID}>/d" ${path}`)
    execSync(`sed -i '' -e "/${slash}${slash}<${slash}${FETCH_BY_ID}>/d" ${path}`)
    execSync(`sed -i '' -e "/${slash}${slash}<${FETCH_ALL}>/d" ${path}`)
    execSync(`sed -i '' -e "/${slash}${slash}<${slash}${FETCH_ALL}>/d" ${path}`)
    execSync(`sed -i '' -e "/${slash}${slash}<${DELETE}>/d" ${path}`)
    execSync(`sed -i '' -e "/${slash}${slash}<${slash}${DELETE}>/d" ${path}`)
    execSync(`sed -i '' -e "/${slash}${slash}<${UPDATE}>/d" ${path}`)
    execSync(`sed -i '' -e "/${slash}${slash}<${slash}${UPDATE}>/d" ${path}`)
  })
}

const getOptionArr = (commandStr) => {
  if (commandStr === '' || commandStr === '*') {
    commandStr = "craud"
  }
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
