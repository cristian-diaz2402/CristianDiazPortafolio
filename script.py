import re

path = r'C:\Users\User\Desktop\CristianDiazPortafolio\src\components\LatestProjSection.vue'
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

# First replace ids in reverse order so we don't overwrite
for i in range(10, 2, -1):
    text = re.sub(rf'\bid:\s*{i},', f'id: {i+1},', text)

new_project = '''  {
    id: 3,
    category: 'Web',
    images: [],
    currentImageIndex: 0,
    videoActive: false,
    title: 'Floristería Rosi — Landing Page',
    title_en: 'Floristería Rosi — Landing Page',
    description: 'Transformación digital para un negocio local. Landing page con catálogo interactivo y enfoque en SEO técnico para destacar la marca en buscadores locales. Actualmente activo en producción, desplegado sobre Vercel.',
    description_en: 'Digital transformation for a local business. Landing page with an interactive catalog and technical SEO focus to boost the brand in local searches. Currently active in production, deployed on Vercel.',
    technologies: ['Nuxt 4', 'Vue 3', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    gitURL: null,
    webURL: 'https://floristeriarosi.vercel.app/',
    videoURL: null,
    isAcademic: false,
    hasDemo: true,
  },
'''

text = text.replace('  {\n    id: 4,\n    category: \'IA & Datos\',', new_project + '  {\n    id: 4,\n    category: \'IA & Datos\',')

with open(path, 'w', encoding='utf-8') as f:
    f.write(text)
print('Done!')
