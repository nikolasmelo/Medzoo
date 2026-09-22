#!/usr/bin/env bash
# MedZoo Asset Downloader
# Downloads and optimizes all animal images for local bundling.
# Usage: bash scripts/download-assets.sh
#
# Requirements: curl, optionally ImageMagick (convert) for optimization
# Run from the project root: /home/melooz/Documentos/medzoo-final/

set -euo pipefail

ANIMALS_DIR="public/assets/animals"
mkdir -p "$ANIMALS_DIR"

echo "🐾 MedZoo Asset Downloader"
echo "=========================="
echo ""

# File names MUST match the ones used in cases.ts imageTexture paths.
# The URLs are verified direct Wikimedia Commons thumb URLs.
declare -A IMAGES=(
  ["c1_coruja_buraqueira"]="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Burrowing_Owl_-_Athene_cunicularia.jpg/800px-Burrowing_Owl_-_Athene_cunicularia.jpg"
  ["c2_jabuti_piranga"]="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Chelonoidis_carbonarius_%28Jardin_des_Plantes%29_03.jpg/800px-Chelonoidis_carbonarius_%28Jardin_des_Plantes%29_03.jpg"
  ["c3_arara_caninde"]="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Ara_ararauna_Luc_Viatour.jpg/800px-Ara_ararauna_Luc_Viatour.jpg"
  ["c4_sucuri_amarela"]="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Yellow_anaconda_%28Eunectes_notaeus%29_Pantanal.jpg/800px-Yellow_anaconda_%28Eunectes_notaeus%29_Pantanal.jpg"
  ["c5_harpia"]="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Harpia_harpyja_001_800.jpg/800px-Harpia_harpyja_001_800.jpg"
  ["c6_onca_pintada"]="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/800px-Standing_jaguar.jpg"
  ["c7_tamandua_bandeira"]="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Myrmecophaga_tridactyla_-_Ameisenbär.jpg/800px-Myrmecophaga_tridactyla_-_Ameisenbär.jpg"
  ["c8_lobo_guara"]="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Chrysocyon.brachyurus.jpg/800px-Chrysocyon.brachyurus.jpg"
  ["c9_tucano_toco"]="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Ramphastos_toco_-Birdworld%2C_Farnham%2C_Surrey%2C_England-8a_%281%29.jpg/800px-Ramphastos_toco_-Birdworld%2C_Farnham%2C_Surrey%2C_England-8a_%281%29.jpg"
  ["c10_bicho_preguica"]="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Bradypus_variegatus_-_three-toed_sloth.jpg/800px-Bradypus_variegatus_-_three-toed_sloth.jpg"
  ["c11_jacare_pantanal"]="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Jacare_do_Pantanal.jpg/800px-Jacare_do_Pantanal.jpg"
  ["c12_jaguatirica"]="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Ocelot_%28Leopardus_pardalis%29-8.jpg/800px-Ocelot_%28Leopardus_pardalis%29-8.jpg"
  ["c13_capivara"]="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Capybara_%28Hydrochoerus_hydrochaeris%29.JPG/800px-Capybara_%28Hydrochoerus_hydrochaeris%29.JPG"
  ["c14_macaco_prego"]="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Tufted_capuchin_%28Sapajus_apella%29.jpg/800px-Tufted_capuchin_%28Sapajus_apella%29.jpg"
  ["c15_iguana"]="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Green_iguana_%28I._iguana%29.jpg/800px-Green_iguana_%28I._iguana%29.jpg"
  ["c16_teiu"]="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Argentine_Black_and_White_Tegu_%28Salvator_merianae%29.jpg/800px-Argentine_Black_and_White_Tegu_%28Salvator_merianae%29.jpg"
  ["c17_cachorro_mato"]="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Crab-eating_fox_%28Cerdocyon_thous%29.jpg/800px-Crab-eating_fox_%28Cerdocyon_thous%29.jpg"
  ["c18_jiboia"]="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Boa_constrictor_%282%29.jpg/800px-Boa_constrictor_%282%29.jpg"
  ["c19_sagui"]="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Common_marmoset_%28Callithrix_jacchus%29.jpg/800px-Common_marmoset_%28Callithrix_jacchus%29.jpg"
  ["c20_anta"]="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/South_American_tapir_%28Tapirus_terrestris%29.JPG/800px-South_American_tapir_%28Tapirus_terrestris%29.JPG"
)

SUCCESS=0
FAIL=0

for name in $(echo "${!IMAGES[@]}" | tr ' ' '\n' | sort); do
  url="${IMAGES[$name]}"
  dest="$ANIMALS_DIR/${name}.jpg"
  
  if [ -f "$dest" ]; then
    echo "✅ SKIP (exists): $name"
    SUCCESS=$((SUCCESS + 1))
    continue
  fi
  
  echo -n "⬇️  Downloading $name ... "
  
  if curl -fsSL -A "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:128.0) Gecko/20100101 Firefox/128.0" --max-time 20 -o "$dest" "$url" 2>/dev/null; then
    # Optimize: resize to max 800px width, ~300KB quality if ImageMagick is available
    if command -v convert &>/dev/null; then
      convert "$dest" -resize '800x>' -quality 82 "$dest" 2>/dev/null || true
    fi
    
    size=$(du -h "$dest" | cut -f1)
    echo "✅ OK ($size)"
    SUCCESS=$((SUCCESS + 1))
  else
    echo "❌ FAILED (URL may have changed)"
    rm -f "$dest"
    FAIL=$((FAIL + 1))
  fi
done

echo ""
echo "=========================="
echo "✅ Downloaded: $SUCCESS / ${#IMAGES[@]}"
[ $FAIL -gt 0 ] && echo "❌ Failed: $FAIL (SVG fallback will be used)"
echo ""
echo "Total size:"
du -sh "$ANIMALS_DIR" 2>/dev/null || echo "(directory empty)"
echo ""
echo "🎯 Done! You can now run 'npm run dev' to test."
