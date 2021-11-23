const firebaseConfig = {
    apiKey: "AIzaSyDR8foOYTe2cfTkEbkzKJTAFN19kwmzOPQ",
    authDomain: "crud-ed89d.firebaseapp.com",
    projectId: "crud-ed89d",
    storageBucket: "crud-ed89d.appspot.com",
    messagingSenderId: "1078567914017",
    appId: "1:1078567914017:web:977e5155964dc5b11ab160"
}

const openModal = document .getElementById('openRegisterModal')
const modal = document .getElementById('modal')
const closeModal = document .getElementById('closeRegisterModal')
const registerForm = document .getElementById('register-form')
const app = initializeApp(firebaseConfig);
const database = geodatabade(app);
const studentRef = firebase.database().ref('students')

const showRegisterModal = () => {
    modal.classList.toggle('is-active')
}

openModal .addEventListener('click', showRegisterModal)
closeModal .addEventListener('click', showRegisterModal)

registerForm.addEventListener('submit',(e) =>{
    e.preventDefault()

    const nombre = registerForm['nombre'].value
    const apellido = registerForm['ape'].value

    const registerStudent = studentRef.push()
    registerStudent.set({
        Uid: registerStudent.key,
        Nombre: nombre,
        Apellido: apellido
    })
    showRegisterModal()
})

