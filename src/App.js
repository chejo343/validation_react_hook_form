import React from 'react'
import { useForm } from 'react-hook-form'
import 'bulma/css/bulma.css'

const App = () => {
  const { handleSubmit, errors, register } = useForm()
  const submitForm = (data) => {
    console.log(data)
  }
  return (
    <div className="App">
      <div className="columns is-centered">
        <div className="column is-4-desktop">
          <form onSubmit={handleSubmit(submitForm)} style={{marginTop: '4em'}}>
            <h1 className="is-size-2">Formulario</h1>
            <div class="field">
              <label class="label">Nombre de usuario</label>
              <div class="control">
                <input
                  class="input"
                  ref={register({
                    required: 'El nombre de usuario es requerido',
                    minLength: { value: 5, message: 'Ingresa al menos 5 carácteres' }
                  })}
                  name="username"
                />
              </div>
              <p class="help is-danger">{ errors.username && errors.username.message }</p>
            </div>
            <div class="field">
              <label class="label">E-mail</label>
              <div class="control">
                <input
                  class="input"
                  ref={register({
                    required: 'El e-mail es requerido',
                    min: { value: 13, message: 'El e-mail es requerido'},
                    pattern: { value: /^\S+@\S+$/i, message: 'El e-mail no es valido'}
                  })}
                  name="email"
                  type="email"
                />
              </div>
              <p class="help is-danger">{ errors.email && errors.email.message }</p>
            </div>
            <div class="field">
              <label class="label">Edad</label>
              <div class="control">
                <input
                  class="input"
                  ref={register({
                    required: 'La edad es requerida',
                    min: { value: 13, message: 'La edad mínima es de 13 años'}
                  })}
                  name="age"
                  type="number"
                />
              </div>
              <p class="help is-danger">{ errors.age && errors.age.message }</p>
            </div>
            <div class="field is-grouped">
              <div class="control">
                <button type="submit" class="button">Enviar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
