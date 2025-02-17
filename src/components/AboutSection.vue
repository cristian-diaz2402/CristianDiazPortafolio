<template >
    <section class="text-white mt-18" id="about">
        <div class="absolute z-0 top-[93rem] inset-x-0 h-64 flex items-start">
            <div class="h-24 w-64 bg-gradient-to-br from-primary via-secondary blur-2xl to-[#570cac] opacity-20"></div>
        </div>
        <div class="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 z-1">
            <div data-aos="flip-right">
                <h2 class="text-4xl font-bold text-white text-left mb-8"><span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Formación</span> Academica</h2>
                <div class="space-y-8 py-8">
                    <div v-for="element in education" :key="element.id"
                    class="flex items-center md:w-[90%] w-full rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641] py-6"
                    >

                    <div class="w-1/4 flex items-center justify-center">
                        <img :src="element.logoUrl" alt="graduation-cap--v1" class="h-16 w-auto object-contain">
                    </div>
                        <div class="w-3/4 pl-4">
                            <h3 class="text-2xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary lg:text-xl">
                                {{ element.School }}
                            </h3>
                            <p class="text-white">{{ element.program }}</p>
                            <p class="text-white">{{ element.year }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-4 md:mt-0 text-left flex flex-col z-10 h-full" data-aos="flip-right">
                <h2 class="text-4xl font-bold text-white md:text-center text-left mb-4">
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Datos</span>
                    Personales
                </h2>
             <!--   <p class="text-base lg:text-lg mt-8 py-8"> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                     Qui facere libero cupiditate fugit minima voluptates numquam est eos voluptate saepe
                      eius amet harum provident accusamus omnis sit in cum incidunt dolorum, necessitatibus 
                      illo reiciendis ipsam debitis velit! Itaque officia architecto fugit, cum dolorum eos dolore 
                      quaerat quis nobis id similique!
                </p> -->
                <div class="space-y-4 pt-8">
                    <div v-for="item in personalInfo" :key="item.id"
                        class="flex items-center md:w-[90%] w-full rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641] py-6"
                    >
                        <div class="w-1/4 flex items-center justify-center">
                            <img :src="item.logoUrl" alt="icono" class="h-16 w-auto object-contain">
                        </div>
                        <div class="w-3/4 pl-4">
                            <h3 class="text-2xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary lg:text-xl">{{ item.title }}</h3>
                            <p class="text-sm sm:text-base text-gray-300">{{ item.value }}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue';
const education=ref([
    {
        id:1,
        School:'Luis Felipe Borja del Alcázar',
        program:'Bachiller en Ciencias',
        year:'Finalizado',
        logoUrl: 'https://www.uelfba.com/wp-content/uploads/2023/06/logo_luis1200.png'
    },
    {
        id:2,
        School:'Escuela Politécnica Nacional',
        program:'Ingeniero en Ciencias de la Computación',
        year:'Fecha inicio: 14/11/2021; Hasta: La actualidad',
        logoUrl:'https://redi.cedia.edu.ec/members/EPN.png'
    }
])
const personalInfo = ref([
    {
        id: 1,
        title: 'Dirección',
        value: 'Camal Metropolitano - Quito',
        logoUrl: 'https://img.icons8.com/ios-filled/50/ffffff/marker.png'
    },
    {
        id: 2,
        title: 'Cumpleaños',
        value: '24 de marzo de 2002',
        logoUrl: 'https://img.icons8.com/ios-filled/50/ffffff/birthday.png'
    }
]);

</script>