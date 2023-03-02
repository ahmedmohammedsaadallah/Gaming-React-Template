import "./GamingLibrary.css";
import {
  GamingLibraryCard,
  SectionHeader,
  SectionWrapper,
} from "../../components/index.js";
import GamingLibraryData from "../../Data/GamingLibraryData";
const GamingLibrary = () => {
  const cards = GamingLibraryData.map((card) => {
    return (
      <GamingLibraryCard
        key={card.id}
        image={card.image}
        title={card.title}
        category={card.category}
        date_added={card.data_added}
        hours_played={card.hours_played}
        download={card.download}
      />
    );
  });
  return (
    <>
      <SectionWrapper>
        <SectionHeader>GamingLibrary</SectionHeader>
        <div className="gaming-library-cards">{cards}</div>
      </SectionWrapper>
    </>
  );
};
export default GamingLibrary;
