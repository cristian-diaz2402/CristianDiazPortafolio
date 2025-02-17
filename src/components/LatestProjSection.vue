<template>
    <section class="text-white mt-20" id="projects">
        <div class="px-4 xl:pl-16">
            <div class="mb-4 md:flex md:justify-between xl:pr-16">
                <h2 class="text-4xl font-bold text-white">
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                        Proyectos Académicos
                    </span> y Profesionales
                </h2>
                <div class="flex space-x-4 mb-4 mt-5 md:mt-0 relative z-10">
                    <button class="hover:text-primary" v-for="category in ['Todo', 'Web', 'Escritorio']"
                        :key="category" @click="() => selectedCategory = category">
                        {{ category }}
                    </button>
                </div>
            </div>
            <ul class="px-4 sm:py-16 xl:pr-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3"
                data-aos="fade-right">
                <div v-for="project in filteredProjects" :key="project.id">
                    <div class="h-52 md:h-[24rem] rounded-t-xl relative group overflow-hidden">
                        <div class="absolute w-full h-full bg-cover bg-center transition-opacity duration-1000"
                        v-for="(image, index) in project.images" :key="index"
                        :style="{
                            backgroundImage: 'url(' + image + ')',
                            opacity: index === project.currentImageIndex ? 1 : 0,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center'
                        }">
                    </div>

                        <div class="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0
                        hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
                            <a class="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                                :href="project.gitURL"> 
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                                </svg>
                            </a>
                            <a class="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                                :href="project.webURL">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="text-white rounded-b-xl mt-3 bg-[#111a3e] shadow-lg border border-[#1f1641] py-6 px-4">
                        <h3 class="text-lg font-semibold uppercase lg:text-xl text-center">{{ project.title }}</h3>
                        <p class="text-[#ADB7BE] p-3 text-justify">{{ project.description }}</p>
                        <div class="flex flex-wrap p-3">
                            <div v-for="technology in project.technologies" :key="technology" class="text-center ml-1 mt-1 rounded-3xl bg-[#111827] p-2">
                                {{ technology }}
                            </div>
                        </div>
                    </div>
                </div>
            </ul>
        </div>
    </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const Projects = ref([
    {
        id: 1,
        category: 'Escritorio',
        images: [
            'https://res.cloudinary.com/dbvywv8op/image/upload/v1739747722/PG1_wamzpn.png', 
            'https://res.cloudinary.com/dbvywv8op/image/upload/v1739747722/PG2_nyhou4.png',
            'https://res.cloudinary.com/dbvywv8op/image/upload/v1739747722/PG3_my1mro.png',
            'https://res.cloudinary.com/dbvywv8op/image/upload/v1739747722/PG4_eslpu7.png',
            'https://res.cloudinary.com/dbvywv8op/image/upload/v1739747723/PG5_hbwv0l.png',
            'https://res.cloudinary.com/dbvywv8op/image/upload/v1739747723/PG6_owcadc.png',
            'https://res.cloudinary.com/dbvywv8op/image/upload/v1739747724/PG7_xohyut.png',
            'https://res.cloudinary.com/dbvywv8op/image/upload/v1739747725/PG9_dbkizf.png',
            'https://res.cloudinary.com/dbvywv8op/image/upload/v1739747725/PG8_yyu3wv.png'
        ],
        currentImageIndex: 0,
        title: 'Sistema de Gestión para Papelería',
        description: 'Desarrollé una aplicación de escritorio en C# y SQL Server para la gestión de una papelería, con funcionalidades CRUD en los distintos módulos de la aplicación desplegada de manera local.',
        technologies: ['C#', 'SQL Server'],
        gitURL: 'https://github.com/cristian-diaz2402/PapelGive.git',
        webURL: 'https://github.com/cristian-diaz2402/PapelGive.git'
    },
    {
        id: 2,
        category: 'Escritorio',
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
        title: 'Sistema de Gestión Distribuido para papelería',
        description: 'Desarrollé una aplicación de escritorio en C# y Oracle con el manejo de herramientas como Net Manager y SQL Plus para la gestión de una papelería, con funcionalidades CRUD en los distintos módulos de la aplicación desplegada de manera local y base de datos fragmentada y con replicación de datos.',
        technologies: ['C#', 'Oracle', 'Net Manager'],
        gitURL: 'https://github.com/cristian-diaz2402/PapelGiveOracle.git',
        webURL: 'https://github.com/cristian-diaz2402/PapelGiveOracle.git'
    },
    {
        id: 3,
        category: 'Web',
        images: 
        [   
            'https://res.cloudinary.com/dbvywv8op/image/upload/v1739677059/Imagen1_vvftqd.png',
            'https://res.cloudinary.com/dbvywv8op/image/upload/v1739677233/Imagen2_c1oxd5.png',
            'https://res.cloudinary.com/dbvywv8op/image/upload/v1739679673/Imagen3_ngtezs.png',
            'https://res.cloudinary.com/dbvywv8op/image/upload/v1739679672/Imagen4_sil5se.png',
            'https://res.cloudinary.com/dbvywv8op/image/upload/v1739679674/Imagen5_bpf9c6.png',
            'https://res.cloudinary.com/dbvywv8op/image/upload/v1739679674/Imagen6_ml65it.png',
            'https://res.cloudinary.com/dbvywv8op/image/upload/v1739679675/Imagen7_gtgnbd.png',
        ],
        currentImageIndex: 0,
        title: 'Sistema de compra de productos en línea',
        description: 'En conjunto con un equipo se desarrolló una aplicación web con las siguientes características: Autenticación de usuarios mediante Google – Firebase, base de datos no SQL (Firestore) de Firebase, Frontend con Angular desplegado en Netlify, Backend API Rest con Node.js – express desplegado en render, Cloud Storage – Cloudinary para la gestión de imágenes y método de pago mediante PayPal, todo bajo la metodología Srum gestionado con DevOps de Azure.',
        technologies: ['Angular', 'Node.js', 'Express', 'FireBase'],
        gitURL: 'https://github.com/cristian-diaz2402/MarketGo.git',
        webURL: 'https://marketgog5.netlify.app/'
    },
    {
        id: 4,
        category: 'Escritorio',
        images: [
            'https://res.cloudinary.com/dbvywv8op/image/upload/v1739757348/VJ1_kzqsjr.png',
            'https://res.cloudinary.com/dbvywv8op/image/upload/v1739757348/VJ2_xnwhfx.png',
            'https://res.cloudinary.com/dbvywv8op/image/upload/v1739757348/VJ3_aczqfw.png'
                ],
        currentImageIndex: 0,
        title: 'Videojuego',
        description: 'Desarrollé un videojuego bajo la tecnología de OpenGL desplegadode manera local con el uso de herramientas como VS Microsoft yC#.',
        technologies: ['C#', 'VSM', 'OpenGL'],
        gitURL: 'https://github.com/cristian-diaz2402/VideoJuego.git',
        webURL: 'https://github.com/cristian-diaz2402/VideoJuego.git'
    },
]);

const selectedCategory = ref('Todo');
const filteredProjects = computed(() => {
    return selectedCategory.value === 'Todo' ? Projects.value : Projects.value.filter(project => project.category.toLowerCase() === selectedCategory.value.toLowerCase());
});

onMounted(() => {
    Projects.value.forEach(project => {
        setInterval(() => {
            project.currentImageIndex = (project.currentImageIndex + 1) % project.images.length;
        }, 3000);
    });
});
</script>
