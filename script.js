const paisesUE = {


    "alemania": "DE",
    "austria": "AT",
    "belgica": "BE",
    "bulgaria": "BG",
    "chipre": "CY",
    "croacia": "HR",
    "dinamarca": "DK",
    "eslovaquia": "SK",
    "eslovenia": "SI",
    "españa": "ES",
    "estonia": "EE",
    "finlandia": "FI",
    "francia": "FR",
    "grecia": "GR",
    "hungria": "HU",
    "irlanda": "IE",
    "italia": "IT",
    "letonia": "LV",
    "lituania": "LT",
    "luxemburgo": "LU",
    "malta": "MT",
    "paises bajos": "NL",
    "polonia": "PL",
    "portugal": "PT",
    "republica checa": "CZ",
    "rumania": "RO",
    "suecia": "SE",
    "noruega": "NO",
    "suiza": "CH",
    "islandia": "IS",
    "liechtenstein": "LI",
    "monaco": "MC",
    "andorra": "AD",
    "san marino": "SM",
    "bosnia y herzegovina": "BA",
    "serbia": "RS",
    "montenegro": "ME",
    "kosovo": "XK",
    "macedonia del norte": "MK",
    "albania": "AL",
    "moldavia": "MD",
    "georgia": "GE",
    "armenia": "AM",
    "azerbaiyan": "AZ",
    "turquia": "TR",
    "rusia": "RU",
    "bielorrusia": "BY",
    "ucrania": "UA",
    "albania": "AL",
    "ciudad del vaticano": "VA",
    "reino unido": "GB"


};

const ciudadesPorPais = {
    "España": ["Madrid", "Barcelona", "Valencia", "Sevilla", "Granada", "Bilbao", "Malaga", "Salamanca", "Santiago de Compostela", "Toledo"],
    "Francia": ["Paris", "Marsella", "Lyon", "Niza", "Estrasburgo", "Toulouse", "Burdeos", "Lille"],
    "Alemania": ["Berlin", "Hamburgo", "Munich", "Colonia", "Frankfurt", "Dresde", "Stuttgart", "Leipzig"],
    "Austria": ["Viena", "Salzburgo", "Graz", "Innsbruck", "Linz", "Klagenfurt"],
    "Belgica": ["Bruselas", "Amberes", "Gante", "Brujas", "Lieja", "Lovaina"],
    "Bulgaria": ["Sofia", "Plovdiv", "Varna", "Burgas", "Ruse", "Veliko Tarnovo"],
    "Chipre": ["Nicosia", "Limassol", "Larnaca", "Pafos", "Ayia Napa"],
    "Croacia": ["Zagreb", "Dubrovnik", "Split", "Zadar", "Rovinj", "Pula"],
    "Dinamarca": ["Copenhague", "Aarhus", "Odense", "Aalborg", "Roskilde"],
    "Eslovaquia": ["Bratislava", "Kosice", "Presov", "Zilina", "Banska Bystrica"],
    "Eslovenia": ["Liubliana", "Maribor", "Celje", "Bled", "Piran"],
    "Estonia": ["Tallin", "Tartu", "Parnu", "Narva", "Kuressaare"],
    "Finlandia": ["Helsinki", "Tampere", "Turku", "Rovaniemi", "Lahti"],
    "Grecia": ["Atenas", "Salonica", "Patras", "Heraklion", "Corfu", "Santorini", "Miconos"],
    "Hungria": ["Budapest", "Debrecen", "Szeged", "Pecs", "Eger"],
    "Irlanda": ["Dublin", "Cork", "Galway", "Limerick", "Kilkenny"],
    "Italia": ["Roma", "Milan", "Venecia", "Florencia", "Napoles", "Bolonia", "Turin", "Verona"],
    "Letonia": ["Riga", "Daugavpils", "Liepaaja", "Jurmala", "Ventspils"],
    "Lituania": ["Vilna", "Kaunas", "Klaipeda", "Siauliai", "Panevezys"],
    "Luxemburgo": ["Luxemburgo"],
    "Malta": ["La Valeta", "Mdina", "Sliema", "St. Julian's"],
    "Paises Bajos": ["Amsterdam", "Rotterdam", "La Haya", "Utrecht", "Eindhoven"],
    "Polonia": ["Varsovia", "Cracovia", "Gdansk", "Wroclaw", "Poznan"],
    "Portugal": ["Lisboa", "Oporto", "Faro", "Braga", "Coimbra"],
    "Republica Checa": ["Praga", "Brno", "Pilsen", "Cesky Krumlov", "Olomouc"],
    "Rumania": ["Bucarest", "Iasi", "Cluj-Napoca", "Timisoara", "Sibiu"],
    "Suecia": ["Estocolmo", "Gotemburgo", "Malmo", "Uppsala", "Lund"],
    "Albania": ["Tirana", "Berat", "Gjirokaster", "Sarande", "Kruje"],
    "Andorra": ["Andorra la Vella", "Escaldes-Engordany", "Ordino"],
    "Armenia": ["Erevan", "Gyumri", "Vanadzor", "Dilijan"],
    "Azerbaiyan": ["Baku", "Ganja", "Sheki", "Quba"],
    "Bielorrusia": ["Minsk", "Grodno", "Brest", "Vitebsk"],
    "Bosnia y Herzegovina": ["Sarajevo", "Mostar", "Banja Luka", "Tuzla"],
    "Georgia": ["Tiflis", "Batumi", "Kutaisi", "Mtskheta"],
    "Islandia": ["Reikiavik", "Akureyri", "Husavik", "Vik"],
    "Kosovo": ["Pristina", "Prizren", "Peja", "Gjakova"],
    "Liechtenstein": ["Vaduz", "Schaan", "Balzers"],
    "Moldavia": ["Chisinau", "Tiraspol", "Balti"],
    "Monaco": ["Monaco"],
    "Montenegro": ["Podgorica", "Kotor", "Budva", "Herceg Novi"],
    "Noruega": ["Oslo", "Bergen", "Trondheim", "Stavanger", "Tromso"],
    "Rusia": ["Moscu", "San Petersburgo", "Kazan", "Sochi", "Ekaterimburgo"],
    "San Marino": ["San Marino"],
    "Serbia": ["Belgrado", "Novi Sad", "Nis", "Subotica"],
    "Turquia": ["Estambul", "Ankara", "Esmirna", "Capadocia", "Antalya"],
    "Ucrania": ["Kiev", "Odesa", "Leopolis", "Jarkov", "Dnipro"],
    "Ciudad del Vaticano": ["Ciudad del Vaticano"],
    "Reino Unido": ["Londres", "Edimburgo", "Birmingham", "Manchester", "Liverpool"],
    "Suiza": ["Zürich", "Ginebra", "Basel", "Lucerna", "Lausana"],
    "Macedonia del Norte": ["Skopje", "Ohrid", "Bitola"]
};

