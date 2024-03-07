interface Category {
    title: string;
    synopsis: string;
    intro: string;
    image: string;
    url?: string;
    Category?: string
}

export const videoMocks: Category[] = [
    {
        title: 'Tecnología',
        synopsis: 'Descubre las últimas novedades tecnológicas y aprende sobre los avances más recientes en la industria.',
        intro: 'Bienvenido a nuestra sección de Tecnología, donde encontrarás contenido sobre los últimos gadgets, innovaciones y noticias tecnológicas.',
        image: 'tecnologia.jpg',
        url: 'technology'
    },
    {
        title: 'Cocina',
        synopsis: 'Explora recetas delicioasas y aprende técnicas de cocina con nuestros videos paso a paso.',
        intro: '¡Bienvenido a nuestro espacio de Cocina! Aquí encontrarás una gran variedad de recetas deliciosas y tutoriales para convertirte en un chef experto.',
        image: 'cocina.jpg',
        url: 'cock'
    },
    {
        title: 'Fitness',
        synopsis: 'Sigue rutinas de ejercicio efectivas, consejos de nutrición y tips para mantener un estilo de vida saludable.',
        intro: '¡Bienvenido a nuestra sección de Fitness! Prepárate para ponerte en forma con nuestras rutinas de ejercicios y consejos de salud.',
        image: 'fitness.jpg',
        url: 'fitness'
    },
    {
        title: 'Viajes',
        synopsis: 'Descubre destinos increíbles, consejos de viaje y experiencias únicas alrededor del mundo.',
        intro: '¡Bienvenido a nuestra sección de Viajes! Prepárate para explorar nuevos destinos y descubrir aventuras emocionantes.',
        image: 'viajes.jpg',
        url: 'travels'
    },
    {
        title: 'Ciencia',
        synopsis: 'Sumérgete en el fascinante mundo de la ciencia y descubre los misterios del universo.',
        intro: '¡Bienvenido a nuestra sección de Ciencia! Explora los avances científicos más recientes y aprende sobre los fenómenos más intrigantes del universo.',
        image: 'ciencia.jpg',
        url: 'science'
    }
];

export const technology: Category[] = [
    {
        title: 'Los mejores smartphones de 2024',
        synopsis: 'Descubre una selección de los mejores smartphones del mercado actual, con sus características y precios.',
        intro: '¿Estás buscando un nuevo smartphone? No te pierdas esta selección de los mejores modelos disponibles en 2024.',
        image: 'tecnologia-smartphone.jpg',
        url: 'technology/smartphones'
    },
    {
        title: 'Inteligencia artificial: presente y futuro',
        synopsis: 'Explora los avances y aplicaciones de la inteligencia artificial en diferentes áreas del mundo actual.',
        intro: 'La inteligencia artificial está transformando nuestro mundo. Descubre cómo esta tecnología está cambiando la forma en que vivimos, trabajamos y nos relacionamos.',
        image: 'tecnologia-inteligencia-artificial.jpg',
        url: 'technology/artificial-intelligence'
    },
    {
        title: 'Realidad virtual y aumentada: nuevas experiencias',
        synopsis: 'Sumérgete en el mundo de la realidad virtual y aumentada y descubre las nuevas experiencias que ofrece esta tecnología.',
        intro: 'La realidad virtual y aumentada están revolucionando la forma en que interactuamos con el mundo. Explora las posibilidades que ofrece esta tecnología para el entretenimiento, la educación y el trabajo.',
        image: 'tecnologia-realidad-virtual.jpg',
        url: 'technology/virtual-reality'
    }
];

export const cock: Category[] = [
    {
        title: 'Recetas de postres fáciles y deliciosos',
        synopsis: 'Disfruta de una selección de postres deliciosos que puedes preparar en casa con ingredientes sencillos.',
        intro: '¿Te apetece un postre delicioso y fácil de preparar? No te pierdas estas recetas que te sorprenderán por su sabor y simplicidad.',
        image: 'cocina-postres.jpg',
        url: 'cock/desserts'
    },
    {
        title: 'Consejos para preparar una cena perfecta',
        synopsis: 'Descubre los mejores consejos para preparar una cena deliciosa y memorable para tus invitados.',
        intro: '¿Quieres sorprender a tus invitados con una cena perfecta? Sigue estos consejos y disfruta de una velada inolvidable.',
        image: 'cocina-cena.jpg',
        url: 'cock/dinner'
    },
    {
        title: 'Alimentación saludable para toda la familia',
        synopsis: 'Aprende a preparar comidas saludables y nutritivas para toda la familia.',
        intro: '¿Quieres mejorar la alimentación de tu familia? Descubre cómo preparar comidas saludables y deliciosas que encantarán a todos.',
        image: 'cocina-saludable.jpg',
        url: 'cock/healthy-eating'
    }
];

