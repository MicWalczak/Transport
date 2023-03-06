import React, { useState, useEffect } from "react";
import "./WhyUs.scss";
import { AppWrap, MotionWrap } from "../../wraper";

const Whyus = () => {

  return (
    <>
<div className="app__whyus">
  <h2>Dlaczego my ?</h2>
  <p>
  Jesteśmy doświadczoną firmą transportową, która posiada wiedzę i umiejętności potrzebne do zapewnienia szybkiego i skutecznego transportu. Oferujemy zróżnicowane usługi transportowe, dzięki czemu klienci mogą wybrać najlepszą opcję dostosowaną do ich potrzeb.
Wysoka jakość obsługi klienta jest dla nas priorytetem - zawsze stawiamy klienta na pierwszym miejscu, oferując szybką i profesjonalną obsługę, odpowiadając na wszystkie pytania i zapewniając wsparcie na każdym etapie procesu transportowego.
Nasza flota pojazdów jest nowoczesna, regularnie serwisowana i sprawdzana, dzięki czemu nasi klienci mogą mieć pewność, że ich ładunki będą transportowane w bezpieczny i efektywny sposób.
Oferujemy konkurencyjne ceny, co sprawia, że ​​jesteśmy atrakcyjną opcją dla klientów, którzy szukają wysokiej jakości usług transportowych w przystępnej cenie.
Jeśli szukasz niezawodnej firmy transportowej, która oferuje szeroki zakres usług i wysoką jakość obsługi klienta, to zachęcamy do wyboru naszej firmy transportowej.
  </p>
</div>
    </>
  );
};

export default AppWrap(
 MotionWrap( Whyus,'app__whyus'),
  'whyus',
  "app__whitebg"
  );