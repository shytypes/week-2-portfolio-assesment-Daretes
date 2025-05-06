const form = document.querySelector('form')

function mysubmit(e) {
  e.preventDefault()

  const Firstname = document.querySelector('#Firstname').value
  const Secondname = document.querySelector('#Secondname').value
  const Email = document.querySelector('#Email').value
  const Message = document.querySelector('#Message').value
  const myresult = document.querySelector('#myresult')
  //   console.log('Firstname =>', Firstname)

  const formData = {
    Firstname: 'Firstname',
    Secondname: 'Secondname',
    Email: 'Email',
    Message: 'Message',
  }

  myresult.innerHTML = `<li>First name => ${Firstname}</li><li>Second name => ${Secondname}</li><li>Email => ${Email}</li><li>Message => ${Message}</li>`
}

form.addEventListener('submit', mysubmit)
