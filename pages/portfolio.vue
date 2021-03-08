<template>
  <div
    v-if="loading"
    class="flex justify-center items-center w-screen h-screen"
  >
    <p class="font-normal text-lg">Carregando.</p>
  </div>

  <div
    v-else
    class="w-screen lg:h-screen lg:grid grid-cols-12 py-12 overflow-hidden"
  >
    <!-- Left Side -->
    <aside
      class="col-start-1 col-end-5 mb-8 lg:mb-0 animate__animated animate__fadeInLeft"
    >
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <h1 class="text-2xl font-bold mr-4 border-r-2 pr-4">@GitHub</h1>
          <span class="font-light">washingtonj</span>
        </div>
        <div>
          <nuxt-link to="/" class="font-bold text-lg">
            {{ '◀︎  | Inicio' }}
          </nuxt-link>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4 mt-4">
        <!-- Card -->
        <div class="bg-gray-100 bg-opacity-25 rounded-lg p-4 h-32">
          <span class="font-semibold text-lg">Total de projetos</span>
          <div class="overflow-scroll">
            <p class="font-light">{{ totalProjects }} Projetos</p>
          </div>
        </div>
        <!-- Card -->
        <div class="bg-gray-100 bg-opacity-25 rounded-lg p-4 h-32">
          <span class="font-semibold text-lg">O que já utilizei</span>
          <div class="overflow-scroll">
            <p class="font-light">
              {{ langsUsed.langs }}
            </p>
          </div>
        </div>
        <!-- Card -->
        <div class="bg-gray-100 bg-opacity-25 rounded-lg p-4 h-32">
          <span class="font-semibold text-lg">O que mais utilizei</span>
          <div class="overflow-scroll">
            <p class="font-light">{{ langsUsed.more }}</p>
          </div>
        </div>
        <!-- Card -->
        <div class="bg-gray-100 bg-opacity-25 rounded-lg p-4 h-32">
          <span class="font-semibold text-lg">O que menos utilizei</span>
          <div class="overflow-scroll">
            <p class="font-light">{{ langsUsed.less }}</p>
          </div>
        </div>
      </div>
    </aside>
    <!-- Right Side -->
    <body
      class="col-start-6 col-end-12 lg:overflow-hidden animate__animated animate__fadeInRight"
    >
      <!-- Search Bar -->
      <div class="w-full bg-gray-100 bg-opacity-25 h-12 rounded-xl mb-4">
        <input
          class="w-full h-full bg-transparent p-3 placeholder-gray-100 font-light placeholder-opacity-50 outline-none"
          type="text"
          placeholder="Pesquise por um projeto."
          @input="search"
        />
      </div>

      <!-- Results -->
      <div class="scroll-hidden h-full pb-12 lg:overflow-scroll">
        <p v-if="!data.length" class="mt-8">Nenhum item encontrado.</p>
        <div
          v-for="repo in data"
          :key="repo.id"
          class="flex flex-col h-32 my-8"
        >
          <div class="flex items-center">
            <h3 class="text-2xl font-bold mr-4">{{ repo.name }}</h3>
            <span class="font-thin">{{ repo.language }}</span>
          </div>
          <p class="flex-1">
            {{
              repo.description && !!repo.description.length
                ? repo.description
                : 'Desculpe, ainda não adicione descrição a este projeto ☹️.'
            }}
          </p>
          <div class="flex w-full">
            <p class="flex-1 font-light text-sm">
              {{ formatDate(repo.created_at) }}
            </p>
            <div class="text-blue-700 self-end">
              <a
                :href="repo['html_url']"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver no GitHub
              </a>
              <a
                v-if="!!repo.homepage"
                class="ml-4"
                :href="repo.homepage"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visualizar
              </a>
            </div>
          </div>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
import { resume } from '@/assets/logics/ObjectCount'

export default {
  data: () => ({
    data: [],
    initData: [],
    loading: true,
  }),

  computed: {
    totalProjects() {
      return this.initData.length
    },

    langsUsed() {
      if (!this.loading) {
        const filter = this.initData
          .map((item) => item.language)
          .filter((repo) => !!repo)
        const processed = resume(filter)

        return {
          langs: Object.keys(processed.count).join(', '),
          more: processed.more.toString(),
          less: processed.less.toString(),
        }
      }
      return ''
    },
  },

  created() {
    this.fetchRepos()
  },

  methods: {
    async fetchRepos() {
      const data = await fetch('https://api.github.com/users/washingtonj/repos')
      const json = await data.json()
      this.data = json
      this.initData = json
      this.loading = false
    },

    formatDate(date) {
      const toFormat = new Date(date)
      return `${toFormat.getDay()}/${toFormat.getMonth()}/${toFormat.getFullYear()} às ${toFormat.toLocaleTimeString()}`
    },

    search(event) {
      const value = event.target.value.toLowerCase()
      const filtred = this.initData.filter((repo) =>
        repo.name.toLowerCase().includes(value)
      )

      this.data = filtred
    },
  },
}
</script>

<style>
.scroll-hidden {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scroll-hidden::-webkit-scrollbar {
  display: none;
}
</style>