const diccionarioCiudades = {
    "Madrid": "Madrid",
    "Barcelona": "Barcelona",
    "Valencia": "Valencia",
    "Sevilla": "Seville",
    "Granada": "Granada",
    "Bilbao": "Bilbao",
    "Malaga": "Malaga",
    "Salamanca": "Salamanca",
    "Santiago de Compostela": "Santiago de Compostela",
    "Toledo": "Toledo",
    "Paris": "Paris",
    "Marsella": "Marseille",
    "Lyon": "Lyon",
    "Niza": "Nice",
    "Estrasburgo": "Strasbourg",
    "Toulouse": "Toulouse",
    "Burdeos": "Bordeaux",
    "Lille": "Lille",
    "Berlin": "Berlin",
    "Hamburgo": "Hamburg",
    "Munich": "Munich",
    "Colonia": "Cologne",
    "Frankfurt": "Frankfurt",
    "Dresde": "Dresden",
    "Stuttgart": "Stuttgart",
    "Leipzig": "Leipzig",
    "Viena": "Vienna",
    "Salzburgo": "Salzburg",
    "Graz": "Graz",
    "Innsbruck": "Innsbruck",
    "Linz": "Linz",
    "Klagenfurt": "Klagenfurt",
    "Bruselas": "Brussels",
    "Amberes": "Antwerp",
    "Gante": "Ghent",
    "Brujas": "Bruges",
    "Lieja": "Liège",
    "Lovaina": "Leuven",
    "Sofia": "Sofia",
    "Plovdiv": "Plovdiv",
    "Varna": "Varna",
    "Burgas": "Burgas",
    "Ruse": "Ruse",
    "Veliko Tarnovo": "Veliko Tarnovo",
    "Nicosia": "Nicosia",
    "Limassol": "Limassol",
    "Larnaca": "Larnaca",
    "Pafos": "Paphos",
    "Ayia Napa": "Ayia Napa",
    "Zagreb": "Zagreb",
    "Dubrovnik": "Dubrovnik",
    "Split": "Split",
    "Zadar": "Zadar",
    "Rovinj": "Rovinj",
    "Pula": "Pula",
    "Copenhague": "Copenhagen",
    "Aarhus": "Aarhus",
    "Odense": "Odense",
    "Aalborg": "Aalborg",
    "Roskilde": "Roskilde",
    "Bratislava": "Bratislava",
    "Kosice": "Košice",
    "Presov": "Prešov",
    "Zilina": "Žilina",
    "Banska Bystrica": "Banská Bystrica",
    "Liubliana": "Ljubljana",
    "Maribor": "Maribor",
    "Celje": "Celje",
    "Bled": "Bled",
    "Piran": "Piran",
    "Tallin": "Tallinn",
    "Tartu": "Tartu",
    "Parnu": "Pärnu",
    "Narva": "Narva",
    "Kuressaare": "Kuressaare",
    "Helsinki": "Helsinki",
    "Tampere": "Tampere",
    "Turku": "Turku",
    "Rovaniemi": "Rovaniemi",
    "Lahti": "Lahti",
    "Atenas": "Athens",
    "Salonica": "Thessaloniki",
    "Patras": "Patras",
    "Heraclion": "Heraklion",
    "Corfu": "Corfu",
    "Santorini": "Santorini",
    "Miconos": "Mykonos",
    "Budapest": "Budapest",
    "Debrecen": "Debrecen",
    "Szeged": "Szeged",
    "Pecs": "Pécs",
    "Eger": "Eger",
    "Dublin": "Dublin",
    "Cork": "Cork",
    "Galway": "Galway",
    "Limerick": "Limerick",
    "Kilkenny": "Kilkenny",
    "Roma": "Rome",
    "Milan": "Milan",
    "Venecia": "Venice",
    "Florencia": "Florence",
    "Napoles": "Naples",
    "Bolonia": "Bologna",
    "Turin": "Turin",
    "Verona": "Verona",
    "Riga": "Riga",
    "Daugavpils": "Daugavpils",
    "Liepaja": "Liepaja",
    "Jurmala": "Jurmala",
    "Ventspils": "Ventspils",
    "Vilna": "Vilnius",
    "Kaunas": "Kaunas",
    "Klaipeda": "Klaipėda",
    "Siauliai": "Šiauliai",
    "Panevezys": "Panevezys",
    "Luxemburgo": "Luxembourg",
    "La Valeta": "Valletta",
    "Mdina": "Mdina",
    "Sliema": "Sliema",
    "St. Julian's": "St. Julian's",
    "Amsterdam": "Amsterdam",
    "Rotterdam": "Rotterdam",
    "La Haya": "The Hague",
    "Utrecht": "Utrecht",
    "Eindhoven": "Eindhoven",
    "Varsovia": "Warsaw",
    "Cracovia": "Kraków",
    "Gdansk": "Gdansk",
    "Wroclaw": "Wroclaw",
    "Poznan": "Poznan",
    "Lisboa": "Lisbon",
    "Oporto": "Porto",
    "Faro": "Faro",
    "Braga": "Braga",
    "Coimbra": "Coimbra",
    "Praga": "Prague",
    "Brno": "Brno",
    "Pilsen": "Plzen",
    "Cesky Krumlov": "Cesky Krumlov",
    "Olomouc": "Olomouc",
    "Bucarest": "Bucharest",
    "Iasi": "Iasi",
    "Cluj-Napoca": "Cluj-Napoca",
    "Timisoara": "Timișoara",
    "Sibiu": "Sibiu",
    "Estocolmo": "Stockholm",
    "Gotemburgo": "Gothenburg",
    "Malmo": "Malmo",
    "Uppsala": "Uppsala",
    "Lund": "Lund",
    "Tirana": "Tirana",
    "Berat": "Berat",
    "Gjirokastra": "Gjirokastra",
    "Saranda": "Saranda",
    "Kruja": "Kruja",
    "Andorra la Vella": "Andorra la Vella",
    "Escaldes-Engordany": "Escaldes-Engordany",
    "Ordino": "Ordino",
    "Erevan": "Yerevan",
    "Gyumri": "Gyumri",
    "Vanadzor": "Vanadzor",
    "Dilijan": "Dilijan",
    "Baku": "Baku",
    "Ganja": "Ganja",
    "Sheki": "Sheki",
    "Quba": "Quba",
    "Minsk": "Minsk",
    "Grodno": "Grodno",
    "Brest": "Brest",
    "Vitebsk": "Vitebsk",
    "Sarajevo": "Sarajevo",
    "Mostar": "Mostar",
    "Banja Luka": "Banja Luka",
    "Tuzla": "Tuzla",
    "Tbilisi": "Tbilisi",
    "Batumi": "Batumi",
    "Tiflis":"Tiflis",
    "Kutaisi": "Kutaisi",
    "Mtskheta": "Mtskheta",
    "Reykjavik": "Reykjavik",
    "Akureyri": "Akureyri",
    "Husavik": "Husavik",
    "Vik": "Vik",
    "Pristina": "Pristina",
    "Prizren": "Prizren",
    "Peja": "Peja",
    "Gjakova": "Gjakova",
    "Vaduz": "Vaduz",
    "Schaan": "Schaan",
    "Balzers": "Balzers",
    "Chisinau": "Chisinau",
    "Tiraspol": "Tiraspol",
    "Balti": "Balti",
    "Zurich": "Zürich",
    "Ginebra": "Geneva",
    "Basilea": "Basel",
    "Berna": "Bern",
    "Lucerna": "Lucerne",
    "Lausana": "Lausanne",
    "St. Moritz": "St. Moritz",
    "Wien": "Vienna",
    "Zug": "Zug",
    "Zürich": "Zurich",
    "Ginebra": "Geneva",
    "Basel": "Basel",
    "Lucerna": "Lucerne",
    "Lausana": "Lausanne",
    "Skopje": "Skopje",
    "Ohrid": "Ohrid",
    "Bitola": "Bitola"
};

