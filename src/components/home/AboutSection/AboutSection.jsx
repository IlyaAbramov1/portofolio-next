import BlockHeader from "@/components/ui/BlockHeader/BlockHeader"
import Reveal from "@/components/ui/Reveal/Reveal"
import MorphText from "@/components/ui/MorphText/MorphText"

export default function AboutSection({ copy }) {
    return (
        <section id="aboutMe" className="innerContainer">
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
                        <a href="https://sirena.team" className="link" target="_blank">
                            {copy.currentStudio}
                        </a>
                    </MorphText>
                    {copy.currentMiddle}
                    <MorphText>
                        <a href="https://sports.ru/" className="link" target="_blank">
                            {copy.currentCompany}
                        </a>
                    </MorphText>
                    {copy.pastPrefix}
                    <MorphText>
                        <a href="https://dodopizza.ru/samara" className="link" target="_blank">
                            {copy.pastBrand}
                        </a>
                    </MorphText>
                    {copy.pastMiddle}
                    <MorphText>
                        <a href="http://tomat.team/" className="link" target="_blank">
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
