const form = {
  month: [
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
  ],
  day: [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
  ],
  year: [
    2001,
    2002,
    2003,
    2004,
    2005,
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020,
    2021,
  ],
  gender: ['male', 'female'],
  course: ['java', 'javascript', 'ruby', 'php', 'c#'],
}

setData = (data, id, prepend = true) => {
  let select = document.createElement('select')
  let option = document.createElement('option')
  select.name = 'option'
  let j = 0
  data.forEach(() => {
    option.innerText = data[j]
    option.value = j
    select.append(option.cloneNode(true))
    j++
  })

  prepend
    ? document.getElementById(id).prepend(select)
    : document.getElementById(id).append(select)
}

setData(form.day, 'days')
setData(form.month, 'months')
setData(form.year, 'years')
setData(form.gender, 'genders')
setData(form.course, 'courses', false)
