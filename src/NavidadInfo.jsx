import React, { useState, useEffect } from 'react';
import './NavidadInfo.css';

const NavidadInfoApp = () => {
  const [activeTab, setActiveTab] = useState('traditions');
  const [selectedCountry, setSelectedCountry] = useState('global');
  const [snowflakes, setSnowflakes] = useState([]);

  // Datos de países y sus tradiciones
  const countriesData = {
    mexico: {
      name: 'México',
      traditions: [
        'Posadas (16-24 de diciembre)',
        'Pastorelas (representaciones teatrales)',
        'Noche de Rábanos (Oaxaca)',
        'Piñatas con 7 picos (representan los pecados capitales)'
      ],
      food: ['Pozole', 'Bacalao', 'Ponche de frutas', 'Buñuelos', 'Tamales'],
      dates: '12 de diciembre al 6 de enero',
      greeting: '¡Feliz Navidad!'
    },
    spain: {
      name: 'España',
      traditions: [
        'Lotería de Navidad "El Gordo" (22 de diciembre)',
        'Nochebuena familiar con cena especial',
        'Cabalgata de Reyes (5 de enero)',
        'Belénes (nacimientos) muy elaborados'
      ],
      food: ['Pavo trufado', 'Mariscos', 'Turrón', 'Polvorones', 'Mazapán'],
      dates: '22 de diciembre al 6 de enero',
      greeting: '¡Feliz Navidad!'
    },
    usa: {
      name: 'Estados Unidos',
      traditions: [
        'Decoración de casas con luces',
        'Santa Claus y las chimeneas',
        'Cartas a Santa',
        'Rudolph y los renos voladores'
      ],
      food: ['Pavo asado', 'Pie de calabaza', 'Galletas de jengibre', 'Eggnog'],
      dates: 'Día de Acción de Gracias al 25 de diciembre',
      greeting: 'Merry Christmas!'
    },
    italy: {
      name: 'Italia',
      traditions: [
        'Presepio (belenes artesanales)',
        'La Befana (bruja buena, 6 de enero)',
        'Mercados de Navidad',
        'Cenone (gran cena de Nochebuena)'
      ],
      food: ['Panettone', 'Pandoro', 'Lenticchie', 'Cotechino', 'Torrone'],
      dates: '8 de diciembre al 6 de enero',
      greeting: 'Buon Natale!'
    },
    bolivia: {
      name: 'Bolivia',
      traditions: [
        'Misa de gallo',
        'Picana (Plato de varias carnes)',
        'Paneton y chocolate caliente',
        'El canto de villancicos y la danza de los Chuntunkis'
      ],
      food: ['Picana', 'Cerdo al horno (Lechón)', 'Pastel de Choclo', 'Picante de pollo o surtido', 'Galletas Navideñas'],
      dates: '24 de diciembre (Nochebuena) con cenas familiares y la Misa del Gallo, hasta el 6 de enero',
      greeting: 'Feliz Navidad!'
    }
  };

  // Información general por categoría
  const infoData = {
    traditions: {
      title: '🎅 Tradiciones Navideñas',
      global: [
        {
          title: 'Decoración del Árbol de Navidad',
          description: 'Originado en Alemania en el siglo XVI, simboliza la vida eterna. Se decora con luces, esferas y una estrella en la punta.',
          icon: '🎄'
        },
        {
          title: 'Intercambio de Regalos',
          description: 'Inspirado en los regalos que los Reyes Magos llevaron al niño Jesús. Simboliza amor, generosidad y buena voluntad.',
          icon: '🎁'
        },
        {
          title: 'Villancicos',
          description: 'Canciones tradicionales que narran el nacimiento de Jesús. Se cantan en reuniones familiares y misas.',
          icon: '🎵'
        },
        {
          title: 'Misa de Gallo',
          description: 'Celebrada a medianoche del 24 de diciembre. Conmemora el nacimiento de Jesús según la tradición cristiana.',
          icon: '⛪'
        },
        {
          title: 'Nacimiento de Belén',
          description: 'Representación del pesebre donde nació Jesús. Incluye figuras de María, José, los Reyes Magos y animales.',
          icon: '👼'
        }
      ]
    },
    gastronomy: {
      title: '🍽️ Gastronomía Navideña',
      global: [
        {
          title: 'Pavo o Pollo Asado',
          description: 'Plato principal en muchas culturas. En algunos países se rellena con frutas, hierbas o carne molida.',
          icon: '🍗'
        },
        {
          title: 'Postres Tradicionales',
          description: 'Panettone (Italia), Buñuelos (México), Fruit Cake (UK), Bûche de Noël (Francia), Rosca de Reyes (España/México).',
          icon: '🍰'
        },
        {
          title: 'Bebidas Navideñas',
          description: 'Ponche, sidra, vino caliente, rompope, eggnog. Muchas incluyen frutas de temporada y especias.',
          icon: '☕'
        },
        {
          title: 'Dulces Especiales',
          description: 'Turrón, mazapán, galletas decoradas, chocolate caliente. Se preparan especialmente para la temporada.',
          icon: '🍫'
        },
        {
          title: 'Cenas Regionales',
          description: 'Cada región tiene su plato especial: bacalao en España, tamales en México, pierna de cerdo en Alemania.',
          icon: '🌍'
        }
      ]
    },
    history: {
      title: '📜 Historia y Orígenes',
      global: [
        {
          title: 'Origen Pagano',
          description: 'Muchas tradiciones navideñas tienen raíces en festivales de invierno como Saturnalia (Roma) y Yule (nórdicos).',
          icon: '🏛️'
        },
        {
          title: 'Fecha del 25 de Diciembre',
          description: 'Establecida en el siglo IV para coincidir con festivales paganos existentes y facilitar la conversión.',
          icon: '📅'
        },
        {
          title: 'Santa Claus',
          description: 'Basado en San Nicolás de Myra (Turquía, siglo IV). Su imagen moderna viene de publicidad de Coca-Cola en 1931.',
          icon: '🎅'
        },
        {
          title: 'Reyes Magos',
          description: 'Melchor, Gaspar y Baltazar. Según el Evangelio de Mateo, siguieron una estrella para adorar al niño Jesús.',
          icon: '👑'
        },
        {
          title: 'Árbol de Navidad Moderno',
          description: 'Popularizado por la realeza europea en el siglo XIX. El árbol del Rockefeller Center comenzó en 1931.',
          icon: '🎄'
        }
      ]
    },
    symbols: {
      title: '✨ Símbolos Navideños',
      global: [
        {
          title: 'Estrella de Belén',
          description: 'Guio a los Reyes Magos. Se coloca en la punta del árbol, representando la luz que guía hacia Jesús.',
          icon: '⭐'
        },
        {
          title: 'Colores Rojo y Verde',
          description: 'Rojo: sangre de Jesús y amor. Verde: vida eterna y esperanza. Oro: realeza y luz.',
          icon: '🎨'
        },
        {
          title: 'Corona de Adviento',
          description: 'Cuatro velas que se encienden cada domingo de Adviento. Simboliza la espera de la llegada de Jesús.',
          icon: '🕯️'
        },
        {
          title: 'Campanas',
          description: 'Anuncian buenas noticias y alejan a los malos espíritus. También llaman a la celebración.',
          icon: '🔔'
        },
        {
          title: 'Muérdago',
          description: 'Tradición celta. Se besa bajo el muérdago para atraer buena suerte y fertilidad.',
          icon: '🌿'
        }
      ]
    }
  };

  // Copos de nieve
  useEffect(() => {
    const flakes = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 6 + 3,
      duration: Math.random() * 5 + 3,
      opacity: Math.random() * 0.8 + 0.2
    }));
    setSnowflakes(flakes);
  }, []);

  // Datos según país seleccionado
  const getCountryData = () => {
    if (selectedCountry === 'global') {
      return {
        name: 'Tradiciones Globales',
        traditions: ['Selecciona un país para ver sus tradiciones específicas'],
        food: ['Selecciona un país para ver su gastronomía navideña'],
        dates: 'Diciembre - Enero',
        greeting: '¡Feliz Navidad!'
      };
    }
    return countriesData[selectedCountry];
  };

  const countryInfo = getCountryData();

  return (
    <div className="christmas-info-container">
      {/* Header */}
      <header className="christmas-header">
        <h1 className="main-title">🎄 Navidad alrededor del Mundo 🌍</h1>
        <h5 className='subtitle2'>No solo en bolivia</h5>
        <p className="subtitle">Descubre tradiciones, gastronomía y costumbres navideñas</p>
      </header>

      {/* Copos de nieve */}
      <div className="snowfall">
        {snowflakes.map(flake => (
          <div 
            key={flake.id}
            className="snowflake"
            style={{
              left: `${flake.left}%`,
              width: `${flake.size}px`,
              height: `${flake.size}px`,
              animationDuration: `${flake.duration}s`,
              opacity: flake.opacity
            }}
          />
        ))}
      </div>

      <div className="content-wrapper">
        {/* Panel izquierdo - Información general */}
        <div className="info-panel">
          {/* Pestañas de navegación */}
          <div className="tabs">
            {Object.keys(infoData).map(tab => (
              <button
                key={tab}
                className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {infoData[tab].icon} {infoData[tab].title}
              </button>
            ))}
          </div>

          {/* Contenido de la pestaña activa */}
          <div className="tab-content">
            <h2 className="section-title">{infoData[activeTab].title}</h2>
            <div className="info-cards">
              {infoData[activeTab].global.map((item, index) => (
                <div key={index} className="info-card">
                  <div className="card-icon">{item.icon}</div>
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-description">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Datos curiosos */}
          <div className="fun-facts">
            <h3 className="facts-title">📚 Datos Curiosos</h3>
            <ul className="facts-list">
              <li>🎅 Santa Claus tiene 31 horas para entregar regalos (por husos horarios)</li>
              <li>🎄 El árbol de Navidad más alto midió 67.36m (Italia, 2021)</li>
              <li>📮 Se envían 15,000 millones de tarjetas navideñas cada año</li>
              <li>🍪 La tradición de galletas para Santa comenzó en la Edad Media</li>
              <li>🌟 "Jingle Bells" originalmente era una canción de Acción de Gracias</li>
            </ul>
          </div>
        </div>

        {/* Panel derecho - Información por país */}
        <div className="country-panel">
          <h2 className="section-title">🌎 Tradiciones por País</h2>
          
          {/* Selector de países */}
          <div className="country-selector">
            <select 
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="country-dropdown"
            >
              <option value="global">🌍 Tradiciones Globales</option>
              <option value="mexico">🇲🇽 México</option>
              <option value="spain">🇪🇸 España</option>
              <option value="usa">🇺🇸 Estados Unidos</option>
              <option value="italy">🇮🇹 Italia</option>
              <option value="bolivia">Bolivia</option>
            </select>
          </div>

          {/* Tarjeta del país */}
          <div className="country-card">
            <div className="country-header">
              <h3 className="country-name">{countryInfo.name}</h3>
              <div className="country-greeting">{countryInfo.greeting}</div>
            </div>
            
            <div className="country-details">
              <div className="detail-section">
                <h4 className="detail-title">🗓️ Fechas de Celebración</h4>
                <p className="detail-content">{countryInfo.dates}</p>
              </div>

              <div className="detail-section">
                <h4 className="detail-title">🎭 Tradiciones Principales</h4>
                <ul className="detail-list">
                  {countryInfo.traditions.map((tradition, index) => (
                    <li key={index}>{tradition}</li>
                  ))}
                </ul>
              </div>

              <div className="detail-section">
                <h4 className="detail-title">🍽️ Gastronomía Típica</h4>
                <div className="food-tags">
                  {countryInfo.food.map((food, index) => (
                    <span key={index} className="food-tag">{food}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Calendario de Adviento interactivo */}
          <div className="advent-calendar">
            <h3 className="calendar-title">Calendario de Adviento</h3>
            <div className="calendar-days">
              {Array.from({ length: 24 }, (_, i) => i + 1).map(day => (
                <div 
                  key={day}
                  className={`calendar-day ${day <= 24 ? 'active' : ''}`}
                  onClick={() => alert(`¡Día ${day} de Diciembre! 🎄`)}
                >
                  {day}
                </div>
              ))}
            </div>
            <p className="calendar-note">Haz clic en un día para descubrir una sorpresa navideña</p>
          </div>
        </div>
      </div>

      {/* Footer con mensaje navideño */}
      <footer className="christmas-footer">
        <div className="footer-content">
          <p className="footer-message">
            Que esta Navidad llene tu hogar de alegría, paz y amor. 
            Recuerda que la mejor tradición no son los regalos, es compartir con quienes amas
          </p>
          <div className="footer-icons">
            <span className="footer-icon">🔴</span>
            <span className="footer-icon">🔵</span>
            <span className="footer-icon">🟢</span>
            <span className="footer-icon">🟡</span>
            <span className="footer-icon">🟣</span>
            <span className="footer-icon">🟡</span>
            <span className="footer-icon">🔵</span>
            <span className="footer-icon">🔴</span>
            <span className="footer-icon">🟡</span>
            <span className="footer-icon">🟣</span>
            <span className="footer-icon">🔵</span>
            <span className="footer-icon">🟢</span>
            <span className="footer-icon">🔴</span>
          </div>
          <p className="footer-copyright">Carlos German Condori Condori - 2025</p>
        </div>
      </footer>
    </div>
  );
};

export default NavidadInfoApp;