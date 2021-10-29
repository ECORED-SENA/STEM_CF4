<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5    

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Objetivos para el Desarrollo Sostenible – ODS  
         
    .row.justify-content-center.gx-0.shadow_01.mb-5(data-aos="flip-up")
      .col-lg-3
        .crd.clr_cyan.h100
          figure
            img(src="@/assets/curso/tema_3/img_3_01.svg", alt="alt").m-auto
      .col-lg-9.p-5
        .row.align-items-center.h100
          .col-12
            p.mb-0 La Organización de las Naciones Unidas hahan proyectado un camino donde todos los países son protagonistas, para acabar con la pobreza, trabajar por la igualdad, la lucha contra el cambio climático, la conservación del planeta y garantizar la educación inclusiva y para todos. Todo enmarcado en 17 objetivos los cuales se deben trabajar como base hasta el año 2030, una década de cambio donde cada país miembro se compromete a cumplirlos.

    p.mb-5 Para tener en cuenta en relación con la Educación de Calidad, en su cuarto objetivo, las Naciones Unidas describen:

    .tarjeta.img_bg_03.p-4.mb-5
      SlyderA
        .row.justify-content-center.align-items-center.my-5
          .col-lg-5
            p.text-white.mb-0 La educación permite la movilidad socioeconómica ascendente y es clave para salir de la pobreza. Durante la última década, se consiguieron grandes avances a la hora de ampliar el acceso a la educación y las tasas de matriculación en las escuelas en todos los niveles, especialmente para las niñas. No obstante, alrededor de 260 millones de niños aún estaban fuera de la escuela en 2018; cerca de una quinta parte de la población mundial de ese grupo de edad. Además, más de la mitad de todos los niños y adolescentes de todo el mundo no están alcanzando los estándares mínimos de competencia en lectura y matemáticas.        
          .col-lg-5
            figure
              img(src='@/assets/curso/tema_3/slider_3_01.png', alt='')

        .row.justify-content-center.align-items-center.my-5
          .col-lg-5
            p.text-white.mb-0 En 2020, a medida que la pandemia de la COVID-19 se propagaba por todo el planeta, la mayor parte de los países anunciaron el cierre temporal de las escuelas, lo que afectó a más del 91 % de los estudiantes en todo el mundo. En abril de 2020, cerca de 1600 millones de niños y jóvenes estaban fuera de la escuela. Igualmente, cerca de 369 millones de niños que dependen de los comedores escolares tuvieron que buscar otras fuentes de nutrición diaria.        
          .col-lg-5
            figure
              img(src='@/assets/curso/tema_3/slider_3_02.png', alt='')

        .row.justify-content-center.align-items-center.my-5
          .col-lg-5
            p.text-white.mb-0 Nunca habían estado tantos niños fuera de la escuela al mismo tiempo, lo que altera su aprendizaje y cambia drásticamente sus vidas, especialmente las de los niños más vulnerables y marginados. La pandemia mundial tiene graves consecuencias que pueden poner en peligro los avances que tanto costaron conseguir a la hora de mejorar la educación a nivel mundial.       
          .col-lg-5
            figure
              img(src='@/assets/curso/tema_3/slider_3_03.png', alt='')

    separador

    #T_3_1.titulo-segundo
      h2 3.1 Definición

    p.mb-5 La Organización de las naciones unidas (ONU) en su propuesta del año 2015, define su agenda para el desarrollo sostenible como:

    .dan.img_bg_04

      .row.justify-content-center.gx-0.mb-5
        .col-10.col-lg-auto
          .imgContainer
            img(src="@/assets/curso/tema_3/img_3_1_01.png", alt="alt", style="width:390px;").m-auto

        .col-lg-5.col-xl-4
          .crd.clr_secundario_h.crd_Bor_Rad_01L
            img(src="@/assets/componentes/quote.svg", alt="alt").img_size4.m-auto.mb-4
            p.text-white.text-center.mb-4 “La capacidad de satisfacer las necesidades del presente sin comprometer la capacidad de las futuras generaciones para satisfacer sus propias necesidades. Así mismo indica que el desarrollo sostenible exige esfuerzos concentrados en construir un futuro inclusivo, sostenible y resiliente para las personas y el planeta” (ONU, 2015)
            .square.clr_acentoContenido
            br

      .row.justify-content-center.align-items-center
        .col-lg-6
          .cajon.cajon--cl_primario.p-4.mb-4
            p.mb-0 La ONU indica que, para alcanzar el desarrollo sostenible, es fundamental armonizar tres elementos básicos: #[strong el crecimiento económico, la inclusión social y la protección del medio ambiente.]  Estos elementos están interrelacionados y son todos esenciales para el bienestar de las personas y las sociedades.

          p.mb-5 También indica que se debe alcanzar la erradicación de la pobreza en todas sus formas y dimensiones, ya que es una condición indispensable para lograr el desarrollo sostenible. A tal fin, debe promoverse un crecimiento económico sostenible, inclusivo y equitativo, que cree mayores oportunidades para todos, que reduzca las desigualdades, mejore los niveles de vida básicos, fomente el desarrollo social equitativo e inclusivo y promueva la ordenación integrada y sostenible de los recursos naturales y los ecosistemas. (Naciones Unidas , 2015)

        .col-lg-6(data-aos="fade-left")
          img(src="@/assets/curso/tema_3/img_3_1_02.svg", alt="alt", style="width:450px;").m-auto


    separador

    #T_3_2.titulo-segundo
      h2 3.2 Agenda 2030

    p.mb-5 En la agenda 2030 se proponen 17 objetivos para el desarrollo sostenible, una guía o ruta en la cual cada país miembro de la organización se compromete a cumplirlos. Los objetivos son:

    SlyderD.mb-5(:datos="datosSlyder").mb-5

    p.mb-5 A continuación, se puede ver una imagen con los 17 objetivos unificados:

    figure
      img(src="@/assets/curso/tema_3/img_3_2_18.jpg", alt="alt").m-auto
      figcaption Fuente: (Naciones Unidas , 2015) 


      
      
             

    



    
    

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Fin de la pobreza',
        texto:
          'Objetivo 1. Poner fin a la pobreza en todas sus formas en todo el mundo.',
        imagen: require('@/assets/curso/tema_3/img_3_2_01.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Hambre cero',
        texto:
          'Objetivo 2. Poner fin al hambre, lograr la seguridad alimentaria y la mejora de la nutrición y promover la agricultura sostenible.',
        imagen: require('@/assets/curso/tema_3/img_3_2_02.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Salud y bienestar',
        texto:
          'Objetivo 3. Garantizar una vida sana y promover el bienestar para todos en todas las edades.',
        imagen: require('@/assets/curso/tema_3/img_3_2_03.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Educación de calidad',
        texto:
          'Objetivo 4. Garantizar una educación inclusiva, equitativa y de calidad y promover oportunidades de aprendizaje durante toda la vida para todos.',
        imagen: require('@/assets/curso/tema_3/img_3_2_04.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Igualdad de género',
        texto:
          'Objetivo 5. Lograr la igual entre los géneros y empoderar a todas la mujeres y niñas.',
        imagen: require('@/assets/curso/tema_3/img_3_2_05.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Agua limpia y saneamiento',
        texto:
          'Objetivo 6. Garantizar la disponibilidad de agua y su gestión sostenible y el saneamiento para todos.',
        imagen: require('@/assets/curso/tema_3/img_3_2_06.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Energía asequible y no contaminante',
        texto:
          'Objetivo 7. Garantizar el acceso a una energía asequible, segura, sostenible y moderna.',
        imagen: require('@/assets/curso/tema_3/img_3_2_07.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Trabajo decente y crecimiento económico',
        texto:
          'Objetivo 8. Promover el crecimiento económico inclusivo y sostenible, el empleo y el trabajo decente para todos.',
        imagen: require('@/assets/curso/tema_3/img_3_2_08.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Industria, innovación e infraestructura',
        texto:
          'Objetivo 9. Construir infraestructuras resilientes, promover la industrialización sostenible y fomentar la Innovación.',
        imagen: require('@/assets/curso/tema_3/img_3_2_09.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Reducción de las desigualdades',
        texto: 'Objetivo 10. Reducir la desigualdad en y entre los países.',
        imagen: require('@/assets/curso/tema_3/img_3_2_10.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Ciudades y comunidades sostenibles',
        texto:
          'Objetivo 11. Lograr que las ciudades sean más inclusivas, seguras, resilientes y sostenibles.',
        imagen: require('@/assets/curso/tema_3/img_3_2_11.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Producción y consumos responsables',
        texto:
          'Objetivo 12. Garantizar modalidades de consumo y producción sostenibles.',
        imagen: require('@/assets/curso/tema_3/img_3_2_12.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Acción por el clima',
        texto:
          'Objetivo 13. Garantizar modalidades de consumo y producción sostenibles.',
        imagen: require('@/assets/curso/tema_3/img_3_2_13.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Vida submarina',
        texto:
          'Objetivo 14. Conservar y utilizar sosteniblemente los océanos, los mares y los recursos marinos.',
        imagen: require('@/assets/curso/tema_3/img_3_2_14.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Vida de ecosistemas terrestres',
        texto:
          'Objetivo 15. Gestionar sosteniblemente los bosques, luchar contra la desertificación, detener e invertir la degradación de las tierras, detener la pérdida de biodiversidad.',
        imagen: require('@/assets/curso/tema_3/img_3_2_15.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Paz justicia e instituciones sólidas',
        texto:
          'Objetivo 16. Promover sociedades justas, pacíficas e inclusivas. ',
        imagen: require('@/assets/curso/tema_3/img_3_2_16.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Alianzas para lograr los objetivos',
        texto:
          'Objetivo 17. Revitalizar la Alianza Mundial para el Desarrollo Sostenible.',
        imagen: require('@/assets/curso/tema_3/img_3_2_17.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
