import React from "react";
import "../about/about.css";
import "../media-query/media-query-about.css"

export default function About() {
  return (
    <div className="about-container">
      <div className="back-bnt-container">
        <a className="back-btn" href="/gamepage">
          Back
        </a>
      </div>

      <div className="about-content">

        <h1> Üdvözöllek a Blackjack játékomban!</h1>

        <p>
          Célom, hogy a lehető legjobb online blackjack élményt nyújtsam neked.
          Legyél tapasztalt játékos vagy újonc a blackjack világában, platformomat úgy alakítottam ki, hogy szórakoztató, izgalmas és tisztességes játékot kínáljak.
        </p>

        <p>
          Küldetésem, elhozni a blackjack izgalmát és stratégiáját a
          játékosok számára világszerte, mindezt az otthonod kényelméből. Olyan
          platformot szeretnék létrehozni, amely nem csak szórakoztat, hanem oktat
          is, segítve téged a fejlődésben és a felelős játékban.
        </p>


        {/* <h2>Történetem</h2>A [Weboldal Neve] alapítójaként szenvedélyes
        blackjack rajongó vagyok, és egy jobb online játékélményt szerettem
        volna létrehozni. A szoftverfejlesztés, játéktervezés és kaszinó
        menedzsment területén szerzett tapasztalataimat ötvözve egy olyan
        platformot építettem, amely a tisztességet, a felhasználóbarátságot és a
        szórakozást helyezi előtérbe. */}

        <h2>Amit kínálok:</h2>

        <p>
          **Valósághű Játékmenet** Fejlett algoritmusokat
          használok a tisztességes játék és valósághű eredmények biztosítása
          érdekében. Minden keverés és osztás véletlenszerű, akárcsak egy valódi
          kaszinóban.
        </p>


        {/* - **Oktatási Anyagok**: Bőséges információt nyújtok a
        blackjack stratégiákról, szabályokról és tippekről, hogy jobb játékossá
        válhass. - **Biztonságos Környezet**: A biztonságod és védelmed a
        legfontosabb számomra. Csúcstechnológiás titkosítást használok személyes
        és pénzügyi adataid védelme érdekében. - **24/7 Támogatás**:
        Elkötelezett ügyfélszolgálati csapatom mindig rendelkezésedre áll, hogy
        segítsen bármilyen kérdésben vagy problémában. */}

        <h2>Kapcsolat:</h2>

        <p>
          Ha bármilyen kérdésed van, ne habozz kapcsolatba lépni velem a
          [kokozoli1425@gmail.com e-mail címen]. Köszönöm, hogy engem választottál, és sok szerencsét kívánok a játékban!
        </p>

      </div>
    </div>
  );
}
