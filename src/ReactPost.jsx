import BulletinBoard from './BulletinBoard';

const ReactPost = () => {
    let reactQuestion = [
        {
          question: "Vad är tre fördelar med att använda React?" ,
          answer: [
            {
                title: "Lätt att lära",
                description: "ReactJS är väldigt lätt att lära sig och mer fokuserad än någon annan JavaScript-ram."
            },
            {
                title: "SEO-vänlig",
                description: "Möjligheten att reagera för att hantera vanliga sökmotorproblem som dess misslyckande med att läsa JavaScript-volymappar är en annan fördel med att använda React JS-ramverk för att utveckla din programvara idag."
            },
            {
                title: "Reagera ramverk för mobilapp",
                description: "En bra sak med att använda ReactJS är tillhandahållandet av manuset för att utveckla en mobilapp. Med ReactJS kommer du att kunna bygga inbyggda UI-appar som fungerar på Android och iOS."
            },

          ],
          id: 0
        },
        {
            question: "Vad är tre nackdelar med att använda React?" ,
            answer: [
                {
                    title: "Den höga utvecklingen",
                    description: "Den höga utvecklingstakten har en fördel och nackdel med båda. I nackdelar, eftersom miljön ständigt förändras så snabbt, känner vissa av utvecklarna sig inte bekväma att lära sig om de nya sätten att göra saker regelbundet. Det kan vara svårt för dem att anta alla dessa förändringar med alla kontinuerliga uppdateringar. De måste alltid uppdateras med sina färdigheter och lära sig nya sätt att göra saker på."
                },
                {
                    title: "Dålig dokumentation",
                    description: "Det är en annan nackdel som är vanligt för ständigt uppdatering av teknik. Reagera tekniker som uppdateras och accelererar så snabbt att det inte finns tid att göra korrekt dokumentation. För att övervinna detta skriver utvecklare instruktioner på egen hand med utvecklingen av nya versioner och verktyg i sina nuvarande projekt."
                },
                {
                    title: "JSX som en barriär",
                    description: "ReactJS använder JSX. Det är en syntaxförlängning som tillåter HTML med JavaScript blandat ihop. Detta tillvägagångssätt har sina egna fördelar, men vissa medlemmar i utvecklingssamhället anser JSX som ett hinder, särskilt för nya utvecklare. Utvecklare klagar över dess komplexitet i inlärningskurvan."
                },
    
              ],
            id: 1
        },
        {
            question: "Vad är tre skillnader mellan React och Angular?" ,
            answer: [
                {
                    title: "DOM",
                    description: "React använder virtuell DOM (Document Object Model - gör det möjligt att komma åt och ändra dokumentinnehåll, layout och till och med struktur). Medan Angular fungerar på riktig DOM."
                },
                {
                    title: "TYP",
                    description: "Angular är ett ramverk, den verkliga DOM-funktionen gör att dess appar går långsammare när man hanterar massor av dataförfrågningar. Men React är ett bibliotek, du kan integrera det i alla projekt, även om själva projektet är skrivet i Angular."
                },
                {
                    title: "Databindning",
                    description: "Angular använder både en- och tvåvägs databindning: att ändra datapåverkan och att ändra vy utlöser ändringar i data.React använder enkelriktad bindning: när du utformar en React-app utvecklar ofta barnkomponenter i överordnade komponenter av högre ordning."
                },
    
              ],
            id: 2
          },
          {
            question: "Vad är tre bibliotek man kan använda med React?" ,
            answer: [
                {
                    title: "React Virtualiserat",
                    description: "React Virtualized-biblioteket hjälper dig att förbättra effektiviteten i den stora listan och tabelldataåtergivning. Det hjälper till att begränsa antalet förfrågningar och DOM-element och förbättrar den totala prestandan för React-appar."
                },
                {
                    title: "Enzyme",
                    description: "Enzyme är ett JavaScript-bibliotek som skapats för att testa React-komponenter. Verktyget är tänkt att vara intuitivt i bruk och göra det lättare att hävda, manipulera och korsa dina React-komponenters resultat."
                },
                {
                    title: "MobX",
                    description: "Denna statliga hanteringslösning skapades för att göra det omöjligt att bygga ett rörigt tillstånd och därmed skapa en bug-packad app. Medan andra bibliotek fokuserar på att begränsa utvecklare från att ändra tillståndet, ser MobX till att allt enkelt och automatiskt kan extraheras."
                },
    
              ],
            id: 3
          }
    ];

    
    
    return(
        <>
            <div className="BulletinBoard">
                <div className="frame">
                    {reactQuestion.map((item, i) => {
                    return (
                        <BulletinBoard {...item} key={i} />
                        
                    );
                    
                    })
                    }
                </div>
            </div>
        </>
    );
}
export default ReactPost;