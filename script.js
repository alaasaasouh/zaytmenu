'use strict';
const $ = selector => document.querySelector(selector);
const dictionary = {
  "en": {
    "announcement": "A little coast. A little charcoal. A lot of soul.",
    "brandSub": "MEDITERRANEAN KITCHEN",
    "navMenu": "The menu",
    "navStory": "Our story",
    "navVisit": "Find our table",
    "yourBag": "Your bag",
    "heroEyebrow": "FROM BATROUN, WITH LOVE",
    "heroLine1": "Good food.",
    "heroLine2": "Slow moments.",
    "heroDescription": "Olive oil on everything. A kiss of charcoal. The kind of food that brings everyone a little closer.",
    "exploreMenu": "Explore the menu",
    "heroNote": "Made for sharing. Best enjoyed slowly.",
    "sealTop": "OLIVE, FIRE &",
    "sealBottom": "A LITTLE SOUL",
    "heroCaption": "A table worth coming together for.",
    "value1": "Rooted in the Mediterranean",
    "value2": "Always made from scratch",
    "value3": "A little something for everyone",
    "menuEyebrow": "PULL UP A CHAIR",
    "menuTitle": "What are you",
    "menuTitle2": "in the mood for?",
    "menuIntro": "Start with a dip. Stay for the fire.\nLeave a little room for something sweet.",
    "currencyNote": "Prices in USD · Made fresh to order",
    "noResults": "Nothing on the table yet.",
    "trySearch": "Try a different dish or category.",
    "resetFilters": "Show the whole menu",
    "allergen": "A little heads-up: our kitchen handles nuts, dairy, gluten, and sesame. Ask about ingredients before ordering.",
    "sharingEyebrow": "GOOD COMPANY, GREAT FOOD",
    "sharingTitle": "Some things taste better together.",
    "sharingText": "Build your own little feast. A few mezze, something from the fire, and one more fork.",
    "buildFeast": "Build a sharing feast",
    "storyCaption": "Less rush. More passing plates.",
    "storyEyebrow": "OUR KIND OF GATHERING",
    "storyTitle": "Rooted in the coast.",
    "storyTitle2": "Warmed by the fire.",
    "storyText1": "Zayt means olive oil. Ember is what keeps the fire alive. Together, they’re the beginning of just about everything we love to cook.",
    "storyText2": "Our kitchen brings the spirit of Batroun’s coast to the table: seasonal ingredients, generous plates, and food worth taking your time over. That’s the feeling behind every dish.",
    "storySign": "A love letter to the long lunch.",
    "visitEyebrow": "MEET YOU BY THE COAST",
    "visitTitle": "Your next",
    "visitTitle2": "favorite table.",
    "visitText": "Come hungry. Bring your people.\nWe’ll take care of the rest.",
    "where": "The neighborhood",
    "address": "Old Harbor Quarter\nBatroun, Lebanon",
    "exploreArea": "Explore Batroun",
    "hours": "Around the table",
    "hoursText": "Tuesday – Sunday\n12:00 PM – 11:00 PM",
    "hoursNote": "Monday is for a little rest.",
    "footerText": "Olive oil. Open fire. A table for everyone.",
    "backMenu": "Back to the menu ↑",
    "viewBag": "View your bag",
    "aGoodStart": "A GOOD START",
    "yourTable": "Your little feast.",
    "keepExploring": "Continue browsing",
    "search": "Find your craving…",
    "add": "Add to bag",
    "added": "Added to your bag",
    "dishes": "dishes on the table",
    "allergens": "Contains",
    "emptyTitle": "A table waiting to be filled.",
    "emptyText": "Good things start with your first dish.",
    "browse": "Browse the menu",
    "remove": "Remove",
    "subtotal": "Subtotal",
    "cartNote": "Prices in USD. Your selection will be confirmed by our team.",
    "pickup": "Pick up",
    "delivery": "Delivery",
    "checkout": "Review your selection",
    "clear": "Clear bag",
    "orderTitle": "Your selection.",
    "orderText": "Show this selection to your server to place your order. Our team will confirm availability and your final total.",
    "feastAdded": "A mezze trio has been added to your bag.",
    "popular": "House favorite",
    "plant": "Plant based",
    "signature": "From the fire",
    "sweet": "Sweet finish",
    "spicy": "A little heat",
    "limited": "Slow cooked",
    "all": "Everything",
    "mezze": "Mezze & dips",
    "fire": "From the fire",
    "salads": "Fresh & green",
    "dessert": "Sweet things",
    "drinks": "Sips",
    "increase": "Increase quantity",
    "decrease": "Decrease quantity",
    "details": "View details",
    "maxQuantity": "That’s a generous table! Maximum 20 of each dish.",
    "restaurantTagline": "Mediterranean kitchen · Batroun",
    "rights": "All rights reserved.",
    "footerNote": "Made for sharing. Served with love."
  },
  "ar": {
    "announcement": "نسمة بحر. دفء الجمر. ونكهة من القلب.",
    "brandSub": "مطبخ متوسطي",
    "navMenu": "قائمة الطعام",
    "navStory": "حكايتنا",
    "navVisit": "زوروا طاولتنا",
    "yourBag": "سلّتك",
    "heroEyebrow": "من البترون، بكل محبة",
    "heroLine1": "أكل طيّب.",
    "heroLine2": "ولحظات ع مهل.",
    "heroDescription": "زيت زيتون على كل شي. لمسة من الجمر. وأكل بيجمع الأحبّة حوالين طاولة وحدة.",
    "exploreMenu": "اكتشف القائمة",
    "heroNote": "أطباق للمشاركة. ولحظات تستحق نتمهّل فيها.",
    "sealTop": "زيت وجمر",
    "sealBottom": "ونكهة من القلب",
    "heroCaption": "طاولة بتحلى باللّمّة.",
    "value1": "من قلب المتوسط",
    "value2": "كل شي محضّر بعناية",
    "value3": "لكل ذوق صحنه",
    "menuEyebrow": "تفضّل عالطاولة",
    "menuTitle": "شو عبالك",
    "menuTitle2": "تاكل اليوم؟",
    "menuIntro": "بلّش بالمقبّلات. كمّل عالجمر.\nوخلّي محل لشي حلو.",
    "currencyNote": "الأسعار بالدولار · أطباق تُحضّر عند الطلب",
    "noResults": "بعد ما لقينا صحنك.",
    "trySearch": "جرّب اسم تاني أو قسم مختلف.",
    "resetFilters": "اعرض كل القائمة",
    "allergen": "للتنبيه: مطبخنا يستخدم المكسرات والحليب والغلوتين والسمسم. يُرجى السؤال عن المكوّنات قبل الطلب.",
    "sharingEyebrow": "صحبة حلوة وأكل أطيب",
    "sharingTitle": "في أشياء بتحلى لما نتشاركها.",
    "sharingText": "اجمع سفرتك ع ذوقك. شوية مقبّلات، صحن من الجمر، وشوكة زيادة.",
    "buildFeast": "حضّر سفرة للمشاركة",
    "storyCaption": "ع مهل. وصحون تدور عالكل.",
    "storyEyebrow": "هيك منحب اللّمّة",
    "storyTitle": "جذورنا عالساحل.",
    "storyTitle2": "ودفانا من الجمر.",
    "storyText1": "الزيت أصل النكهة. والجمر سرّ الدفا. من هالشغلتين بتبلّش كل الأطباق اللي منحب نعملها.",
    "storyText2": "مطبخنا بيجمع روح ساحل البترون: مكوّنات موسمية، صحون سخية، وأكل بيستاهل ناخد وقتنا معه. هيدا الإحساس اللي منحطّه بكل صحن.",
    "storySign": "رسالة محبة للغدا الطويل.",
    "visitEyebrow": "منلتقي عالساحل",
    "visitTitle": "طاولتك",
    "visitTitle2": "المفضّلة الجاية.",
    "visitText": "تعال جوعان. جيب أحبابك.\nوالباقي علينا.",
    "where": "حيّنا",
    "address": "حي المرفأ القديم\nالبترون، لبنان",
    "exploreArea": "اكتشف البترون",
    "hours": "مواعيد اللّمّة",
    "hoursText": "الثلاثاء – الأحد\n١٢ ظهرًا – ١١ مساءً",
    "hoursNote": "الاثنين مناخد نفس صغير.",
    "footerText": "زيت زيتون. جمر. وطاولة بتساع الكل.",
    "backMenu": "ارجع للقائمة ↑",
    "viewBag": "اعرض سلّتك",
    "aGoodStart": "بداية طيّبة",
    "yourTable": "سفرتك الحلوة.",
    "keepExploring": "كمّل تصفّح القائمة",
    "search": "شو عبالك اليوم؟",
    "add": "أضف للسلّة",
    "added": "انضاف لسلّتك",
    "dishes": "أطباق عالطاولة",
    "allergens": "يحتوي على",
    "emptyTitle": "طاولة ناطرة أطباقك.",
    "emptyText": "كل سفرة حلوة بتبلّش بأول صحن.",
    "browse": "تصفّح القائمة",
    "remove": "إزالة",
    "subtotal": "المجموع",
    "cartNote": "الأسعار بالدولار. فريقنا بيأكّد تفاصيل طلبك.",
    "pickup": "استلام",
    "delivery": "توصيل",
    "checkout": "راجع اختياراتك",
    "clear": "إفراغ السلّة",
    "orderTitle": "اختياراتك.",
    "orderText": "اعرض اختياراتك على النادل لتقديم طلبك. فريقنا بيأكّد توفّر الأطباق والمجموع النهائي.",
    "feastAdded": "انضافت ثلاث أطباق مقبّلات لسلّتك.",
    "popular": "محبوب الطاولة",
    "plant": "نباتي",
    "signature": "من الجمر",
    "sweet": "ختامها حلو",
    "spicy": "حرّ خفيف",
    "limited": "مطبوخ ع مهل",
    "all": "كل الأطباق",
    "mezze": "مقبّلات وتغميس",
    "fire": "من الجمر",
    "salads": "طازج وأخضر",
    "dessert": "شي حلو",
    "drinks": "مشروبات",
    "increase": "زيادة الكمية",
    "decrease": "تقليل الكمية",
    "details": "عرض التفاصيل",
    "maxQuantity": "سفرة عامرة! الحد الأقصى ٢٠ من كل طبق.",
    "restaurantTagline": "مطبخ متوسطي · البترون",
    "rights": "جميع الحقوق محفوظة.",
    "footerNote": "أطباق للمشاركة. تُقدّم بمحبة."
  }
};
const dishes = [
 {id:'hummus',category:'mezze',price:6.5,image:'hummus.jpg',badge:'popular',en:{name:'The Silky Hummus',description:'Chickpeas, tahini, a pool of extra virgin olive oil, and warm flatbread.',allergens:'Sesame, gluten'},ar:{name:'حمّص عالناعم',description:'حمّص، طحينة، بركة زيت زيتون بكر، وخبز دافئ.',allergens:'سمسم، غلوتين'}},
 {id:'chicken',category:'fire',price:16,image:'chicken.jpg',badge:'signature',en:{name:'Charcoal Chicken',description:'Lemon-marinated chicken, garlic toum, flame-kissed vegetables, and warm bread.',allergens:'Gluten'},ar:{name:'دجاج عالجمر',description:'دجاج متبّل بالليمون، توم، خضار مشوية وخبز دافئ.',allergens:'غلوتين'}},
 {id:'salad',category:'salads',price:9,image:'salad.jpg',badge:'plant',en:{name:'The Garden Bowl',description:'Crisp greens, cucumber, cherry tomatoes, and our bright lemon-sumac dressing.',allergens:'No listed allergens; cross-contact possible'},ar:{name:'صحن من الجنينة',description:'خضرة مقرمشة، خيار، بندورة كرزية، وتتبيلة ليمون وسمّاق.',allergens:'لا مسبّبات حساسية مُدرجة؛ قد يحدث تلامس مشترك'}},
 {id:'falafel',category:'mezze',price:8,image:'falafel.jpg',badge:'plant',en:{name:'Golden Falafel',description:'Herby chickpea fritters, tahini sauce, pickles, and fresh parsley.',allergens:'Sesame'},ar:{name:'فلافل دهبية',description:'فلافل بالأعشاب، صلصة طحينة، مخلّل وبقدونس طازج.',allergens:'سمسم'}},
 {id:'kofta',category:'fire',price:18,image:'kofta.jpg',badge:'popular',en:{name:'Ember Kofta Plate',description:'Spiced beef kofta, charred tomatoes, parsley salad, and silky tahini.',allergens:'Sesame'},ar:{name:'كفتة عالجمر',description:'كفتة متبّلة، بندورة مشوية، سلطة بقدونس وطحينة ناعمة.',allergens:'سمسم'}},
 {id:'aubergine',category:'mezze',price:7.5,image:'aubergine.jpg',badge:'spicy',en:{name:'Smoky Aubergine',description:'Fire-roasted aubergine, tahini, pomegranate, and a little chili oil.',allergens:'Sesame'},ar:{name:'باذنجان مدخّن',description:'باذنجان مشوي، طحينة، رمّان ولمسة زيت حرّ.',allergens:'سمسم'}},
 {id:'halloumi',category:'salads',price:12,image:'halloumi.jpg',en:{name:'Halloumi & Heritage',description:'Golden grilled halloumi, seasonal tomatoes, garden leaves, and basil oil.',allergens:'Milk'},ar:{name:'حلّوم وخيرات الأرض',description:'حلّوم مشوي، بندورة موسمية، أوراق خضراء وزيت الحبق.',allergens:'حليب'}},
 {id:'cake',category:'dessert',price:7,image:'cake.jpg',badge:'sweet',en:{name:'A Little Chocolate',description:'Rich chocolate cake with a tender center. One fork? Make it two.',allergens:'Gluten, eggs, milk'},ar:{name:'شوية شوكولا',description:'كيكة شوكولا غنية بقلب طري. شوكة وحدة؟ خلّينا ناخد تنين.',allergens:'غلوتين، بيض، حليب'}},
 {id:'lemonade',category:'drinks',price:5,image:'lemonade.jpg',en:{name:'Coastal Lemonade',description:'Fresh lemon, garden mint, crushed ice, and a slow afternoon.',allergens:'No listed allergens; cross-contact possible'},ar:{name:'ليموناضة عالبحر',description:'ليمون طازج، نعنع من الجنينة، تلج وضيعة وقت حلوة.',allergens:'لا مسبّبات حساسية مُدرجة؛ قد يحدث تلامس مشترك'}}
];
const categories = ['all','mezze','fire','salads','dessert','drinks'];
let lang = 'en', activeCategory = 'all', searchTerm = '', cart = {}, fulfilment = 'pickup', toastTimer;
try {
 lang = localStorage.getItem('zayt-language') === 'ar' ? 'ar' : 'en';
 const stored = JSON.parse(localStorage.getItem('zayt-bag') || '{}');
 if (stored && typeof stored === 'object') for (const dish of dishes) {
  const count = stored[dish.id];
  if (Number.isInteger(count) && count > 0 && count <= 20) cart[dish.id] = count;
 }
} catch { /* The menu also works when browser storage is unavailable. */ }
const t = key => dictionary[lang][key] || key;
const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const money = value => '$' + value.toFixed(2);
const countItems = () => Object.values(cart).reduce((sum, count) => sum + count, 0);
const total = () => dishes.reduce((sum, dish) => sum + dish.price * (cart[dish.id] || 0), 0);
function saveCart() { try { localStorage.setItem('zayt-bag', JSON.stringify(cart)); } catch {} }
function showToast(message) {
 $('#toast').textContent = message; $('#toast').classList.add('visible');
 clearTimeout(toastTimer); toastTimer = setTimeout(() => $('#toast').classList.remove('visible'), 2700);
}
function openDialog(id) { const dialog = document.getElementById(id); if (!dialog.open) dialog.showModal(); }
function closeDialog(id) { document.getElementById(id).close(); }
function setLanguage() {
 document.documentElement.lang = lang; document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
 document.querySelectorAll('[data-i18n]').forEach(element => {
  element.textContent = t(element.dataset.i18n);
  if (t(element.dataset.i18n).includes('\n')) element.style.whiteSpace = 'pre-line';
 });
 $('#language').innerHTML = lang === 'en' ? 'العربية <span>↗</span>' : 'English <span>↗</span>';
 $('#language').lang = lang === 'en' ? 'ar' : 'en';
 $('#language').setAttribute('aria-label', lang === 'en' ? 'Switch to Arabic' : 'Switch to English');
 $('#search').placeholder = t('search'); $('#search').setAttribute('aria-label', t('search'));
 $('#open-cart').setAttribute('aria-label', t('yourBag'));
 $('#categories').setAttribute('aria-label', t('navMenu'));
 document.querySelectorAll('.close-button').forEach(button => button.setAttribute('aria-label', lang === 'ar' ? 'إغلاق' : 'Close'));
 $('#categories').innerHTML = categories.map(category => `<button class="category" data-category="${category}" aria-pressed="${activeCategory === category}">${t(category)}</button>`).join('');
 renderMenu(); updateBag();
 if ($('#dish-dialog').open) renderDish($('#dish-dialog').dataset.dish);
 if ($('#info-dialog').open) renderInfo($('#info-dialog').dataset.kind);
 try { localStorage.setItem('zayt-language', lang); } catch {}
}
function renderMenu() {
 const query = searchTerm.trim().toLocaleLowerCase();
 const visible = dishes.filter(dish => (activeCategory === 'all' || dish.category === activeCategory) && (!query || [dish.en.name,dish.ar.name,dish.en.description,dish.ar.description,t(dish.category)].join(' ').toLocaleLowerCase().includes(query)));
 $('#menu-grid').innerHTML = visible.map(dish => {
  const data = dish[lang];
  return `<article class="menu-card"><button class="card-image-button" data-dish="${dish.id}" aria-label="${escapeHTML(t('details') + ': ' + data.name)}"><img src="assets/${dish.image}" alt="${escapeHTML(data.name)}" loading="lazy" width="660" height="440">${dish.badge ? `<span class="dish-badge ${dish.badge === 'popular' ? 'popular' : ''}">${t(dish.badge)}</span>` : ''}</button><div class="card-body"><div class="card-category">${t(dish.category)}</div><button class="dish-name-button" data-dish="${dish.id}"><h3>${data.name}</h3></button><p>${data.description}</p><div class="card-bottom"><span class="price" dir="ltr">${money(dish.price)}</span><button class="add-button" data-add="${dish.id}" aria-label="${escapeHTML(t('add') + ': ' + data.name)}"><span>${t('add')}</span><span aria-hidden="true">+</span></button></div></div></article>`;
 }).join('');
 $('#menu-count').textContent = visible.length + ' ' + t('dishes');
 $('#no-results').hidden = visible.length !== 0;
 document.querySelectorAll('[data-category]').forEach(button => button.setAttribute('aria-pressed', button.dataset.category === activeCategory));
}
function addItem(id) {
 if (!dishes.some(dish => dish.id === id)) return;
 if ((cart[id] || 0) >= 20) return showToast(t('maxQuantity'));
 cart[id] = (cart[id] || 0) + 1;
 saveCart(); updateBag(); showToast(t('added'));
}
function updateBag() {
 const count = countItems();
 $('#bag-count').textContent = count; $('#mobile-count').textContent = count;
 $('#mobile-total').textContent = money(total()); $('#mobile-cart').hidden = count === 0;
 renderCart();
}
function renderCart() {
 const selected = dishes.filter(dish => cart[dish.id]);
 if (!selected.length) {
  $('#cart-items').innerHTML = `<div class="cart-empty"><span aria-hidden="true">✳</span><h3>${t('emptyTitle')}</h3><p>${t('emptyText')}</p><button class="button button-dark" data-close="cart-dialog">${t('browse')} ↗</button></div>`;
  $('#cart-footer').innerHTML = ''; return;
 }
 $('#cart-items').innerHTML = selected.map(dish => `<div class="cart-item"><img src="assets/${dish.image}" alt="" width="69" height="78"><div class="cart-item-main"><h3>${dish[lang].name}</h3><div class="item-price" dir="ltr">${money(dish.price * cart[dish.id])}</div><div class="quantity"><button data-quantity="${dish.id}" data-delta="-1" aria-label="${escapeHTML(t('decrease') + ': ' + dish[lang].name)}">−</button><span>${cart[dish.id]}</span><button data-quantity="${dish.id}" data-delta="1" aria-label="${escapeHTML(t('increase') + ': ' + dish[lang].name)}" ${cart[dish.id] >= 20 ? 'disabled' : ''}>+</button></div></div><button class="remove-item" data-remove="${dish.id}">${t('remove')}</button></div>`).join('');
 $('#cart-footer').innerHTML = `<div class="cart-total"><span>${t('subtotal')}</span><strong dir="ltr">${money(total())}</strong></div><p class="cart-subnote">${t('cartNote')}</p><button class="button button-dark checkout" id="checkout"><span>${t('checkout')}</span><span>↗</span></button><button class="clear-cart" id="clear-cart">${t('clear')}</button>`;
}
function renderDish(id) {
 const dish = dishes.find(item => item.id === id); if (!dish) return;
 $('#dish-dialog').dataset.dish = id;
 $('#dish-content').innerHTML = `<img class="dish-detail-image" src="assets/${dish.image}" alt="${escapeHTML(dish[lang].name)}"><div class="dish-detail-copy"><div class="eyebrow">${t(dish.category)}</div><h2 id="dish-title">${dish[lang].name}</h2><p>${dish[lang].description}</p><p class="dish-allergens">${t('allergens')}: ${dish[lang].allergens}</p><div class="dish-detail-bottom"><strong class="price" dir="ltr">${money(dish.price)}</strong><button class="button button-dark" data-add="${dish.id}"><span>${t('add')}</span><span>+</span></button></div></div>`;
}
function renderInfo(kind) {
 $('#info-dialog').dataset.kind = kind;
 $('#info-title').textContent = t('orderTitle');
 $('#info-text').textContent = t('orderText');
 $('#order-summary').innerHTML = dishes.filter(dish => cart[dish.id]).map(dish => '<div class="summary-row"><span>' + cart[dish.id] + ' × ' + escapeHTML(dish[lang].name) + '</span><strong dir="ltr">' + money(cart[dish.id] * dish.price) + '</strong></div>').join('') + '<div class="summary-row summary-total"><span>' + t('subtotal') + '</span><strong dir="ltr">' + money(total()) + '</strong></div>';
}
function showInfo(kind) { renderInfo(kind); openDialog('info-dialog'); }
$('#language').addEventListener('click', () => {lang = lang === 'en' ? 'ar' : 'en'; setLanguage();});
$('#categories').addEventListener('click', event => {const button = event.target.closest('[data-category]'); if (!button) return; activeCategory = button.dataset.category; renderMenu();});
$('#search').addEventListener('input', event => {searchTerm = event.target.value; renderMenu();});
$('#reset-filters').addEventListener('click', () => {activeCategory = 'all'; searchTerm = ''; $('#search').value = ''; renderMenu();});
$('#open-cart').addEventListener('click', () => openDialog('cart-dialog'));
$('#mobile-open-cart').addEventListener('click', () => openDialog('cart-dialog'));
$('#sharing-button').addEventListener('click', () => {
 ['hummus','falafel','aubergine'].forEach(id => {cart[id] = Math.min(20, (cart[id] || 0) + 1);});
 saveCart(); updateBag(); showToast(t('feastAdded')); openDialog('cart-dialog');
});
document.addEventListener('click', event => {
 const closer = event.target.closest('[data-close]'); if (closer) closeDialog(closer.dataset.close);
 const add = event.target.closest('[data-add]'); if (add) {addItem(add.dataset.add); if ($('#dish-dialog').open) closeDialog('dish-dialog');}
 const detail = event.target.closest('[data-dish]'); if (detail) {renderDish(detail.dataset.dish); openDialog('dish-dialog');}
 const quantity = event.target.closest('[data-quantity]');
 if (quantity) {
  const id = quantity.dataset.quantity; const count = (cart[id] || 0) + Number(quantity.dataset.delta);
  if (count <= 0) delete cart[id]; else cart[id] = Math.min(count,20);
  saveCart(); updateBag();
  // Restore keyboard focus after replacing the cart's contents.
  const replacement = document.querySelector(`[data-quantity="${id}"][data-delta="${quantity.dataset.delta}"]`);
  if (replacement) replacement.focus(); else $('#cart-dialog .close-button').focus();
 }
 const remove = event.target.closest('[data-remove]'); if (remove) {delete cart[remove.dataset.remove]; saveCart(); updateBag(); $('#cart-dialog .close-button').focus();}
 if (event.target.closest('#clear-cart')) {cart = {}; saveCart(); updateBag(); $('#cart-dialog .close-button').focus();}
 if (event.target.closest('#checkout')) {closeDialog('cart-dialog'); showInfo('order');}
});
document.addEventListener('change', event => {if (event.target.name === 'fulfilment') fulfilment = event.target.value;});
document.querySelectorAll('dialog').forEach(dialog => dialog.addEventListener('click', event => {
 if (event.target !== dialog) return;
 const box = dialog.getBoundingClientRect();
 if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
}));
$('#year').textContent = new Date().getFullYear();
setLanguage();
