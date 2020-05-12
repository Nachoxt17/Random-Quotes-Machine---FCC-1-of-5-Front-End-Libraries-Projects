/**+-Ahora vamos a Codear React.js usando el Lenguaje JSX que es una Extensión de Javascript (Como lo es SASS de CSS) que mezcla Javascript con HTML creada Específicamente para ser usada en React.JS 
  * y simplificar su Código. Antes de Poder usar JSX debemos Permitir que nuestro Archivo "app.js" o el Archivo .js que tengamos COMPILE JSX ya que éste no viene con esa opción por Defecto, para eso usamos el
  *  Programa Prepros 7 en el que Seleccionamos a Archivo "app.js" y le marcamos la Configuración de "Transpile with Babel", lo que va a crear un Nuevo Archivo Llamado "app-dist.js" en la misma Carpeta que el 
  * Archivo "app.js" y por el Cual se PreProcesará el Código JSX por lo cual ahora debemos llamar a "app-dist.js" en vez de a "app.js" desde Nuestro HTML, ya que ahora la Lógica Provrendrá de Allí.
  * Una vez hecho esto podremos escribir JSX Normalmente. NOTA:_ Todo lo que se ponga entre Corchetes "{...}" en JSX será interpretado como Javascript Normal y las Clases de los Elementos en JSX se 
  * escribe "className='***'" en vez de solo "class='***'". NO se pueden poner varios Elementos HTML/JSX en una misma constante/variable, en todo caso se puede Poner 1 Elemento que sea Contenedor de Otros Varios
  * Elementos dentro de él. Si se quieren escribir varias Líneas, poner todo el Contenido de la constante/variable dentro de Paréntesis "(...)".*/
  /**+-Para Poder Usar Redux en Nuestro Proyecto, Primero Debemos Descargar e Instalar Node.js desde "https://nodejs.org/en/#home-downloadhead", Instalar la Extensión de "Code Runner" en Visual
 * Studio Code y Después Cerrar y Reabrir el Programa, luego Abrir Con VS Code la Carpeta de Nuestro Nuevo Proyecto con Redux, Abrir la Terminal y Escribir:_
 * 
 * $ npm init -y (Y le damos ENTER)
 * $ npm i redux (Y le damos ENTER)
 * .*/

/**+-Este Código que escrbí hasta los Numerales(###) es para que Si se Accede a la Página Web Desde un Teléfono Celular Automáticamente se Gire la Pantalla de Forma Horizontal, para que la
 * Página se vea bien. Lo saqué de:_ https://uniwebsidad.com/foro/pregunta/339/como-hacer-que-una-web-se-abra-en-horizontal-al-acceder-con-el-movil/ .*/