const requisitosMedicos = [
    {
        "country": "Albania",
        "visa_requirement": "Los ciudadanos de la UE pueden ingresar sin visado. Para otros, se requiere visado.",
        "vaccine_requirement": "No se requieren vacunas obligatorias.",
        "health_advice": "Se recomienda llevar seguro de viaje.",
        "foreign_ministry_url": "https://www.mfa.gov.al",
        "last_updated": "2024-12-28"
    },
    {
        "country": "Alemania",
        "visa_requirement": "Los ciudadanos de la UE, Espacio Schengen y algunos países pueden ingresar sin visado. Para otros, se requiere visado Schengen.",
        "vaccine_requirement": "No se requieren vacunas obligatorias. Se recomiendan las vacunas de tetanos-difteria, hepatitis A y B si se viaja a zonas rurales.",
        "health_advice": "Se recomienda llevar tarjeta sanitaria europea (TSE).",
        "foreign_ministry_url": "https://www.auswaertiges-amt.de",
        "last_updated": "2024-12-28"
    },
    {
        "country": "Andorra",
        "visa_requirement": "No se requiere visado para estancias de hasta 90 días para ciudadanos de la UE.",
        "vaccine_requirement": "No se requieren vacunas obligatorias.",
        "health_advice": "Seguro de viaje recomendado.",
        "foreign_ministry_url": "https://www.govern.ad",
        "last_updated": "2024-12-28"
    },
    {
        "country": "Armenia",
        "visa_requirement": "Visado requerido para la mayoría de los países. Se puede obtener visado a la llegada o mediante el sistema de e-visa.",
        "vaccine_requirement": "No se requieren vacunas obligatorias.",
        "health_advice": "Seguro de viaje recomendado.",
        "foreign_ministry_url": "https://www.mfa.am",
        "last_updated": "2024-12-28"
    },
    {
        "country": "Austria",
        "visa_requirement": "Los ciudadanos de la UE, Espacio Schengen y algunos países pueden ingresar sin visado. Para otros, se requiere visado Schengen.",
        "vaccine_requirement": "No se requieren vacunas obligatorias.",
        "health_advice": "Se recomienda llevar tarjeta sanitaria europea (TSE).",
        "foreign_ministry_url": "https://www.bmeia.gv.at",
        "last_updated": "2024-12-28"
    },
    {
        "country": "Azerbaiyan",
        "visa_requirement": "Visado requerido para la mayoría de los países. Se puede obtener visado a la llegada o mediante el sistema de e-visa.",
        "vaccine_requirement": "No se requieren vacunas obligatorias.",
        "health_advice": "Se recomienda seguro de viaje.",
        "foreign_ministry_url": "https://www.mfa.gov.az",
        "last_updated": "2024-12-28"
    },
    {
        "country": "Bielorrusia",
        "visa_requirement": "Visado requerido para todos los países, excepto algunos países de la CEI.",
        "vaccine_requirement": "No se requieren vacunas obligatorias.",
        "health_advice": "Seguro de viaje recomendado.",
        "foreign_ministry_url": "http://mfa.gov.by",
        "last_updated": "2024-12-28"
    },
    {
        "country": "Belgica",
        "visa_requirement": "Los ciudadanos de la UE, Espacio Schengen y algunos países pueden ingresar sin visado. Para otros, se requiere visado Schengen.",
        "vaccine_requirement": "No se requieren vacunas obligatorias.",
        "health_advice": "Se recomienda llevar tarjeta sanitaria europea (TSE).",
        "foreign_ministry_url": "https://diplomatie.belgium.be",
        "last_updated": "2024-12-28"
    },
    {
        "country": "Bosnia y Herzegovina",
        "visa_requirement": "Visado requerido para algunos países. Los ciudadanos de la UE pueden ingresar sin visado por un máximo de 90 días.",
        "vaccine_requirement": "No se requieren vacunas obligatorias.",
        "health_advice": "Seguro de viaje recomendado.",
        "foreign_ministry_url": "https://www.mvp.gov.ba",
        "last_updated": "2024-12-28"
    },
    {
        "country": "Bulgaria",
        "visa_requirement": "Los ciudadanos de la UE, Espacio Schengen y algunos países pueden ingresar sin visado. Para otros, se requiere visado Schengen.",
        "vaccine_requirement": "No se requieren vacunas obligatorias.",
        "health_advice": "Se recomienda llevar tarjeta sanitaria europea (TSE).",
        "foreign_ministry_url": "https://www.mfa.bg",
        "last_updated": "2024-12-28"
    },
    {
        "country": "Croacia",
        "visa_requirement": "Los ciudadanos de la UE y algunos países pueden ingresar sin visado. Para otros, se requiere visado Schengen.",
        "vaccine_requirement": "No se requieren vacunas obligatorias.",
        "health_advice": "Se recomienda llevar tarjeta sanitaria europea (TSE).",
        "foreign_ministry_url": "https://mvep.gov.hr",
        "last_updated": "2024-12-28"
    },
    {
        "country": "Chipre",
        "visa_requirement": "Los ciudadanos de la UE, Espacio Schengen y algunos países pueden ingresar sin visado. Para otros, se requiere visado Schengen.",
        "vaccine_requirement": "No se requieren vacunas obligatorias.",
        "health_advice": "Se recomienda llevar tarjeta sanitaria europea (TSE).",
        "foreign_ministry_url": "https://www.mfa.gov.cy",
        "last_updated": "2024-12-28"
    },
    {
        "country": "Ciudad del Vaticano",
        "visa_requirement": "No se requiere visado, ya que es un enclave de la Ciudad de Roma, Italia.",
        "vaccine_requirement": "No se requieren vacunas obligatorias.",
        "health_advice": "No se requieren precauciones especiales.",
        "foreign_ministry_url": "https://www.vatican.va",
        "last_updated": "2024-12-28"
    },
    {
        "country": "Dinamarca",
        "visa_requirement": "Los ciudadanos de la UE, Espacio Schengen y algunos países pueden ingresar sin visado. Para otros, se requiere visado Schengen.",
        "vaccine_requirement": "No se requieren vacunas obligatorias.",
        "health_advice": "Se recomienda llevar tarjeta sanitaria europea (TSE).",
        "foreign_ministry_url": "https://www.um.dk",
        "last_updated": "2024-12-28"
    },
    {
        "country": "Eslovaquia",
        "visa_requirement": "Los ciudadanos de la UE, Espacio Schengen y algunos países pueden ingresar sin visado. Para otros, se requiere visado Schengen.",
        "vaccine_requirement": "No se requieren vacunas obligatorias.",
        "health_advice": "Se recomienda llevar tarjeta sanitaria europea (TSE).",
        "foreign_ministry_url": "https://www.mzv.sk",
        "last_updated": "2024-12-28"
    },
    {
        "country": "Eslovenia",
        "visa_requirement": "Los ciudadanos de la UE, Espacio Schengen y algunos países pueden ingresar sin visado. Para otros, se requiere visado Schengen.",
        "vaccine_requirement": "No se requieren vacunas obligatorias.",
        "health_advice": "Se recomienda llevar tarjeta sanitaria europea (TSE).",
        "foreign_ministry_url": "https://www.mzz.gov.si",
        "last_updated": "2024-12-28"
    },
    {
        "country": "España",
        "visa_requirement": "Los ciudadanos de la UE, Espacio Schengen y algunos países pueden ingresar sin visado. Para otros, se requiere visado Schengen.",
        "vaccine_requirement": "No se requieren vacunas obligatorias. Se recomiendan las de tetanos-difteria, hepatitis A y B si se viaja a ciertas regiones.",
        "health_advice": "Se recomienda llevar tarjeta sanitaria europea (TSE) y seguro de viaje adicional.",
        "foreign_ministry_url": "https://www.exteriores.gob.es",
        "last_updated": "2024-12-28"
    },
    {
        "country": "Estonia",
        "visa_requirement": "Los ciudadanos de la UE, Espacio Schengen y algunos países pueden ingresar sin visado. Para otros, se requiere visado Schengen.",
        "vaccine_requirement": "No se requieren vacunas obligatorias.",
        "health_advice": "Se recomienda llevar tarjeta sanitaria europea (TSE).",
        "foreign_ministry_url": "https://vm.ee",
        "last_updated": "2024-12-28"
    },
    {
        "country": "Finlandia",
        "visa_requirement": "Los ciudadanos de la UE, Espacio Schengen y algunos países pueden ingresar sin visado. Para otros, se requiere visado Schengen.",
        "vaccine_requirement": "No se requieren vacunas obligatorias.",
        "health_advice": "Se recomienda llevar tarjeta sanitaria europea (TSE).",
        "foreign_ministry_url": "https://www.formin.fi",
        "last_updated": "2024-12-28"
    },
    {
        "country": "Francia",
        "visa_requirement": "Los ciudadanos de la UE, Espacio Schengen y algunos países pueden ingresar sin visado. Para otros, se requiere visado Schengen.",
        "vaccine_requirement": "No se requieren vacunas obligatorias. Se recomiendan las vacunas de tetanos-difteria, hepatitis A y B si se viaja a zonas rurales.",
        "health_advice": "Se recomienda llevar tarjeta sanitaria europea (TSE).",
        "foreign_ministry_url": "https://www.diplomatie.gouv.fr",
        "last_updated": "2024-12-28"
    },
    {
        "country": "Georgia",
        "visa_requirement": "Visado requerido para algunos países, pero ciudadanos de varios países pueden ingresar sin visado por hasta un año.",
        "vaccine_requirement": "No se requieren vacunas obligatorias.",
        "health_advice": "Seguro de viaje recomendado.",
        "foreign_ministry_url": "https://www.mfa.gov.ge",
        "last_updated": "2024-12-28"
    },
    {
        "country": "Grecia",
        "visa_requirement": "Los ciudadanos de la UE, Espacio Schengen y algunos países pueden ingresar sin visado. Para otros, se requiere visado Schengen.",
        "vaccine_requirement": "No se requieren vacunas obligatorias.",
        "health_advice": "Se recomienda llevar tarjeta sanitaria europea (TSE).",
        "foreign_ministry_url": "https://www.mfa.gr",
        "last_updated": "2024-12-28"
    },
    {
        "country": "Hungria",
        "visa_requirement": "Los ciudadanos de la UE, Espacio Schengen y algunos países pueden ingresar sin visado. Para otros, se requiere visado Schengen.",
        "vaccine_requirement": "No se requieren vacunas obligatorias.",
        "health_advice": "Se recomienda llevar tarjeta sanitaria europea (TSE).",
        "foreign_ministry_url": "https://www.mfa.gov.hu",
        "last_updated": "2024-12-28"
    },
    {
        "country": "Irlanda",
        "visa_requirement": "Los ciudadanos de la UE pueden ingresar sin visado. Los ciudadanos de otros países necesitan visado, excepto los de algunos países como Estados Unidos y Canadá.",
        "vaccine_requirement": "No se requieren vacunas obligatorias.",
        "health_advice": "Se recomienda tener seguro de viaje.",
        "foreign_ministry_url": "https://www.dfa.ie",
        "last_updated": "2024-12-28"
    },
    {
        "country": "Islandia",
        "visa_requirement": "Los ciudadanos de la UE, Espacio Schengen y algunos países pueden ingresar sin visado. Para otros, se requiere visado Schengen.",
        "vaccine_requirement": "No se requieren vacunas obligatorias.",
        "health_advice": "Se recomienda llevar tarjeta sanitaria europea (TSE).",
        "foreign_ministry_url": "https://www.government.is",
        "last_updated": "2024-12-28"
    },
    {
        "country": "Italia",
        "visa_requirement": "Los ciudadanos de la UE, Espacio Schengen y algunos países pueden ingresar sin visado. Para otros, se requiere visado Schengen.",
        "vaccine_requirement": "No se requieren vacunas obligatorias.",
        "health_advice": "Se recomienda llevar tarjeta sanitaria europea (TSE).",
        "foreign_ministry_url": "https://www.esteri.it",
        "last_updated": "2024-12-28"
    },
    {
        "country": "Kosovo",
        "visa_requirement": "Visado requerido para la mayoría de los países. Algunos países pueden ingresar sin visado por hasta 90 días.",
        "vaccine_requirement": "No se requieren vacunas obligatorias.",
        "health_advice": "Seguro de viaje recomendado.",
        "foreign_ministry_url": "https://www.mfa-ks.net",
        "last_updated": "2024-12-28"
    },
    {
        "country": "Letonia",
        "visa_requirement": "Los ciudadanos de la UE, Espacio Schengen y algunos países pueden ingresar sin visado. Para otros, se requiere visado Schengen.",
        "vaccine_requirement": "No se requieren vacunas obligatorias.",
        "health_advice": "Se recomienda llevar tarjeta sanitaria europea (TSE).",
        "foreign_ministry_url": "https://www.mfa.gov.lv",
        "last_updated": "2024-12-28"
    },
    {
        "country": "Liechtenstein",
        "visa_requirement": "Los ciudadanos de la UE y del Espacio Schengen pueden ingresar sin visado. Para otros, se requiere visado Schengen.",
        "vaccine_requirement": "No se requieren vacunas obligatorias.",
        "health_advice": "Seguro de viaje recomendado.",
        "foreign_ministry_url": "https://www.regierung.li",
        "last_updated": "2024-12-28"
    },
    {
        "country": "Lituania",
        "visa_requirement": "Los ciudadanos de la UE, Espacio Schengen y algunos países pueden ingresar sin visado. Para otros, se requiere visado Schengen.",
        "vaccine_requirement": "No se requieren vacunas obligatorias.",
        "health_advice": "Se recomienda llevar tarjeta sanitaria europea (TSE).",
        "foreign_ministry_url": "https://www.urm.lt",
        "last_updated": "2024-12-28"
    },
    {
        "country": "Luxemburgo",
        "visa_requirement": "Los ciudadanos de la UE, Espacio Schengen y algunos países pueden ingresar sin visado. Para otros, se requiere visado Schengen.",
        "vaccine_requirement": "No se requieren vacunas obligatorias.",
        "health_advice": "Se recomienda llevar tarjeta sanitaria europea (TSE).",
        "foreign_ministry_url": "https://www.mfa.gouvernement.lu",
        "last_updated": "2024-12-28"
    },
    {
        "country": "Malta",
        "visa_requirement": "Los ciudadanos de la UE, Espacio Schengen y algunos países pueden ingresar sin visado. Para otros, se requiere visado Schengen.",
        "vaccine_requirement": "No se requieren vacunas obligatorias.",
        "health_advice": "Se recomienda llevar tarjeta sanitaria europea (TSE).",
        "foreign_ministry_url": "https://www.doi.gov.mt",
        "last_updated": "2024-12-28"
    },
    {
        "country": "Moldavia",
        "visa_requirement": "Visado requerido para algunos países. Los ciudadanos de la UE pueden ingresar sin visado por hasta 90 días.",
        "vaccine_requirement": "No se requieren vacunas obligatorias.",
        "health_advice": "Seguro de viaje recomendado.",
        "foreign_ministry_url": "https://www.mfa.gov.md",
        "last_updated": "2024-12-28"
    },
    {
        "country": "Monaco",
        "visa_requirement": "No se requiere visado, ya que es un enclave de Francia.",
        "vaccine_requirement": "No se requieren vacunas obligatorias.",
        "health_advice": "No se requieren precauciones especiales.",
        "foreign_ministry_url": "https://www.gouv.mc",
        "last_updated": "2024-12-28"
    },
    {
        "country": "Montenegro",
        "visa_requirement": "Visado requerido para algunos países. Los ciudadanos de la UE pueden ingresar sin visado por hasta 90 días.",
        "vaccine_requirement": "No se requieren vacunas obligatorias.",
        "health_advice": "Seguro de viaje recomendado.",
        "foreign_ministry_url": "https://www.mfa.gov.me",
        "last_updated": "2024-12-28"
    },
    {
        "country": "Noruega",
        "visa_requirement": "Los ciudadanos de la UE, Espacio Schengen y algunos países pueden ingresar sin visado. Para otros, se requiere visado Schengen.",
        "vaccine_requirement": "No se requieren vacunas obligatorias.",
        "health_advice": "Se recomienda llevar tarjeta sanitaria europea (TSE).",
        "foreign_ministry_url": "https://www.regjeringen.no",
        "last_updated": "2024-12-28"
    },
    {
        "country": "Polonia",
        "visa_requirement": "Los ciudadanos de la UE, Espacio Schengen y algunos países pueden ingresar sin visado. Para otros, se requiere visado Schengen.",
        "vaccine_requirement": "No se requieren vacunas obligatorias.",
        "health_advice": "Se recomienda llevar tarjeta sanitaria europea (TSE).",
        "foreign_ministry_url": "https://www.msz.gov.pl",
        "last_updated": "2024-12-28"
    },
    {
        "country": "Portugal",
        "visa_requirement": "Los ciudadanos de la UE, Espacio Schengen y algunos países pueden ingresar sin visado. Para otros, se requiere visado Schengen.",
        "vaccine_requirement": "No se requieren vacunas obligatorias.",
        "health_advice": "Se recomienda llevar tarjeta sanitaria europea (TSE).",
        "foreign_ministry_url": "https://www.mne.gov.pt",
        "last_updated": "2024-12-28"
    },
    {
        "country": "Rumania",
        "visa_requirement": "Los ciudadanos de la UE, Espacio Schengen y algunos países pueden ingresar sin visado. Para otros, se requiere visado Schengen.",
        "vaccine_requirement": "No se requieren vacunas obligatorias.",
        "health_advice": "Se recomienda llevar tarjeta sanitaria europea (TSE).",
        "foreign_ministry_url": "https://www.mae.ro",
        "last_updated": "2024-12-28"
    },
    {
        "country": "Rusia",
        "visa_requirement": "Visado obligatorio para todos los países. Se requiere invitación o visado de tránsito.",
        "vaccine_requirement": "Vacunas recomendadas: hepatitis A, hepatitis B, tétanos-difteria.",
        "health_advice": "Seguro de viaje recomendado.",
        "foreign_ministry_url": "https://www.mid.ru",
        "last_updated": "2024-12-28"
    },
    {
        "country": "San Marino",
        "visa_requirement": "No se requiere visado, ya que es un enclave de Italia.",
        "vaccine_requirement": "No se requieren vacunas obligatorias.",
        "health_advice": "No se requieren precauciones especiales.",
        "foreign_ministry_url": "https://www.esteri.it",
        "last_updated": "2024-12-28"
    },
    {
        "country": "Serbia",
        "visa_requirement": "Visado obligatorio para algunos países. Los ciudadanos de la UE pueden ingresar sin visado por hasta 90 días.",
        "vaccine_requirement": "No se requieren vacunas obligatorias.",
        "health_advice": "Seguro de viaje recomendado.",
        "foreign_ministry_url": "https://www.mfa.rs",
        "last_updated": "2024-12-28"
    },
    {
        "country": "Suecia",
        "visa_requirement": "Los ciudadanos de la UE, Espacio Schengen y algunos países pueden ingresar sin visado. Para otros, se requiere visado Schengen.",
        "vaccine_requirement": "No se requieren vacunas obligatorias.",
        "health_advice": "Se recomienda llevar tarjeta sanitaria europea (TSE).",
        "foreign_ministry_url": "https://www.government.se",
        "last_updated": "2024-12-28"
    },
    {
        "country": "Suiza",
        "visa_requirement": "Los ciudadanos de la UE y del Espacio Schengen pueden ingresar sin visado. Para otros, se requiere visado Schengen.",
        "vaccine_requirement": "No se requieren vacunas obligatorias.",
        "health_advice": "Se recomienda llevar tarjeta sanitaria europea (TSE).",
        "foreign_ministry_url": "https://www.eda.admin.ch",
        "last_updated": "2024-12-28"
    },
    {
        "country": "Turquía",
        "visa_requirement": "Visado obligatorio para algunos países. Algunos países pueden ingresar sin visado por hasta 90 días.",
        "vaccine_requirement": "Vacunas recomendadas: hepatitis A, hepatitis B, tétanos-difteria.",
        "health_advice": "Seguro de viaje recomendado.",
        "foreign_ministry_url": "https://www.mfa.gov.tr",
        "last_updated": "2024-12-28"
    },
    {
        "country": "Ucrania",
        "visa_requirement": "Visado obligatorio para algunos países. Los ciudadanos de la UE pueden ingresar sin visado por hasta 90 días.",
        "vaccine_requirement": "Vacunas recomendadas: hepatitis A, tétanos-difteria.",
        "health_advice": "Seguro de viaje recomendado.",
        "foreign_ministry_url": "https://mfa.gov.ua",
        "last_updated": "2024-12-28"
    },
    {
        "country": "Vaticano",
        "visa_requirement": "No se requiere visado, ya que es un enclave de Italia.",
        "vaccine_requirement": "No se requieren vacunas obligatorias.",
        "health_advice": "No se requieren precauciones especiales.",
        "foreign_ministry_url": "https://www.vatican.va",
        "last_updated": "2024-12-28"
    },
    {
        "country": "Reino Unido",
        "visa_requirement": "Visado requerido para algunos países. Los ciudadanos de la UE necesitan visado para estancias prolongadas.",
        "vaccine_requirement": "No se requieren vacunas obligatorias.",
        "health_advice": "Seguro de viaje recomendado.",
        "foreign_ministry_url": "https://www.gov.uk",
        "last_updated": "2024-12-28"
      },
      {
        "country": "Países Bajos",
        "visa_requirement": "Los ciudadanos de la UE pueden ingresar sin visado. Para otros, se requiere visado.",
        "vaccine_requirement": "No se requieren vacunas obligatorias.",
        "health_advice": "Se recomienda llevar seguro de viaje.",
        "foreign_ministry_url": "https://www.government.nl/ministries/ministry-of-foreign-affairs",
        "last_updated": "2024-12-28"
    },
    {
        "country": "Republica Checa",
        "visa_requirement": "Los ciudadanos de la UE pueden ingresar sin visado. Para otros, se requiere visado.",
        "vaccine_requirement": "No se requieren vacunas obligatorias.",
        "health_advice": "Se recomienda llevar seguro de viaje.",
        "foreign_ministry_url": "https://www.mzv.cz/jnp/es/index.html",
        "last_updated": "2024-12-28"
    },
    {
        "country": "Macedonia del Norte",
        "visa_requirement": "Los ciudadanos de la UE pueden ingresar sin visado por un máximo de 90 días. Otros países pueden requerir visado.",
        "vaccine_requirement": "No se requieren vacunas obligatorias.",
        "health_advice": "Se recomienda tener un seguro de viaje adecuado.",
        "foreign_ministry_url": "https://www.mfa.gov.mk",
        "last_updated": "2024-12-28"
    },
];



