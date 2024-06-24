import data from '../../artigos.json'

const filme = [
    {
      title: "Pedro",
      description: "O astronauta americano George Taylor vai parar por acidente em um planeta habitado por macacos. Os animais dominam o lugar, escravizando os seres humanos, inclusive George e os tripulantes da nave. Agora, o astronauta terá que lutar pela sua liberdade e os outros.",
      image: "./public/johnwick.jpg" 
    },
    {
      title: "Deo",
      description: "O astronauta americano George Taylor vai parar por acidente em um planeta habitado por macacos. Os animais dominam o lugar, escravizando os seres humanos, inclusive George e os tripulantes da nave. Agora, o astronauta terá que lutar pela sua liberdade e os outros.",
      image: "./public/johnwick.jpg" 
    },
    {
      title: "Pedro",
      description: "O astronauta americano George Taylor vai parar por acidente em um planeta habitado por macacos. Os animais dominam o lugar, escravizando os seres humanos, inclusive George e os tripulantes da nave. Agora, o astronauta terá que lutar pela sua liberdade e os outros.",
      image: "./public/johnwick.jpg" 
    },
    {
      title: "Pedro",
      description: "O astronauta americano George Taylor vai parar por acidente em um planeta habitado por macacos. Os animais dominam o lugar, escravizando os seres humanos, inclusive George e os tripulantes da nave. Agora, o astronauta terá que lutar pela sua liberdade e os outros.",
      image: "./public/johnwick.jpg" 
    },
    {
      title: "Deo",
      description: "O astronauta americano George Taylor vai parar por acidente em um planeta habitado por macacos. Os animais dominam o lugar, escravizando os seres humanos, inclusive George e os tripulantes da nave. Agora, o astronauta terá que lutar pela sua liberdade e os outros.",
      image: "./public/johnwick.jpg" 
    },
    {
      title: "Pedro",
      description: "O astronauta americano George Taylor vai parar por acidente em um planeta habitado por macacos. Os animais dominam o lugar, escravizando os seres humanos, inclusive George e os tripulantes da nave. Agora, o astronauta terá que lutar pela sua liberdade e os outros.",
      image: "./public/johnwick.jpg" 
    },
  ];

function Filmes() {
    console.log(data)
    return (
        <>
        <img src="/public/johnwick.jpg" className="w-full bg-gradient-to-r from-deo1" alt="" />
        <div className="container mx-auto py-8  card-filme text-white rounded-2xl">
      {filme.map((Filmes, index) => (
        <div key={index} className="flex rounded-lg shadow-xl  *: mb-8 p-12 ">
          <img src={Filmes.image} alt={Filmes.title} className="w-52 h-auto object-cover" />
          <div className="p-4 w-2/3">
            <h3 className="text-2xl font-bold mb-2">{Filmes.title}</h3>
            <p className="text-gray-700 mb-4">{Filmes.description}</p>
            <button className="bg-deo1 text-white py-2 px-4 rounded hover:bg-blue-600">Ver mais</button>
          </div>
        </div>
      ))}
    </div>
        </>
    );
}

export default Filmes
