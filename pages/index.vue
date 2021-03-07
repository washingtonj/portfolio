<template>
  <div
    v-if="show"
    id="about"
    class="lg:grid grid-cols-12 col-gap-10 self-center my-12 lg:h-full 1xl:p-0"
  >
    <!-- Left Container -->
    <div
      class="left col-start-1 col-end-5 animate__animated animate__fadeInLeft"
    >
      <!-- Name -->
      <div
        class="max-w-xl animate__animated animate__headShake animate__delay-1s"
      >
        <h1 class="text-6xl font-bold leading-none text-left">Washington</h1>
        <h1 class="text-6xl font-bold leading-none text-right">Junior</h1>
      </div>

      <!-- Badges -->
      <div class="w-full grid grid-cols-2 gap-6 my-16">
        <div v-for="(opt, index) in badges" :key="index">
          <img
            class="w-6 h-6 mb-2"
            :src="require(`../assets/icons/${opt.icon}.svg`)"
            :alt="opt.title"
          />
          <p class="opacity-50 text-sm">{{ opt.title }}</p>
          <p>{{ opt.value }}</p>
        </div>
      </div>

      <!-- Techs -->
      <div>
        <h3 class="text-3xl font-semibold mb-4">Tecnologias</h3>
        <div v-for="(tech, index) in techs" :key="index" class="mb-6">
          <p class="text-sm mb-1">{{ tech.name }}</p>
          <div
            class="w-full h-2 rounded-lg bg-white bg-opacity-50 overflow-hidden"
          >
            <div
              :class="`h-2 rounded-lg bg-white animate__animated animate__lightSpeedInLeft animate__delay-1s`"
              :style="{ width: `${tech.points}%` }"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Middle Container -->
    <div
      class="middle col-start-5 col-end-10 h-full animate__animated animate__fadeInUp"
    >
      <!-- Topics -->
      <div v-for="(topic, index) in topics" :key="index" class="mb-6">
        <h3 class="font-semibold text-3xl">{{ topic.title }}</h3>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <p v-html="topic.text">{{ topic.text }}</p>
      </div>
    </div>

    <!-- Right Container -->
    <div class="right col-start-10 col-end-13">
      <!-- Image -->
      <div class="relative w-full animate__animated animate__fadeInRight">
        <img
          class="rounded-lg md:animate__animated animate__bounceInDown"
          src="~assets/images/profile.jpg"
          alt="Washington"
        />

        <!-- Others Container -->
        <div class="absolute-container flex absolute right-0">
          <a
            v-for="(other, index) in others"
            :key="index"
            :href="other.url"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              class="w-6 h-6 mr-3 cursor-pointer hover:opacity-50 transition-opacity duration-500 animate__animated animate__zoomIn animate__delay-1s"
              :src="require(`../assets/icons/${other.icon}.svg`)"
              :alt="other.name"
          /></a>
        </div>
      </div>

      <!-- Menu -->
      <div class="flex flex-col items-end mt-12 font-thin text-4xl uppercase">
        <p
          v-for="(item, index) in menu"
          :key="index"
          :class="`flex items-center w-min opacity-25 hover:opacity-100 cursor-pointer transition-opacity duration-500 animate__animated animate__lightSpeedInRight animate__delay-${index}s`"
        >
          <span class="mr-6 text-sm">🏗</span>
          {{ item.name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    badges: [
      {
        title: 'Ocupação',
        value: 'FrontEnd Developer',
        icon: 'briefcase',
      },
      {
        title: 'Origem',
        value: 'São Paulo, Brazil',
        icon: 'location',
      },
      {
        title: 'Idade',
        value: 24,
        icon: 'person',
      },
      {
        title: 'Grupo',
        value: 'FromStrap',
        icon: 'group',
      },
    ],

    techs: [
      { name: 'ReactJS', points: 75 },
      { name: 'VueJS', points: 85 },
      { name: 'React Native', points: 50 },
    ],

    topics: [
      {
        title: 'Sobre',
        text: `<p>Como voc&ecirc; j&aacute; deve saber, me chamo Washington, ou Junior caso ache mais f&aacute;cil. Nascido em 12 de Outubro de 1996,&nbsp;<em>"Sim, no dia das crian&ccedil;as"</em>, sou um autodidata apaixonado por tecnologia e inova&ccedil;&atilde;o.</p>
          <p>&nbsp;</p>
          <p>A mais de 6 anos, estou inserido no mercado tecnologico, onde minha miss&atilde;o sempre foi encontrar solu&ccedil;&otilde;es para os desafios do dia a dia, sejam eles de infraestrutura ou desenvolvimento, pensando sempre de maneira inteligente e proativa.&nbsp;</p>
          <p>&nbsp;</p>
          <p>Sou formado em Rede de Computadores pela Universidade Cidade de S&atilde;o Paulo, "<em>Sim, eu estudei a tabela OSI", mas&nbsp;</em>meu interesse por infraestrutura e pela cultura DevOps somadas a vontade de aprender e a facilidade de adapta&ccedil;&atilde;o, me tornaram tamb&eacute;m um desenvolvedor.</p>
          `,
      },
      {
        title: 'O que utilizo',
        text: `<p>Atualmente minha linguagem principal &eacute; o Javascript, sendo ela utilizada em todas as frentes como BackEnd com NodeJS, FrontEnd com React e Vue, Mobile com React Native e Desktop com Electron.&nbsp;</p><br/>
          <p>Para estiliza&ccedil;&atilde;o utilizo de recursos de pr&eacute; processadores de CSS como SASS/SCSS somado ao padr&atilde;o BEM ou frameworks CSS como TailwindCSS, al&eacute;m de bibliotecas CSS-in-JS como Styled Components e Emotion.</p>`,
      },
    ],

    others: [
      {
        name: 'github',
        url: 'https://github.com/washingtonj',
        icon: 'github',
      },
      {
        name: 'codesandbox',
        url: 'https://codesandbox.io/u/washingtonj',
        icon: 'codesandbox',
      },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/washington-junior-7136a8101/',
        icon: 'linkedin',
      },
    ],

    menu: [
      { name: 'Projetos', url: '' },
      { name: 'Blog', url: '' },
    ],

    show: false,
  }),

  mounted() {
    setTimeout(() => {
      this.show = true
    }, 500)
  },
}
</script>

<style>
.absolute-container {
  bottom: 1.5rem;
  right: 1rem;
}
</style>