let categoriaSeleccionada = 'all';
let actividadesPorCategoria = {};


// Aquí puedes usar paisesUE, ciudadesPorPais, etc. sin problemas
async function buscarRequisitos() {
    const origen = document.getElementById('origen').value;
    console.log(origen);

    const destino = document.getElementById('destino').value;
    console.log(destino);
    function obtenerCodigoPais(nombrePais) {
        const nombreNormalizado = nombrePais.toLowerCase();
        //console.log(nombreNormalizado)
        return paisesUE[nombreNormalizado];
    }
    // Obtener el código ISO Alpha-2 del país de origen
    const codigoOrigen = obtenerCodigoPais(origen);
    //console.log(codigoOrigen)
    // Verificar si se encontró el código
    if (!codigoOrigen) {
        alert('País de origen no encontrado en la base de datos.');
        return;
    }
    // Obtener el código ISO Alpha-2 del país de destino
    const codigoDestino = obtenerCodigoPais(destino);
    //console.log(codigoDestino)
    // Verificar si se encontró el código
    if (!codigoDestino) {
        alert('País de destino no encontrado en la base de datos.');
        return;
    }

    // Construir la cadena con los códigos para la API

    //visa requirement

    const url = 'https://visa-requirement.p.rapidapi.com/';
    const options = {
        method: 'POST',
        headers: {
            'x-rapidapi-key': '3206dfcb3cmshd6d714776f934eap111428jsn1641db5b4639',
            'x-rapidapi-host': 'visa-requirement.p.rapidapi.com',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            passport: codigoOrigen,
            destination: codigoDestino
        })
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        console.log(result);
        const monedaElement = document.getElementById('moneda');

        monedaElement.textContent = result.currency;

        const stayElement = document.getElementById('stay_of');

        stayElement.textContent = result.stay_of;
        if (stayElement.textContent == '') {
            stayElement.textContent = 'Ilimitado';
        }else{
            const stayElementURL = crearURL(result.stay_of);
            stayElement.textContent = await Traductor(stayElementURL);
        };

        const passValidElement = document.getElementById('pass_valid');
        const urlcustom = crearURL(result.pass_valid);
        passValidElement.textContent = await Traductor(urlcustom);

        console.log(passValidElement.textContent);
        const visaElement = document.getElementById('visa');

        const visaElementURL = crearURL(result.visa);
        visaElement.textContent = await Traductor(visaElementURL);
    } catch (error) {
        console.error(error);
        // Mostrar un mensaje de error al usuario
        const resultadosDiv = document.getElementById('resultados');
        resultadosDiv.textContent = 'Ocurrió un error al obtener los datos. Por favor, intenta más tarde.';
    }
    //requisistos de salubridad
    mostrarRequisitosMedicos(destino);


    //trip advisor
    // Obtener el botón de búsqueda y el elemento select de la ciudad
    const selectCategoria = document.getElementById('filtroCategoria');
    categoriaSeleccionada = selectCategoria.value;
    const botonBuscar = document.getElementById('botonBuscar');
    const ciudades = ciudadesPorPais[destino];
    const selectCiudad = document.getElementById('ciudad');
    console.log('selectciudad: ', selectCiudad);
    ciudades.forEach(ciudad => {
        const option = document.createElement('option');
        option.value = ciudad;
        option.textContent = ciudad;
        selectCiudad.appendChild(option);
    });

    botonBuscar.addEventListener('click', () => {
        const ciudadSeleccionada = selectCiudad.value;

        console.log('En español: ', ciudadSeleccionada);
        //consultar diccionario
        const ciudadEnIngles = diccionarioCiudades[ciudadSeleccionada];
        console.log('En Ingles: ', ciudadEnIngles);
        buscarActividades(ciudadEnIngles);

    });


}
//-----------------------------------
function mostrarRequisitosMedicos(pais) {
    // Encuentra el objeto del país en la base de datos
    const paisInfo = requisitosMedicos.find(p => p.country === pais);

    if (paisInfo) {
        // Actualiza los elementos HTML con la información del país
        document.getElementById('vacunas').textContent = paisInfo.vaccine_requirement;
        document.getElementById('consejos').textContent = paisInfo.health_advice;
        const enlaceExtranjeria = paisInfo.foreign_ministry_url;

        // Asigna el enlace al botón
        const botonReqMedicos = document.getElementById('botonReqMedicos');
        botonReqMedicos.href = enlaceExtranjeria;
        botonReqMedicos.target = '_blank'; // Abre el enlace en una nueva pestaña
    } else {
        // Mostrar un mensaje de error si no se encuentra el país
        alert('No se encontraron requisitos médicos para el país seleccionado.');
    }
}
//-------------------------------------------------------------------------------------------
async function buscarActividades(ciudad) {
    const url2 = `https://real-time-tripadvisor-scraper-api.p.rapidapi.com/tripadvisor_tours_search_v2?location=${ciudad}`;
    console.log(url2);

    const options2 = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '3206dfcb3cmshd6d714776f934eap111428jsn1641db5b4639',
            'x-rapidapi-host': 'real-time-tripadvisor-scraper-api.p.rapidapi.com'
        }
    };



    try {
        const response2 = await fetch(url2, options2);
        const result2 = await response2.json();

        if (result2.data && Array.isArray(result2.data)) {
            console.log('es Array');
            console.log(result2);
            // Crear un mapa de actividades por categoría
            actividadesPorCategoria = {};
            result2.data.slice(0,20).forEach(actividad => {
                const categoria = agruparCategoria(actividad.category);
                console.log(categoria);
                if (!actividadesPorCategoria[categoria]) {
                    actividadesPorCategoria[categoria] = [];
                }
                actividadesPorCategoria[categoria].push(actividad);
            });

            /// generar categorías disponibles
            const categoriaMostrada = document.getElementById('filtroCategoria');

            // Iterar sobre las claves del objeto (que son las categorías)
            for (const categoria in actividadesPorCategoria) {
                const option = document.createElement('option');
                option.value = categoria;
                option.textContent = categoria;
                categoriaMostrada.appendChild(option);
            }





        } else {
            // Manejar el caso en el que no se encontraron resultados
            recomendacionesDiv.textContent = "No se encontraron actividades para esta ciudad y categoría.";
        }
    } catch (error) {
        // Manejar errores de la API
        console.error('Error al obtener las actividades:', error);
        recomendacionesDiv.textContent = "Ocurrió un error al buscar actividades. Por favor, intenta más tarde.";
    }

    // Obtener la categoría seleccionada
    const categoriaSeleccionada = document.getElementById('filtroCategoria').value;

    // Mostrar todas las actividades si no se ha seleccionado una categoría
    if (categoriaSeleccionada === 'all') {
        // Mostrar todas las actividades
        MostrarActividades('all'); // Llama a MostrarActividades con 'all' para mostrar todas
    }

    const botonFiltrar = document.getElementById('botonFiltrar');
    botonFiltrar.addEventListener('click', () => {
        // Obtener la categoría seleccionada
        const categoriaSeleccionada = document.getElementById('filtroCategoria').value;
        MostrarActividades(categoriaSeleccionada);
    });




}

