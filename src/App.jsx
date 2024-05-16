import Card from "./components/Card"
import {users} from './data/users.json'

function App() {

  return (
    <div className='flex flex-col w-full h-full items-center justify-center'>

      <h1 className='tablet:text-6xl text-3xl font-bold p-6'>Cards</h1>

      <section className='flex w-full items-center justify-center flex-row flex-wrap gap-3'>
        {users.map((user) => 
        (
          <Card 
              color={user.color}
              name={user.name} 
              language={user.language}
              location={user.location}
              role={user.role}
              picture={user.picture}
              />
        ))}
      </section>
    </div>

  )
}

export default App