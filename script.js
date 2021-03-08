const form2 = {
  year: generateArrayOfYears(),
  month: generateArrayOfMonths(),
  day: generateArrayOfDays(),
  gender: ['male', 'female'],
  course: ['java', 'javascript', 'ruby', 'php', 'c#'],
  cityAndState: [
    { lietuva: ['vienas', 'du', 'trys'] },
    { latvija: ['1', 'du', 'trys'] },
    { estija: ['1', '2', 'trys', 'lapai'] },
  ],
}

getCities = () => {
  var cities = []
  for (let c of Object.keys(form2.cityAndState)) {
    var cityStateObject = form2.cityAndState[c]
    cities.push(Object.keys(cityStateObject))
  }
  return cities
}
setData = (data, id) => {
  let select = document.getElementById(id)
  let option = document.createElement('option')
  select.name = 'option'
  let j
  select.innerHTML = ''
  for (j = 0; j < data.length; j++) {
    option.innerText = data[j]
    option.value = j
    select.append(option.cloneNode(true))
  }
}

initializeData = () => {
  for (const obj of Object.keys(form2)) {
    if (obj != 'cityAndState') {
      setData(form2[obj], obj)
    } else {
      setData(getCities(), 'city')
    }
  }
}

initializeData()

function generateArrayOfDays(year = new Date().getFullYear(), month = 0) {
  var date = new Date(year, month, 1)
  var days = []
  var j = 1
  while (date.getMonth() === month) {
    days.push(j++)
    date.setDate(date.getDate() + 1)
  }
  return days
}

function generateArrayOfMonths() {
  month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  return month
}

function generateArrayOfYears(length = 20) {
  var max = new Date().getFullYear()
  var min = max - length
  var years = []
  for (var i = max; i >= min; i--) {
    years.push(i)
  }
  return years
}
function validateEmail(email) {
  var re = /\S+@\S+\.\S+/
  if (!re.test(email)) alert('Enter a valid email')
  return re.test(email)
}

function validatePhoneNumber(number) {
  {
    console.log('working')
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    if (number.match(phoneno)) {
      return true
    } else {
      alert('Enter a correct number (000) 000-0000')
      return false
    }
  }
}

function updateDays() {
  var month = document.getElementById('months')
  var years = document.getElementById('years')
  var yearsVal = years.options[years.selectedIndex].text
  form2.day = generateArrayOfDays(parseInt(yearsVal), parseInt(month.value))
  setData(form2.day, 'days')
}
function updateStates() {
  var cities = document.getElementById('city')
  var citiesVal = cities.options[cities.selectedIndex].value
  let states = Object.values(form2.cityAndState[citiesVal])
  for (var s of states) {
    setData(s, 'state')
  }
}
