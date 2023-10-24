import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

alert('Hola Roberto')

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Roberto Antonio Restrepo Builes</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button>un nuevo boton</button>
        <section id="seleccionar-mascota">
      <h1 className="titulo">MOKEPON! 🔥 🌊 🌴</h1>
      <h2 className="subitulo">Eligue tu mascota:</h2>
      <h3 id="tituloh3">Debes escoger una mascota para iniciar</h3>

      <div className="tarjetas">
        <label className="tarjeta-de-mokepon" htmlFor="hipodoge">
            <p>Hipodoge </p>
            <img src="./assets/1.jpg" alt="Hipodoge"/>
        </label >
        <input type="radio" name="macota" id="hipodoge" />

        <label className="tarjeta-de-mokepon" htmlFor="capipepo">
            <p>Capipepo </p>
            <img src="./assets/2.jpeg" alt="Capipepo"/>
        </label>
        <input type="radio" name="macota" id="capipepo" />

        <label className="tarjeta-de-mokepon" htmlFor="ratigueya">
            <p>Ratigueya </p>
            <img src="./assets/3.webp" alt="Ratigueya"/>
        </label>
        <input type="radio" name="macota" id="ratigueya" />
      </div>

      <button id="boton-mascota">Seleccionar</button>
    </section>

    <section id="seleccionar-ataque">
      <h1 className="titulo">MOKEPON! 🔥 🌊 🌴</h1>
      <h2>Eligue el ataque:</h2>

      <p>
        Tu mascota <span id="mascota-jugador"></span> tiene
        <span id="vidas-jugador">3</span> vidas
      </p>

      <p>
        La mascota <span id="mascota-enemigo"></span> del enemigo tiene
        <span id="vidas-enemigo">3</span> vidas
      </p>

      <p id="seleccionar-mascota">
        <button id="boton-fuego" className='boton-de-ataque'>Fuego 🔥</button>
        <button id="boton-agua" className='boton-de-ataque'>Agua 🌊</button>
        <button id="boton-tierra" className='boton-de-ataque'>Tierra 🌴</button>
      </p>
    </section>

    <section id="mensajes">
    
      <p></p>
    </section>

    <section id="reiniciar">
      <button id="boton-reniciar">Reiniciar Juego</button>
    </section>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        ESto es un ensayo para desplegar algo personal con vite
      </p>
    </>
  )
}

export default App