export const fitness: Category[] = [
    {
        title: 'Ejercicios para fortalecer el abdomen',
        synopsis: 'Descubre una rutina de ejercicios efectiva para fortalecer tu abdomen y lograr un vientre plano.',
        intro: '¿Quieres un abdomen tonificado y definido? Sigue esta rutina de ejercicios y verás resultados en poco tiempo.',
        image: 'fitness-abdomen.jpg',
        url: 'fitness/abs'
    },
    {
        title: 'Consejos para mejorar tu rendimiento deportivo',
        synopsis: 'Descubre cómo mejorar tu rendimiento deportivo con consejos de entrenamiento, nutrición y descanso.',
        intro: '¿Quieres llevar tu rendimiento deportivo al siguiente nivel? Sigue estos consejos y alcanza tus objetivos.',
        image: 'fitness-rendimiento.jpg',
        url: 'fitness/performance'
    },
    {
        title: 'Yoga para principiantes',
        synopsis: 'Aprende los fundamentos del yoga y disfruta de los beneficios de esta práctica para tu cuerpo y mente.',
        intro: '¿Quieres iniciarte en el yoga? Descubre los beneficios de esta práctica y aprende las posturas básicas.',
        image: 'fitness-yoga.jpg',
        url: 'fitness/yoga'
    }
];

export const travels: Category[] = [
    {
        title: 'Los mejores destinos para viajar en 2024',
        synopsis: 'Descubre una selección de los mejores destinos para viajar este año, con recomendaciones de lugares que visitar y actividades que realizar.',
        intro: '¿Estás planeando tus próximas vacaciones? No te pierdas esta selección de los mejores destinos para viajar en 2024.',
        image: 'viajes-destinos.jpg',
        url: 'travels/destinations'
    },
    {
        title: 'Consejos para viajar con poco presupuesto',
        synopsis: 'Descubre cómo viajar sin gastar mucho dinero con consejos para encontrar vuelos baratos, alojamiento y actividades.',
        intro: '¿Quieres viajar sin gastar mucho dinero? Sigue estos consejos y disfruta de unas vacaciones inolvidables sin salirte de tu presupuesto.',
        image: 'viajes-presupuesto.jpg',
        url: 'travels/budget'
    },
    {
        title: 'Las mejores rutas de senderismo del mundo',
        synopsis: 'Explora las rutas de senderismo más impresionantes del mundo y disfruta de la naturaleza en estado puro.',
        intro: '¿Eres amante del senderismo? Descubre las mejores rutas del mundo y prepárate para una aventura inolvidable.',
        image: 'viajes-senderismo.jpg',
        url: 'travels/hiking'
    }
];

export const science: Category[] = [
    {
        title: 'Los misterios del universo',
        synopsis: 'Explora los misterios del universo y descubre los últimos descubrimientos científicos sobre el espacio, el tiempo y la materia.',
        intro: '¿Te apasiona la ciencia? Sumérgete en los misterios del universo y descubre los últimos avances científicos.',
        image: 'ciencia-universo.jpg',
        url: 'science/universe'
    },
    {
        title: 'El cambio climático: una amenaza para el planeta',
        synopsis: 'Conoce las causas y consecuencias del cambio climático y descubre cómo podemos combatirlo.',
        intro: 'El cambio climático es una amenaza real para nuestro planeta. Descubre cómo podemos actuar para protegerlo.',
        image: 'ciencia-cambio-climatico.jpg',
        url: 'science/climate-change'
    },
    {
        title: 'La inteligencia artificial: ¿una amenaza o una oportunidad?',
        synopsis: 'Explora los beneficios y riesgos de la inteligencia artificial y descubre cómo esta tecnología está cambiando nuestro mundo.',
        intro: 'La inteligencia artificial está transformando nuestro mundo. Descubre cómo podemos aprovechar esta tecnología para el bien de la humanidad.',
        image: 'ciencia-inteligencia-artificial.jpg',
        url: 'science/artificial-intelligence'
    }
];
