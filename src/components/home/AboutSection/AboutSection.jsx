import BlockHeader from "@/components/ui/BlockHeader/BlockHeader"
import Reveal from "@/components/ui/Reveal/Reveal"
import MorphText from "@/components/ui/MorphText/MorphText"
import { SECTION_IDS, SITE_LINKS } from "@/lib/site";

export default function AboutSection({ copy }) {
    return (
        <section id={SECTION_IDS.about} className="innerContainer">
            <BlockHeader 
                iconName="about_me"
                title={copy.title}
            />
            <Reveal>
                <p className="text">{copy.intro}</p>
            </Reveal>
            <Reveal>
                <p className="text">
                    {copy.currentPrefix}
                    <MorphText>
                        <a href={SITE_LINKS.sirena} className="link" target="_blank" rel="noreferrer">
                            {copy.currentStudio}
                        </a>
                    </MorphText>
                    {copy.currentMiddle}
                    <MorphText>
                        <a href={SITE_LINKS.sports} className="link" target="_blank" rel="noreferrer">
                            {copy.currentCompany}
                        </a>
                    </MorphText>
                    {copy.pastPrefix}
                    <MorphText>
                        <a href={SITE_LINKS.dodo} className="link" target="_blank" rel="noreferrer">
                            {copy.pastBrand}
                        </a>
                    </MorphText>
                    {copy.pastMiddle}
                    <MorphText>
                        <a href={SITE_LINKS.tomat} className="link" target="_blank" rel="noreferrer">
                            {copy.pastAgency}
                        </a>
                    </MorphText>
                    {copy.pastSuffix}
                </p>
            </Reveal>
            <Reveal>
                <p className="text">{copy.goal}</p>
            </Reveal>
            <Reveal>
                <p className="text">{copy.final}</p>
            </Reveal>
        </section>
    )
}
