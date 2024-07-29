import React from "react";
import "../faq/faq.css";
import "../media-query/media-query-faq.css"

export default function Faq() {
  return (
    <div className="faq-container">

      <div className="back-bnt-container">
        <a className="back-btn" href="/gamepage">
          Back
        </a>
      </div>

      <div className="faq-content">
        <h1>Blackjack Játék Szabályai</h1>
        <h2>A Játék Célja:</h2>A blackjack játék célja, hogy a játékos
        kártyáinak összértéke közelebb legyen a 21-hez, mint az osztó kártyáinak
        értéke, anélkül, hogy meghaladná a 21-et.
        <h3>Kártyák Értékei:</h3>
        
        <ul>
          <li>Számkártyák (2-10): A kártya értékével azonos pontot érnek.</li>
          <br />
          <li>Király, Dáma, Bubi (K, Q, J): 10 pontot érnek.</li>
          <br />
          <li>
            Ász (A): 1 vagy 11 pontot ér, attól függően, hogy melyik érték
            előnyösebb a játékos számára.
          </li>
          <br />
        </ul>
        <h3>A Játék Menete:</h3>
        <ul>
          <li> Tét Elhelyezése: A játékosok tétet helyeznek el az asztalon.</li>

          <h4>Kártyák Kiosztása:</h4>

          <li>
            Az osztó két kártyát oszt a játékosnak, mindkettőt képpel felfelé.
          </li>
          <br />
          <li>
            Az osztó magának is két kártyát oszt: egyet képpel felfelé (a
            nyitott kártya) és egyet képpel lefelé (a zárt kártya).
          </li>
          <br />
        </ul>
        <h3>Játékos Döntései:</h3>
        <ul>
          <li>Húz (Hit): A játékos kérhet további kártyát.</li>
          <br />
          <li>Megáll (Stand): A játékos nem kér több kártyát.</li>
          <br />
          <li>
            Dupláz (Double Down): A játékos megduplázhatja a tétjét és csak egy
            további kártyát kérhet.
          </li>
          <br />
        </ul>
        <h3>Osztó Játéka:</h3>
        <ul>
          <li>Az osztó felfedi a zárt kártyáját.</li>
        </ul>
        <h3>Nyertes Meghatározása</h3>
        <ul>
          <li>
            Nyertes: A játékos nyer, ha kártyáinak összértéke közelebb van a
            21-hez, mint az osztóé, vagy ha az osztó túllépi a 21-et (besokall).
          </li>
          <br />
          <li>
            Vesztes: A játékos veszít, ha kártyáinak összértéke meghaladja a
            21-et (besokall), vagy ha az osztó kártyáinak értéke közelebb van a
            21-hez.
          </li>
          <br />
          <li>
            Döntetlen (Push): Ha a játékos és az osztó kártyáinak összértéke
            megegyezik, a játékos visszakapja a tétjét.
          </li>
          <br />
        </ul>
        <h3>Stratégiák és Tippek</h3>
        <li>
          Alapstratégia: Az alapstratégia segít a játékosnak a legjobb
          döntéseket meghozni minden lehetséges kéz esetén, figyelembe véve az
          osztó nyitott kártyáját.
        </li>
        <br />
        <li>
          Kártyaszámolás: Egyes játékosok kártyaszámolást alkalmaznak, hogy
          megpróbálják előre jelezni, milyen kártyák maradtak a pakliban, de ez
          a módszer online kaszinókban kevésbé hasznos, mivel a kártyákat
          gyakran keverik újra.
        </li>
        <br />
        <li>
          Az online blackjack játékok különböző verziókat kínálhatnak, mint
          például a többkezes blackjack, az európai blackjack vagy az atlanti
          blackjack, mindegyik egyedi szabályokkal és variációkkal. Mindig
          érdemes áttanulmányozni a konkrét játék szabályait, mielőtt játszani
          kezdenél.
        </li>
        </div>
    </div>
  );
}
