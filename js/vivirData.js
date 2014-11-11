var vivirdata = getVivirData();

function getVivirData() {
	return {
    	"stage": [
		 	{	"id": "h1",
		  	    "next": "h2",
			    "type": "single",
			    "notimer": "true",
			    "content": [
				  {"audio": "h1", "text": "Please select what language you prefer <br/>to use for the program.<br/>Por favor seleccione el lenguaje que prefiere <br/>usar durante este programa."}
			],
			"choices": [
				{"id": "h1.1", "cmd": "selectEspanol", "text": "Español"},
				{"id": "h1.2", "cmd": "selectEnglish", "text": "English"},
				{"id": "submit", "type": "submit", "text": "Go/Proximo"}
			]
		},
		{	"id": "h2",
			"type": "video",
			"next": "help1",
			"back": "h1",
			"video": [
				{"lang": "en", "url": "wTJahRUCNDY", "background": "H2 INTRO ENG.png", "text": "Welcome to the For Our Daughters program!<br/>When it comes to our daughters’ health, we want only the best for them. Sometimes, the information we receive can be overwhelming. That’s why it’s important for parents to be able to talk with their doctor before they make a decision about what is best for their daughters. One question that may have come up recently is should my daughter have the HPV vaccine? Getting accurate information from your doctor, and finding out why other parents have decided to have their daughters vaccinated, will help you and your family make an informed decision. In this program, we’ll follow Maria as she finds out about the HPV vaccine and makes her decision. You’ll be able to select options that will tailor this program especially for you! You’ll see all of the options, but you’re the one who decides which topics you’d like to hear. "},
				{"lang": "es", "url": "wuYjly0lk7s", "background": "H2 INTRO SPAN.png", "text": "Bienvenidos al programa Para Nuestras Hijas.<br/>Cuando se trata de la salud de nuestras hijas, nosotros deseamos sólo lo mejor para ellas. A veces, la información que recibimos puede ser complicada y confusa. Por eso es importante que los padres puedan hablar con su médico antes que tomen una decisión acerca de lo que es mejor para sus hijas. Una pregunta que puede haber tenido recientemente es, debería mi hija recibir la vacuna contra el VPH? Conseguir información correcta de su médico, e informándose por qué otros padres han decidido vacunar a sus hijas, le ayudará a usted y a su familia tomar una decisión informada. En este programa, seguiremos a Maria mientras se informa  de la vacuna contra el VPH y toma su decisión. Usted podrá seleccionar opciones que adaptaran este programa especialmente para usted! Verá todas las opciones, pero usted decidirá sobre cuales temas le gustaría oír. "}
			]
	   },
		
	]
	};
}