let cacheActividadesFiltradas = {};

async function MostrarActividades(CategoríaEscogida) {

    // Obtener la sección donde se mostrarán las recomendaciones
    const recomendacionesDiv = document.getElementById('recomendaciones');
    const recomendacionesFlexbox = document.createElement('div');
    recomendacionesFlexbox.style.display = 'flex';
    recomendacionesFlexbox.style.flexWrap = 'wrap';
    recomendacionesFlexbox.style.justifyContent = 'space-around';
    // Limpiar el contenedor de recomendaciones antes de agregar nuevos elementos
    recomendacionesDiv.innerHTML = '';
    let actividadesFiltradas={};
    if (!cacheActividadesFiltradas[CategoríaEscogida]) {
        // Obtener las actividades filtradas según la categoría seleccionada
    
    if (CategoríaEscogida === 'all') {
        actividadesFiltradas = Object.values(actividadesPorCategoria).flat();
    } else {
        actividadesFiltradas = actividadesPorCategoria[CategoríaEscogida] || [];
    }
        cacheActividadesFiltradas[CategoríaEscogida] = actividadesFiltradas;
    }else {
        // Si están en caché, usar directamente
        actividadesFiltradas = cacheActividadesFiltradas[CategoríaEscogida];
    }
    
    // Crear los elementos de la lista
    actividadesFiltradas.forEach(async actividad => {
        const li = document.createElement('li');
        li.classList.add('recomendacion');
        //obtener titulo traducido
        
        const titleurl = crearURL(actividad.title);
        
        const tituloactividad = await Traductor(titleurl);
        console.log('titulo es', tituloactividad);
        // Obtener la descripcion truncada
        const descripcionTruncada = truncarTexto(actividad.description, 50);
        const descripcionurl = crearURL(descripcionTruncada);
        const descripcionEsp = await Traductor(descripcionurl);
        // Obtener la categoría agrupada
        const categoriaAgrupada = agruparCategoria(actividad.category);
        const categoria = agruparCategoria(actividad.category);
        console.log(categoria);
        if (!actividadesPorCategoria[categoria]) {
            actividadesPorCategoria[categoria] = [];
        }
        actividadesPorCategoria[categoria].push(actividad);
        li.style.flex = '1 0 300px';  // Set flex basis (minimum width) to 300px
        li.innerHTML = `
            <div class="w3-display-container w3-margin-bottom">
              <img src="${actividad.image}" alt="${actividad.description}" style="width:100%">
              <div class="w3-container w3-white">
                <h3>${tituloactividad}</h3>
                <h6 class="w3-opacity">${descripcionEsp}</h6>
                <p>${categoriaAgrupada}</p>
                <!--<p>${actividad.category}</p>-->
                <p>${actividad.duration}</p>
                <button button class="btn btn-success w3-button w3-block w3-black w3-margin-bottom" onclick=" window.open('${actividad.url}','_blank')">Más Información</button>
                
                </div>
            </div>
          `;
        recomendacionesFlexbox.appendChild(li);
    });


    // Agregar el contenedor Flexbox al div de recomendaciones
    recomendacionesDiv.appendChild(recomendacionesFlexbox);
}
//------------------------------------------------------------------------------------------
function crearURL(frase, apiUrl = 'https://free-google-translator.p.rapidapi.com/external-api/free-google-translator', from = 'en', to = 'es') {
    // Codificamos la frase para que sea segura para usar en una URL
    const fraseCodificada = encodeURIComponent(frase);

    // Construimos la URL completa
    const urlCompleta = `${apiUrl}?from=${from}&to=${to}&query=${fraseCodificada}`;

    return urlCompleta;
}