const QUOTEBANK = [ 
  { quote: "“There's no way to rule innocent men. The only power any government has is the power to crack down on criminals. Well, when there aren't enough criminals, one makes them. One declares so many things to be a crime that it becomes impossible for men to live without breaking laws.”", 
  author: "― Ayn Rand"
  }, 
  { quote: "“The state is that great fiction by which everyone tries to live at the expense of everyone else.”", 
  author: "― Frederic Bastiat"
  }, 
  { quote: "“We cannot have a world where everyone is a victim. 'I'm this way because my father made me this way. I'm this way because my husband made me this way.' Yes, we are indeed formed by traumas that happen to us. But then you must take charge, you must take over, you are responsible.”", 
  author: "― Camille Paglia"
  }, 
  { quote: "“When plunder becomes a way of life for a group of men in a society, over the course of time they create for themselves a legal system that authorizes it and a moral code that glorifies it”.", 
  author: "― Frédéric Bastiat"
  }, 
  { quote: "“Nationalism does nothing but teach you to hate people you never met, and to take pride in accomplishments you had no part in.”", 
  author: "― Doug Stanhope"
  }, 
  { quote: "“Politics: the art of using euphemisms, lies, emotionalism and fear-mongering to dupe average people into accepting--or even demanding--their own enslavement.”", 
  author: "― Larken Rose"
  }, 
  { quote: "“I am truly free only when all human beings, men and women, are equally free. The freedom of other men, far from negating or limiting my freedom, is, on the contrary, its necessary premise and confirmation.”", 
  author: "― Mikhail Bakunin"
  }, 
  { quote: "“It's not an endlessly expanding list of rights — the 'right' to education, the 'right' to health care, the 'right' to food and housing. That's not freedom, that's dependency. Those aren't rights, those are the rations of slavery — hay and a barn for human cattle.”", 
  author: "― Alexis de Tocqueville"
  }, 
  { quote: "“It is easy to be conspicuously 'compassionate' if others are being forced to pay the cost.”", 
  author: "― Murray N. Rothbard"
  }, 
  { quote: "“We are convinced that liberty without socialism is privilege, injustice; and that socialism without liberty is slavery and brutality.”", 
  author: "― Mikhail Bakunin"
  }, 
  { quote: "“The law is an opinion with a gun.”", 
  author: "― Stefan Molyneux"
  }, 
  { quote: "“The idea that you have to be protected from any kind of uncomfortable emotion is what I absolutely do not subscribe to.”", 
  author: "― John Cleese"
  }, 
  { quote: "“When people have invested their identities into clichés, the only counter argument they have is 'being offended'.”", 
  author: "― Stefan Molyneux"
  }, 
  { quote: "“Just as war is the natural consequence of monopoly, peace is the natural consequence of liberty.”", 
  author: "― Gustave de Molinari"
  }, 
  { quote: "“The genuine values in America arose from rational thought and breaking with tradition, not from blind allegiance to dirt and cloth.”", 
  author: "― Stefan Molyneux"
  }, 
  { quote: "“Private property is redundant. 'Public property' is an oxymoron. All legit property is private. If property isn't private it's stolen.”", 
  author: "― Gustave de Molinari"
  }, 
  { quote: "“If the bulk of the public were really convinced of the illegitimacy of the State, if it were convinced that the State is nothing more nor less than a bandit gang writ large, then the State would soon collapse to take on no more status or breadth of existence than another Mafia gang.”", 
  author: "― Murray N. Rothbard, The Ethics of Liberty"
  }, 
  { quote: "“A tax-supported, compulsory educational system is the complete model of the totalitarian state.”", 
  author: "― Isabel Paterson, God of the Machine"
  }, 
  { quote: "“When we give government the power to make medical decisions for us, we in essence accept that the state owns our bodies.”", 
  author: "― Ron Paul"
  }, 
  { quote: "“I am a libertarian with a small 'l' and a Republican with a capital 'R'. And I am a Republican with a capital 'R' on grounds of expediency, not on principle.”", 
  author: "― Milton Friedman"
  }, 
  { quote: "“I believe the very heart and soul of conservatism is libertarianism.”", 
  author: "― Ronald Reagan"
  }, 
  { quote: "“I know what I want up to the age of two hundred. Know what you want in life and go after it. I worship individuals for their highest possibilities as individuals, and I loathe humanity, for its failure to live up to these possibilities.”", 
  author: "― Ayn Rand"
  } 
]
const QUOTESIZE = QUOTEBANK.length;

window.onload = init;
/**+-El evento load dispara el evento al final del proceso de carga del documento. En este punto, todos los objetos del documento son DOM,  y todas las imágenes y sub-frames han terminado de cargarse.*/
function init() {
  console.log("JS Loaded");
  generateQuote();
};

function generateQuote() {
  console.log("Quote Generated");
  let randomIndex = Math.floor(Math.random() * QUOTESIZE);
  let randomQuoteData = QUOTEBANK[randomIndex];

  document.getElementById("text").innerText = randomQuoteData.quote;
  document.getElementById("author").innerText = randomQuoteData.author;
};