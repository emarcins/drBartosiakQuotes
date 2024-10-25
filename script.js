const doctor = document.querySelector(".doctor-foto");
const mind = document.querySelector(".mind");

const mindArr = [
  "Uwertura inercji perymetru kosmosu w USA.",
  "Istotą jest asymetryczne wykorzystywanie przewagi na różnych szczeblach drabiny eksalacyjnej.",
  "Każda idea w Rosji staje się taranem dla ekspansji imperialnej.",
  "Główny komponent wojskowy musi być w pełni ukompletowany.",
  "Mamy różne domeny: cybernetyczna, elektromagnetyczna, kosmiczna i inne.",
  "Społeczeństwo musi uwierzyć, że wojsko jest inkubatorem przedsiębiorczości.",
  "Musimy stworzyć mechanizm fuzji ze sceny technologii do wojska.",
  "Technologia cywilna zasadniczo zmienia się na dygitalnym polu walki.",
  "Szykowanie wojska następuje w kontekście wymiany kinetycznej z dominacją eksalacyjną.",
  "To nie jest tak, że się liczy na papierze teoretyczne potencjały.",
  "Armia Nowego Wzoru będzie działała we wszystkich scenariuszach geopolitycznych.",
  "Najpierw jest zmiana koncepcyjna, później kulturowa a na końcu tzw. efektory .",
  "Domena informacyjna, przepływ informacji, transmisje danych - one generują przewagi.",
  "Afgańczycy tak jak Wietnamczycy kiedyś, zdominiowali pętlę decyzyjną.",
  "Świętym Graalem dla polityków jest sprawczość.",
  "Polska jest wysuniętą kasztelanią, posterunkiem świata zachodniego.",
  "Zmiana w wojsku polega na zmianach koncepcyjnych, organizacyjnych i na efektorach.",
  "Ruch ludzi to klasyczny przepływ startegiczny.",
  "Pradziwy system odpoproności państwa dotyczy manipulacji przepływami startegicznymi.",
  "W domenie kosmicznej są oczywiście pewne dystraktory, jak chociażby czasami chmury.",
  "Kosmos będzie rozstrzygający w walce o przepływy staregiczne i panowanie na Ziemi .",
  "Poziom innowacji z punktu widzenia techniki wojskowej jest mniejszy niż w PRLu.",
  "Gramatyka pola walki zmienia się na korzyść państw takich jak Polska.",
  "Z punktu widzenia technologicznego aktualnie dochodzi do fuzji cywilno-wojskowej.",
  "Aktualnie pozbawiono wojsko kontrasygnaty i współdecydowania o modernizacjach.",
  "Siły kosmiczne są po to aby ustanowić reguły handlowe.",
  "Ocean kosmiczny ma różne topografie.",
  "Polska położona jest przy Rosji, na trasie inicjatywy chińskiej pasa i szlaku.",
  "Z punktu widzenia projekcji siły amerykańskiej w Eurazji Polska jest bardzo ważna.",
  "Most w Ostrołęce musi być bądź broniony przez Polaków, bądź zdobywany przez Rosjan.",
  "Kto kontroluje równoleżnikowe przeprawy mostowe na Bugu i Narwi, ten może przerzucać siły.",
  "W dzisiejszych czasach ogon logistyczny jest coraz dłuższy.",
  "Brama Smoleńska, Brama Morawska i Gdańsk są najważniejszymi geostrategicznymi punktami RP.",
  "Gdańsk jest ustami organizmu państwowego Rzeczpospolitej.",
  "Język angielski jest językiem przepływów strategicznych, językiem Oceanu Światowego.",
  "Mickiewicz i Słowacki to są chłopcy z dworków Pomostu Bałtycko-Czarnomorskiego.",
  "Od Bramy Smoleńskiej do Niemna i do doliny Wisły jest ruch jak na suwnicy.",
  "Na Bliskim Wschodzie pojawiają się wędrujące próżnie bezpieczeństwa i gra o sumie zerowej.",
  "Turcja jest zwornikiem od kierunku europejskiego i pasem transmisyjnym ze wschodu na zachód.",
  "W USA jest rywalizacja między stronnictwem wszechimperiów i stronnictwem realistów .",
  "Jestem przekonany, że Juliusz Cezar też miałby swój specyficzny styl twitterowy.",
  "USA kontroluje główne magistrale handlu światowego.",
  "Na przestrzeniach Eurazji rządzą imperia.",
  "Polska i nasza wola jest gwarantem niepodległości państw bałtyckich.",
  "Obwód Kaliningradzki nie ma głębi strategicznej, sam w sobie jest słabością Rosji.",
  "Głębia strategiczna polega na tym, że dane terytorium ma miąższość by przyjąć uderzenie.",
  "Nie da się przyjść z pomocą państwą bałtyckim bez poszerzenia podstawy operacyjnej.",
  "Amerykanie muszą mieć plany pokonania systemów antydostępowych w Obwodzie Kaliningradzkim.",
  "Rosjanie, żeby wygrać wojnę, mogą wykonać tzw. deeskalacyjne użycie jądrowe na Wojsko Polskie.",
  "Polska jest w sworzniowym miejscu, które decyduje o układzie sił w Eurazji.",
  "Amerykanie od 30 lat są na szczycie ładu światowego, są jego hegemonem.",
  "W Królewcu Amerykanie mogą tylko niszczyć zasoby przechodzące w teatr wojny.",
  "Amerykanie mają kilka teatrów operacyjnych na świecie.",
  "W polityce ważne są tylko instrumenty nacisku.",
  "Polska musi mieć zdolność kontroli dominacji eskalacji w konfilkcie zbrojnym.",
  "Efektory to koncentracja siły kinetycznej w określonym miejscu.",
  "Obwód Kaliningradzki wisi nad doliną Wisły, kierunkując się na Przesmyk Suwalski .",
  "Zabezpieczenie przestrzeni Białorusi daje Polsce bufor bezpieczeństwa.",
  "Rewizja doktryny Giedrojcia i Miroszewskiego jest potrzebna od zaraz.",
  "Egzekucja władzy jest ściśle związana z przestrzenią i zasobami, które ją opasają.",
  "W układzie wojskowym najkrótsza droga z Warszawy do Moskwy wiedzie przez Bramę Smoleńską.",
  "Pierwsza Gwardyjska Armia Pancerna jest uformowana w obszarze Bramy Smoleńskiej.",
  "Amerykanie są ojcem porządku światowego.",
  "Myśl wojska nie powinna być jak służka, która niesie treny sukni za wojną, tylko ją wyprzedzać.",
  "Wojna symetryczna może być wojną koalicyjną lub wojną samodzielną.",
  "Gałacz jest jednym z kluczowych punktów na pomoście bałtycko-czarnomorskim.",
  "Twitter, jak sądzi Musk, jest mózgiem neuronowym świata.",
  "Twitter stał się prawie tak ważny jak elektryczność, jak woda, jak gaz w domach.",
  "Domena informacyjna jest „łeponizowana”, staje się bronią.",
  "Chińczycy uznali, że algorytmizacja kapitalistyczna deprecjonuje i demoralizuje społeczeństwo.",
  "Cybertruck zmienia parametry funkcjonowania samochodów.",
  "Zachód już nie jest pępkiem świata, będzie się mierzył z Globalnym Południem.",
  "W Polsce jest kompleks myślenia o nas jako o Zachodzie, problem ducha postkolonialnego.", 
  "To, że Trump jest figuratywną postacią w światowej debacie, bardzo dużo mówi.",
  "Nasza niepodległość jest przyzwyczajona do strategii prymatu.",
  "Izolacjonizm, mówi, że Amerykanie wycofują się za ocean!",
  "Trump nie zrozumiał, żeby mówić o tranzycji, żeby zmieniać układ światowy.",
  "Światem rządzi układ organizacyjno-materialny.",
  "Wartości są jak matryca - narzucane, aby spowodować bardziej kohezyjny system.",
  "Na rzecz Amerykanów zawsze działało to, że wszystkie rynki są otwarte.",
  "Rozmowy o uruchomieniu artykułu 5, to „połajanki” polskich polityków.",
  "Amerykanie mają Wilsonowski zapał ideologiczny uniwersalistycznych prawa człowieka.",
  "Amerykanie są słabi na perymetrach Eurazji, system sam się nie równoważy.",
  "Amerykanie powinni zrobić „obszar balancing”, żeby dogadać się z Chinami.",
  "Ludzie nie antycypują, że kres Ameryki nadchodzi.",
  "Ameryka będzie dalej podążać Wilsonowskim prymatem, co jest bardziej dysfunkcyjne.",
  "Wzajemne lewarowanie USA i Ukrainy, polega na określeniu czym jest wiarygodność.",
  "Jeśli Ukraina będzie miała implozję, to USA straci wiarygodność w ramach prymatu.",
  "Ukraina zakłada Amerykanom imadło.",
  "Wysiłek ukraiński pomaga Amerykanom utrzymać prymat.",
  "I tak ostateczne dowody empiryczne wskazują na zdradę Amerykanów.",
  "Amerykanie będą po taniości dostawać Eurazję w Rimlandzie na swoją rzecz.",
  "We Wspólnocie Węgla i Stali nie chodziło o dobro ludzkości, tylko o właściwą równowagę.",
  "W korytarzach Pentagonu są obawy co do implozji Ukrainy.",
  "Wyczuwam, że Amerykanie mogą przejść w obszar „balancingu”.",
  "Rosjanie opanowali sztukę militarną na poziomie taktycznym i operacyjnym.",
  "W interesie Amerykanów jest, żeby był „open door” dla ich rynku.",
  "USA chciałyby, aby Chiny utraciły mandat niebios, co sugerowali w Hudson Institute.",
  "Finansowanie wojen to jest mechanizm dominacji i hegemonii finansowej USA nad światem.",
  "Imperium finansowe USA utrzymuje technologicznie zdolność do amerykańskiej projekcji globalnej.",
  "Jeśli USA nie zareagują to świat będzie multipolarny."
];

const shakePhoto = () => {
  doctor.classList.add("shake-animation");
  setTimeout(generate, 1000);
};

const generate = () => {
  generateMind();
  doctor.classList.remove("shake-animation");
};

const generateMind = () => {
  randomMind = mindArr[Math.floor(Math.random() * mindArr.length)];
  mind.innerHTML = `"${randomMind}"`;
};

doctor.addEventListener("click", shakePhoto);

window.onload = generate;