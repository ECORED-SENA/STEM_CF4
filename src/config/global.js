export default {
  global: {
    componenteFormativo: 'La Integración Curricular y la Educación STEM',
    descripcionCurso:
      'La integración curricular y la educación STEM como metodologías buscan continuar el proceso que empezó con relación a la necesidad de cambios en la educación para el siglo XXI. Que logre satisfacer el desarrollo de la cuarta revolución industrial y la sustentabilidad planetaria; los nuevos ciudadanos demandan nuevas habilidades y destrezas, en la actual sociedad del conocimiento, habilidades como comprensión de lectura, transmisión de conocimiento, redacción de textos, comunicación asertiva, pensamiento de diseño y el desarrollo de nuevas estrategias para la enseñanza aprendizaje.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Innovación educativa y los proyectos integrados',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Diversas formas de Integración curricular',
            hash: 'T_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'La integración de asignaturas de la educación STEM',
            hash: 'T_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Panoramas de empleabilidad y la educación STEM',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'El contexto internacional del empleo',
            hash: 'T_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Nuevas oportunidades de empleo y la educación STEM ',
            hash: 'T_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Objetivos para el Desarrollo Sostenible – ODS',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Definición',
            hash: 'T_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Agenda 2030',
            hash: 'T_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          'Responsabilidad social y ambiental esperados en los aprendices del siglo XXI',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Habilidades para el siglo XXI',
            hash: 'T_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Valores',
            hash: 'T_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Competencias para la docencia en áreas STEM',
            hash: 'T_4_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Ander-Egg, E. (2001). El trabajo en equipo. Editorial Progreso.  ',
      link:
        'https://books.google.es/books?hl=es&lr=&id=3X9ap9zweMAC&oi=fnd&pg=PA11&dq=trabajo+en+equipo&ots=dNrKfPdxov&sig=6wvxBfe7sZ2ZkA7oreYCRDOJY5w#v=onepage&q=trabajo%20en%20equipo&f=false',
    },
    {
      referencia:
        'Adriana, M. (2020) significado de valores. ¿Qué son Valores?  ',
      link: 'https://www.significados.com/valores/',
    },
    {
      referencia:
        'Güemes González, E. (2020). Proyecto de Innovación en Educación STEM. Valoración de las habilidades transversales en propuestas educativas STEM.  ',
      link:
        'https://repositorio.comillas.edu/xmlui/bitstream/handle/11531/42999/TFG%20-%20Guemes%20Gonzalez%2c%20Elena.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Educaweb (2020) Los 10 trabajos del futuro, muy ligados a las tecnologías y la salud. ',
      link:
        'https://www.educaweb.com/noticia/2018/09/18/10-trabajos-futuro-muy-ligados-tecnologias-18560/',
    },
    {
      referencia: 'Euroinnova (2020) Módulos formativos de la FP. ',
      link:
        'https://www.euroinnova.co/modulos-formativos#:~:text=Un%20m%C3%B3dulo%20formativo%20es%20un,competencia%20especifica%20que%20se%20aplica%2C',
    },
    {
      referencia:
        'Iberdrola (2020) Educación STEM las carrearas con mayor demanda y futuro. ',
      link: 'https://www.iberdrola.com/talento/profesionales-stem',
    },
    {
      referencia:
        'Miguel, C. F. S. (2004). Un enfoque pedagógico para el diseño de programas de formación en contextos organizativos. Teoría de la Educación. Revista Interuniversitaria, 16(1) ',
      link:
        'https://revistas.usal.es/index.php/1130-3743/article/view/3089/3116',
    },
    {
      referencia: 'NACIONES UNIDAS. (2015). www.un.org. ',
      link: 'https://www.un.org/sustainabledevelopment/es/development-agenda/',
    },
    {
      referencia:
        'OBS Bussines school.(2020).Competencias digitales: aprendizaje continuo. ',
      link:
        'https://obsbusiness.school/es/blog-investigacion/social-media/competencias-digitales-aprendizaje-continuo',
    },
    {
      referencia:
        'Portafolio (2020). El país tendrá 450.000 trabajos en 2030. ',
      link:
        'https://www.portafolio.co/economia/el-pais-tendra-450-000-trabajos-stem-en-2030-537699',
    },
    {
      referencia:
        'Salessi, S. M., & Omar, A. G. (2017). Comportamientos proactivos en el trabajo: una puesta al día. ',
      link: 'https://ri.conicet.gov.ar/handle/11336/78451',
    },
    {
      referencia:
        'Tecnológico de monterrey (2020). Construcción de módulos formativos. ',
      link: 'http://cca.org.mx/profesores/cursos/hmfbc_2/m3/u2-01.html',
    },
    {
      referencia:
        'Universidad de servilla (2020) Centro de formación permanente guía para el diseño de acciones formativas. ',
      link: 'https://cfp.us.es/web/elearning/guia/_07.htm',
    },
    {
      referencia:
        'Barraza, A. (2007) La gestión de los procesos de innovación. ',
      link:
        'https://www.researchgate.net/publication/28170494_La_gestion_de_los_procesos_de_innovacion',
    },
    {
      referencia:
        'Bybee, R. (2013) The Case for STEM Education: Challenges and Opportunities. National Science Teachers Association, NSTA Press. ',
    },
    {
      referencia: 'Espinosa, J. B. (2018) ¿Qué es STEAM? Educol. ',
      link: 'https://www.stemeducol.com/libro',
    },
    {
      referencia:
        'Villanueva G. & de la Luz de las Casas, M. (2010) E-competencias: nuevas habilidades del estudiante en la era de la educación, la globalidad y la generación del conocimiento. ',
      link: 'https://www.redalyc.org/pdf/860/86019348008.pdf',
    },
    {
      referencia: '',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Simulador',
      significado:
        'dispositivo o aparato que simula un fenómeno, el funcionamiento real de otro aparato o dispositivo o las condiciones de entorno a las que están sometidos una máquina, aparato o material.',
    },
    {
      termino: 'Estrategias',
      significado:
        'Son una serie de acciones que buscan alcanzar un plan general para lograr uno o más objetivos generales o a largo plazo en condiciones de incertidumbre.',
    },
    {
      termino: 'Alfabetización digital',
      significado:
        'Es un proceso que permite movilizar el desarrollo sostenible de una nación ya que permite una mayor participación de las personas en el mercado laboral.',
    },
    {
      termino: 'ODS',
      significado: 'Objetivos del desarrollo sostenible.',
    },
    {
      termino: 'STEM',
      significado:
        'Significa por sus siglas en inglés: Ciencia, tecnología, ingeniería y matemáticas.',
    },
  ],
  complementario: [
    {
      texto:
        'Secretaría de Comunicaciones y transportes (2019) Marco de Habilidades Digitales. México ',
      tipo: 'PDF ',
      descarga: '/downloads/Marco_de_habilidades_digitales_vf.pdf',
    },
    {
      texto:
        '<i>Web</i> del maestro CMF (2020) Laboratorios Virtuales para cursos de Biología, Química, Física, Matemáticas y Tecnología. ',
      tipo: 'Artículo',
      link:
        'https://webdelmaestrocmf.com/portal/como-evaluar-mediante-rubricas-engoogle-classroom/ ',
    },
    {
      texto: '<i>University of Colorado (s.f.) Interactive Simulations.</i> ',
      tipo: 'Artículo',
      link: 'https://phet.colorado.edu/en/simulations/category/new',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Iván M González',
        cargo: 'Experto temático',
        centro:
          'Centro de Gestión de Mercados Logística y Tecnologías de la Información - Regional Distrito Capital',
      },
      {
        nombre: 'María Cristina Hurtado Zúñiga',
        cargo: 'Experta temática',
        centro: 'CDTI – Sena Regional Valle',
      },
      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Evaluadora instruccional',
        centro: 'Centro de gestión industrial - Regional distrito capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Sandra Carolina Duran López',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Daniel Ricardo Mutis Gómez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andrés Felipe Herrera Roldan',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo Lopez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Maria Isabel Román Rueda',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
