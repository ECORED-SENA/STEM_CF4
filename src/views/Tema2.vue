<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.img_bg_02
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Panoramas de empleabilidad y la educación STEM

    .row.justify-content-center.position-relative
      .col-12
        figure
          img(src="@/assets/curso/tema_2/img_2_01.jpg", alt="alt").m-auto
      .col-lg-10.Y_center
        .crd.crd_Bor_Rad_02.clr_secundario_h
          p.text-white.mb-0 Con el avance y desarrollo de la ciencia y la tecnología aspectos como la empleabilidad han generado la creación de nuevos empleos, donde el uso y gestión del conocimiento es la principal habilidad que deben desarrollar los ciudadanos de este siglo XXI. Cargos como FreeLancer, desarrolladores de Apps, conductores de Uber, analista Big Data, influencer o youtuber. 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0
        p.mb-0 Actividades económicas que se ven muy comunes en el día de hoy y que se prevé en los próximos diez años, que estos empleos aumenten y aparezcan otros que no han nacido. Entonces la sociedad debe capacitar a las futuras generaciones para que respondan a las nuevas necesidades, en el uso y aplicación del pensamiento de diseño, las habilidades blandas, el pensamiento crítico, la comunicación asertiva y el aprendizaje colaborativo, entre otros aspectos; que permitan el desarrollo de una economía sostenible y sustentable.
      .col-lg-4(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema_2/img_2_02.png", alt="alt", style="width:350px;").m-auto

    .tarjeta.clr_infografia.p-4.p-md-5
      .row.justify-content-around.align-items-center
        .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
          img(src="@/assets/componentes/infografia.svg")

        .col-md.col-lg-6
          h3 Panoramas de empleabilidad y la educación STEM
          p.mb-4 A continuación se presenta un panorama general de la educación STEM, su efecto y bondades en los países con mejor desempeño en los resultados de las pruebas PISA.         
          
          a.boton.color-acento-botones.clr_text_sistema(:href="obtenerLink('/downloads/CF4-2_Panoramas_empleabilidad.pdf')" target="_blank" type="application/pdf")
            span.clr_text_sistema Descargar
            i.clr_text_sistema.fas.fa-file-download
    .row.gx-0.mb-5
      .col-lg-5
        .crd.clr_secundario_h.h100.p-5
          .row.align-items-center.h100
            .col-12
              p.text-white.mb-0 La educación STEM es una gran oportunidad para integrar a Colombia en el proceso de modernización de la educación, según Portafolio (2020) para el 2030 Colombia necesitará 450.000 empleos en las áreas STEM, según Marco Casarín gerente de Microsoft Colombia proyecta esta es la cifra que se calcula actualmente para una demanda creciente año tras año, actualmente solo el 33 % de esta demanda se satisface en el mundo con empleados con estas habilidades tecnológicas.	
      .col-lg-7.clr_green
        figure
          img(src="@/assets/curso/tema_2/img_2_03.svg", alt="alt").m-auto

    separador

    #T_2_1.titulo-segundo
      h2 2.1 El contexto internacional del empleo

    .row.justify-content-center.justify-content-center.mb-5
      .col-lg-5.mb-5.mb-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema_2/img_2_1_01.png", alt="alt").img_size.m-auto
      .col-lg-7        
        p En el contexto mundial la pandemia de la COVID-19 ha dejado demostrado que ninguna institución o individuo por sí solo puede abordar los desafíos económicos, ambientales, sociales y tecnológicos de nuestro mundo. 
        p Esta crisis aceleró las tendencias de las nuevas formas de empleo que antes veíamos como evidentes, y ahora son una realidad. Procesos como la digitalización, la automatización o la necesidad de un desarrollo sostenible e inclusivo están ahora en el escenario 2021. 
        .cajon.cajon--cl_secundario.p-4.mb-4          
          p El Foro Económico Mundial realizado en agosto del 2021, se denominó el gran reinicio, donde las organizaciones sociales y culturales afrontaron la encrucijada de reconstruir la confianza y tomar decisiones cruciales, de restablecer las prioridades y la urgencia de acometer reformas globales.
    .crd.crl_gray01
      figure
        img(src="@/assets/curso/tema_2/img_2_1_02.svg", alt="alt").m-auto
    .citaBox.mb-5
      p.mb-0 Fuente: World Economic Forum

    p En Colombia el gobierno y muy especialmente el sector educativo, tendrán que implementar nuevas y diversas estrategias que impacten de manera contundente la forma de apropiar y gestionar el conocimiento, para preparar las nuevas generaciones de ciudadanos colombianos, a las nuevas maneras de desarrollo sostenible para nuestro planeta.

    separador

    #T_2_2.titulo-segundo
      h2 2.2 Nuevas oportunidades de empleo y la educación STEM

    .row.justify-content-center.align-items-center
      .col-lg-7.order-2.order-lg-1
        p Teniendo en cuenta que la tecnología mantiene en constante evolución como por ejemplo cuando se adquiere un equipo electrónico y en el transcurso de seis meses ese mismo artículo ingresa al mercado con una nueva versión mejorada o sencillamente es reemplazada por otra mejor, los empleos necesariamente no desaparecerán, estos serán transformados, y algunos nacerán, en el apartado anterior en la gráfica se ven empleos nuevos, pero a continuación se enlistan algunos donde se  prevé existirán en un futuro no muy lejano.
        .cajon.cajon--cl_primario.p-4.mb-4 
          p.mb-0 Educaweb (2020) nos da un vistazo de los 10 trabajos del futuro donde sectores de la economía como la salud, tecnología y economía verde serán los proveedores de una nueva generación de empleos.
        p Según esta web, empleos como los siguientes marcarán la demanda en el mercado:
        ul.lista-ul--color.ms-5
          li 
            i.fas.fa-check
            | Especialista en banca digital y criptomonedas.
          li
            i.fas.fa-check
            | Especialista en alojamiento de datos.
          li
            i.fas.fa-check
            | Especialista en ingeniería alimentaria.
          li
            i.fas.fa-check
            | Especialistas en impresión de alimentos en 3D.
          li
            i.fas.fa-check
            | #[i Chief Data Officer] o responsables de datos.
          li
            i.fas.fa-check
            | Especialista en privacidad.
          li
            i.fas.fa-check
            | Diseñadores de órganos humanos.
          li
            i.fas.fa-check
            | Especialistas en campañas de #[i crowdfunding].
          li
            i.fas.fa-check
            | Diseñadores de avatares o responsable de relaciones con ellos.
      .col-10.col-lg-5.order-1.order-lg-2.mb-5.mb-lg-0(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema_2/img_2_2_01.png", alt="alt").m-auto

        

    



    

      

    
    

    
    
    

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
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
