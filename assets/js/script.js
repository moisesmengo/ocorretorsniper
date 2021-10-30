const vm = new Vue({
  el: "#app",
  data: {
    aulas: [
      {
        url: "https://www.youtube.com/embed/6o24UHJvV2E",
        numero: "1",
        titulo: "OS 4 PILARES PARA VENDER IMÓVEIS TODOS OS MESES",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi quo repudiandae molestias autem, omnis tempore.",
        principal: true,
        status: "disponivel",
        thumb: "assets/img/thumb.webp",
        data_liberacao: "03/12/2021",
      },
      {
        url: "https://www.youtube.com/embed/6o24UHJvV2E",
        numero: "2",
        titulo: "AULA 2 PARA VENDER IMÓVEIS TODOS OS MESES",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi quo repudiandae molestias autem, omnis tempore.",
        principal: false,
        status: "disponivel",
        thumb: "assets/img/thumb.webp",
        data_liberacao: "04/12/2021",
      },
      {
        url: "https://www.youtube.com/embed/6o24UHJvV2E",
        numero: "3",
        titulo: "Aula 3 PARA VENDER IMÓVEIS TODOS OS MESES",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi quo repudiandae molestias autem, omnis tempore.",
        principal: false,
        status: "indisponivel",
        thumb: "assets/img/thumb.webp",
        data_liberacao: "05/12/2021",
      },
      {
        url: "https://www.youtube.com/embed/6o24UHJvV2E",
        numero: "4",
        titulo: "aula 4 PARA VENDER IMÓVEIS TODOS OS MESES",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi quo repudiandae molestias autem, omnis tempore.",
        principal: false,
        status: "indisponivel",
        thumb: "assets/img/thumb.webp",
        data_liberacao: "06/12/2021",
      },
    ],
  },
  methods: {
    mudarStatus(aula) {
      console.log(this.aulas[0].desc);

      for (let i = 0; i < this.aulas.length; i++) {
         this.aulas[i].principal = false; 
      }

      aula.principal = true;
    },
  },
});
