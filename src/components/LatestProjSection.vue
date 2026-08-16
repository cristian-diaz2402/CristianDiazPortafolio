<template>
  <section class="mt-20 px-4 xl:px-16 py-16" id="projects">

    <div class="flex flex-col md:flex-row md:justify-between md:items-center mb-10 gap-4">
      <h2 class="font-syne text-4xl font-bold text-dark">
        <span class="text-primary">Proyectos</span> Destacados
      </h2>
      <div class="flex gap-2 flex-wrap">
        <button
          v-for="category in categories"
          :key="category"
          @click="selectedCategory = category"
          class="font-inter px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-300"
          :class="selectedCategory === category
            ? 'bg-primary text-white border-primary'
            : 'bg-surface text-muted border-muted/30 hover:border-primary hover:text-primary'"
        >{{ category }}</button>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up">
      <div v-for="project in filteredProjects" :key="project.id"
        class="rounded-2xl bg-surface border border-muted/20 shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col">

        <div class="relative overflow-hidden bg-background shrink-0">

          <template v-if="!project.videoActive">
            <div class="relative w-full" style="padding-top: 56.25%;">
              <div
                v-for="(image, index) in project.images"
                :key="index"
                class="absolute inset-0 bg-center bg-contain bg-no-repeat transition-opacity duration-1000"
                :style="{
                  backgroundImage: `url(${image})`,
                  opacity: index === project.currentImageIndex ? 1 : 0,
                  transition: 'opacity 1s ease'
                }"
              ></div>
            </div>

            <div v-if="project.isAcademic" class="absolute top-3 left-3 z-10">
              <span class="font-inter text-xs px-2.5 py-1 rounded-full bg-dark/70 text-white font-medium backdrop-blur-sm">
                Proyecto Académico
              </span>
            </div>

            <button
              v-if="project.videoURL"
              @click="activateVideo(project)"
              class="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 bg-dark/40 hover:bg-dark/55 transition-colors duration-300"
            >
              <div class="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/60 flex items-center justify-center hover:bg-white/30 transition-all duration-300">
                <Icon icon="lucide:play" width="24" class="text-white ml-1" />
              </div>
              <span class="font-inter text-xs text-white/80 font-medium">Ver demo en video</span>
            </button>
          </template>

          <template v-else>
            <video
              :ref="el => { if (el) videoRefs[project.id] = el }"
              :src="project.videoURL"
              class="absolute inset-0 w-full h-full object-cover"
              controls
              autoplay
              @ended="deactivateVideo(project)"
            ></video>
          </template>

        </div>

        <div class="p-5 flex flex-col grow">
          <h3 class="font-syne text-base font-bold text-dark uppercase mb-2">{{ project.title }}</h3>
          <p class="font-inter text-sm text-muted text-justify leading-relaxed mb-4 grow">{{ project.description }}</p>

          <div v-if="project.gitURL || project.gitFrontend || project.gitBackend || project.hasDemo"
            class="flex items-center gap-2 mb-4 flex-wrap">

            <a v-if="project.gitURL" :href="project.gitURL" target="_blank"
              class="inline-flex items-center gap-1.5 font-inter text-xs font-medium px-3 py-1.5 rounded-full border border-muted/30 text-muted hover:border-primary hover:text-primary transition-all duration-200">
              <Icon icon="lucide:github" width="13" />
              Repositorio
            </a>

            <a v-if="project.gitFrontend" :href="project.gitFrontend" target="_blank"
              class="inline-flex items-center gap-1.5 font-inter text-xs font-medium px-3 py-1.5 rounded-full border border-muted/30 text-muted hover:border-primary hover:text-primary transition-all duration-200">
              <Icon icon="lucide:smartphone" width="13" />
              Frontend
            </a>

            <a v-if="project.gitBackend" :href="project.gitBackend" target="_blank"
              class="inline-flex items-center gap-1.5 font-inter text-xs font-medium px-3 py-1.5 rounded-full border border-muted/30 text-muted hover:border-primary hover:text-primary transition-all duration-200">
              <Icon icon="lucide:server" width="13" />
              Backend
            </a>

            <a v-if="project.hasDemo" :href="project.webURL" target="_blank"
              class="inline-flex items-center gap-1.5 font-inter text-xs font-medium px-3 py-1.5 rounded-full border border-primary/40 text-primary hover:bg-primary hover:text-white transition-all duration-200">
              <Icon icon="lucide:external-link" width="13" />
              Demo
            </a>
          </div>

          <div class="flex flex-wrap gap-2 mt-auto">
            <span
              v-for="technology in project.technologies"
              :key="technology"
              class="font-inter text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
            >{{ technology }}</span>
          </div>
        </div>

      </div>
    </div>

  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { Icon } from '@iconify/vue';

