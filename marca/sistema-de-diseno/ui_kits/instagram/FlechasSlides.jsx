/* Recreation of the "6 flechas que inflaman el corazón" carousel (uploads/1–12.png).
   Text verbatim. 1080x1440 canvas. Collage photos not supplied as cut-outs are left as marked slots. */
const { CarouselSlide, TapeHeadline, Kicker, CarouselText, HandNote, Highlight, VerseBox, SpeechBubble, StarBurst, Illustration } = window.LoreFlRezDesignSystem_0046a8;

const Slot = ({ label, w, h, style }) => (
  <div style={{ width: w, height: h, border: "3px dashed currentColor", borderRadius: 24, display: "grid", placeItems: "center", opacity: .45, fontSize: 26, textAlign: "center", padding: 30, boxSizing: "border-box", ...style }}>{label}</div>
);

function CoverSlide() {
  return <img src="../../assets/carousel-reference/flechas-01.png" alt="Las 6 flechas que inflaman el corazón" style={{ width: 1080, height: 1440, display: "block" }} />;
}

function EvaSlide() {
  return (
    <CarouselSlide background="blush" align="stretch">
      <TapeHeadline lines={["Por qué Eva", "es el patrón"]} style={{ alignSelf: "center" }} />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", alignItems: "start", gap: 10, paddingLeft: 46 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 44, paddingTop: 20 }}>
          <CarouselText>El engaño en el Edén no empezó con una negación abierta de Dios. Empezó con una pregunta que sembró duda, un argumento que sonaba razonable, y un corazón que poco a poco se fue inclinando hacia otra cosa.</CarouselText>
          <HandNote uppercase color="var(--plum-900)">Esa secuencia se sigue repitiendo en nosotros, todos los días.</HandNote>
        </div>
        <Illustration name="eva" width={360} />
      </div>
    </CarouselSlide>
  );
}

function ArrowsSlide() {
  return (
    <CarouselSlide background="blush" align="flex-start" padding="250px 109px 200px 200px">
      <HandNote size={62} maxWidth={640}>Hay flechas que no se ven llegar y para cuando notas que ya <Highlight>están adentro,</Highlight> el corazón ya empezó a <Highlight>arder.</Highlight></HandNote>
      <Illustration name="heart-arrows" width={570} style={{ marginLeft: -50 }} />
    </CarouselSlide>
  );
}

function DudaSlide() {
  return (
    <CarouselSlide background="salmon" align="flex-start" padding="250px 109px 200px 196px">
      <StarBurst size={140} tone="salmon" style={{ position: "absolute", top: 175, right: 150 }} />
      <StarBurst size={140} tone="salmon" style={{ position: "absolute", bottom: 330, left: 125 }} />
      <div><Kicker>Flecha 1</Kicker><TapeHeadline lines={["Duda"]} tilt={-1.5} /></div>
      <CarouselText maxWidth={540}>Distorsión de la verdad bíblica, la misma estrategia que usó la serpiente con Eva:</CarouselText>
      <SpeechBubble width={310} size={36} style={{ padding: "0 30px" }}>¿Conque Dios os ha dicho...?</SpeechBubble>
      <Slot label="Collage: manos con Biblia abierta (halftone)" w={520} h={320} style={{ alignSelf: "flex-end", color: "var(--ig-meta-salmon)" }} />
    </CarouselSlide>
  );
}

function AutosuficienciaSlide() {
  return (
    <CarouselSlide background="blush">
      <StarBurst size={235} tone="blush" style={{ position: "absolute", top: 595, right: 160 }} />
      <StarBurst size={200} tone="blush" style={{ position: "absolute", bottom: 250, left: 215 }} />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}><Kicker>Flecha 2</Kicker><TapeHeadline lines={["Autosuficiencia"]} tilt={-1} /></div>
      <CarouselText align="center" maxWidth={560}>Vivir como si no tuviéramos una deuda de gracia con Cristo, creer que podemos sostenernos con nuestras propias fuerzas.</CarouselText>
      <Illustration name="man-arms-crossed" width={500} style={{ position: "relative" }} />
    </CarouselSlide>
  );
}

function DescontentoSlide() {
  return (
    <CarouselSlide background="blush">
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}><Kicker uppercase={false}>Flechas 5 y 6</Kicker><TapeHeadline lines={["Descontento y", "desesperación"]} tilt={-0.8} /></div>
      <CarouselText align="center" maxWidth={700}>La insatisfacción que hace sentir que Cristo no es suficiente, y el desinterés que puede llevar a la autodestrucción cuando esa insatisfacción no se resuelve.</CarouselText>
      <Illustration name="woman-hands-face" width={520} />
    </CarouselSlide>
  );
}

function PreparacionSlide() {
  return (
    <CarouselSlide background="paper" align="flex-start" padding="250px 109px 200px 170px">
      <StarBurst size={115} tone="paper" style={{ position: "absolute", top: 200, left: 110 }} />
      <StarBurst size={180} tone="paper" style={{ position: "absolute", top: 480, right: 40 }} />
      <VerseBox reference="Efesios 6:16" maxWidth={645} size={33}>Sobre todo, tomad el escudo de la fe, con que podáis apagar todos los dardos de fuego del maligno</VerseBox>
      <HandNote uppercase size={46} style={{ paddingLeft: 20 }}>La Escritura es clara:</HandNote>
      <div style={{ display: "flex", gap: 20, paddingLeft: 20, alignItems: "flex-start" }}>
        <CarouselText color="var(--ig-rosewood)" maxWidth={320} size={40}>Hay dardos diseñados específicamente para encontrar el corazón. No es paranoia nombrarlos.</CarouselText>
        <Slot label="Escudo con espadas (foto recortada)" w={420} h={440} style={{ color: "var(--ig-meta-paper)" }} />
      </div>
      <TapeHeadline tone="none" lines={["Es preparación"]} size={120} style={{ alignSelf: "center" }} />
    </CarouselSlide>
  );
}

Object.assign(window, { CoverSlide, EvaSlide, ArrowsSlide, DudaSlide, AutosuficienciaSlide, DescontentoSlide, PreparacionSlide });
