/**
 * Script to fetch food images from Wikimedia Commons (CC-BY-SA, free to use)
 * Run: node scripts/fetch-food-images.js
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// Mapping of food names (Spanish) to English search terms for better results
const foodSearchTerms = {
  // Frutas
  'cereza': 'cherry fruit',
  'fresa': 'strawberry fruit',
  'mandarina': 'mandarin orange',
  'plátano': 'banana fruit',
  'uvas': 'grapes fruit',
  'pasas': 'raisins dried',
  'mango picado': 'mango fruit sliced',
  'pera': 'pear fruit',
  'piña picada': 'pineapple fruit',
  'arandanos': 'blueberries fruit',
  'guayaba': 'guava fruit',
  'melón picado': 'cantaloupe melon',
  'kiwi': 'kiwi fruit',
  'zarzamora': 'blackberry fruit',
  'naranja': 'orange fruit',
  'papaya picada': 'papaya fruit',
  'sandia picada': 'watermelon fruit',

  // Verduras
  'acelgas cocidas': 'chard vegetable',
  'betabel crudo': 'beetroot',
  'brocoli cocido': 'broccoli vegetable',
  'cebolla blanca rebanada': 'white onion sliced',
  'Cebolla morada rebanada': 'red onion',
  'calabacita redonda cruda': 'zucchini squash',
  'chay0te cocido': 'chayote vegetable',
  'chile de arbol seco': 'chile de arbol dried',
  'chile habanero': 'habanero pepper',
  'chile jalapeño': 'jalapeno pepper',
  'coliflor cocida': 'cauliflower vegetable',
  'col cocida picada': 'cabbage vegetable',
  'espinaca cocida': 'spinach vegetable',
  'jicama picada': 'jicama vegetable',
  'jitomate': 'tomato red',
  'tomate': 'tomatillo green',
  'jugo de zanahoria': 'carrot juice',
  'lechuga': 'lettuce vegetable',
  'nopal cocido': 'nopal cactus food',
  'pepino con cascara rebanado': 'cucumber sliced',
  'pimiento fresco': 'bell pepper',

  // Cereales
  'Elote amarrillo cocido': 'corn on cob',
  'Elote blanco cocido': 'white corn cob',
  'Espaguetti cocido': 'spaghetti pasta',
  'Pasta': 'pasta cooked',
  'Maíz pozolero': 'hominy corn',
  'Maíz palomero': 'popcorn',
  'Pan de caja': 'sliced bread',
  'Pan molido': 'breadcrumbs',
  'Papa cocida': 'boiled potato',
  'Arroz cocido': 'cooked rice',
  'Avena cocida': 'oatmeal porridge',
  'Avena en hojuelas': 'oat flakes',
  'Barrita de avena': 'oat bar granola',
  'Bolillo': 'bolillo bread mexican',
  'Bolillo integral': 'whole wheat bread roll',
  'Bolillo sin migajón': 'bread roll',
  'Camote cocido': 'sweet potato cooked',
  'Cereal de arroz': 'rice cereal',
  'Cereal de arroz inflado con chocolate': 'chocolate rice cereal',

  // Leguminosas
  'frijoles cocidos': 'black beans cooked',
  'frijoles fritos': 'refried beans',
  'lentejas cocidas': 'lentils cooked',
  'soya cocida': 'soybeans cooked',
  'garbanzo cocido': 'chickpeas cooked',
  'haba seca cocida': 'fava beans cooked',

  // Origen Animal A
  'Atún de agua drenado': 'canned tuna',
  'Atún fresco': 'fresh tuna fish',
  'Bistec de res': 'beef steak',
  'Camarón cocido': 'cooked shrimp',
  'Camarón gigante': 'giant shrimp prawn',
  'Cangrejo': 'crab seafood',
  'Cecina': 'cecina dried meat',
  'Charales secos': 'dried fish charales',
  'Chuleta ahumada': 'smoked pork chop',
  'Clara de huevo': 'egg whites',
  'Filete de pescado': 'fish fillet',
  'Milanesa de pollo': 'chicken cutlet breaded',
  'Milanesa de res': 'beef cutlet breaded',
  'Pechuga de pollo sin piel aplanada': 'chicken breast',
  'Molida de pollo': 'ground chicken',
  'Queso mozzarella cero grasa': 'mozzarella cheese',
  'Queso cottage': 'cottage cheese',
  'Requesón promedio': 'ricotta cheese',

  // Origen Animal B
  'Arrachera cocida': 'flank steak grilled',
  'Bistec de ternera': 'veal steak',
  'Carne molida de cerdo': 'ground pork',
  'carne de cerdo': 'pork meat',
  'Hígado de cerdo cocido': 'pork liver',
  'Jamón de pavo': 'turkey ham',
  'Milanesa de cerdo': 'pork cutlet breaded',
  'Pescado blanco': 'white fish fillet',
  'Queso fresco': 'queso fresco mexican',
  'Queso Oaxaca lala light': 'oaxaca cheese string',
  'Queso panela': 'panela cheese',

  // Origen Animal C
  'Bistec de bola': 'beef round steak',
  'Carne deshebrada': 'shredded beef',
  'Chicharrón de cerdo': 'pork rinds chicharron',
  'Huevo fresco': 'fresh egg',
  'Longaniza de primera': 'longaniza sausage',
  'Salchicha de pavo': 'turkey sausage',

  // Lácteos
  'leche lala light': 'milk glass',
  'leche descremada': 'skim milk',
  'leche evaporada descremada': 'evaporated milk',
  'leche alpura light extra': 'light milk',
  'yogurt light de fruta': 'fruit yogurt',
  'yogurt lala light batido': 'yogurt smoothie',
  'leche light extra': 'milk low fat',

  // Grasas con proteína
  'almendras': 'almonds nuts',
  'cacahuate': 'peanuts',
  'chia': 'chia seeds',
  'chorizo': 'chorizo sausage',
  'nuez': 'walnuts',
  'Crema de cacahuate': 'peanut butter',
  'queso de puerco': 'head cheese',
  'pistache 18': 'pistachios nuts',

  // Grasas sin proteína
  'Aceite': 'cooking oil olive',
  'Aderezo': 'salad dressing',
  'Aguacate mediano': 'avocado fruit',
  'Coco rallado': 'shredded coconut',
  'Crema agria': 'sour cream',
  'Crema natural': 'heavy cream',
  'manteca de cerdo': 'lard pork fat',
  'mantequilla': 'butter',
  'margarina': 'margarine spread',
  'mayonesa': 'mayonnaise',
  'tocino': 'bacon strips'
};

function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'IxololiNutrition/1.0 (kevin@coffeefoundation.dev)' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); }
        catch (e) { reject(e); }
      });
    }).on('error', reject);
  });
}

async function searchImage(searchTerm) {
  const encoded = encodeURIComponent(searchTerm);
  const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=${encoded}&gsrlimit=1&prop=imageinfo&iiprop=url&iiurlwidth=300&format=json`;
  
  try {
    const data = await fetchJSON(url);
    if (data.query && data.query.pages) {
      const pages = Object.values(data.query.pages);
      if (pages.length > 0 && pages[0].imageinfo && pages[0].imageinfo[0]) {
        return pages[0].imageinfo[0].thumburl || pages[0].imageinfo[0].url;
      }
    }
  } catch (e) {
    console.error(`Error fetching image for "${searchTerm}":`, e.message);
  }
  return null;
}

async function main() {
  const results = {};
  const entries = Object.entries(foodSearchTerms);
  
  console.log(`Fetching images for ${entries.length} food items from Wikimedia Commons...`);
  
  for (let i = 0; i < entries.length; i++) {
    const [foodName, searchTerm] = entries[i];
    process.stdout.write(`[${i + 1}/${entries.length}] ${foodName}... `);
    
    const imageUrl = await searchImage(searchTerm);
    if (imageUrl) {
      results[foodName] = imageUrl;
      console.log('OK');
    } else {
      results[foodName] = null;
      console.log('NOT FOUND');
    }
    
    // Rate limiting - wait 100ms between requests to be respectful
    await new Promise(r => setTimeout(r, 100));
  }

  const outputPath = path.join(__dirname, '..', 'public', 'data', 'food-images.json');
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2), 'utf8');
  
  const found = Object.values(results).filter(v => v !== null).length;
  console.log(`\nDone! ${found}/${entries.length} images found.`);
  console.log(`Saved to: ${outputPath}`);
}

main().catch(console.error);
