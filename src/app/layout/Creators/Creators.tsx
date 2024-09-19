import Card from "@/app/layout/Creators/Card";
import styles from "./Creators.module.css";

export default function Creators() {
  const creators = [
    {
      creatorPhoto: "/creators/joao.png",
      name: "João",
      area: "Back-End",
      experience:
        "Estagiário em  <br/> T.I, Estudante  <br/> de Tecnologia  <br/> da Informação",
    },
    {
      creatorPhoto: "/creators/douglas.png",
      name: "Douglas",
      area: "Front-End",
      experience: "Fullstack  <br/> developer,  <br/> Estagiário em  <br/> T.I",
    },
    {
      creatorPhoto: "/creators/hermerson.png",
      name: "Hermerson",
      area: "Cybersecurity",
      experience: "Analista de <br/> Segurança da <br/> Informação, <br/> Segurança da <br/> Informação",
    },
    {
      creatorPhoto: "/creators/anderson.png",
      name: "Anderson",
      area: "Designer",
      experience:
        "Estagiário em  <br/> T.I, Estudante  <br/> de Tecnologia  <br/> da Informação.",
    },
  ];

  return (
    <section className={styles.creators}>
      <div className={styles.container}>
        <h1 className={styles.title}>criadores</h1>
        <div className={styles.containerCards}>
          {creators.map((creator, index) => (
            <Card
              key={`creator ${index}`}
              creatorPhoto={creator.creatorPhoto}
              area={creator.area}
              experience={creator.experience}
              name={creator.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
