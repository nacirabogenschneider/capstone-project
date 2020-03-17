function get(selector) {
  return document.querySelector(selector)
}

function saveToLocal(name, data) {
  localStorage.setItem(name, JSON.stringify(data))
}

function loadFromLocal(name) {
  const jsonString = localStorage.getItem(name)
  const data = JSON.parse(jsonString)
  return data
}
