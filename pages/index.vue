<template>
  <div
    id="about"
    class="grid grid-cols-12 col-gap-10 self-center 1xl:p-0 px-12"
  >
    <!-- Left Container -->
    <div
      class="left col-start-1 col-end-5 animate__animated animate__fadeInLeft"
    >
      <!-- Name -->
      <div class="animate__animated animate__headShake animate__delay-1s">
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
              :class="`w-${tech.points}/12 h-2 rounded-lg bg-white animate__animated animate__lightSpeedInLeft animate__delay-1s`"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Middle Container -->
    <div
      class="middle col-start-5 col-end-10 grid grid-rows-2 h-full animate__animated animate__fadeInUp"
    >
      <!-- Topics -->
      <div v-for="(topic, index) in topics" :key="index" class="mb-6">
        <h3 class="font-semibold text-3xl">{{ topic.title }}</h3>
        <p>{{ topic.text }}</p>
      </div>
    </div>

    <!-- Right Container -->
    <div class="right col-start-10 col-end-13">
      <!-- Image -->
      <div class="relative w-full">
        <img
          class="rounded-lg animate__animated animate__bounceInDown"
          src="~assets/images/profile.jpg"
          alt="Washington"
        />

        <!-- Others Container -->
        <div class="absolute-container flex absolute right-0">
          <img
            v-for="(other, index) in others"
            :key="index"
            class="w-6 h-6 mr-3 cursor-pointer hover:opacity-50 transition-opacity duration-500 animate__animated animate__zoomIn animate__delay-1s"
            :src="require(`../assets/icons/${other.icon}.svg`)"
            :alt="other.name"
          />
        </div>
      </div>

      <!-- Menu -->
      <div class="flex flex-col items-end mt-12 font-thin text-4xl uppercase">
        <p
          v-for="(item, index) in menu"
          :key="index"
          :class="`w-min opacity-25 hover:opacity-100 cursor-pointer transition-opacity duration-500 animate__animated animate__lightSpeedInRight animate__delay-${index}s`"
        >
          {{ item.name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

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
      { name: 'ReactJS', points: 10 },
      { name: 'VueJS', points: 9 },
      { name: 'React Native', points: 5 },
    ],

    topics: [
      {
        title: 'Sobre',
        text:
          'Minhas skills mais aguçadas atualmente giram em torno do mundo FrontEnd, desenvolvo aplicações Web, Mobile e Desktop utilizando frameworks e bibliotecas Javascript reativas, como React, React Native e Vue. Em ambiente React/React Native tenho utilizado ferramentas como React Router DOM, Redux, Redux Sagas, Styled-Componentes e padrões como Duck Pattern e outros. Já em ambiente Vue, a utilização de Vuex, Vue-Router e SASS junto com o padrão BEM CSS ou TailwindCSS vem sendo minha principal escolha a ser combinada com outras ferramentas como Storybook para documentação e criação de libs UI.',
      },
      {
        title: 'Projetos',
        text:
          'Minhas skills mais aguçadas atualmente giram em torno do mundo FrontEnd, desenvolvo aplicações Web, Mobile e Desktop utilizando frameworks e bibliotecas Javascript reativas, como React, React Native e Vue. Em ambiente React/React Native tenho utilizado ferramentas como React Router DOM, Redux, Redux Sagas, Styled-Componentes e padrões como Duck Pattern e outros. Já em ambiente Vue, a utilização de Vuex, Vue-Router e SASS junto com o padrão BEM CSS ou TailwindCSS vem sendo minha principal escolha a ser combinada com outras ferramentas como Storybook para documentação e criação de libs UI.',
      },
    ],

    others: [
      { name: 'github', url: '', icon: 'github' },
      { name: 'codesandbox', url: '', icon: 'codesandbox' },
      { name: 'linkedin', url: '', icon: 'linkedin' },
    ],

    menu: [
      { name: 'Projetos', url: '' },
      { name: 'Blog', url: '' },
    ],
  }),
}
</script>

<style>
.absolute-container {
  bottom: 1.5rem;
  right: 1rem;
}
</style>