async function Traductor(URL) {

    let traduccion = '';
    const url = URL;
    const options = {
        method: 'POST',
        headers: {
            'x-rapidapi-key': '3206dfcb3cmshd6d714776f934eap111428jsn1641db5b4639',
            'x-rapidapi-host': 'free-google-translator.p.rapidapi.com',
            'Content-Type': 'application/json'
        },
        body: {
            translate: 'rapidapi'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        traduccion = result.translation;
    } catch (error) {
        console.error(error);
    }
    return traduccion;
}

function truncarTexto(texto, maxPalabras) {
    const palabras = texto.split(' ');
    if (palabras.length > maxPalabras) {
        return palabras.slice(0, maxPalabras).join(' ') + '...';
    } else {
        return texto;
    }
}

function agruparCategoria(categoria) {
    const categoriasNaturaleza = [
        "Parks", "zoos", "Sailing", "Eco Tours", "Pack Animal Tours", "On the Water", "Valleys",
        "Plantation Tours", "Mountains", "Lookouts", "Scenic Walking Areas", "Geologic Formations",
        "Observation Decks & Towers", "Nature & Wildlife Areas", "Piers & Boardwalks", "Canyons",
        "Hiking Trails", "Sightseeing Cruises", "Swimming", "4WD Tours", "Extreme Sports", "Aquariums",
        "Ski & Snowboard Areas", "Gardens", "National Parks", "Beaches"
    ];

    const categoriasHistoria = [
        "Historic Sites", "Castles", "Monuments and Memorials", "Ancient Ruins", "Historical Tours",
        "Churches & Cathedral", "Architectural Buildings", "Points of Interest & Landmarks", "Religious Sites",
        "Historic Walking Areas", "Bridges", "Government Buildings", "Monuments & Statues", "Museums",
        "Military Museums"
    ];

    const categoriasArteCultura = [
        "Art Museums", "Cultural Tours", "Theme Park Tickets and Tours", "Churches & Cathedral",
        "Architectural Buildings", "Points of Interest & Landmarks", "Religious Sites", "Speciality Museums",
        "Bridges", "Government Buildings", "Monuments & Statues", "Theater Shows", "Flamenco Performance",
        "Museums", "Science Museums", "Theaters", "Concerts", "Symphonies", "Operas", "Military Museums",
        "Film festival", "Dinner Theaters", "Cabaretts"
    ];

    const categoriasGastronomia = [
        "Culinary Tours", "Wine Tastings", "Food & Drink", "Dining Experiences", "Bars & Club",
        "Cooking Classes", "Seafood", "Vegetarian friendly", "Quick Bites", "Fast Food", "Pub", "Bar",
        "Dining bars", "Cuisine", "Bakeries", "Dessert", "Drinks", "Wine", "Beer", "Menu", "Gluten free options",
        "Dinner Theaters"
    ];

    if (categoriasNaturaleza.includes(categoria)) {
        return "Naturaleza";
    } else if (categoriasHistoria.includes(categoria)) {
        return "Historia";
    } else if (categoriasArteCultura.includes(categoria)) {
        return "Arte y Cultura";
    } else if (categoriasGastronomia.includes(categoria)) {
        return "Gastronomía";
    } else {
        return "Otros"; // Categoría por defecto para categorías no clasificadas
    }
}
//----------------------------------------------------------------------------------------