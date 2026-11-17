export const checkedAt='2026-11-17';
export const products=[
 {id:'peroline',brand:'DÔEN',name:'Peroline Cashmere Cardigan',color:'Loire Rouge',category:'Knitwear',tone:'Burgundy',price:378,image:'peroline.png',cutout:true,url:'https://www.shopdoen.com/products/peroline-cashmere-cardigan-loire-rouge',note:'A rich red knit to anchor an autumn palette.'},
 {id:'agolde',brand:'AGOLDE',name:'90’s Pinch Waist Straight',color:'Addition',category:'Denim',tone:'Denim',price:248,image:'agolde.jpg',cutout:true,url:'https://agolde.com/products/90s-pinch-waist-high-rise-straight-addition',note:'Vintage-inspired blue denim. An easy foundation.'},
 {id:'darcy',brand:'DÔEN',name:'Darcy Cardigan',color:'Scarab',category:'Knitwear',tone:'Forest',price:358,image:'darcy.png',cutout:true,url:'https://www.shopdoen.com/products/darcy-cardigan-scarab',note:'Deep forest green, soft texture, endless layering.'},
 {id:'sofia',brand:'Reformation',name:'Sofia East West Shoulder Bag',color:'Macadamia Leather',category:'Bags',tone:'Neutral',price:348,image:'sofia.jpg',cutout:true,url:'https://www.thereformation.com/products/sofia-east-west-shoulder-bag/1320205MCA.html',note:'A light neutral to balance deeper fall colors.'},
 {id:'inez',brand:'Reformation',name:'Inez Pump',color:'Espresso Eel',category:'Shoes',tone:'Neutral',price:298,image:'inez-flat.jpg',cutout:true,url:'https://www.thereformation.com/products/inez-pump/1318902REL.html',note:'A sculptural finishing touch in espresso.'},
 {id:'mother',brand:'MOTHER',name:'The Hustler Ankle Fray',color:'Not Guilty',category:'Denim',tone:'Neutral',price:159.60,image:'mother.jpg',cutout:false,url:'https://www.motherdenim.com/products/the-hustler-ankle-fray-not-guilty',note:'An ankle-length black flare. Image shown on model.'},
 {id:'clara',brand:'Reformation',name:'Clara Cashmere Crew Cardigan',color:'Dark Pine Multi Stripe',category:'Knitwear',tone:'Forest',price:218,image:'clara.jpg',cutout:false,url:'https://www.thereformation.com/products/clara-cashmere-crew-cardigan/1312652KPM.html',note:'A striped cashmere layer. Image shown on model.'},
 {id:'paige',brand:'PAIGE',name:'Anessa 31″ Wide Leg Jean',color:'Cognac Luxe Coating',category:'Denim',tone:'Neutral',price:289,image:'paige.jpg',cutout:false,url:'https://paige.com/products/women-anessa-31in-cognac-luxe-coating',note:'A warm cognac finish. Image shown on model.'},
 {id:'zara',brand:'ZARA',name:'Cotton-Linen Embroidered Cardigan',color:'Dark burgundy',category:'Knitwear',tone:'Burgundy',price:21.54,image:'zara.jpg',cutout:true,archive:true,url:'https://www.zara.com/us/en/cotton-linen-embroidered-cardigan-p02209465.html?v1=545470545',note:'Archived inspiration: out of stock when checked. Confirm sizing and category at Zara.'},
 {id:'aritzia',brand:'Aritzia',name:'The Effortless Pant™',color:'Eversential™',category:'Tailoring',tone:'Neutral',price:null,image:null,cutout:false,url:'https://www.aritzia.com/us/en/product/the-effortless-pant%E2%84%A2/96000277.html',note:'Product photo and current US price unavailable. Open the retailer for details.'},
 {id:'gucci',brand:'GUCCI',name:'Jackie Small Shoulder Bag',color:'Sand and brown GG canvas',category:'Bags',tone:'Neutral',price:1490,image:null,cutout:false,url:'https://www.gucci.com/us/en/pr/women/handbags/shoulder-bags-for-women/gucci-jackie-small-shoulder-bag-p-867156FAFV29651',note:'Retailer access restricted during research; photo omitted. Listed price from the public product-page snapshot.'}
];
export const brands=['Reformation','Aritzia','ZARA','DÔEN','GUCCI','MOTHER','AGOLDE','PAIGE'];
export const templates=[
 {id:'weekend',title:'The weekend uniform',tag:'COFFEE, THEN ANYWHERE',desc:'A rich knit, your favorite denim, and a little polish.',theme:'paper',ids:['peroline','agolde','sofia','inez']},
 {id:'forest',title:'A walk on the green side',tag:'EARTHY & EFFORTLESS',desc:'Forest tones meet blue denim and soft ivory.',theme:'sage',ids:['darcy','agolde','sofia','inez']},
 {id:'city',title:'A little after hours',tag:'DINNER PLANS, SORTED',desc:'Burgundy, espresso and a wide-leg silhouette.',theme:'rose',ids:['peroline','paige','sofia','inez']}
];
export const byId=id=>products.find(p=>p.id===id);
export const money=n=>n==null?'See retailer':new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:n%1?2:0}).format(n);
