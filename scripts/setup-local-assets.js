import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '..');
const photosDir = path.join(rootDir, 'public', 'assets', 'photos');
const animalsDir = path.join(rootDir, 'public', 'assets', 'animals');

if (!fs.existsSync(animalsDir)) {
  fs.mkdirSync(animalsDir, { recursive: true });
}

// Mapping from case texture filename to existing local photo in public/assets/photos/
const PHOTO_MAP = {
  'c1_coruja_buraqueira.jpg': 'owl.jpg',
  'c2_jabuti_piranga.jpg': 'tortoise.jpg',
  'c3_arara_caninde.jpg': 'macaw.jpg',
  'c4_sucuri_amarela.jpg': 'anaconda.jpg',
  'c5_harpia.jpg': 'harpy_eagle.jpg',
  'c6_onca_pintada.jpg': 'ocelot.jpg',
  'c7_tamandua_bandeira.jpg': 'anteater.jpg',
  'c8_lobo_guara.jpg': 'maned_wolf.jpg',
  'c9_tucano_toco.jpg': 'toucan.jpg',
  'c10_bicho_preguica.jpg': 'anteater.jpg',
  'c11_jacare_pantanal.jpg': 'caiman.jpg',
  'c12_jaguatirica.jpg': 'ocelot.jpg',
  'c13_capivara.jpg': 'capybara.jpg',
  'c14_macaco_prego.jpg': 'tamarin.jpg',
  'c15_iguana.jpg': 'caiman.jpg',
  'c16_teiu.jpg': 'caiman.jpg',
  'c17_cachorro_mato.jpg': 'maned_wolf.jpg',
  'c18_jiboia.jpg': 'anaconda.jpg',
  'c19_sagui.jpg': 'tamarin.jpg',
  'c20_anta.jpg': 'capybara.jpg',
};

console.log('🐾 Copiando imagens locais de public/assets/photos/ para public/assets/animals/...\n');

let copied = 0;
for (const [targetName, sourcePhoto] of Object.entries(PHOTO_MAP)) {
  const srcPath = path.join(photosDir, sourcePhoto);
  const destPath = path.join(animalsDir, targetName);

  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`✅ ${targetName} <- ${sourcePhoto}`);
    copied++;
  } else {
    console.warn(`⚠️ Foto de origem não encontrada: ${sourcePhoto}`);
  }
}

console.log(`\n🎉 Concluído! ${copied} / 20 imagens criadas em public/assets/animals/`);
