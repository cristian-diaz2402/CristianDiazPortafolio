<template>
    <section class="text-white mt-18" id="skills">
        <div class="absolute right-0 top-[110rem] h-full w-full justify-end">
            <span class="flex opacity-20">
                <span class="w-16 h-32 rounded-l-full flex bg-primary blur-2xl"></span>
                <span class="w-16 h-32 rounded-r-full flex bg-[#f88fc2] blur-2xl mt-14"></span>
            </span>
        </div>
        <div class="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 xl:px-16 relative">
            <div class="mt-4 md:mt-0 text-left flex flex-col z-10 h-full w-[80%]">
                <h2 class="text-4xl font-bold text-white text-left mb-8">
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Habilidades</span>
                    Técnicas
                </h2>
                <div class="grid grid-cols-5 gap-8">
                    <div data-aos="zoom-in-up" v-for="(skill, index) in skills" :key="skill.id" 
                        class="flex flex-col justify-center items-center">
                        <img :src="skill.icon" alt="skill icon" class="w-12 h-12 z-10">
                        <span class="text-white text-center font-semibold mt-2">{{ skill.name }}</span>
                    </div>
                </div>
            </div>
            <div data-aos="flip-left">
                <h2 class="text-4xl font-bold text-white text-left mb-8 md:text-center md:mt-0 mt-8"><span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Habilidades</span> Blandas</h2>
                <div class="space-y-2 py-2 md:grid md:grid-cols-1" data-aos="fade-left">
                    <div v-for="element in Experinces" :key="element.id"
                    class="flex items-center rounded-xl p-3 bg-[#111a3e] shadow-lg border border-[#1f1641]">
                    <div class="w-3/4 pl-3">
                        <h3 class="text-2xl font-bold text-white text-left mb-0  md:mt-0 mt-8">
                            {{ element.role }}
                        </h3>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const skills = ref([
    { id: 1, icon: 'https://img.icons8.com/color/48/html-5--v1.png', name: 'HTML' },
    { id: 2, icon: 'https://img.icons8.com/color/48/css3.png', name: 'CSS' },
    { id: 3, icon: 'https://img.icons8.com/color/48/typescript.png', name: 'TypeScript' },
    { id: 4, icon: 'https://img.icons8.com/color/48/tailwindcss.png', name: 'Tailwind CSS' },
    { id: 5, icon: 'https://img.icons8.com/color/48/javascript.png', name: 'JavaScript' },
    { id: 5, icon: 'https://img.icons8.com/color/48/python--v1.png', name: 'Python' },
    { id: 6, icon: 'https://img.icons8.com/color/48/c-sharp-logo.png', name: 'C#' },
    { id: 7, icon: 'https://img.icons8.com/fluency/48/vuejs.png', name: 'Vue.js' },
    { id: 8, icon: 'https://img.icons8.com/fluency/48/angularjs.png', name: 'Angular' },
    { id: 9, icon: 'https://img.icons8.com/color/48/nodejs.png', name: 'Node.js' },
    { id: 10, icon: 'https://img.icons8.com/color/48/mysql-logo.png', name: 'MySQL' },
    { id: 11, icon: 'https://img.icons8.com/color/48/oracle-logo.png', name: 'Oracle' },
    { id: 12, icon: 'https://img.icons8.com/color/48/postgreesql.png', name: 'PostgreSQL' },
    { id: 13, icon: 'https://img.icons8.com/color/48/microsoft-sql-server.png', name: 'SQL Server' },
    { id: 14, icon: 'https://img.icons8.com/color/48/git.png', name: 'Git' },
    { id: 15, icon: 'https://img.icons8.com/color/48/visual-studio-code-2019.png', name: 'VSC' },
    { id: 16, icon: 'https://img.icons8.com/color/48/visual-studio--v1.png', name: 'VSM' },
    { id: 17, icon: 'https://img.icons8.com/color/48/azure-1.png', name: 'Azure DevOps Scrum' },
    { id: 18, icon: 'https://img.icons8.com/color/48/ubuntu--v1.png', name: 'Ubuntu' },

]);

const Experinces = ref([
    {
        id: 1,
        role: 'Trabajo en equipo',
    },
    {
        id: 2,
        role: 'Capacidad de adaptación',
    },
    {
        id: 3,
        role: 'Productivo',
    },
    {
        id: 4,
        role: 'Honesto',
    },
    {
        id: 5,
        role: 'Puntual',
    },
    {
        id: 6,
        role: 'Ordenado',
    },
    {
        id: 7,
        role: 'Responsable',
    },
    {
        id: 8,
        role: 'Comprometido',
    },
]);
</script>