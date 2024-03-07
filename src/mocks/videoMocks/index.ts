interface Category {
    title: string;
    synopsis: string;
    intro: string;
    image: string;
}

export const videoMocks: Category[] = [
    {
        title: 'Tecnología',
        synopsis: 'Descubre las últimas novedades tecnológicas y aprende sobre los avances más recientes en la industria.',
        intro: 'Bienvenido a nuestra sección de Tecnología, donde encontrarás contenido sobre los últimos gadgets, innovaciones y noticias tecnológicas.',
        image: 'tecnologia.jpg'
    },
    {
        title: 'Cocina',
        synopsis: 'Explora recetas deliciosas y aprende técnicas de cocina con nuestros videos paso a paso.',
        intro: '¡Bienvenido a nuestro espacio de Cocina! Aquí encontrarás una gran variedad de recetas deliciosas y tutoriales para convertirte en un chef experto.',
        image: 'cocina.jpg'
    },
    {
        title: 'Fitness',
        synopsis: 'Sigue rutinas de ejercicio efectivas, consejos de nutrición y tips para mantener un estilo de vida saludable.',
        intro: '¡Bienvenido a nuestra sección de Fitness! Prepárate para ponerte en forma con nuestras rutinas de ejercicios y consejos de salud.',
        image: 'fitness.jpg'
    },
    {
        title: 'Viajes',
        synopsis: 'Descubre destinos increíbles, consejos de viaje y experiencias únicas alrededor del mundo.',
        intro: '¡Bienvenido a nuestra sección de Viajes! Prepárate para explorar nuevos destinos y descubrir aventuras emocionantes.',
        image: 'viajes.jpg'
    },
    {
        title: 'Ciencia',
        synopsis: 'Sumérgete en el fascinante mundo de la ciencia y descubre los misterios del universo.',
        intro: '¡Bienvenido a nuestra sección de Ciencia! Explora los avances científicos más recientes y aprende sobre los fenómenos más intrigantes del universo.',
        image: 'ciencia.jpg'
    }
];