const categories = ['Todo', 'Web', 'Móvil', 'Sistemas y Arquitectura', 'IA & Datos'];

const videoRefs = ref({});

const Projects = ref([
  {
    id: 1,
    category: 'Web',
    images: [
      'https://res.cloudinary.com/dbvywv8op/image/upload/v1786836744/login_viixll.png',
      'https://res.cloudinary.com/dbvywv8op/image/upload/v1786836744/mapa_b008wb.png',
      'https://res.cloudinary.com/dbvywv8op/image/upload/v1786836745/usuarios_ebb3cj.png',
      'https://res.cloudinary.com/dbvywv8op/image/upload/v1786836746/vistamaestra_awnm5k.png',
      'https://res.cloudinary.com/dbvywv8op/image/upload/v1786836743/historial_dlbzf2.png',
      'https://res.cloudinary.com/dbvywv8op/image/upload/v1786836743/catalogo_fdki1f.png',
      'https://res.cloudinary.com/dbvywv8op/image/upload/v1786836742/archivos_ihlni3.png'
    ],
    currentImageIndex: 0,
    videoActive: false,
    title: 'AntsOfEcuador — Gestión de Biodiversidad',
    description: 'Plataforma encargada por investigadores para reemplazar hojas de cálculo manuales con un flujo validado de punta a punta. Diseñé el pipeline de importación Excel con validación taxonómica contra AntCat antes de persistir en base de datos, evitando que registros erróneos contaminaran el dataset científico. La visualización geoespacial con D3.js fue necesaria para que el cliente pudiera identificar vacíos de muestreo por región sin exportar datos. Entregado en 2 meses, en uso activo en producción.',
    technologies: ['React', 'Tailwind CSS', 'D3.js', 'FastAPI', 'Python', 'PostgreSQL'],
    gitURL: null,
    webURL: null,
    videoURL: null,
    isAcademic: false,
    hasDemo: false,
  },
  {
    id: 2,
    category: 'IA & Datos',
    images: [
      'https://res.cloudinary.com/dbvywv8op/image/upload/v1786835490/avatar_mnkxnq.png',
      'https://res.cloudinary.com/dbvywv8op/image/upload/v1786836280/avatar-mobile_hmsbhr.png',
      'https://res.cloudinary.com/dbvywv8op/image/upload/v1786835490/login_ao74yx.png',
      'https://res.cloudinary.com/dbvywv8op/image/upload/v1786835489/adminusuarios_ycmnoo.png',
      'https://res.cloudinary.com/dbvywv8op/image/upload/v1786835490/docs_r1fzii.png',
      'https://res.cloudinary.com/dbvywv8op/image/upload/v1786835490/monitor1_d0oj5p.png',
      'https://res.cloudinary.com/dbvywv8op/image/upload/v1786835490/config1_axwdov.png',
      'https://res.cloudinary.com/dbvywv8op/image/upload/v1786835490/config2_b9m3xo.png',
      'https://res.cloudinary.com/dbvywv8op/image/upload/v1786835490/config3_v0agb0.png',
      'https://res.cloudinary.com/dbvywv8op/image/upload/v1786835490/cache_h7swsr.png'
    ],
    currentImageIndex: 0,
    videoActive: false,
    title: 'Asistente Virtual 3D con Arquitectura RAG',
    description: 'Tesis de grado (EPN, 2026). Elegí RAG local sobre fine-tuning porque los reglamentos institucionales cambian con frecuencia; actualizar embeddings en Qdrant es trivial frente a re-entrenar un modelo. Opté por vLLM con PagedAttention para maximizar throughput en hardware limitado, y caché semántica con Redis para absorber consultas repetitivas sin tocar el LLM. Resultado: 26.000 consultas concurrentes sin fallos, latencia de 23 ms en caché y 100% de mitigación de prompt injection.',
    technologies: ['Vue 3', 'Three.js', 'FastAPI', 'RAG', 'Qdrant', 'vLLM', 'Redis', 'Python', 'Nginx'],
    gitURL: null,
    webURL: null,
    videoURL: null,
    isAcademic: true,
    hasDemo: false,
  },
  {
    id: 3,
    category: 'Web',
    images: [
      'https://res.cloudinary.com/dbvywv8op/image/upload/v1739677059/Imagen1_vvftqd.png',
      'https://res.cloudinary.com/dbvywv8op/image/upload/v1739677233/Imagen2_c1oxd5.png',
      'https://res.cloudinary.com/dbvywv8op/image/upload/v1739679673/Imagen3_ngtezs.png',
      'https://res.cloudinary.com/dbvywv8op/image/upload/v1739679672/Imagen4_sil5se.png',
      'https://res.cloudinary.com/dbvywv8op/image/upload/v1739679674/Imagen5_bpf9c6.png',
      'https://res.cloudinary.com/dbvywv8op/image/upload/v1739679674/Imagen6_ml65it.png',
      'https://res.cloudinary.com/dbvywv8op/image/upload/v1739679675/Imagen7_gtgnbd.png',
    ],
    currentImageIndex: 0,
    videoActive: false,
    title: 'MarketGo — Plataforma E-commerce',
    description: 'Proyecto académico grupal con ciclos Scrum reales. Tomé la decisión de separar autenticación (Firebase) de la lógica de negocio en Node.js para no acoplar el modelo de usuario a un proveedor externo. El pipeline CI/CD en Azure DevOps nos permitió iterar sin fricción entre sprints. El mayor aprendizaje fue gestionar la consistencia de estado entre el carrito, la pasarela de pagos y el inventario en tiempo real.',
    technologies: ['Angular', 'Node.js', 'Firebase', 'Azure DevOps'],
    gitURL: 'https://github.com/cristian-diaz2402/MarketGo.git',
    webURL: 'https://marketgog5.netlify.app/',
    videoURL: null,
    isAcademic: true,
    hasDemo: true,
  },
  {
    id: 4,
    category: 'IA & Datos',
    images: [
      'https://res.cloudinary.com/dbvywv8op/image/upload/v1786852617/inicio_r2cyba.jpg',
      'https://res.cloudinary.com/dbvywv8op/image/upload/v1786852614/debug3_rveivc.jpg',
      'https://res.cloudinary.com/dbvywv8op/image/upload/v1786852613/debug2_ucrkfc.jpg',
      'https://res.cloudinary.com/dbvywv8op/image/upload/v1786852612/debug1_sfc4my.jpg',
      'https://res.cloudinary.com/dbvywv8op/image/upload/v1786852611/carrito_vezzte.png',
    ],
    currentImageIndex: 0,
    videoActive: false,
    title: 'Capibara Bot — Robótica, HCI y ML',
    description: 'Robot educativo de bajo costo (MDF + ESP32) controlado por app Android vía Bluetooth. Elegí Random Forest sobre redes neuronales porque la telemetría de usuario es tabular y de baja dimensión; un modelo interpretable y liviano era más adecuado que uno costoso de entrenar. Usé la escala SUS como métrica de evaluación porque cuantifica usabilidad percibida de forma estandarizada, permitiendo comparar contra benchmarks de la industria.',
    technologies: ['ESP32', 'C++', 'Android', 'Python', 'FastAPI', 'Random Forest'],
    gitURL: 'https://github.com/cristian-diaz2402/CapibaraBot',
    gitFrontend: null,
    gitBackend: 'https://github.com/CrisDiaz2402/backendCD',
    webURL: null,
    videoURL: 'https://res.cloudinary.com/dbvywv8op/video/upload/v1786852619/video_a2bmb2.mp4',
    isAcademic: true,
    hasDemo: false,
  },
  {
    id: 5,
    category: 'Móvil',
    images: [
      'https://res.cloudinary.com/dbvywv8op/image/upload/v1786849947/icon_cdzxtk.png',
      'https://res.cloudinary.com/dbvywv8op/image/upload/v1786849948/login_xvmsin.png',
      'https://res.cloudinary.com/dbvywv8op/image/upload/v1786849947/comida_wynpx1.png',
      'https://res.cloudinary.com/dbvywv8op/image/upload/v1786849952/transp_iw0qpc.png',
      'https://res.cloudinary.com/dbvywv8op/image/upload/v1786849952/varios_o7ia4h.png',
      'https://res.cloudinary.com/dbvywv8op/image/upload/v1786849951/perfil_o176vy.png',
      'https://res.cloudinary.com/dbvywv8op/image/upload/v1786849950/noti_ybcwo4.png',
      'https://res.cloudinary.com/dbvywv8op/image/upload/v1786849949/mml_uxsnbs.png',
      'https://res.cloudinary.com/dbvywv8op/image/upload/v1786849947/estadisticas_lhu6uc.png'
    ],
    currentImageIndex: 0,
    videoActive: false,
    title: 'Money Manager G5 — App Móvil & ML API',
    description: 'App Android nativa en Kotlin con un backend FastAPI compartido en producción con el proyecto Capibara Bot. Diseñé la API para soportar múltiples clientes desde el inicio, lo que permitió reutilizar los endpoints de ML (predicción de categorías de gasto con Hugging Face) sin duplicar infraestructura. Esa decisión arquitectónica redujo el costo operativo de mantener dos proyectos simultáneamente.',
    technologies: ['Kotlin', 'Python', 'FastAPI', 'PostgreSQL', 'Machine Learning', 'Hugging Face'],
    gitURL: null,
    gitFrontend: 'https://github.com/cristian-diaz2402/MoneyManagerG5',
    gitBackend: 'https://github.com/CrisDiaz2402/backendCD',
    webURL: null,
    videoURL: null,
    isAcademic: true,
    hasDemo: false,
  },
  {
    id: 6,
    category: 'Sistemas y Arquitectura',
    images: [
      'https://res.cloudinary.com/dbvywv8op/image/upload/v1739747722/PG1_wamzpn.png',
      'https://res.cloudinary.com/dbvywv8op/image/upload/v1739747722/PG2_nyhou4.png',
      'https://res.cloudinary.com/dbvywv8op/image/upload/v1739747722/PG3_my1mro.png',
      'https://res.cloudinary.com/dbvywv8op/image/upload/v1739747722/PG4_eslpu7.png',
      'https://res.cloudinary.com/dbvywv8op/image/upload/v1739747723/PG5_hbwv0l.png',
      'https://res.cloudinary.com/dbvywv8op/image/upload/v1739747723/PG6_owcadc.png',
      'https://res.cloudinary.com/dbvywv8op/image/upload/v1739747724/PG7_xohyut.png',
      'https://res.cloudinary.com/dbvywv8op/image/upload/v1739747725/PG9_dbkizf.png',
      'https://res.cloudinary.com/dbvywv8op/image/upload/v1739747725/PG8_yyu3wv.png',
    ],
    currentImageIndex: 0,
    videoActive: false,
    title: 'ERP Empresarial de Gestión Transaccional',
    description: 'ERP académico donde el reto central fue garantizar integridad en operaciones multi-tabla de inventario y facturación. Modelé las transacciones con propiedades ACID explícitas para evitar inconsistencias ante fallos parciales, algo que una solución sin control transaccional no habría tolerado. Fue el proyecto donde interioricé que el diseño del esquema relacional condiciona todas las decisiones de rendimiento posteriores.',
    technologies: ['C#', 'SQL Server', '.NET'],
    gitURL: 'https://github.com/cristian-diaz2402/PapelGive.git',
    webURL: null,
    videoURL: null,
    isAcademic: true,
    hasDemo: false,
  },
  {
    id: 7,
    category: 'Sistemas y Arquitectura',
    images: [
      'https://res.cloudinary.com/dbvywv8op/image/upload/v1739748495/PGO1_plbym4.png',
      'https://res.cloudinary.com/dbvywv8op/image/upload/v1739748495/PGO2_j5rkwm.png',
      'https://res.cloudinary.com/dbvywv8op/image/upload/v1739748495/PGO3_tijpzi.png',
      'https://res.cloudinary.com/dbvywv8op/image/upload/v1739748495/PGO4_kpgige.png',
      'https://res.cloudinary.com/dbvywv8op/image/upload/v1739748496/PGO5_iwdr1a.png',
      'https://res.cloudinary.com/dbvywv8op/image/upload/v1739748496/PGO6_ipao6v.png',
      'https://res.cloudinary.com/dbvywv8op/image/upload/v1739748497/PGO7_hjtlzk.png',
      'https://res.cloudinary.com/dbvywv8op/image/upload/v1739748497/PGO8_pf8vhk.png',
      'https://res.cloudinary.com/dbvywv8op/image/upload/v1739748498/PGO9_osbd9i.png',
    ],
    currentImageIndex: 0,
    videoActive: false,
    title: 'Arquitectura de Datos Distribuida',
    description: 'Extensión del ERP sobre Oracle con topología multi-nodo real. Apliqué fragmentación horizontal para distribuir la carga de consultas por volumen de registros, y replicación sincrónica para garantizar disponibilidad ante caída de un nodo sin pérdida de datos. El punto crítico fue configurar correctamente Oracle Net Manager para que la transparencia de ubicación fuera total para la capa de aplicación.',
    technologies: ['C#', 'Oracle', 'Distributed DBs'],
    gitURL: 'https://github.com/cristian-diaz2402/PapelGiveOracle.git',
    webURL: null,
    videoURL: null,
    isAcademic: true,
    hasDemo: false,
  },
  {
    id: 8,
    category: 'Sistemas y Arquitectura',
    images: [
      'https://res.cloudinary.com/dbvywv8op/image/upload/v1739757348/VJ1_kzqsjr.png',
      'https://res.cloudinary.com/dbvywv8op/image/upload/v1739757348/VJ2_xnwhfx.png',
      'https://res.cloudinary.com/dbvywv8op/image/upload/v1739757348/VJ3_aczqfw.png',
    ],
    currentImageIndex: 0,
    videoActive: false,
    title: 'Motor Gráfico Interactivo (Computer Graphics)',
    description: 'Implementación desde cero del pipeline programable de OpenGL, sin abstracciones de motor. Elegí trabajar directamente con VBO y VAO para entender cómo el layout de memoria en GPU impacta el rendimiento real de renderizado. Escribir los shaders GLSL manualmente obligó a razonar sobre cada etapa del pipeline, algo que el uso de un motor como Unity oculta por completo.',
    technologies: ['C#', 'OpenGL', 'GLSL Shaders'],
    gitURL: 'https://github.com/cristian-diaz2402/VideoJuego.git',
    webURL: null,
    videoURL: null,
    isAcademic: true,
    hasDemo: false,
  },
]);

const intervalMap = new Map();
const selectedCategory = ref('Todo');

const filteredProjects = computed(() => {
  return selectedCategory.value === 'Todo'
    ? Projects.value
    : Projects.value.filter(p => p.category === selectedCategory.value);
});

function startCarousel(project) {
  if (project.images.length <= 1) return;
  const id = setInterval(() => {
    project.currentImageIndex = (project.currentImageIndex + 1) % project.images.length;
  }, 3000);
  intervalMap.set(project.id, id);
}

function stopCarousel(project) {
  const id = intervalMap.get(project.id);
  if (id) {
    clearInterval(id);
    intervalMap.delete(project.id);
  }
}

function activateVideo(project) {
  stopCarousel(project);
  project.videoActive = true;
}

function deactivateVideo(project) {
  project.videoActive = false;
  startCarousel(project);
}

onMounted(() => {
  Projects.value.forEach(project => startCarousel(project));
});

onUnmounted(() => {
  intervalMap.forEach(id => clearInterval(id));
});
</script>