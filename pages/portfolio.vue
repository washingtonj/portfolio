<template>
  <div class="w-screen h-screen grid grid-cols-12 py-12 overflow-hidden">
    <!-- Left Side -->
    <aside class="col-start-1 col-end-5">
      <div class="flex items-center">
        <h1 class="text-2xl font-bold mr-4 border-r-2 pr-4">@GitHub</h1>
        <span class="font-light">washingtonj</span>
      </div>
      <div class="grid grid-cols-2 gap-4 mt-4">
        <!-- Card -->
        <div class="bg-gray-100 bg-opacity-25 rounded-lg p-4 h-32">
          <span class="font-semibold text-lg">Total de projetos</span>
          <div class="overflow-scroll">
            <p class="font-light">{{ projectsTotal }} Projetos</p>
          </div>
        </div>
        <!-- Card -->
        <div class="bg-gray-100 bg-opacity-25 rounded-lg p-4 h-32">
          <span class="font-semibold text-lg">O que já utilizei</span>
          <div class="overflow-scroll">
            <p class="font-light">
              {{ langsUsed }}
            </p>
          </div>
        </div>
        <!-- Card -->
        <!-- <div class="bg-gray-100 bg-opacity-25 rounded-lg p-4 h-32">
          <span class="font-semibold text-lg">O que mais utilizei</span>
          <div class="overflow-scroll">
            <p class="font-light">Javascript</p>
          </div>
        </div> -->
        <!-- Card -->
        <!-- <div class="bg-gray-100 bg-opacity-25 rounded-lg p-4 h-32">
          <span class="font-semibold text-lg">O que menos utilizei</span>
          <div class="overflow-scroll">
            <p class="font-light">Python</p>
          </div>
        </div> -->
      </div>
    </aside>
    <!-- Right Side -->
    <body class="col-start-6 col-end-12 overflow-hidden">
      <!-- Search Bar -->
      <div class="w-full bg-gray-100 bg-opacity-25 h-12 rounded-xl mb-4">
        <input
          class="w-full h-full bg-transparent p-3 placeholder-gray-100 font-light placeholder-opacity-50 outline-none"
          type="text"
          placeholder="Pesquisar por um projeto."
        />
      </div>

      <!-- Results -->
      <div class="scroll-hidden h-full pb-12 overflow-scroll">
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
export default {
  data: () => ({
    data: [],
    loading: true,
  }),

  computed: {
    projectsTotal() {
      return this.data.length
    },

    langsUsed() {
      if (this.data.length !== 0) {
        return new Set(this.data.map((repo) => repo.language)).join(', ')
      }
      return ''
    },

    // langMostUsed() {
    //   return ''
    // },

    // langLessUsed() {
    //   return ''
    // },
  },

  created() {
    this.fetchRepos()
  },

  methods: {
    async fetchRepos() {
      const data = await fetch('https://api.github.com/users/washingtonj/repos')
      const json = await data.json()
      this.data = json
      this.loading = false
    },

    formatDate(date) {
      const toFormat = new Date(date)
      return `${toFormat.getDay()}/${toFormat.getMonth()}/${toFormat.getFullYear()} às ${toFormat.toLocaleTimeString()}`
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
